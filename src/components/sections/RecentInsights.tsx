import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/lib/site";

export function RecentInsights() {
  const items = posts.slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <Reveal className="flex items-end justify-between gap-6 flex-wrap">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Insights</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">From the <span className="text-gradient">blog</span></h2>
          <p className="mt-4 text-muted-foreground">Short, practical articles on technology, design, security and growth.</p>
        </div>
        <Link to="/blog" className="rounded-full glass px-5 py-2.5 text-sm hover:text-primary inline-flex items-center gap-2">
          All articles <ArrowRight className="size-4" />
        </Link>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block h-full rounded-3xl glass overflow-hidden transition hover:-translate-y-1"
            >
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
                <span className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium">
                  Read article <ArrowRight className="size-3" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
