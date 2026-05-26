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
  socials: {
    facebook:  "https://www.facebook.com/profile.php?id=61586658868551",
    instagram: "https://www.instagram.com/john_adeagbo?igsh=em5zZ2ZrMnB1MWd2",
    tiktok:    "https://www.tiktok.com/@john.adeagbo?_r=1&_t=ZS-96dikz6ULh7",
    linkedin:  "https://www.linkedin.com/in/john-adeagbo-85182325a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
};

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  features: string[];
  pricing: string;
  basePrice: number;
  category: "Digital" | "Branding" | "Print" | "Repair";
};

export const services: Service[] = [
  { slug: "web-development", title: "Web Development", icon: Globe, category: "Digital",
    short: "Fast, scalable websites & web apps engineered for growth.",
    description: "From marketing sites to full-stack platforms — we build performant, secure, and beautifully designed digital experiences using modern frameworks.",
    features: ["Custom React & Next.js builds", "Lightning-fast performance", "SEO-optimised architecture", "Secure hosting & deployment"],
    pricing: "From ₦150,000", basePrice: 150000 },
  { slug: "cyber-security", title: "Cyber Security", icon: Shield, category: "Digital",
    short: "Protect your business with proactive defence and monitoring.",
    description: "Audit, harden and monitor your digital infrastructure with industry-grade tooling, threat intelligence, and incident response playbooks.",
    features: ["Vulnerability assessment", "Penetration testing", "24/7 threat monitoring", "Compliance & training"],
    pricing: "From ₦200,000", basePrice: 200000 },
  { slug: "ui-ux-design", title: "UI / UX Design", icon: Palette, category: "Digital",
    short: "Interfaces that feel effortless and convert users into fans.",
    description: "Research-led product design that balances clarity, brand expression and conversion. Prototypes, design systems, usability testing — end to end.",
    features: ["User research & journeys", "Interactive prototypes", "Design systems", "Accessibility audits"],
    pricing: "From ₦120,000", basePrice: 120000 },
  { slug: "graphics-design", title: "Graphics Design", icon: Brush, category: "Branding",
    short: "Crafted visuals that elevate every brand touchpoint.",
    description: "Logos, brand kits, social creatives and campaign artwork that communicate your story with precision and polish.",
    features: ["Logos & brand identity", "Social media kits", "Campaign artwork", "Editable source files"],
    pricing: "From ₦25,000", basePrice: 25000 },
  { slug: "flyer-design", title: "Flyer Design", icon: FileImage, category: "Print",
    short: "Eye-catching flyers that move people to action.",
    description: "Promotional flyers engineered for clarity, hierarchy and impact — print or digital ready.",
    features: ["Single & double-sided", "Print-ready exports", "Unlimited concepts (Pro)", "48-hour turnaround"],
    pricing: "From ₦8,000", basePrice: 8000 },
  { slug: "poster-design", title: "Poster Design", icon: ImageIcon, category: "Print",
    short: "Bold, scroll-stopping posters for events and brands.",
    description: "Large-format and digital posters with strong typography and on-brand imagery.",
    features: ["Custom illustrations", "Print-ready CMYK", "Multiple sizes", "Source files included"],
    pricing: "From ₦10,000", basePrice: 10000 },
  { slug: "banner-design", title: "Banner Design", icon: Layout, category: "Print",
    short: "Web and outdoor banners that command attention.",
    description: "From roll-ups to billboards and web headers — clean composition, sharp messaging.",
    features: ["Web & print formats", "Animated banners (web)", "Multiple revisions", "Outdoor-grade exports"],
    pricing: "From ₦12,000", basePrice: 12000 },
  { slug: "id-card-design", title: "ID Card Design", icon: IdCard, category: "Print",
    short: "Professional ID cards with secure, modern layouts.",
    description: "Bespoke ID cards for organisations, schools and events — printed on premium PVC.",
    features: ["Custom templates", "Bulk printing", "QR / barcode ready", "Premium PVC stock"],
    pricing: "From ₦1,500 / card", basePrice: 1500 },
  { slug: "souvenir-branding", title: "Souvenir Branding", icon: Gift, category: "Branding",
    short: "Memorable branded gifts for events and clients.",
    description: "End-to-end souvenir branding — sourcing, designing and producing items that leave a lasting impression.",
    features: ["Sourcing & curation", "Logo placement & engraving", "Bulk production", "Gift packaging"],
    pricing: "Custom quote", basePrice: 50000 },
  { slug: "jotters", title: "Custom Jotters", icon: NotebookPen, category: "Print",
    short: "Branded jotters that staff and clients love to use.",
    description: "Premium notebooks branded with your identity — perfect for corporate gifting and conferences.",
    features: ["Hardcover & softcover", "Custom page layouts", "Foil & spot UV finishes", "Bulk discounts"],
    pricing: "From ₦1,200 / unit", basePrice: 1200 },
  { slug: "frames", title: "Custom Frames", icon: Frame, category: "Print",
    short: "Elegant frames for awards, photos and certificates.",
    description: "Handcrafted frames in wood, metal and acrylic — sized and styled to your spec.",
    features: ["Wood, metal & acrylic", "Custom sizing", "Glass or matte finish", "Engraved nameplates"],
    pricing: "From ₦5,000", basePrice: 5000 },
  { slug: "books", title: "Book Printing", icon: BookOpen, category: "Print",
    short: "Professional book printing with crisp binding.",
    description: "Cover-to-cover design and printing for authors, businesses and institutions.",
    features: ["Soft & hardcover", "ISBN coordination", "Cover design included", "Short & long runs"],
    pricing: "Custom quote", basePrice: 80000 },
  { slug: "printed-shirts", title: "Printed Shirts", icon: Shirt, category: "Branding",
    short: "Premium shirt printing for teams, events and brands.",
    description: "DTF, screen and embroidery options on quality fabrics — built to last wash after wash.",
    features: ["DTF, screen, embroidery", "Polo, round-neck, jersey", "Bulk orders", "Colour-matched output"],
    pricing: "From ₦3,500", basePrice: 3500 },
  { slug: "printed-cups", title: "Printed Cups", icon: Coffee, category: "Branding",
    short: "Branded mugs and cups — gifts that get used daily.",
    description: "Ceramic, glass and travel mugs printed with crisp, durable graphics.",
    features: ["Sublimation print", "Magic mugs", "Bulk corporate orders", "Gift-box packaging"],
    pricing: "From ₦2,500", basePrice: 2500 },
  { slug: "gsm-repair", title: "GSM Repair", icon: Smartphone, category: "Repair",
    short: "Expert phone repairs — fast, transparent, guaranteed.",
    description: "Screen, battery, board-level and software repairs for all major smartphone brands by certified technicians.",
    features: ["Screen & battery swap", "Board-level repair", "Software & data recovery", "30-day warranty"],
    pricing: "From ₦5,000", basePrice: 5000 },
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

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Technology" | "Design" | "Business" | "Security";
  author: string;
  date: string;
  readTime: string;
  cover: string;
  content: { type: "p" | "h2" | "quote" | "li"; text: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "why-every-nigerian-business-needs-a-website-in-2026",
    title: "Why Every Nigerian Business Needs a Website in 2026",
    excerpt: "Your storefront sleeps at night. Your website doesn't. Here's why a modern web presence is now the cheapest sales rep on your team.",
    category: "Business",
    author: "John O. Adeagbo",
    date: "May 12, 2026",
    readTime: "6 min read",
    cover: "linear-gradient(135deg,#3B82F6,#7C3AED)",
    content: [
      { type: "p", text: "Five years ago, a Nigerian business could survive on Instagram DMs and a WhatsApp catalogue. In 2026, that's no longer enough — customers expect instant proof that you exist, that you're trustworthy, and that you can handle their order without the back-and-forth." },
      { type: "h2", text: "The trust gap" },
      { type: "p", text: "When a potential customer Googles your brand and finds nothing, they assume one of two things: either you're new, or you're hiding. A clean, fast website closes that trust gap in less than three seconds." },
      { type: "h2", text: "Speed wins" },
      { type: "p", text: "Modern frameworks like React and Next.js make it possible to ship sites that load in under a second on a 3G connection. That speed translates directly into conversions — Google's own data shows a 32% bounce-rate increase when load time goes from 1s to 3s." },
      { type: "quote", text: "A website isn't a brochure anymore. It's your busiest, hardest-working employee." },
    ],
  },
  {
    slug: "the-anatomy-of-a-premium-brand-identity",
    title: "The Anatomy of a Premium Brand Identity",
    excerpt: "Premium isn't a colour palette. It's a system. We break down the five layers every world-class brand gets right.",
    category: "Design",
    author: "John O. Adeagbo",
    date: "April 28, 2026",
    readTime: "8 min read",
    cover: "linear-gradient(135deg,#06B6D4,#A855F7)",
    content: [
      { type: "p", text: "Walk into any luxury store and you'll feel the brand before you see a single product. That feeling is engineered — and it's the result of five overlapping design layers working in concert." },
      { type: "h2", text: "Layer 1: Typography" },
      { type: "p", text: "Type carries more emotional weight than any other design element. The pairing of a display font with a body font sets the tempo of every page, every poster, every business card." },
      { type: "h2", text: "Layer 2: Colour rhythm" },
      { type: "p", text: "Premium brands rarely use more than three core colours, and they almost never use them at full saturation. Restraint reads as confidence." },
    ],
  },
  {
    slug: "cyber-security-for-small-african-businesses",
    title: "Cyber Security for Small African Businesses",
    excerpt: "You don't need a million-naira SOC. You need five habits — and we'll walk you through every one of them.",
    category: "Security",
    author: "John O. Adeagbo",
    date: "April 10, 2026",
    readTime: "7 min read",
    cover: "linear-gradient(135deg,#0EA5E9,#1E3A8A)",
    content: [
      { type: "p", text: "Most SME attacks aren't sophisticated. They're opportunistic — weak passwords, reused credentials, missing 2FA. Fixing the basics blocks more than 90% of attempts." },
      { type: "h2", text: "1. Enforce 2FA everywhere" },
      { type: "p", text: "Email, banking, hosting, social. If it has a login, it gets a second factor. Authenticator apps beat SMS every time." },
      { type: "h2", text: "2. Back up like it's already broken" },
      { type: "p", text: "Daily, automatic, off-site, and tested. A backup you've never restored isn't a backup — it's wishful thinking." },
    ],
  },
  {
    slug: "ai-and-the-future-of-creative-studios",
    title: "AI and the Future of Creative Studios",
    excerpt: "AI won't replace designers. It will replace designers who refuse to use it. Here's how we're integrating it without losing craft.",
    category: "Technology",
    author: "John O. Adeagbo",
    date: "March 22, 2026",
    readTime: "5 min read",
    cover: "linear-gradient(135deg,#A855F7,#EC4899)",
    content: [
      { type: "p", text: "Every studio we know is having the same conversation: how do we use AI tools without turning our craft into a commodity?" },
      { type: "h2", text: "Use AI for breadth, humans for depth" },
      { type: "p", text: "AI shines at generating 50 directions in five minutes. Humans shine at picking the one that actually moves the brand forward. The combination is unbeatable." },
    ],
  },
];
