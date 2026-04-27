"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { nav, site } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 bg-white/85 backdrop-blur-md border-b transition-shadow duration-300 ${
        scrolled
          ? "border-[#e3dfd8] shadow-[0_8px_30px_-12px_rgba(14,58,95,0.12)]"
          : "border-[#e3dfd8]/60"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 sm:h-18 md:h-20 py-3 md:py-4 gap-3">
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Schreiner Heizungstechnik — Startseite"
        >
          <Image
            src="/logo.svg"
            alt="Schreiner Heizungstechnik"
            width={220}
            height={40}
            priority
            className="h-7 sm:h-9 md:h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 xl:px-3.5 py-2 text-sm text-[#1f2428] hover:text-[#0e3a5f] rounded-full hover:bg-black/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
            className="hidden xl:inline-flex items-center gap-2 text-sm text-[#1f2428] hover:text-[#0e3a5f] px-3 py-2"
          >
            <Phone className="w-4 h-4" />
            <span>{site.phone}</span>
          </a>
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 rounded-full bg-[#0e3a5f] text-white text-sm font-medium hover:bg-[#0b2e4b] shadow-sm transition-colors"
          >
            <span className="hidden sm:inline">Anfrage starten</span>
            <span className="sm:hidden">Anfrage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-[#e3dfd8] bg-white text-[#1f2428] shrink-0"
            aria-label="Menü"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#e3dfd8]">
          <nav className="container-custom py-3 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-[#1f2428] border-b border-[#e3dfd8] last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
              className="py-3 text-sm text-[#0e3a5f] flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
