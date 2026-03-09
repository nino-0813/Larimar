"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-sage-600 text-xs uppercase tracking-[0.5em] mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-serif">About Larimar</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square rounded-2xl overflow-hidden luxury-shadow relative"
          >
            <Image
              src={"/images/" + encodeURIComponent("スクリーンショット 2026-03-03 15.44.57.png")}
              alt="オーナー"
              fill
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif mb-8 text-sage-800 italic">
              &quot;青い海の宝石のように、心と体が輝く場所を&quot;
            </h3>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                Larimar（ラリマー）は、カリブ海の青い海を思わせる天然石の名前です。福山市沼隈町にある当サロンは、その名の通り、お客様が心身ともに輝ける「トータルビューティーのプライベートサロン」を目指しています。
              </p>
              <p>
                美容室・マツエクに加え、リンパマッサージ、温活（よもぎ蒸し・ハーブ蒸し）を通じて、見た目の美しさだけでなくデトックス・代謝UPにもこだわっています。お仕事帰りやお休みの日に、夜21時までご利用いただけます。
              </p>
              <p>
                不定休のため、お客様の都合に合わせたご予約が可能。ひとりひとりに寄り添う、落ち着いた空間で、あなたらしい美しさを見つけていきましょう。
              </p>
              <div className="pt-8">
                <p className="font-serif text-xl text-stone-800">
                  所在地
                </p>
                <p className="text-sage-600 font-serif text-lg mt-1">
                  〒720-0311 広島県福山市沼隈町草深2156-7
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
