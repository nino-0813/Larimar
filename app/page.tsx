"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SLIDER_INTERVAL_MS = 5000;

const TOP_SLIDER_IMAGES = [
  "/images/スクリーンショット 2026-03-03 15.36.19.png",
  "/images/スクリーンショット 2026-03-03 15.37.18.png",
].map((path) => (path.startsWith("/") ? path.split("/").slice(0, -1).join("/") + "/" + encodeURIComponent(path.split("/").pop()!) : path));

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=広島県福山市沼隈町草深2156-7";

const menuSummary = [
  {
    title: "ヘア",
    desc: "カット・カラー・パーマ・縮毛矯正・トリートメント・ヘッドスパ。骨格と髪質に合わせたヘアデザイン。",
  },
  {
    title: "マツエク",
    desc: "フラットラッシュ、付け放題、バインドロックなど。一人ひとりの目元に合わせたデザイン。",
  },
  {
    title: "温活",
    desc: "よもぎ蒸し・ハーブ蒸しで体の芯から温め、デトックス・代謝UP。心身のリラックス。",
  },
  {
    title: "リンパマッサージ",
    desc: "老廃物の流れを促し、むくみ・疲れのケア。デトックス効果で心と体を整えます。",
  },
];

const OWNER_IMAGE =
  "/images/" + encodeURIComponent("スクリーンショット 2026-03-03 15.44.57.png");
const OWNER_INTRO =
  "福山市沼隈町にあるアットホームな個人サロンです。美容師歴20年。沼隈の全ての女性を美しく。";

const menuDetail = {
  ヘア: [
    { name: "カット", price: "¥xxxx" },
    { name: "カラー", price: "¥xxxx" },
    { name: "パーマ", price: "¥xxxx" },
    { name: "縮毛矯正", price: "¥xxxx" },
    { name: "トリートメント", price: "¥xxxx" },
    { name: "ヘッドスパ", price: "¥xxxx" },
  ],
  マツエク: [
    { name: "フラットラッシュ（80本）", price: "¥xxxx" },
    { name: "フラットラッシュ（100本）", price: "¥xxxx" },
    { name: "フラットラッシュ（120本）", price: "¥xxxx" },
    { name: "フラットラッシュ（140本）", price: "¥xxxx" },
    { name: "付け放題", price: "¥xxxx" },
    { name: "バインドロック", price: "¥xxxx" },
    { name: "バインドロック 付け放題", price: "¥xxxx" },
    { name: "リムーブ", price: "¥xxxx" },
    { name: "アイシャンプー", price: "¥xxxx" },
    { name: "アイパック", price: "¥xxxx" },
  ],
  温活: [
    { name: "よもぎ蒸し", price: "¥xxxx" },
    { name: "ハーブ蒸し", price: "¥xxxx" },
  ],
  リンパマッサージ: [
    { name: "60分", price: "¥xxxx" },
    { name: "90分", price: "¥xxxx" },
    { name: "120分", price: "¥xxxx" },
  ],
};

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % TOP_SLIDER_IMAGES.length);
    }, SLIDER_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-stone-900 flex flex-col flex-1">
      {/* トップ画像スライダー */}
      <section className="relative w-full bg-stone-200 overflow-hidden" style={{ aspectRatio: "16/9", minHeight: "280px" }}>
        {TOP_SLIDER_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === 0 ? "Larimar 外観" : "Larimar 店内"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === slideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        {/* スライドインジケーター */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {TOP_SLIDER_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`スライド ${i + 1}`}
              onClick={() => setSlideIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === slideIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* お店の紹介 */}
      <section className="max-w-2xl mx-auto px-6 pt-24 pb-16 w-full">
        <h2 className="text-2xl font-bold mb-6">お店の紹介</h2>
        <p className="leading-relaxed">
          Larimar（ラリマー）は、広島県福山市沼隈町にあるプライベートサロンです。美容室・マツエク・リンパマッサージ・温活（よもぎ蒸し・ハーブ蒸し）で、ヘアから体のケアまでトータルでお任せいただけます。夜21時まで営業、不定休なのでお仕事帰りやお休みの日にもご利用いただけます。
        </p>
      </section>

      {/* メニュー（概要） */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-stone-200 w-full">
        <h2 className="text-2xl font-bold mb-8">メニュー</h2>
        <div className="space-y-8">
          {menuSummary.map((item) => (
            <div key={item.title}>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
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

      {/* メニュー詳細（価格付き） */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-stone-200 w-full">
        <h2 className="text-2xl font-bold mb-8">メニュー</h2>
        <div className="space-y-10">
          {(Object.entries(menuDetail) as [keyof typeof menuDetail, typeof menuDetail.ヘア][]).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex justify-between items-baseline">
                    <span>{item.name}</span>
                    <span className="text-stone-600 tabular-nums">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-stone-500 text-sm">※料金は税込です。詳細はお問い合わせください。</p>
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
