"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Top" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/blog", label: "Blog" },
  { href: "/reservation", label: "Reservation" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // ホームの最上部だけ、ヒーロー画像の上に白文字で重ねる
  const isHome = pathname === "/";
  const overHero = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        overHero ? "bg-transparent py-6" : "bg-white/90 backdrop-blur-md py-4 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center shrink-0" aria-label="Larimar トップへ">
          <img
            src="/images/111.png"
            alt="Larimar"
            className={`h-8 w-auto md:h-9 transition-[filter] duration-300 ${
              overHero ? "[filter:brightness(0)_invert(1)]" : ""
            }`}
          />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-widest uppercase transition-colors relative py-1 ${
                overHero
                  ? isActive(item.href)
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                  : isActive(item.href)
                    ? "text-sage-600"
                    : "text-stone-500 hover:text-sage-600"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1px] ${
                    overHero ? "bg-white" : "bg-sage-600"
                  }`}
                  aria-hidden
                />
              )}
            </Link>
          ))}
          <Link
            href="/reservation"
            className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase transition-all ${
              overHero
                ? "bg-white text-sage-800 hover:bg-sage-50"
                : "bg-sage-600 text-white hover:bg-sage-700 luxury-shadow"
            }`}
          >
            Reserve
          </Link>
        </div>

        <button
          className={`md:hidden ${overHero ? "text-white" : "text-stone-800"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニュー"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl py-8 px-6 md:hidden">
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-serif tracking-widest ${
                    isActive(item.href) ? "text-sage-600" : "text-stone-500"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/reservation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-sage-600 text-white text-sm tracking-widest uppercase hover:bg-sage-700 transition-colors"
              >
                Reserve
              </Link>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
