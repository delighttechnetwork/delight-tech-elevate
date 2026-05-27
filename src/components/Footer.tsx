import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Music2 } from "lucide-react";
import { company, services } from "@/lib/site";
import logo from "@/assets/logo.jpg";

const socialLinks = [
  { icon: Facebook, href: company.socials.facebook, label: "Facebook" },
  { icon: Instagram, href: company.socials.instagram, label: "Instagram" },
  { icon: Music2, href: company.socials.tiktok, label: "TikTok" },
  { icon: Linkedin, href: company.socials.linkedin, label: "LinkedIn" },
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
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {company.tagline}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            A Nigerian technology company crafting world-class digital, branding and repair
            experiences for businesses and individuals.
          </p>
          <div className="mt-5 flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-9 w-9 place-items-center rounded-full glass hover:text-primary transition"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="hover:text-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-foreground">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-foreground">
                All Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="size-4 shrink-0 mt-0.5 text-primary" />
              {company.address}
            </li>
            <li className="flex gap-2">
              <Phone className="size-4 shrink-0 mt-0.5 text-primary" />
              {company.phone}
            </li>
            <li className="flex gap-2">
              <Mail className="size-4 shrink-0 mt-0.5 text-primary" />
              {company.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Designed & engineered in Ibadan, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
