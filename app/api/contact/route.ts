import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

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

const CONTACT_SHEET_NAME = "お問い合わせ";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "名前とメールアドレスは必須です" },
      { status: 400 }
    );
  }

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const hasJson = !!process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!spreadsheetId || !hasJson) {
    return NextResponse.json(
      {
        error:
          "お問い合わせの保存が設定されていません。GOOGLE_SPREADSHEET_ID と GOOGLE_SERVICE_ACCOUNT_JSON を設定してください。",
      },
      { status: 503 }
    );
  }

  const client = getSheetsClient();
  if (!client) {
    return NextResponse.json(
      {
        error:
          "GOOGLE_SERVICE_ACCOUNT_JSON の形式が正しくありません。Vercel では改行なしの1行 JSON にしてください。",
      },
      { status: 503 }
    );
  }

  const created_at = new Date().toISOString();

  try {
    const sheets = google.sheets({ version: "v4", auth: client.auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: client.spreadsheetId,
      range: `'${CONTACT_SHEET_NAME}'!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[created_at, name, email, subject || "", message || ""]],
      },
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    const err = e as Error;
    console.error("Google Sheets contact append error:", err?.message ?? e);
    return NextResponse.json(
      {
        error:
          "送信に失敗しました。スプレッドシートに「お問い合わせ」シートを追加し、1行目に「登録日時」「名前」「メール」「件名」「メッセージ」のヘッダーを入れてください。",
      },
      { status: 500 }
    );
  }
}
