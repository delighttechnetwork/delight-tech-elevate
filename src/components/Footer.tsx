import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { company, services } from "@/lib/site";
import logo from "@/assets/logo.jpg";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.5 6.7a5.7 5.7 0 0 1-3.4-1.1 5.7 5.7 0 0 1-2.2-3.6h-3.3v12.5a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12V8.6a5.93 5.93 0 0 0-.78-.05 5.95 5.95 0 1 0 5.95 5.95V8.94a8.95 8.95 0 0 0 5.55 1.9V7.55c0-.28-.02-.57-.06-.85Z"/>
    </svg>
  );
}

const socialLinks = [
  { href: company.socials.facebook,  Icon: Facebook,    label: "Facebook"  },
  { href: company.socials.instagram, Icon: Instagram,   label: "Instagram" },
  { href: company.socials.tiktok,    Icon: TikTokIcon,  label: "TikTok"    },
  { href: company.socials.linkedin,  Icon: Linkedin,    label: "LinkedIn"  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" className="h-10 w-10 rounded-lg object-cover" />
            <div>
              <div className="font-display font-bold">{company.name}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{company.tagline}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            A Nigerian technology company crafting world-class digital, branding and repair experiences for businesses and individuals.
          </p>
          <div className="mt-5 flex gap-2">
            {socialLinks.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                 className="grid h-9 w-9 place-items-center rounded-full glass hover:text-primary transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link to="/services" className="hover:text-foreground">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-foreground">All Services</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 mt-0.5 text-primary" />{company.address}</li>
            <li className="flex gap-2"><Phone className="size-4 shrink-0 mt-0.5 text-primary" />{company.phone}</li>
            <li className="flex gap-2"><Mail className="size-4 shrink-0 mt-0.5 text-primary" />{company.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Designed & engineered in Ibadan, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
