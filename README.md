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
   - 予約は **Google スプレッドシート** に保存できます（下記セットアップ参照）。未設定の場合はメモリのみ（Vercel では再デプロイで消えます）。
   - 他の永続化手段: [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) や [Supabase](https://supabase.com) なども利用可能です。

## 予約を Google スプレッドシートに保存する

予約情報を Google スプレッドシートに自動で追記するには、次の手順で設定してください。

### 1. Google Cloud でプロジェクトとサービスアカウントを作成

1. [Google Cloud Console](https://console.cloud.google.com/) にログイン
2. プロジェクトを作成（または既存を選択）
3. **API とサービス** → **ライブラリ** で「Google Sheets API」を検索し **有効化**
4. **API とサービス** → **認証情報** → **認証情報を作成** → **サービス アカウント**
5. サービス アカウント名を入力して作成
6. 作成したサービス アカウントを開く → **キー** タブ → **鍵を追加** → **新しい鍵を作成** → **JSON** を選んでダウンロード

### 2. スプレッドシートの準備

1. [Google スプレッドシート](https://sheets.google.com) で新しいスプレッドシートを作成（または既存のものを使用）
2. URL の `https://docs.google.com/spreadsheets/d/【ここがスプレッドシート ID】/edit` の **スプレッドシート ID** をコピー
3. 1 枚目のシート名を **「予約」** にする（別名にしたい場合は環境変数 `GOOGLE_SHEET_NAME` で指定）
4. 1 行目にヘッダーを入力（例）:
   - `ID` | `名前` | `メール` | `電話` | `メニュー` | `日付` | `時間` | `登録日時`
5. ダウンロードした JSON 鍵の中の **`client_email`** をコピーし、そのメールアドレスを **スプレッドシートの共有** に追加（**編集者** 権限）

### 3. 環境変数を設定

**ローカル:** プロジェクト直下に `.env.local` を作成（Git にコミットしないこと）

**Vercel:** プロジェクト → Settings → Environment Variables で追加

| 変数名 | 説明 |
|--------|------|
| `GOOGLE_SPREADSHEET_ID` | スプレッドシートの ID（URL の `d/` と `/edit` の間） |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | ダウンロードした JSON 鍵の内容を **1 行にした文字列** でそのまま貼り付け |

- `GOOGLE_SERVICE_ACCOUNT_JSON` は、JSON ファイルを開いて改行を削除した 1 行の文字列をそのまま貼り付けてください。
- シート名を「予約」以外にしたい場合: `GOOGLE_SHEET_NAME=シート名` を追加

設定後、サイトから予約を送信すると、該当シートの次の行に自動で追記されます。

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
