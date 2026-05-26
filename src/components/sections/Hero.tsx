import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Cpu, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-32 -left-24 size-[480px] rounded-full bg-gradient-brand opacity-30 blur-3xl animate-float-slow" />
        <div
          className="absolute top-40 -right-24 size-[420px] rounded-full bg-[var(--brand-2)] opacity-25 blur-3xl animate-float-slow"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 size-[360px] rounded-full bg-[var(--brand)] opacity-20 blur-3xl animate-float-slow"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-12 md:pt-20 pb-24 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs"
        >
          <Sparkles className="size-3.5 text-primary" />
          <span className="text-muted-foreground">
            Premium tech & creative studio · Ibadan, Nigeria
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 text-4xl md:text-7xl font-bold leading-[1.05] tracking-tight"
        >
          Lighting up businesses <br className="hidden md:block" />
          <span className="text-gradient animate-gradient">through technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          We design, build and maintain world-class digital products, branding and tech repair
          solutions for ambitious brands across Africa and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-xl glow-ring hover:opacity-90 transition"
          >
            Start a Project <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:text-primary transition"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* floating tech badges */}
        <div className="mt-16 grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
          {[
            { Icon: Cpu, label: "Modern Stack" },
            { Icon: ShieldCheck, label: "Enterprise Secure" },
            { Icon: Zap, label: "Lightning Fast" },
          ].map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-2xl px-4 py-4 md:py-5 flex flex-col items-center gap-2"
            >
              <Icon className="size-5 text-primary" />
              <span className="text-xs md:text-sm text-muted-foreground">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
