"use client";

import { motion } from "motion/react";

export default function MenuPage() {
  return (
    <div className="pt-32 pb-32 px-6 bg-stone-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-sage-600 text-xs uppercase tracking-[0.5em] mb-4 block">
            Service Menu
          </span>
          <h2 className="text-4xl md:text-6xl font-serif">Menu & Pricing</h2>
          <p className="text-stone-500 mt-4">営業時間 9:00〜21:00（最終受付20:00）・不定休</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden luxury-shadow luxury-border bg-white">
            <img
              src="/images/453564.jpg"
              alt="ヘアメニュー・まつげメニュー・スペシャルメニュー（ハーブ蒸し・水素吸引）。税込価格・割引クーポンあり。"
              className="w-full h-auto block"
            />
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="text-stone-400 text-sm italic">
            ※料金・メニュー詳細はお問い合わせまたはご予約時にお尋ねください。
          </p>
        </div>
      </div>
    </div>
  );
}
