"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data?.error ?? "送信に失敗しました。しばらくしてからお試しください。");
      }
    } catch {
      alert("通信エラーが発生しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-32 px-6 bg-stone-50/30">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-16 rounded-3xl luxury-shadow text-center"
          >
            <div className="w-20 h-20 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-sage-600" size={40} />
            </div>
            <h2 className="text-2xl font-serif mb-6">送信しました</h2>
            <p className="text-stone-500 mb-10">
              お問い合わせありがとうございます。内容を確認のうえ、ご連絡いたします。
            </p>
            <Link
              href="/"
              className="inline-block bg-stone-800 text-white px-12 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-sage-600 transition-all"
            >
              トップに戻る
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

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
            ご質問・ご相談はお気軽にどうぞ。ご予約は
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
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="お名前"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-stone-200 py-3 focus:border-sage-600 outline-none transition-colors bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="メールアドレス"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-stone-200 py-3 focus:border-sage-600 outline-none transition-colors bg-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border-b border-stone-200 py-3 focus:border-sage-600 outline-none transition-colors bg-transparent text-stone-500"
              >
                <option value="">お問い合わせ内容を選択してください</option>
                <option value="サービスについて">サービスについて</option>
                <option value="採用について">採用について</option>
                <option value="その他">その他</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="メッセージを入力してください"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-stone-200 p-4 rounded-xl focus:border-sage-600 outline-none transition-colors bg-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-stone-800 text-white px-12 py-5 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-sage-600 transition-all w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "送信中..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
