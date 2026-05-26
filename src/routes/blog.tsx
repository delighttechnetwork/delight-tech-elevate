import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Clock, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/lib/site";
import { Input } from "@/components/ui/input";

const categories = ["All", "Technology", "Design", "Business", "Security"] as const;

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Delight Tech Network" },
      { name: "description", content: "Articles on web development, design, branding, cyber security and growth from the Delight Tech team." },
      { property: "og:title", content: "Insights — Delight Tech Network" },
      { property: "og:description", content: "Articles on web development, design, branding and growth." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const matchQ   = !q || (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  const [featured, ...rest] = filtered.length ? filtered : posts;

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-12 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Insights</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Ideas worth your <span className="text-gradient">attention</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Short, practical articles from our team on building, designing and securing modern businesses.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-between rounded-2xl glass p-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" className="pl-9" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-3.5 py-1.5 text-xs transition ${
                    cat === c ? "bg-gradient-brand text-white shadow" : "glass hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {featured && (
        <section className="mx-auto max-w-7xl px-4 mt-10">
          <Reveal>
            <Link to="/blog/$slug" params={{ slug: featured.slug }}
                  className="group grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl glass">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
                <div className="absolute inset-0" style={{ background: featured.cover }} />
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <span className="absolute top-4 left-4 rounded-full bg-black/40 backdrop-blur text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
                  Featured · {featured.category}
                </span>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{featured.date}</span><span>·</span>
                  <span className="inline-flex items-center gap-1"><Clock className="size-3" />{featured.readTime}</span>
                </div>
                <h2 className="mt-3 text-2xl md:text-4xl font-bold group-hover:text-primary transition">{featured.title}</h2>
                <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Read article <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 mt-10 mb-10 grid gap-5 md:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <Link to="/blog/$slug" params={{ slug: p.slug }}
                  className="group block h-full rounded-3xl glass overflow-hidden transition hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0" style={{ background: p.cover }} />
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <span className="absolute top-3 left-3 rounded-full bg-black/40 backdrop-blur text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{p.date}</span><span>·</span>
                  <span className="inline-flex items-center gap-1"><Clock className="size-3" />{p.readTime}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground md:col-span-3 py-12">No articles match your search.</p>
        )}
      </section>
    </>
  );
}
