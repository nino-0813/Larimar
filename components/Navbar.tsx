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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Larimar トップへ"
        >
          <img
            src="/images/111.png"
            alt="Larimar"
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-widest uppercase transition-all relative py-1 ${
                isActive(item.href) ? "text-sage-600" : "text-stone-500 hover:text-sage-600"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sage-600" aria-hidden />
              )}
            </Link>
          ))}
          <Link
            href="/reservation"
            className="bg-sage-600 text-white px-6 py-2 rounded-full text-xs tracking-widest uppercase hover:bg-sage-800 transition-all luxury-shadow"
          >
            Reserve
          </Link>
        </div>

        <button
          className="md:hidden text-stone-800"
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
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
