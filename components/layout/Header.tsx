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
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[#e3dfd8] shadow-sm"
          : "bg-[#0b2e4b]/35 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20 py-4">
        <Link href="/" className="flex items-center" aria-label="Schreiner Heizungstechnik — Startseite">
          <Image
            src="/logo.svg"
            alt="Schreiner Heizungstechnik"
            width={220}
            height={40}
            priority
            className={`h-9 md:h-10 w-auto transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3.5 py-2 text-sm rounded-full transition-colors ${
                scrolled
                  ? "text-[#1f2428] hover:text-[#0e3a5f] hover:bg-black/5"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
            className={`hidden md:inline-flex items-center gap-2 text-sm px-3 py-2 transition-colors ${
              scrolled
                ? "text-[#1f2428] hover:text-[#0e3a5f]"
                : "text-white/90 hover:text-white"
            }`}
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
            className={`lg:hidden grid place-items-center w-10 h-10 rounded-full border transition-colors ${
              scrolled
                ? "bg-white border-[#e3dfd8] text-[#1f2428]"
                : "bg-white/10 border-white/25 text-white backdrop-blur"
            }`}
            aria-label="Menü"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#e3dfd8]">
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
