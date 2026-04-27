"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, X, Send, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const QUICK_REPLIES = [
  "Welche Förderungen gibt es 2026?",
  "Wärmepumpe oder Gas-Brennwert — was passt zu mir?",
  "Wie lange dauert eine Bad-Sanierung?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  const handleSend = (text: string) => {
    if (!text.trim() || status === "streaming" || status === "submitted") return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-5 right-5 z-50 group flex items-center gap-3 pl-4 pr-5 py-3.5 rounded-full bg-[#0e3a5f] text-white shadow-2xl shadow-[#0e3a5f]/30 hover:bg-[#0b2e4b] transition-colors"
            aria-label="Chat öffnen"
          >
            <span className="relative">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#c9742a] rounded-full ring-2 ring-[#0e3a5f]" />
            </span>
            <span className="text-sm font-medium hidden sm:block">
              Frag den Schreiner-Berater
            </span>
            <span className="text-sm font-medium sm:hidden">Chat</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-5 left-5 sm:left-auto sm:bottom-5 sm:right-5 z-50 sm:w-[400px] h-[600px] max-h-[calc(100vh-2.5rem)] bg-white rounded-3xl shadow-2xl border border-[#e3dfd8] flex flex-col overflow-hidden"
          >
            <div className="bg-[#0e3a5f] text-white p-5 flex items-start justify-between">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#c9742a] grid place-items-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-lg leading-tight">
                    Schreiner-Berater
                  </div>
                  <div className="text-xs text-white/70 mt-0.5">
                    KI-Assistent · 24/7
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Chat schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#f7f5f2]">
              {messages.length === 0 && (
                <div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-[#e3dfd8]">
                    <p className="text-sm text-[#1f2428] leading-relaxed">
                      Guten Tag! Ich bin der digitale Berater von Schreiner
                      Heizungstechnik. Fragen Sie mich gerne zu Heizung,
                      Bad, Solar, Wartung oder zur Förderung 2026.
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {QUICK_REPLIES.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSend(q)}
                        className="w-full text-left text-sm bg-white border border-[#e3dfd8] hover:border-[#0e3a5f] hover:bg-[#eaf1f7] rounded-xl px-3.5 py-2.5 transition-colors text-[#1f2428]"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-[#0e3a5f] text-white rounded-tr-sm"
                        : "bg-white text-[#1f2428] rounded-tl-sm border border-[#e3dfd8]"
                    }`}
                  >
                    {m.parts.map((part, i) =>
                      part.type === "text" ? <span key={i}>{part.text}</span> : null
                    )}
                  </div>
                </div>
              ))}

              {(status === "submitted" || status === "streaming") &&
                messages[messages.length - 1]?.role === "user" && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-[#e3dfd8] rounded-2xl rounded-tl-sm px-4 py-3.5">
                      <div className="flex gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#5c6470] rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 bg-[#5c6470] rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 bg-[#5c6470] rounded-full animate-bounce" />
                      </div>
                    </div>
                  </div>
                )}

              {messages.length > 1 && status === "ready" && (
                <Link
                  href="/anfrage"
                  className="flex items-center gap-2 text-xs font-medium text-[#a85d1f] hover:text-[#c9742a] mt-3 px-1"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  Anfrage starten — wir melden uns zurück
                </Link>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-white border-t border-[#e3dfd8]"
            >
              <div className="flex gap-2 items-end">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ihre Frage…"
                  disabled={status !== "ready" && messages.length > 0}
                  className="flex-1 px-4 py-2.5 bg-[#f7f5f2] border border-[#e3dfd8] rounded-full text-sm focus:outline-none focus:border-[#0e3a5f] focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || (status !== "ready" && messages.length > 0)}
                  className="w-10 h-10 grid place-items-center rounded-full bg-[#0e3a5f] text-white hover:bg-[#0b2e4b] disabled:opacity-40 transition-colors shrink-0"
                  aria-label="Senden"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-[#5c6470] text-center mt-2">
                Chat wird über Google Gemini verarbeitet · Keine verbindlichen Auskünfte
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
