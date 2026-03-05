import { NextRequest, NextResponse } from "next/server";

// Vercel はサーバーレスのため永続的なファイルシステムがありません。
// 本番で予約を永続化する場合は Vercel Postgres / Supabase 等の利用を推奨します。
const reservations: Array<{
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  created_at: string;
}> = [];

let nextId = 1;

export async function GET() {
  const sorted = [...reservations].sort(
    (a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`)
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

  const record = {
    id: nextId++,
    name,
    email,
    phone,
    service,
    date,
    time,
    created_at: new Date().toISOString(),
  };
  reservations.push(record);

  return NextResponse.json({ id: record.id, success: true });
}
