import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { company } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LiveChat() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      type: "bot" as const,
      text: `Hello! 👋 Welcome to ${company.name}. How can we help you today?`,
    },
  ]);
  const [inputValue, setInputValue] = React.useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), type: "user" as const, text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simple auto-reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "bot" as const,
          text: "Thanks for your message! Our team is currently offline, but you can connect directly with us on WhatsApp for a faster response.",
        },
      ]);
    }, 1000);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${company.whatsappIntl}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-card glass border border-border shadow-2xl rounded-3xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-brand text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-white/20 grid place-items-center backdrop-blur-sm">
                  <Bot className="size-5" />
                </div>
                <div>
                  <div className="font-bold text-sm">Delight Support</div>
                  <div className="text-[10px] opacity-80 uppercase tracking-tighter">
                    Always active
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="size-8 rounded-full hover:bg-white/10 grid place-items-center transition"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted text-foreground rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-4 border-t border-border/50 bg-muted/30">
              <form onSubmit={handleSend} className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="rounded-full bg-background border-border/50"
                />
                <Button type="submit" size="icon" className="rounded-full shrink-0">
                  <Send className="size-4" />
                </Button>
              </form>
              <button
                onClick={openWhatsApp}
                className="mt-3 w-full text-center text-[10px] text-muted-foreground hover:text-primary transition uppercase tracking-widest font-bold"
              >
                Or chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="size-14 rounded-full bg-gradient-brand text-white shadow-lg grid place-items-center relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="size-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="size-6" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute top-0 right-0 size-3 bg-red-500 border-2 border-white rounded-full animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
