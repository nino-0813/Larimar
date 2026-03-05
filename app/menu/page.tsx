"use client";

import { motion } from "motion/react";

const hairMenu = [
  { name: "カット", price: "要問い合わせ", desc: "シャンプー・ブロー込。骨格に合わせた似合わせカット。" },
  { name: "カラー", price: "要問い合わせ", desc: "ダメージに配慮した薬剤で、透明感のある仕上がりに。" },
  { name: "パーマ", price: "要問い合わせ", desc: "柔らかな質感のデジタルパーマ。朝のセットが楽に。" },
  { name: "トリートメント", price: "要問い合わせ", desc: "髪質改善トリートメント。内側から潤う艶髪へ。" },
  { name: "ヘッドスパ", price: "要問い合わせ", desc: "頭皮環境を整えるリラクゼーション。" },
];

const eyelashMenu = [
  { name: "フラットラッシュ（80本）", price: "要問い合わせ", desc: "軽量で負担が少なく、自然なボリューム感。" },
  { name: "フラットラッシュ（120本）", price: "要問い合わせ", desc: "華やかな目元を演出。" },
  { name: "まつげパーマ", price: "要問い合わせ", desc: "自まつげを最大限に長く、くっきりと。" },
  { name: "ボリュームラッシュ", price: "要問い合わせ", desc: "極細毛で密度を出し、ふんわりとした仕上がり。" },
  { name: "眉デザイン", price: "要問い合わせ", desc: "骨格に合わせた眉デザイン。" },
];

const lymphMenu = [
  { name: "リンパマッサージ", price: "要問い合わせ", desc: "老廃物の流れを促し、むくみ・疲れのケア。デトックス効果。" },
];

const warmMenu = [
  { name: "よもぎ蒸し", price: "要問い合わせ", desc: "温活で体の芯から温め、代謝UP。デトックス・リラックス。" },
  { name: "ハーブ蒸し", price: "要問い合わせ", desc: "ハーブの香りと蒸気で心身をリフレッシュ。温活・代謝UP。" },
];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl luxury-shadow luxury-border"
          >
            <h3 className="text-3xl font-serif mb-10">美容室</h3>
            <div className="space-y-10">
              {hairMenu.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-serif text-stone-800 group-hover:text-sage-600 transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-stone-400 text-sm font-mono">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl luxury-shadow luxury-border"
          >
            <h3 className="text-3xl font-serif mb-10">マツエク・眉</h3>
            <div className="space-y-10">
              {eyelashMenu.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-serif text-stone-800 group-hover:text-sage-600 transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-stone-400 text-sm font-mono">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl luxury-shadow luxury-border"
          >
            <h3 className="text-3xl font-serif mb-10">リンパマッサージ</h3>
            <div className="space-y-10">
              {lymphMenu.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-serif text-stone-800 group-hover:text-sage-600 transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-stone-400 text-sm font-mono">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl luxury-shadow luxury-border"
          >
            <h3 className="text-3xl font-serif mb-10">温活</h3>
            <div className="space-y-10">
              {warmMenu.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-serif text-stone-800 group-hover:text-sage-600 transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-stone-400 text-sm font-mono">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-stone-400 text-sm italic">
            ※料金・メニュー詳細はお問い合わせまたはご予約時にお尋ねください。
          </p>
        </div>
      </div>
    </div>
  );
}
