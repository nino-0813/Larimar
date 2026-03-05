# Larimar（ラリマー）公式サイト

広島県福山市沼隈町にある美容室・マツエク・リンパマッサージ・温活（よもぎ蒸し・ハーブ蒸し）のプライベートサロン「Larimar（ラリマー）」の公式サイトです。Next.js で構築されています。

## 店舗情報

- **店名**: Larimar（ラリマー）
- **業態**: 美容室、マツエク、リンパマッサージ、温活（よもぎ蒸し・ハーブ蒸し）
- **住所**: 〒720-0311 広島県福山市沼隈町草深2156-7
- **営業時間**: 9:00 〜 21:00（最終受付 20:00）
- **定休日**: 不定休

## 開発

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3020](http://localhost:3020) を開いてください。

## ビルド

```bash
npm run build
npm start
```

## Vercel で公開する

1. **Vercel にデプロイ**
   - [vercel.com](https://vercel.com) にログイン
   - 「Add New」→「Project」でこのリポジトリをインポート（Git にプッシュ済みの場合）
   - または Vercel CLI を使用:
     ```bash
     npm i -g vercel
     vercel
     ```
   - ルートディレクトリはそのまま、Framework Preset は **Next.js** のままデプロイ

2. **予約データについて**
   - 現在、予約 API はメモリ上にのみ保存しています。Vercel のサーバーレス環境では再デプロイやコールドスタートでデータは消えます。
   - **本番で予約を永続化する場合**は [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) や [Supabase](https://supabase.com) などのデータベースを導入してください。

## 技術スタック

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Motion** (アニメーション)
- **Lucide React** (アイコン)
- **date-fns** (日付)

## ページ構成

- `/` - トップ
- `/about` - サロンについて
- `/menu` - メニュー・料金（美容室・マツエク・リンパ・温活）
- `/blog` - ブログ
- `/reservation` - ご予約
- `/contact` - お問い合わせ
