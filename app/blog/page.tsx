"use client";

import Image from "next/image";
import { motion } from "motion/react";

const posts = [
  {
    id: 1,
    title: "春のトレンドカラー：オリーブベージュで透明感を",
    date: "2024.03.20",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "今年の春は、赤みを抑えたオリーブベージュが人気です。肌馴染みが良く、透明感のある仕上がりに...",
  },
  {
    id: 2,
    title: "マツエクの持ちを良くするための3つのポイント",
    date: "2024.03.15",
    category: "Eyelash",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "せっかく付けたマツエク、できるだけ長く楽しみたいですよね。日々のケアで気を付けるべきポイントを...",
  },
  {
    id: 3,
    title: "新導入！髪質改善トリートメントの効果とは？",
    date: "2024.03.10",
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "SNSでも話題の髪質改善トリートメント。実際にどのような変化があるのか、詳しく解説します...",
  },
  {
    id: 4,
    title: "サロン専売品のシャンプーと市販品の違い",
    date: "2024.03.05",
    category: "Care",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "毎日使うものだからこそ、こだわりたいシャンプー。サロン専売品がなぜ髪に良いのか、その理由を...",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-sage-600 text-xs uppercase tracking-[0.5em] mb-4 block">
            Journal
          </span>
          <h2 className="text-4xl md:text-6xl font-serif">Blog</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 luxury-shadow relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-sage-600 text-[10px] uppercase tracking-widest font-bold">
                  {post.category}
                </span>
                <span className="text-stone-400 text-[10px] tracking-widest">{post.date}</span>
              </div>
              <h3 className="text-2xl font-serif text-stone-800 mb-4 group-hover:text-sage-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <span className="text-xs uppercase tracking-widest font-semibold border-b border-stone-200 pb-1 group-hover:border-sage-600 transition-colors">
                Read More
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="border border-stone-200 px-12 py-4 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-stone-50 transition-all">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
