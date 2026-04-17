"use client";

import Link from "next/link";

const TOP_HERO_IMAGE = "/images/larimar.png";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=広島県福山市沼隈町草深2156-7";

const OWNER_IMAGE =
  "/images/" + encodeURIComponent("スクリーンショット 2026-03-03 15.44.57.png");
const OWNER_INTRO = (
  <>
    福山市沼隈町にあるアットホームな個人サロンです。
    <br />
    美容師歴20年。
  </>
);

export default function HomePage() {
  return (
    <div className="bg-white text-stone-900 flex flex-col flex-1">
      {/* トップ画像 */}
      <section className="relative w-full bg-stone-100 overflow-hidden" style={{ aspectRatio: "16/9", minHeight: "280px" }} aria-label="Larimar サロンイメージ">
        <img
          src={TOP_HERO_IMAGE}
          alt="福山市沼隈町のプライベートサロン。ヘア・マツエク・リンパ・温活のトータルビューティーサロン Larimar（ラリマー）"
          title="福山市沼隈町のプライベートサロン。ヘア・マツエク・リンパ・温活をしている Larimar（ラリマー）"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* お店の紹介 */}
      <section className="max-w-2xl mx-auto px-6 pt-24 pb-16 w-full">
        <h2 className="text-2xl font-bold mb-6">お店の紹介</h2>
        <p className="leading-relaxed">
          Larimar（ラリマー）は、広島県福山市沼隈町にあるプライベートサロンです。美容室・マツエク・リンパマッサージ・温活（よもぎ蒸し・ハーブ蒸し）で、ヘアから体のケアまでトータルでお任せいただけます。夜21時まで営業、不定休なのでお仕事帰りやお休みの日にもご利用いただけます。
        </p>
      </section>

      {/* メニュー（画像） */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-stone-200 w-full" aria-label="メニュー">
        <h2 className="text-2xl font-bold mb-8">メニュー</h2>
        <div className="rounded-xl overflow-hidden shadow-md bg-stone-100">
          <picture>
            <source srcSet="/images/menu.webp" type="image/webp" />
            <img
              src="/images/453564.jpg"
              alt="ヘアメニュー・まつげメニュー・スペシャルメニュー（ハーブ蒸し・水素吸引）。税込価格・割引クーポンあり。"
              className="w-full h-auto block"
              width={672}
              height={1249}
            />
          </picture>
        </div>
        <p className="mt-4 text-stone-500 text-sm text-center">※料金・詳細はお問い合わせまたはご予約時にお尋ねください。</p>
      </section>

      {/* 地図・住所・アクセス・営業時間 */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-stone-200 w-full">
        <div className="relative overflow-hidden rounded-lg bg-stone-100 w-full" style={{ aspectRatio: "16/9", minHeight: "240px" }}>
          <iframe
            src={`https://www.google.com/maps?q=広島県福山市沼隈町草深2156-7&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Larimar 地図"
          />
        </div>
        <div className="mt-8 space-y-4">
          <div>
            <h3 className="font-bold text-sm mb-1">住所</h3>
            <p className="text-stone-600">〒720-0311 広島県福山市沼隈町草深2156-7</p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">アクセス</h3>
            <p className="text-stone-600">車でお越しください。駐車場のご案内はお問い合わせください。</p>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-1">電話番号</h3>
            <p className="text-stone-600">ご予約・お問い合わせは<Link href="/contact" className="text-blue-600 underline">お問い合わせフォーム</Link>または<Link href="/reservation" className="text-blue-600 underline">Web予約</Link>からどうぞ。</p>
          </div>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
          >
            Googleマップで見る
          </a>
          <div className="pt-6 space-y-1">
            <p className="text-stone-600"><span className="font-bold">営業時間</span> 9:00 〜 21:00（最終受付 20:00）</p>
            <p className="text-stone-600"><span className="font-bold">定休日</span> 不定休</p>
          </div>
        </div>
      </section>

      {/* STAFF（オーナー） */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-stone-200 w-full">
        <h2 className="text-2xl font-bold text-center mb-10">STAFF</h2>
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-sm mb-6">
            <img
              src={OWNER_IMAGE}
              alt="オーナー"
              className="w-full h-auto block"
            />
          </div>
          <p className="font-bold text-lg mb-2">オーナー</p>
          <p className="text-stone-600 leading-relaxed max-w-md">
            {OWNER_INTRO}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-stone-200 text-center w-full">
        <Link
          href="/reservation"
          className="inline-block bg-stone-900 text-white px-10 py-4 rounded font-medium hover:bg-stone-800 transition-colors"
        >
          ご予約はこちら
        </Link>
      </section>
    </div>
  );
}
