import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

type ReservationRecord = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  created_at: string;
};

// メモリはサーバーレスでリセットされるため、一覧取得は Google スプレッドシート利用時は別手段が必要です。
const reservations: ReservationRecord[] = [];
let nextId = 1;

function getSheetsClient() {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!spreadsheetId || !raw) return null;
  try {
    const credentials = JSON.parse(raw) as {
      client_email?: string;
      private_key?: string;
    };
    const private_key = (credentials.private_key ?? "").replace(/\\n/g, "\n");
    if (!credentials.client_email || !private_key) return null;
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: credentials.client_email,
        private_key,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    return { auth, spreadsheetId };
  } catch {
    return null;
  }
}

const SHEET_NAME = process.env.GOOGLE_SHEET_NAME ?? "予約";

export async function GET() {
  const client = getSheetsClient();
  if (client) {
    try {
      const sheets = google.sheets({ version: "v4", auth: client.auth });
      const res = await sheets.spreadsheets.values.get({
        spreadsheetId: client.spreadsheetId,
        range: `'${SHEET_NAME}'!A2:H`,
      });
      const rows = (res.data.values ?? []) as string[][];
      const list: ReservationRecord[] = rows.map((row, i) => ({
        id: i + 1,
        name: row[1] ?? "",
        email: row[2] ?? "",
        phone: row[3] ?? "",
        service: row[4] ?? "",
        date: row[5] ?? "",
        time: row[6] ?? "",
        created_at: row[7] ?? "",
      }));
      const sorted = list.sort((a, b) =>
        `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`)
      );
      return NextResponse.json(sorted);
    } catch {
      // フォールバック: メモリの内容を返す（通常は空）
    }
  }
  const sorted = [...reservations].sort((a, b) =>
    `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`)
  );
  return NextResponse.json(sorted);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, service, date, time } = body;

  if (!name || !email || !phone || !service || !date || !time) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const created_at = new Date().toISOString();
  const record = {
    id: nextId++,
    name,
    email,
    phone,
    service,
    date,
    time,
    created_at,
  };

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const hasJson = !!process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (spreadsheetId && !hasJson) {
    return NextResponse.json(
      { error: "GOOGLE_SERVICE_ACCOUNT_JSON が設定されていません（Vercel の環境変数を確認してください）" },
      { status: 503 }
    );
  }
  if (!spreadsheetId && hasJson) {
    return NextResponse.json(
      { error: "GOOGLE_SPREADSHEET_ID が設定されていません" },
      { status: 503 }
    );
  }

  const client = getSheetsClient();
  if (spreadsheetId && hasJson && !client) {
    return NextResponse.json(
      {
        error:
          "GOOGLE_SERVICE_ACCOUNT_JSON の形式が正しくありません。Vercel では改行なしの1行 JSON にしてください（JSON ファイルの内容を改行削除してそのまま貼り付け）。",
      },
      { status: 503 }
    );
  }
  if (client) {
    try {
      const sheets = google.sheets({ version: "v4", auth: client.auth });
      await sheets.spreadsheets.values.append({
        spreadsheetId: client.spreadsheetId,
        range: `'${SHEET_NAME}'!A:H`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              record.id,
              record.name,
              record.email,
              record.phone,
              record.service,
              record.date,
              record.time,
              record.created_at,
            ],
          ],
        },
      });
      return NextResponse.json({ id: record.id, success: true });
    } catch (e) {
      const err = e as Error;
      console.error("Google Sheets append error:", err?.message ?? e);
      return NextResponse.json(
        { error: "予約の保存に失敗しました。スプレッドシートの共有設定（サービスアカウントのメールを編集者で追加）と環境変数を確認してください。" },
        { status: 500 }
      );
    }
  }

  reservations.push(record);
  return NextResponse.json({ id: record.id, success: true });
}
