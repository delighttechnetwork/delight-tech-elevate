import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, AnimatedCounter } from "@/components/Reveal";
import { projects, stats } from "@/lib/site";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CtaBanner } from "@/components/sections/Common";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Delight Tech Network" },
      {
        name: "description",
        content: "Selected projects across web, branding, print and tech repair.",
      },
    ],
  }),
  component: PortfolioPage,
});

const categories = ["All", "Web", "Branding", "Print", "Repair"] as const;

const grads = [
  "from-[var(--brand)] to-[var(--brand-2)]",
  "from-[var(--brand-2)] to-pink-500",
  "from-cyan-400 to-[var(--brand)]",
  "from-violet-500 to-[var(--brand)]",
  "from-[var(--brand)] to-emerald-400",
  "from-rose-500 to-[var(--brand-2)]",
];

function PortfolioPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = cat === "All" ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-12 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Our work</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">
            Projects we're <span className="text-gradient">proud of</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A curated look at recent launches across web, branding, print and repair.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`relative rounded-full px-5 py-2 text-sm transition ${
                  cat === c ? "text-white" : "glass hover:text-primary"
                }`}
              >
                {cat === c && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-gradient-brand"
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                onClick={() => setOpen(projects.indexOf(p))}
                className={`group text-left relative overflow-hidden rounded-3xl glass aspect-[4/5] ${i % 5 === 0 ? "sm:row-span-2 sm:aspect-[4/9]" : ""}`}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${grads[i % grads.length]} opacity-80`}
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest bg-black/30 backdrop-blur px-2.5 py-1 rounded-full">
                      {p.category}
                    </span>
                    <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm opacity-90 line-clamp-2">{p.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <div className="my-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="rounded-2xl glass p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBanner />

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-2xl glass border-border/60">
          {open !== null && (
            <>
              <div className="h-64 sm:h-80 rounded-xl relative overflow-hidden bg-muted">
                {projects[open].image ? (
                  <img
                    src={projects[open].image}
                    alt={projects[open].title}
                    className="absolute inset-0 size-full object-cover"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${grads[open % grads.length]} opacity-80`}
                  />
                )}
                <div className="absolute inset-0 grid-pattern opacity-20" />
              </div>
              <DialogTitle className="text-2xl">{projects[open].title}</DialogTitle>
              <p className="text-sm text-muted-foreground">{projects[open].description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {projects[open].tags.map((t) => (
                  <span key={t} className="rounded-full glass px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
