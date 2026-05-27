import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Check, MessageSquare, ArrowRight } from "lucide-react";
import { services, company } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

const calculatorConfig = {
  services: services.map((s) => ({
    id: s.slug,
    name: s.title,
    basePrice: parseInt(s.pricing.replace(/[^0-9]/g, "")) || 0,
    category: s.category,
    features: s.features.map((f) => ({
      name: f,
      price: Math.floor(Math.random() * 5000) + 2000, // Random mock feature price
    })),
  })),
  scopes: [
    { id: "basic", name: "Basic", multiplier: 1, desc: "Personal or small project" },
    { id: "standard", name: "Standard", multiplier: 1.5, desc: "Professional business use" },
    { id: "premium", name: "Premium", multiplier: 2.5, desc: "Enterprise-grade solution" },
  ],
};

export function ServiceCalculator() {
  const [selectedServiceId, setSelectedServiceId] = React.useState(calculatorConfig.services[0].id);
  const [selectedScopeId, setSelectedScopeId] = React.useState(calculatorConfig.scopes[0].id);
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>([]);

  const selectedService = calculatorConfig.services.find((s) => s.id === selectedServiceId)!;
  const selectedScope = calculatorConfig.scopes.find((s) => s.id === selectedScopeId)!;

  const calculateTotal = () => {
    let total = selectedService.basePrice * selectedScope.multiplier;
    selectedFeatures.forEach((fName) => {
      const feature = selectedService.features.find((feat) => feat.name === fName);
      if (feature) total += feature.price;
    });
    return total;
  };

  const total = calculateTotal();

  const handleWhatsApp = () => {
    const message = `Hello Delight Tech! I used your Service Calculator and I'm interested in:

*Service:* ${selectedService.name}
*Scope:* ${selectedScope.name}
*Features:* ${selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "Base Features"}
*Estimated Total:* ₦${total.toLocaleString()}

I'd like to get a detailed quote for my project.`;

    window.open(
      `https://wa.me/${company.whatsappIntl}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Calculator className="size-3" /> Interactive Tool
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Estimate Your <span className="text-gradient">Project Cost</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Select your service requirements below for an instant ballpark estimate. Ready to start?
            One click to send it to our team on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <Card className="lg:col-span-8 p-6 md:p-8 glass border-none shadow-2xl">
            <div className="space-y-10">
              {/* Service Selection */}
              <div>
                <Label className="text-base font-bold mb-4 block">1. Select Service Type</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {calculatorConfig.services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSelectedServiceId(s.id);
                        setSelectedFeatures([]);
                      }}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        selectedServiceId === s.id
                          ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                          : "border-border/40 hover:border-border hover:bg-muted/50"
                      }`}
                    >
                      <div className="font-semibold text-sm">{s.name}</div>
                      <div className="text-[10px] text-muted-foreground uppercase mt-1">
                        {s.category}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope Selection */}
              <div>
                <Label className="text-base font-bold mb-4 block">2. Project Scope</Label>
                <RadioGroup
                  value={selectedScopeId}
                  onValueChange={setSelectedScopeId}
                  className="grid md:grid-cols-3 gap-4"
                >
                  {calculatorConfig.scopes.map((scope) => (
                    <div key={scope.id}>
                      <RadioGroupItem value={scope.id} id={scope.id} className="sr-only" />
                      <Label
                        htmlFor={scope.id}
                        className={`flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedScopeId === scope.id
                            ? "border-primary bg-primary/5"
                            : "border-border/40 hover:border-border"
                        }`}
                      >
                        <span className="font-bold">{scope.name}</span>
                        <span className="text-xs text-muted-foreground mt-1">{scope.desc}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Features */}
              <div>
                <Label className="text-base font-bold mb-4 block">3. Add Extra Features</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 border border-border/40"
                    >
                      <Checkbox
                        id={feature.name}
                        checked={selectedFeatures.includes(feature.name)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedFeatures([...selectedFeatures, feature.name]);
                          } else {
                            setSelectedFeatures(selectedFeatures.filter((f) => f !== feature.name));
                          }
                        }}
                      />
                      <label
                        htmlFor={feature.name}
                        className="text-sm font-medium leading-none cursor-pointer flex-1"
                      >
                        {feature.name}
                      </label>
                      <span className="text-xs font-mono text-primary">
                        +₦{feature.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="lg:col-span-4 sticky top-24">
            <Card className="p-6 md:p-8 bg-gradient-brand text-white border-none shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Calculator size={120} />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold opacity-80 uppercase tracking-widest">
                  Estimated Total
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tighter">
                    ₦{total.toLocaleString()}
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4" /> Professional Execution
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4" /> 30-Day Support Guarantee
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4" /> Custom Strategy Call
                  </div>
                </div>

                <div className="mt-10 space-y-3">
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-white text-primary hover:bg-white/90 font-bold h-14 rounded-full shadow-lg"
                  >
                    <MessageSquare className="mr-2 size-5" /> Send to WhatsApp
                  </Button>
                  <p className="text-[10px] text-center opacity-70 uppercase tracking-tighter">
                    Price is a professional estimate. Final quote may vary based on exact
                    requirements.
                  </p>
                </div>
              </div>
            </Card>

            <div className="mt-6 p-6 rounded-2xl border border-dashed border-border flex items-start gap-4">
              <div className="size-10 rounded-full bg-muted grid place-items-center shrink-0">
                <ArrowRight className="size-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Need something unique?</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Our team handles complex enterprise projects. Contact us for a bespoke consulting
                  session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
