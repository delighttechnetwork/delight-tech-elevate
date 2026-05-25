import { Reveal, AnimatedCounter } from "@/components/Reveal";
import { stats, testimonials, company, faqs } from "@/lib/site";
import { Award, Rocket, ShieldCheck, Users, Quote, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">About us</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Built for brands that refuse to settle for ordinary.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Delight Tech Network is a Nigerian technology and creative studio headquartered in Ibadan.
            We combine engineering precision with design craft to ship products, identities and services that
            stand shoulder-to-shoulder with the world's best — at a price that respects African business realities.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-4">
            {[
              { Icon: Rocket, t: "Fast Execution", d: "From brief to launch in days, not months." },
              { Icon: ShieldCheck, t: "Trusted Quality", d: "Production-grade work, every single time." },
              { Icon: Users, t: "Human Partnership", d: "A team that listens, advises and shows up." },
              { Icon: Award, t: "Premium Craft", d: "Details that elevate every touchpoint." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl glass p-4">
                <Icon className="size-5 text-primary" />
                <div className="mt-2 font-semibold text-sm">{t}</div>
                <p className="text-xs text-muted-foreground mt-1">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-6">
                  <div className="text-4xl font-bold text-gradient">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    { t: "World-class craft", d: "Every pixel, every line of code, every printed page held to international standards." },
    { t: "End-to-end ownership", d: "Strategy, design, build, support — no hand-offs between agencies." },
    { t: "Honest pricing", d: "Transparent quotes, no surprise invoices, flexible payment terms." },
    { t: "Always-on support", d: "Direct line to your project lead — no ticket queues or runarounds." },
  ];
  return (
    <section className="bg-card/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Why choose us</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Four reasons clients <span className="text-gradient">stay</span></h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="rounded-2xl glass p-6 h-full">
                <div className="size-10 rounded-xl bg-gradient-brand text-white grid place-items-center font-bold">{i + 1}</div>
                <h3 className="mt-4 font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const items = [
    { title: "Heritage Mall Web App", tag: "Web · CMS", grad: "from-[var(--brand)] to-[var(--brand-2)]" },
    { title: "Coacoa Souvenir Collection", tag: "Branding", grad: "from-[var(--brand-2)] to-pink-500" },
    { title: "TechFest Poster Series", tag: "Print Campaign", grad: "from-cyan-400 to-[var(--brand)]" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <Reveal className="flex items-end justify-between gap-6 flex-wrap">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Featured work</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Recent <span className="text-gradient">launches</span></h2>
        </div>
        <Link to="/portfolio" className="rounded-full glass px-5 py-2.5 text-sm hover:text-primary">View all projects</Link>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl glass">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-80`} />
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="text-xs uppercase tracking-widest opacity-80">{p.tag}</div>
                <div className="mt-1 text-2xl font-bold">{p.title}</div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Client voices</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">Trusted by businesses that <span className="text-gradient">demand more</span></h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <figure className="h-full rounded-2xl glass p-6 flex flex-col">
              <Quote className="size-6 text-primary opacity-70" />
              <blockquote className="mt-3 text-sm leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border/60">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FounderSpotlight() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <Reveal className="lg:col-span-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-30 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden glow-ring">
              <img src={founder} alt={`Portrait of ${company.founder}, ${company.founderRole}`} className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Meet the founder</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">{company.founder}</h2>
          <p className="mt-2 text-primary font-medium">{company.founderRole}</p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            John founded Delight Tech Network with a single conviction: African businesses deserve
            technology and design at the same standard as anywhere else in the world. Under his leadership,
            the studio has grown from a one-man repair bench into a full-service technology partner trusted
            by retailers, fintechs, schools and creators across Nigeria.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            "We're not here to ship templates. We're here to make our clients look brilliant — and to make
            technology feel like the gift it was always meant to be."
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link to="/contact" className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-lg">Work with John</Link>
            <Link to="/portfolio" className="rounded-full glass px-5 py-2.5 text-sm hover:text-primary">See his work</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-brand animate-gradient" />
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="relative text-white">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to make something exceptional?</h2>
            <p className="mt-4 max-w-xl mx-auto opacity-90">Tell us about your project. We respond within one business hour.</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-white text-foreground px-6 py-3 text-sm font-semibold hover:opacity-90">Start a project</Link>
              <a href={`tel:${company.phone}`} className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium hover:bg-white/10 inline-flex items-center gap-2">
                <Phone className="size-4" /> {company.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 md:py-28">
      <Reveal className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">FAQ</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">Frequently asked <span className="text-gradient">questions</span></h2>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <Accordion type="single" collapsible className="rounded-2xl glass divide-y divide-border/60 px-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="px-4 text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="px-4 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

export function ContactBits() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <a href={`tel:${company.phone}`} className="rounded-2xl glass p-5 hover:text-primary transition">
        <Phone className="size-5 text-primary" />
        <div className="mt-3 font-semibold text-sm">Call us</div>
        <div className="text-xs text-muted-foreground mt-0.5">{company.phone}</div>
      </a>
      <a href={`mailto:${company.email}`} className="rounded-2xl glass p-5 hover:text-primary transition">
        <Mail className="size-5 text-primary" />
        <div className="mt-3 font-semibold text-sm">Email us</div>
        <div className="text-xs text-muted-foreground mt-0.5 break-all">{company.email}</div>
      </a>
      <div className="rounded-2xl glass p-5">
        <MapPin className="size-5 text-primary" />
        <div className="mt-3 font-semibold text-sm">Visit us</div>
        <div className="text-xs text-muted-foreground mt-0.5">{company.address}</div>
      </div>
    </div>
  );
}
