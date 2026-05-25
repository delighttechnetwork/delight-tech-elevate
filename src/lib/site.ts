import {
  Globe, Shield, Palette, Brush, FileImage, Image as ImageIcon, Layout,
  IdCard, Gift, NotebookPen, Frame, BookOpen, Shirt, Coffee, Smartphone,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Delight Tech Network",
  tagline: "Lighting Through Technology",
  founder: "John O. Adeagbo",
  founderRole: "Founder & CEO",
  phone: "09038070539",
  whatsapp: "07089627177",
  whatsappIntl: "2347089627177",
  email: "delighttechnetwork@gmail.com",
  address: "H34, Heritage Mall, Coacoa House, Dugbe, Ibadan, Oyo State, Nigeria",
  hours: [
    { day: "Mon – Fri", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday",  time: "10:00 AM – 4:00 PM" },
    { day: "Sunday",    time: "Closed" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  features: string[];
  pricing: string;
  category: "Digital" | "Branding" | "Print" | "Repair";
};

export const services: Service[] = [
  { slug: "web-development", title: "Web Development", icon: Globe, category: "Digital",
    short: "Fast, scalable websites & web apps engineered for growth.",
    description: "From marketing sites to full-stack platforms — we build performant, secure, and beautifully designed digital experiences using modern frameworks.",
    features: ["Custom React & Next.js builds", "Lightning-fast performance", "SEO-optimised architecture", "Secure hosting & deployment"],
    pricing: "From ₦150,000" },
  { slug: "cyber-security", title: "Cyber Security", icon: Shield, category: "Digital",
    short: "Protect your business with proactive defence and monitoring.",
    description: "Audit, harden and monitor your digital infrastructure with industry-grade tooling, threat intelligence, and incident response playbooks.",
    features: ["Vulnerability assessment", "Penetration testing", "24/7 threat monitoring", "Compliance & training"],
    pricing: "From ₦200,000" },
  { slug: "ui-ux-design", title: "UI / UX Design", icon: Palette, category: "Digital",
    short: "Interfaces that feel effortless and convert users into fans.",
    description: "Research-led product design that balances clarity, brand expression and conversion. Prototypes, design systems, usability testing — end to end.",
    features: ["User research & journeys", "Interactive prototypes", "Design systems", "Accessibility audits"],
    pricing: "From ₦120,000" },
  { slug: "graphics-design", title: "Graphics Design", icon: Brush, category: "Branding",
    short: "Crafted visuals that elevate every brand touchpoint.",
    description: "Logos, brand kits, social creatives and campaign artwork that communicate your story with precision and polish.",
    features: ["Logos & brand identity", "Social media kits", "Campaign artwork", "Editable source files"],
    pricing: "From ₦25,000" },
  { slug: "flyer-design", title: "Flyer Design", icon: FileImage, category: "Print",
    short: "Eye-catching flyers that move people to action.",
    description: "Promotional flyers engineered for clarity, hierarchy and impact — print or digital ready.",
    features: ["Single & double-sided", "Print-ready exports", "Unlimited concepts (Pro)", "48-hour turnaround"],
    pricing: "From ₦8,000" },
  { slug: "poster-design", title: "Poster Design", icon: ImageIcon, category: "Print",
    short: "Bold, scroll-stopping posters for events and brands.",
    description: "Large-format and digital posters with strong typography and on-brand imagery.",
    features: ["Custom illustrations", "Print-ready CMYK", "Multiple sizes", "Source files included"],
    pricing: "From ₦10,000" },
  { slug: "banner-design", title: "Banner Design", icon: Layout, category: "Print",
    short: "Web and outdoor banners that command attention.",
    description: "From roll-ups to billboards and web headers — clean composition, sharp messaging.",
    features: ["Web & print formats", "Animated banners (web)", "Multiple revisions", "Outdoor-grade exports"],
    pricing: "From ₦12,000" },
  { slug: "id-card-design", title: "ID Card Design", icon: IdCard, category: "Print",
    short: "Professional ID cards with secure, modern layouts.",
    description: "Bespoke ID cards for organisations, schools and events — printed on premium PVC.",
    features: ["Custom templates", "Bulk printing", "QR / barcode ready", "Premium PVC stock"],
    pricing: "From ₦1,500 / card" },
  { slug: "souvenir-branding", title: "Souvenir Branding", icon: Gift, category: "Branding",
    short: "Memorable branded gifts for events and clients.",
    description: "End-to-end souvenir branding — sourcing, designing and producing items that leave a lasting impression.",
    features: ["Sourcing & curation", "Logo placement & engraving", "Bulk production", "Gift packaging"],
    pricing: "Custom quote" },
  { slug: "jotters", title: "Custom Jotters", icon: NotebookPen, category: "Print",
    short: "Branded jotters that staff and clients love to use.",
    description: "Premium notebooks branded with your identity — perfect for corporate gifting and conferences.",
    features: ["Hardcover & softcover", "Custom page layouts", "Foil & spot UV finishes", "Bulk discounts"],
    pricing: "From ₦1,200 / unit" },
  { slug: "frames", title: "Custom Frames", icon: Frame, category: "Print",
    short: "Elegant frames for awards, photos and certificates.",
    description: "Handcrafted frames in wood, metal and acrylic — sized and styled to your spec.",
    features: ["Wood, metal & acrylic", "Custom sizing", "Glass or matte finish", "Engraved nameplates"],
    pricing: "From ₦5,000" },
  { slug: "books", title: "Book Printing", icon: BookOpen, category: "Print",
    short: "Professional book printing with crisp binding.",
    description: "Cover-to-cover design and printing for authors, businesses and institutions.",
    features: ["Soft & hardcover", "ISBN coordination", "Cover design included", "Short & long runs"],
    pricing: "Custom quote" },
  { slug: "printed-shirts", title: "Printed Shirts", icon: Shirt, category: "Branding",
    short: "Premium shirt printing for teams, events and brands.",
    description: "DTF, screen and embroidery options on quality fabrics — built to last wash after wash.",
    features: ["DTF, screen, embroidery", "Polo, round-neck, jersey", "Bulk orders", "Colour-matched output"],
    pricing: "From ₦3,500" },
  { slug: "printed-cups", title: "Printed Cups", icon: Coffee, category: "Branding",
    short: "Branded mugs and cups — gifts that get used daily.",
    description: "Ceramic, glass and travel mugs printed with crisp, durable graphics.",
    features: ["Sublimation print", "Magic mugs", "Bulk corporate orders", "Gift-box packaging"],
    pricing: "From ₦2,500" },
  { slug: "gsm-repair", title: "GSM Repair", icon: Smartphone, category: "Repair",
    short: "Expert phone repairs — fast, transparent, guaranteed.",
    description: "Screen, battery, board-level and software repairs for all major smartphone brands by certified technicians.",
    features: ["Screen & battery swap", "Board-level repair", "Software & data recovery", "30-day warranty"],
    pricing: "From ₦5,000" },
];

export type Project = {
  title: string;
  category: "Web" | "Branding" | "Print" | "Repair";
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  { title: "Heritage Mall Directory Web App", category: "Web", description: "A high-traffic directory and event platform for one of Ibadan's flagship retail destinations.", tags: ["React", "Next.js", "CMS"] },
  { title: "OyoFresh E-commerce", category: "Web", description: "Conversion-focused storefront with Paystack integration and inventory management.", tags: ["Storefront", "Payments"] },
  { title: "Adeagbo Legal Identity", category: "Branding", description: "Full visual identity refresh including logo, stationery and digital templates.", tags: ["Logo", "Stationery"] },
  { title: "TechFest Ibadan Posters", category: "Print", description: "Campaign poster series for a 3-day developer conference, printed across the city.", tags: ["Poster", "Campaign"] },
  { title: "Coacoa Souvenir Collection", category: "Branding", description: "Curated branded souvenirs for a corporate end-of-year gifting programme.", tags: ["Souvenir", "Gifting"] },
  { title: "Heritage ID Programme", category: "Print", description: "Staff and tenant ID cards for over 400 individuals across the mall complex.", tags: ["ID Card", "Bulk"] },
  { title: "iPhone Board-Level Recovery", category: "Repair", description: "Specialist micro-soldering recovery of customer devices considered unrepairable.", tags: ["GSM", "Board-level"] },
  { title: "Greenfield Schools Yearbook", category: "Print", description: "Full design, layout and print of a 220-page commemorative yearbook.", tags: ["Book", "Print"] },
  { title: "FinSecure Audit", category: "Web", description: "Penetration test and hardening for a fintech onboarding portal.", tags: ["Security", "Audit"] },
];

export const testimonials = [
  { name: "Mrs. Folake Ogundipe", role: "Operations Lead, Heritage Mall", quote: "Delight Tech delivered exactly what we needed — on time, beautifully designed, and supported every step. Genuine partners." },
  { name: "Engr. Tunde Bakare", role: "MD, OyoFresh Foods", quote: "Our online sales doubled in the first three months after launch. The team understood our customer better than we did." },
  { name: "Pastor Samuel Idowu", role: "Founder, Greenfield Schools", quote: "From the yearbook to our staff IDs, every detail was crafted with care. They are now our default tech partner." },
  { name: "Adaobi N.", role: "Brand Manager, Coacoa", quote: "The souvenirs were a hit at our annual gala. Premium quality, on-brand, and delivered ahead of schedule." },
];

export const faqs = [
  { q: "How quickly can a project start?", a: "Most projects begin within 48 hours of brief approval. Urgent print jobs can start same day." },
  { q: "Do you work with clients outside Ibadan?", a: "Yes — we serve clients across Nigeria and internationally. Digital projects are fully remote-friendly." },
  { q: "What payment methods do you accept?", a: "Bank transfer, Paystack, Flutterwave, and corporate invoicing for long-term clients." },
  { q: "Do you offer maintenance after launch?", a: "Yes. Every web project comes with 30 days of free support, with optional monthly retainers afterwards." },
  { q: "Can you handle bulk print orders?", a: "Absolutely. We regularly produce hundreds to thousands of print units with consistent quality." },
];

export const stats = [
  { label: "Projects Delivered", value: 240, suffix: "+" },
  { label: "Happy Clients",      value: 180, suffix: "+" },
  { label: "Years of Excellence", value: 6,  suffix: "" },
  { label: "Cities Served",       value: 12, suffix: "" },
];
