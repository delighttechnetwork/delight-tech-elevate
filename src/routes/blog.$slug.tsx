import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { posts, company } from "@/lib/site";
import { CtaBanner } from "@/components/sections/Common";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article — Delight Tech Network" }] };
    return {
      meta: [
        { title: `${post.title} — ${company.name}` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "article:author", content: post.author },
        { property: "article:published_time", content: post.date },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl text-center py-32 px-4">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <p className="mt-3 text-muted-foreground">The article you're looking for has been moved or removed.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-5 py-2.5 text-sm">
        <ArrowLeft className="size-4" /> Back to Insights
      </Link>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4">
        <Reveal>
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-3.5" /> All Insights
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">{post.category}</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
          <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
            <span>By {post.author}</span><span>·</span>
            <span>{post.date}</span><span>·</span>
            <span className="inline-flex items-center gap-1"><Clock className="size-3.5" />{post.readTime}</span>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden glass">
            <div className="absolute inset-0" style={{ background: post.cover }} />
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="prose prose-invert max-w-none space-y-5 text-[15px] leading-relaxed">
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
            {post.content.map((b: { type: string; text: string }, i: number) => {
              if (b.type === "h2") return <h2 key={i} className="mt-10 text-2xl font-bold">{b.text}</h2>;
              if (b.type === "quote") return (
                <blockquote key={i} className="border-l-2 border-primary pl-4 my-6 italic text-foreground/90">
                  {b.text}
                </blockquote>
              );
              if (b.type === "li") return <li key={i} className="ml-5 list-disc">{b.text}</li>;
              return <p key={i} className="text-foreground/85">{b.text}</p>;
            })}
          </div>
        </Reveal>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 mt-20">
          <Reveal>
            <h3 className="text-2xl font-bold">Keep reading</h3>
          </Reveal>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link to="/blog/$slug" params={{ slug: p.slug }}
                      className="group block rounded-3xl glass overflow-hidden transition hover:-translate-y-1">
                  <div className="relative aspect-[16/8]">
                    <div className="absolute inset-0" style={{ background: p.cover }} />
                    <div className="absolute inset-0 grid-pattern opacity-20" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-primary">{p.category}</p>
                    <h4 className="mt-2 text-lg font-semibold group-hover:text-primary transition">{p.title}</h4>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary font-medium">
                      Read article <ArrowRight className="size-3" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <div className="mt-20">
        <CtaBanner />
      </div>
    </>
  );
}
