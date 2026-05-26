import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { company } from "@/lib/site";
import { useRouterState } from "@tanstack/react-router";
import { LiveChat } from "./LiveChat";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-brand"
    />
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-5 z-40 grid h-11 w-11 place-items-center rounded-full glass shadow-lg hover:text-primary"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
      <a href={`https://wa.me/${company.whatsappIntl}`} target="_blank" rel="noreferrer"
         aria-label="WhatsApp"
         className="group grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition">
        <MessageCircle className="size-5" />
      </a>
      <a href={`tel:${company.phone}`} aria-label="Call"
         className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-xl hover:scale-105 transition">
        <Phone className="size-5" />
      </a>
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={path}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="pt-24"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
      <FloatingContact />
      <LiveChat />
    </>
  );
}
