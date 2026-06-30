"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";

/**
 * どのページからでも予約に進める常時表示のCTA。
 * 予約ページ自身では非表示。
 */
export function FloatingReserve() {
  const pathname = usePathname();
  if (pathname?.startsWith("/reservation")) return null;

  return (
    <Link
      href="/reservation"
      aria-label="Web予約はこちら"
      className="fixed z-40 bottom-5 right-5 sm:bottom-7 sm:right-7 inline-flex items-center gap-2 rounded-full bg-sage-600 text-white pl-4 pr-5 py-3.5 shadow-lg shadow-sage-900/25 hover:bg-sage-700 transition-colors"
    >
      <Calendar size={18} strokeWidth={1.8} aria-hidden />
      <span className="text-sm font-medium tracking-wide">Web予約</span>
    </Link>
  );
}
