"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-32 px-6 bg-stone-50/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sage-600 text-xs uppercase tracking-[0.5em] mb-4 block">
            Inquiry
          </span>
          <h2 className="text-4xl md:text-6xl font-serif">お問い合わせ</h2>
          <p className="text-stone-500 mt-6">
            ご質問・ご相談はお気軽にどうぞ。            ご予約は
            <Link href="/reservation" className="text-sage-600 hover:underline">ご予約ページ</Link>
            からも承ります。
          </p>
          <p className="text-stone-500 mt-2 text-sm">
            〒720-0311 広島県福山市沼隈町草深2156-7　/　9:00〜21:00（最終受付20:00）・不定休
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-16 rounded-2xl luxury-shadow luxury-border"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="お名前"
                  className="w-full border-b border-stone-200 py-3 focus:border-sage-600 outline-none transition-colors bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="w-full border-b border-stone-200 py-3 focus:border-sage-600 outline-none transition-colors bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                Subject
              </label>
              <select className="w-full border-b border-stone-200 py-3 focus:border-sage-600 outline-none transition-colors bg-transparent text-stone-500">
                <option>お問い合わせ内容を選択してください</option>
                <option>サービスについて</option>
                <option>採用について</option>
                <option>その他</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="メッセージを入力してください"
                className="w-full border border-stone-200 p-4 rounded-xl focus:border-sage-600 outline-none transition-colors bg-transparent"
              />
            </div>

            <button
              type="button"
              className="bg-stone-800 text-white px-12 py-5 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-sage-600 transition-all w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
