import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, MessageCircle, Sparkles } from "lucide-react";
import { services, company } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const scopeOptions = [
  { value: "starter",    label: "Starter — small / single deliverable",     mult: 1.0 },
  { value: "standard",   label: "Standard — multi-deliverable",             mult: 1.6 },
  { value: "advanced",   label: "Advanced — complex scope",                 mult: 2.4 },
  { value: "enterprise", label: "Enterprise — large scale / multi-team",    mult: 3.5 },
];

const timelineOptions = [
  { value: "flex",    label: "Flexible (4+ weeks)",   mult: 1.0 },
  { value: "normal",  label: "Standard (2–3 weeks)",  mult: 1.15 },
  { value: "rush",    label: "Rush (1 week)",         mult: 1.35 },
  { value: "urgent",  label: "Urgent (48 hours)",     mult: 1.6 },
];

const featureOptions = [
  { id: "branding",   label: "Brand identity & assets",     add: 40000 },
  { id: "copy",       label: "Professional copywriting",    add: 35000 },
  { id: "seo",        label: "SEO optimisation",            add: 50000 },
  { id: "analytics",  label: "Analytics & tracking setup",  add: 25000 },
  { id: "maintenance",label: "12-month maintenance",        add: 90000 },
  { id: "training",   label: "Team training session",       add: 30000 },
];

const formatNaira = (n: number) =>
  "₦" + Math.round(n).toLocaleString("en-NG");

export function ServiceCalculator() {
  const [serviceSlug, setServiceSlug] = useState(services[0].slug);
  const [scope, setScope]       = useState("standard");
  const [timeline, setTimeline] = useState("normal");
  const [quantity, setQuantity] = useState(1);
  const [features, setFeatures] = useState<string[]>(["branding", "seo"]);
  const [name, setName]   = useState("");
  const [notes, setNotes] = useState("");

  const service     = services.find((s) => s.slug === serviceSlug)!;
  const scopeOpt    = scopeOptions.find((s) => s.value === scope)!;
  const timelineOpt = timelineOptions.find((t) => t.value === timeline)!;

  const { low, high } = useMemo(() => {
    const qty       = Math.max(1, Number(quantity) || 1);
    const featAdd   = featureOptions
      .filter((f) => features.includes(f.id))
      .reduce((acc, f) => acc + f.add, 0);
    const base      = service.basePrice * qty * scopeOpt.mult * timelineOpt.mult;
    const subtotal  = base + featAdd;
    return { low: subtotal, high: subtotal * 1.35 };
  }, [service, scope, timeline, quantity, features, scopeOpt, timelineOpt]);

  const toggleFeature = (id: string) =>
    setFeatures((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const buildMessage = () => {
    const chosen = featureOptions.filter((f) => features.includes(f.id)).map((f) => `• ${f.label}`).join("\n");
    return [
      `*New Quote Request — ${company.name}*`,
      ``,
      `*Name:* ${name || "—"}`,
      `*Service:* ${service.title}`,
      `*Scope:* ${scopeOpt.label}`,
      `*Timeline:* ${timelineOpt.label}`,
      `*Quantity / Units:* ${quantity}`,
      ``,
      `*Add-ons:*`,
      chosen || "• None",
      ``,
      `*Estimated range:* ${formatNaira(low)} – ${formatNaira(high)}`,
      ``,
      `*Notes:*`,
      notes || "—",
      ``,
      `Please send a detailed quote. Thank you!`,
    ].join("\n");
  };

  const sendToWhatsApp = () => {
    const url = `https://wa.me/${company.whatsappIntl}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="calculator" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-primary inline-flex items-center gap-2 justify-center">
          <Calculator className="size-3.5" /> Instant Estimate
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">
          Build your project <span className="text-gradient">in real time</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Pick a service, scope and timeline. We'll give you a transparent range — then send your brief
          straight to our WhatsApp for a detailed quote.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-3xl glass p-6 md:p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Service</Label>
                <Select value={serviceSlug} onValueChange={setServiceSlug}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Quantity / Units</Label>
                <Input type="number" min={1} value={quantity}
                       onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))} />
              </div>
              <div className="space-y-1.5">
                <Label>Project scope</Label>
                <Select value={scope} onValueChange={setScope}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {scopeOptions.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Timeline</Label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {timelineOptions.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Desired features & add-ons</Label>
              <div className="grid sm:grid-cols-2 gap-2">
                {featureOptions.map((f) => {
                  const checked = features.includes(f.id);
                  return (
                    <button
                      type="button"
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                        checked
                          ? "border-primary/60 bg-primary/10"
                          : "border-border/60 hover:border-primary/40"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Checkbox checked={checked} className="pointer-events-none" />
                        {f.label}
                      </span>
                      <span className="text-xs text-muted-foreground">+{formatNaira(f.add)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="calc-name">Your name (optional)</Label>
                <Input id="calc-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Adeyemi" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="calc-notes">Anything else we should know?</Label>
                <Textarea id="calc-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)}
                          placeholder="Goals, references, links, target launch date..." />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              layout
              className="sticky top-28 rounded-3xl p-[1.5px] bg-gradient-brand shadow-2xl"
            >
              <div className="rounded-[calc(theme(borderRadius.3xl)-1.5px)] bg-background p-6 md:p-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                  <Sparkles className="size-3.5" /> Live estimate
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{service.title}</div>
                <div className="mt-2 text-3xl md:text-4xl font-bold text-gradient">
                  {formatNaira(low)} <span className="text-muted-foreground text-base font-medium">–</span> {formatNaira(high)}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Indicative range based on your selections. Final quote depends on exact scope.
                </p>

                <ul className="mt-5 space-y-2 text-sm">
                  <li className="flex justify-between"><span className="text-muted-foreground">Scope</span><span>{scopeOpt.label.split(" — ")[0]}</span></li>
                  <li className="flex justify-between"><span className="text-muted-foreground">Timeline</span><span>{timelineOpt.label.split(" (")[0]}</span></li>
                  <li className="flex justify-between"><span className="text-muted-foreground">Quantity</span><span>{quantity}</span></li>
                  <li className="flex justify-between"><span className="text-muted-foreground">Add-ons</span><span>{features.length}</span></li>
                </ul>

                <button
                  onClick={sendToWhatsApp}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3.5 text-sm font-semibold shadow-lg hover:opacity-95 transition"
                >
                  <MessageCircle className="size-4" /> Request detailed quote on WhatsApp
                </button>
                <p className="mt-3 text-[11px] text-center text-muted-foreground">
                  Opens WhatsApp with your brief pre-filled — no data leaves your device.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
