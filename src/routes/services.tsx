import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { FAQSection, CtaBanner } from "@/components/sections/Common";
import { ServiceCalculator } from "@/components/sections/ServiceCalculator";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Delight Tech Network" },
      { name: "description", content: "Web development, cyber security, UI/UX, graphics, print, souvenir branding and GSM repair services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Our services</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Everything your brand needs — <span className="text-gradient">under one roof</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Fifteen services. One trusted team. Pricing that scales with your ambition.</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 grid gap-6 lg:gap-8">
        {services.map((s, i) => (
          <motion.article
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl glass p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="inline-grid place-items-center size-12 rounded-2xl bg-gradient-brand text-white shadow-lg"><s.icon className="size-5" /></span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary">{s.category}</p>
                  <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed">{s.description}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 mt-0.5 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <div className="rounded-2xl glass p-6 text-center">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Starting at</div>
                <div className="mt-2 text-3xl md:text-4xl font-bold text-gradient">{s.pricing}</div>
                <p className="mt-2 text-xs text-muted-foreground">Custom quotes available for scope & scale.</p>
                <Link to="/contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-lg">
                  Get Started <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <ServiceCalculator />
      <FAQSection />
      <CtaBanner />
    </>
  );
}
