import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { company } from "@/lib/site";

export function LoadingScreen({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0b1020]"
        >
          <div className="relative">
            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-8 bg-primary/30 blur-3xl rounded-full"
            />

            {/* Static Logo Background */}
            <div className="relative size-24 md:size-32 rounded-3xl overflow-hidden shadow-2xl border border-white/10 opacity-50 grayscale">
              <img src={logo} alt="" className="size-full object-cover" />
            </div>

            {/* Rotating Bulb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                  filter: ["drop-shadow(0 0 0px #fff)", "drop-shadow(0 0 20px #fff)", "drop-shadow(0 0 0px #fff)"]
                }}
                transition={{
                  rotate: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  filter: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                }}
                className="text-white"
              >
                <Lightbulb size={48} fill="currentColor" className="text-primary" />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="text-white font-bold tracking-widest uppercase text-xs">
              {company.name}
            </div>
            <div className="mt-2 flex gap-1 justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="size-1 rounded-full bg-primary"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
