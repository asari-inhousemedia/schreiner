import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { site } from "@/lib/site-config";

export const metadata = {
  title: "Danke — Schreiner Heizungstechnik",
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <section className="min-h-[80vh] pt-36 pb-20 flex items-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-[#0e3a5f] text-white grid place-items-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="eyebrow justify-center mb-4">Anfrage erhalten</div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-[#1f2428] mb-5">
            Vielen Dank — wir kümmern uns.
          </h1>
          <p className="text-lg text-[#5c6470] leading-relaxed mb-10">
            Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb
            eines Werktags persönlich bei Ihnen zurück. Bei dringenden Anliegen
            erreichen Sie uns auch direkt unter{" "}
            <a
              href={`tel:${site.phoneLink.replace(/\s+/g, "")}`}
              className="text-[#0e3a5f] font-medium underline-offset-4 hover:underline"
            >
              {site.phone}
            </a>
            .
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0e3a5f] font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
