"use client";

import Link from "next/link";
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
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "glass border-b border-[#e3dfd8]" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-18 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-[#0e3a5f] text-white grid place-items-center font-display font-semibold text-lg shadow-md">
            S
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[#1f2428] text-lg font-semibold">
              Schreiner
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#5c6470]">
              Heizungstechnik · Tübingen
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm text-[#1f2428] hover:text-[#0e3a5f] rounded-full hover:bg-white/60 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
            className="hidden md:inline-flex items-center gap-2 text-sm text-[#1f2428] hover:text-[#0e3a5f] px-3 py-2"
          >
            <Phone className="w-4 h-4" />
            <span>{site.phone}</span>
          </a>
          <Link href="/anfrage" className="btn-primary !py-2.5 !px-5 text-sm">
            Anfrage starten
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-[#e3dfd8] bg-white"
            aria-label="Menü"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-[#e3dfd8]">
          <nav className="container-custom py-4 flex flex-col">
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
