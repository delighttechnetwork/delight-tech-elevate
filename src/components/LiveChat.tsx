import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { company } from "@/lib/site";

type Msg = { id: number; from: "bot" | "user"; text: string; cta?: { label: string; href: string }[] };

const quickReplies = [
  "Get a quote",
  "Services & pricing",
  "Speak to a human",
  "Office hours",
];

let nextId = 1;
const mk = (from: Msg["from"], text: string, cta?: Msg["cta"]): Msg => ({ id: nextId++, from, text, cta });

function reply(input: string): Msg {
  const t = input.toLowerCase();
  if (/(quote|price|cost|estimate|calculator)/.test(t))
    return mk("bot",
      "Our instant calculator gives you a live range based on scope, timeline and add-ons. You can also send your brief straight to WhatsApp.",
      [
        { label: "Open calculator", href: "/services#calculator" },
        { label: "WhatsApp us",      href: `https://wa.me/${company.whatsappIntl}` },
      ]
    );
  if (/(service|what.*do|offer)/.test(t))
    return mk("bot",
      "We cover 15 services across Web, Design, Branding, Print and GSM Repair. Browse them all on our Services page.",
      [{ label: "See all services", href: "/services" }]
    );
  if (/(human|agent|call|speak|talk)/.test(t))
    return mk("bot",
      `You'll get a human in under one business hour. Call ${company.phone} or chat on WhatsApp ${company.whatsapp}.`,
      [
        { label: "Call now",    href: `tel:${company.phone}` },
        { label: "WhatsApp",    href: `https://wa.me/${company.whatsappIntl}` },
      ]
    );
  if (/(hour|open|when|time)/.test(t))
    return mk("bot",
      `We're open ${company.hours[0].day} ${company.hours[0].time}, ${company.hours[1].day} ${company.hours[1].time}.`
    );
  if (/(portfolio|work|project|case)/.test(t))
    return mk("bot",
      "Have a look at our recent launches — there's a filterable showcase on the Portfolio page.",
      [{ label: "Open portfolio", href: "/portfolio" }]
    );
  if (/(blog|insight|article|read)/.test(t))
    return mk("bot",
      "We share short, practical articles on tech, design and business in Insights.",
      [{ label: "Read Insights", href: "/blog" }]
    );
  return mk("bot",
    "Thanks for your message! A team member will respond shortly. For an instant reply, ping us on WhatsApp.",
    [{ label: "WhatsApp us", href: `https://wa.me/${company.whatsappIntl}` }]
  );
}

export function LiveChat() {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(1);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    mk("bot", `Hi 👋 I'm Lumi, your assistant at ${company.name}. How can I help today?`),
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [open, messages]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, mk("user", value)]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, reply(value)]);
      if (!open) setUnread((u) => u + 1);
    }, 550);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open live chat"
        className="fixed bottom-5 left-5 z-40 group inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white pl-3 pr-4 py-2.5 shadow-2xl glow-ring hover:scale-[1.03] transition"
      >
        <span className="relative grid h-7 w-7 place-items-center rounded-full bg-white/15">
          <MessageSquare className="size-4" />
          {unread > 0 && !open && (
            <span className="absolute -top-1 -right-1 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 text-[10px] font-bold px-1">{unread}</span>
          )}
        </span>
        <span className="text-sm font-medium">Chat with us</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{    opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-5 z-40 w-[min(380px,calc(100vw-2.5rem))] h-[540px] max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-background/95 backdrop-blur-xl flex flex-col"
          >
            <div className="relative p-4 bg-gradient-brand text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">Lumi · Live Support</div>
                    <div className="text-[11px] opacity-80 flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-300 animate-pulse" /> Online · Replies instantly
                    </div>
                  </div>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close chat"
                        className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/15">
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] ${m.from === "user" ? "" : ""}`}>
                    <div className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-foreground rounded-bl-sm"
                    }`}>
                      {m.text}
                    </div>
                    {m.cta && (
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {m.cta.map((c) => {
                          const external = c.href.startsWith("http") || c.href.startsWith("tel:");
                          return (
                            <a key={c.label} href={c.href}
                               target={external ? "_blank" : undefined}
                               rel={external ? "noreferrer" : undefined}
                               className="inline-flex items-center rounded-full glass border border-primary/30 px-3 py-1 text-xs font-medium hover:text-primary transition">
                              {c.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {messages.length <= 2 && (
              <div className="px-3 pb-2 flex flex-wrap gap-1.5">
                {quickReplies.map((q) => (
                  <button key={q} onClick={() => send(q)}
                          className="rounded-full border border-border/60 px-3 py-1 text-xs hover:border-primary/60 hover:text-primary transition">
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="border-t border-border/60 p-3 flex items-center gap-2 bg-card/40"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 bg-transparent text-sm px-3 py-2.5 outline-none placeholder:text-muted-foreground"
              />
              <button type="submit" aria-label="Send"
                      className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-white hover:scale-105 transition disabled:opacity-50"
                      disabled={!input.trim()}>
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
