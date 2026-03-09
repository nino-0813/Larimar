import Link from "next/link";
import { Instagram, Phone, Mail } from "lucide-react";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=広島県福山市沼隈町草深2156-7";
const INSTAGRAM_URL = "https://www.instagram.com/shinri__t/";

export function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-serif tracking-widest mb-4">Larimar</h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-6">
            福山市沼隈町のプライベートサロン。
            <br />
            ヘア・マツエク・リンパ・温活で、心と体のトータルビューティーを。
          </p>
          <div className="flex space-x-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-sage-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} aria-hidden />
            </a>
            <Phone
              size={20}
              className="text-stone-400 hover:text-sage-600 cursor-pointer transition-colors"
              aria-hidden
            />
            <Mail
              size={20}
              className="text-stone-400 hover:text-sage-600 cursor-pointer transition-colors"
              aria-hidden
            />
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-800 mb-6">
            営業時間
          </h3>
          <ul className="text-stone-500 text-sm space-y-2">
            <li>9:00 〜 21:00</li>
            <li>最終受付 20:00</li>
            <li>定休日：不定休</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-800 mb-6">
            アクセス
          </h3>
          <p className="text-stone-500 text-sm leading-relaxed">
            〒720-0311
            <br />
            広島県福山市沼隈町草深2156-7
            <br />
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sage-600 border-b border-sage-600/30 cursor-pointer hover:text-sage-800"
            >
              地図を見る
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-800 mb-6">
            ご予約・お問い合わせ
          </h3>
          <p className="text-stone-500 text-sm mb-2">
            <Link href="/reservation" className="text-sage-600 hover:underline">
              Web予約
            </Link>
          </p>
          <p className="text-stone-500 text-sm">
            <Link href="/contact" className="text-sage-600 hover:underline">
              お問い合わせフォーム
            </Link>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-stone-200/50 text-center">
        <p className="text-[10px] uppercase tracking-widest text-stone-400">
          © 2024 Larimar（ラリマー）. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
