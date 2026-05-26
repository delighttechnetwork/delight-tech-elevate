import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { company } from "@/lib/site";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 ${scrolled ? "glass shadow-lg" : ""}`}>
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Delight Tech Network logo" className="h-9 w-9 rounded-lg object-cover" />
            <div className="leading-tight">
              <div className="font-display font-bold text-base">{company.name}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{company.tagline}</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
              return (
                <Link key={l.to} to={l.to}
                  className={`relative px-4 py-2 text-sm rounded-full transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {active && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-secondary" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/contact" className="hidden md:inline-flex items-center rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-lg hover:opacity-90 transition">
              Get a Quote
            </Link>
            <button className="md:hidden grid h-9 w-9 place-items-center rounded-full glass" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 rounded-2xl glass p-3 flex flex-col"
          >
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="px-4 py-3 rounded-xl text-sm hover:bg-secondary">{l.label}</Link>
            ))}
            <Link to="/contact" className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-brand px-4 py-3 text-sm font-medium text-white">
              Get a Quote
            </Link>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
