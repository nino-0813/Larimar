"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Scissors, Eye, Sparkles, Flame, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const TOP_HERO_IMAGE = "/images/458551.jpg";
const INTERIOR_IMAGE = "/images/458551.jpg";
const OWNER_IMAGE =
  "/images/" + encodeURIComponent("スクリーンショット 2026-03-03 15.44.57.png");
const GALLERY = [
  "/images/larimar.png",
  "/images/458551.jpg",
  "/images/" + encodeURIComponent("スクリーンショット 2026-03-03 15.36.19.png"),
];

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=広島県福山市沼隈町草深2156-7";

const services = [
  {
    icon: Scissors,
    en: "Hair",
    jp: "ヘア",
    desc: "カット・カラー・トリートメント。髪質に合わせた、あなただけの似合わせを。",
  },
  {
    icon: Eye,
    en: "Eyelash",
    jp: "マツエク",
    desc: "目元の印象を、自然に華やかに。デザインからていねいにご提案します。",
  },
  {
    icon: Sparkles,
    en: "Lymph",
    jp: "リンパマッサージ",
    desc: "巡りをととのえ、むくみをすっきり。心までほどけるリラックスタイムを。",
  },
  {
    icon: Flame,
    en: "Warmth",
    jp: "温活・よもぎ蒸し",
    desc: "よもぎ蒸し・ハーブ蒸しで体の芯から温め、デトックスと代謝アップを。",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-stone-900 flex flex-col flex-1">
      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={TOP_HERO_IMAGE}
          alt="福山市沼隈町のプライベートサロン Larimar（ラリマー）。ヘア・マツエク・リンパ・温活のトータルビューティーサロン"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* 文字を読みやすくする重ね */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/55 via-stone-900/30 to-stone-900/55" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/80 text-[11px] sm:text-xs tracking-[0.45em] uppercase mb-6"
          >
            Fukuyama ・ Total Beauty Salon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-jpserif text-white text-[2.75rem] leading-[1.3] sm:text-6xl sm:leading-[1.25] font-bold tracking-[0.04em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            心と体が、
            <br />
            輝く場所へ。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-white/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            ヘア・マツエク・リンパ・温活。
            <br />
            福山市沼隈町の、あなたに寄り添うプライベートサロン。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              href="/reservation"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-9 py-4 bg-sage-600 text-white text-sm tracking-widest uppercase rounded-full hover:bg-sage-700 transition-colors shadow-lg shadow-sage-900/20"
            >
              Web予約はこちら
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 border border-white/70 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-stone-900 transition-colors"
            >
              メニューを見る
            </Link>
          </motion.div>
        </div>

        {/* スクロール誘導 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          aria-hidden
        >
          <span className="text-white/70 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-white/70 to-transparent" />
        </motion.div>
      </section>

      {/* ===== CONCEPT ===== */}
      <section className="bg-sage-50/60">
        <div className="max-w-2xl mx-auto px-6 py-24 sm:py-32">
          <Reveal delay={0.1}>
            <span className="text-sage-600 text-xs uppercase tracking-[0.4em] block mb-5">Concept</span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-snug text-stone-800 italic">
              &ldquo;青い海の宝石のように、<br className="hidden sm:block" />
              心と体が輝く場所を&rdquo;
            </h2>
            <div className="mt-7 space-y-5 text-stone-600 leading-relaxed text-[15px] sm:text-base">
              <p>
                Larimar（ラリマー）は、カリブ海の青い海を思わせる天然石の名前。福山市沼隈町にある小さなプライベートサロンです。
              </p>
              <p>
                美容室・マツエクに加え、リンパマッサージや温活（よもぎ蒸し・ハーブ蒸し）まで。見た目の美しさだけでなく、デトックスや代謝アップで体の内側からととのえます。
              </p>
              <p>
                夜21時まで営業・不定休。お仕事帰りやお休みの日に、ひとりひとりへ寄り添う落ち着いた空間でおもてなしします。
              </p>
            </div>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 mt-8 text-sm tracking-widest uppercase text-sage-700 border-b border-sage-300 pb-1 hover:border-sage-600 transition-colors"
            >
              サロンについて
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="max-w-6xl mx-auto px-6 py-24 sm:py-32 w-full" aria-label="メニュー">
        <Reveal className="text-center mb-14 sm:mb-16">
          <span className="text-sage-600 text-xs uppercase tracking-[0.4em] block mb-4">Menu</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-800">4つのトータルケア</h2>
          <p className="mt-4 text-stone-500 text-sm sm:text-base">髪から体まで、まるごとおまかせいただけます。</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.en} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-sage-100 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-sage-900/10 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-sage-50 flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors">
                  <s.icon size={22} strokeWidth={1.5} aria-hidden />
                </div>
                <p className="mt-5 text-[11px] tracking-[0.3em] uppercase text-sage-500">{s.en}</p>
                <h3 className="mt-1 font-serif text-xl text-stone-800">{s.jp}</h3>
                <p className="mt-3 text-stone-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* メニュー表 */}
        <Reveal delay={0.1} className="mt-16">
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg shadow-sage-900/10 border border-sage-100 bg-white">
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
          <p className="mt-4 text-stone-500 text-sm text-center">
            ※料金・詳細はお問い合わせ、またはご予約時にお尋ねください。
          </p>
        </Reveal>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="bg-stone-50 py-24 sm:py-32" aria-label="店内ギャラリー">
        <Reveal className="text-center mb-12 px-6">
          <span className="text-sage-600 text-xs uppercase tracking-[0.4em] block mb-4">Gallery</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-800">落ち着く、わたしだけの時間。</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-xl group ${
                  i === 0 ? "col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt="Larimar 店内・外観の様子"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ===== STAFF ===== */}
      <section className="max-w-5xl mx-auto px-6 py-24 sm:py-32 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-10 sm:gap-14 items-center">
          <Reveal>
            <div className="aspect-square w-full max-w-[260px] mx-auto rounded-full overflow-hidden shadow-lg shadow-sage-900/10">
              <img src={OWNER_IMAGE} alt="オーナー" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="text-center sm:text-left">
            <span className="text-sage-600 text-xs uppercase tracking-[0.4em] block mb-4">Staff</span>
            <h2 className="font-serif text-3xl text-stone-800">オーナー</h2>
            <p className="mt-5 text-stone-600 leading-relaxed">
              福山市沼隈町にある、アットホームな個人サロンです。美容師歴20年。お客様一人ひとりに向き合い、髪も体も心地よくととのうお手伝いをいたします。どうぞお気軽にご相談ください。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== ACCESS ===== */}
      <section className="bg-sage-50/60 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-stone-100 w-full h-full min-h-[300px] shadow-lg shadow-sage-900/10">
              <iframe
                src={`https://www.google.com/maps?q=広島県福山市沼隈町草深2156-7&output=embed`}
                style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Larimar 地図"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl shadow-sm border border-sage-100 p-8 sm:p-10 h-full">
              <span className="text-sage-600 text-xs uppercase tracking-[0.4em] block mb-6">Access</span>
              <dl className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={20} strokeWidth={1.5} className="text-sage-600 shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <dt className="text-[11px] tracking-widest uppercase text-stone-400">住所</dt>
                    <dd className="text-stone-800 mt-0.5">〒720-0311 広島県福山市沼隈町草深2156-7</dd>
                    <dd className="text-stone-500 text-sm mt-1">車でお越しください。駐車場はお問い合わせください。</dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock size={20} strokeWidth={1.5} className="text-sage-600 shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <dt className="text-[11px] tracking-widest uppercase text-stone-400">営業時間</dt>
                    <dd className="text-stone-800 mt-0.5">9:00 〜 21:00（最終受付 20:00）</dd>
                    <dd className="text-stone-500 text-sm mt-1">定休日：不定休</dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calendar size={20} strokeWidth={1.5} className="text-sage-600 shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <dt className="text-[11px] tracking-widest uppercase text-stone-400">ご予約</dt>
                    <dd className="text-stone-700 mt-0.5 text-sm">
                      <Link href="/reservation" className="text-sage-700 underline underline-offset-4 hover:text-sage-800">Web予約</Link>
                      {" / "}
                      <Link href="/contact" className="text-sage-700 underline underline-offset-4 hover:text-sage-800">お問い合わせフォーム</Link>
                      よりどうぞ。
                    </dd>
                  </div>
                </div>
              </dl>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full mt-8 px-6 py-3 bg-stone-900 text-white text-sm tracking-widest uppercase rounded-full hover:bg-stone-800 transition-colors"
              >
                Googleマップで見る
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden">
        <img src={INTERIOR_IMAGE} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sage-900/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 sm:py-28 text-center">
          <Reveal>
            <span className="text-white/70 text-xs uppercase tracking-[0.4em] block mb-5">Reservation</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-snug">
              あなたらしい美しさを、<br className="sm:hidden" />見つけにきませんか。
            </h2>
            <p className="mt-5 text-white/80 text-sm sm:text-base">
              ご予約・ご相談はお気軽に。お待ちしております。
            </p>
            <Link
              href="/reservation"
              className="group inline-flex items-center justify-center gap-2 mt-9 px-10 py-4 bg-white text-sage-800 text-sm tracking-widest uppercase rounded-full hover:bg-sage-50 transition-colors shadow-lg"
            >
              Web予約はこちら
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
