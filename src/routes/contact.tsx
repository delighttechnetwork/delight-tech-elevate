import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { company, services } from "@/lib/site";
import { FAQSection } from "@/components/sections/Common";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Delight Tech Network" },
      {
        name: "description",
        content:
          "Get in touch with Delight Tech Network in Ibadan, Nigeria. Call, WhatsApp, email or send a project brief.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll reply within one business hour.");
    }, 900);
  };

  const mapQuery = encodeURIComponent("Heritage Mall, Dugbe, Ibadan, Oyo State, Nigeria");

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-12 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">
            Let's build <span className="text-gradient">something great</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Tell us about your project, your timeline, and your goals. We reply fast.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-3xl glass p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" placeholder="+234..." />
              </div>
              <div className="space-y-1.5">
                <Label>Service</Label>
                <Select name="service">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.slug} value={s.slug}>
                        {s.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Project brief</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project, timelines, and budget range..."
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={submitting}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white shadow-xl glow-ring disabled:opacity-60"
            >
              {submitting ? (
                "Sending..."
              ) : (
                <>
                  Send message <Send className="size-4" />
                </>
              )}
            </motion.button>
            <p className="text-xs text-muted-foreground text-center">
              We typically respond within one business hour.
            </p>
          </form>
        </Reveal>

        <div className="lg:col-span-2 space-y-4">
          <Reveal>
            <div className="rounded-3xl glass p-6">
              <h3 className="font-semibold">Office</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="size-4 mt-0.5 text-primary shrink-0" />
                  {company.address}
                </li>
                <li className="flex gap-3">
                  <Phone className="size-4 mt-0.5 text-primary shrink-0" />
                  {company.phone}
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="size-4 mt-0.5 text-primary shrink-0" />
                  WhatsApp: {company.whatsapp}
                </li>
                <li className="flex gap-3">
                  <Mail className="size-4 mt-0.5 text-primary shrink-0" />
                  {company.email}
                </li>
              </ul>
              <div className="mt-5 flex gap-2">
                <a
                  href={`https://wa.me/${company.whatsappIntl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-2.5 text-sm font-medium"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
                <a
                  href={`tel:${company.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-medium hover:text-primary"
                >
                  <Phone className="size-4" /> Call
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl glass p-6">
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                <h3 className="font-semibold">Business hours</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {company.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between border-b border-border/60 pb-2 last:border-0"
                  >
                    <span className="text-muted-foreground">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-12">
        <Reveal>
          <div className="rounded-3xl overflow-hidden glass">
            <iframe
              title="Office location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      <FAQSection />
    </>
  );
}
