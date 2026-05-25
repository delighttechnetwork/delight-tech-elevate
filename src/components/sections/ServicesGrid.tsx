import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">What we do</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">A complete <span className="text-gradient">technology partner</span></h2>
        <p className="mt-4 text-muted-foreground">From websites that perform to print that impresses and devices that work again — one trusted team, end to end.</p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
            <div className="inline-grid place-items-center size-12 rounded-xl bg-gradient-brand text-white shadow-lg">
              <s.icon className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{s.short}</p>
            <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Learn more <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </Link>
          </motion.div>
        ))}
      </div>

      {limit && (
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:text-primary">
            See all {services.length} services <ArrowUpRight className="size-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
