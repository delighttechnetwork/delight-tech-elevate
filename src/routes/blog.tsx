import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/sections/Common";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — Delight Tech Network" },
      {
        name: "description",
        content: "Stay updated with the latest in technology, design, and branding insights.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-16 pb-24 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Our blog</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">
            Insights from <span className="text-gradient">the network</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Thought leadership, engineering updates, and branding strategies for the modern African
            enterprise.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col glass rounded-3xl overflow-hidden hover:ring-2 hover:ring-primary/20 transition-all"
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-brand opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto pt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <div className="size-6 rounded-full bg-primary/10 grid place-items-center">
                    <User className="size-3 text-primary" />
                  </div>
                  {post.author}
                </div>
                <Link
                  to="/blog"
                  className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <CtaBanner />
    </>
  );
}
