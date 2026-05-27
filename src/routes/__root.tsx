import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logo from "@/assets/logo.jpg";
import { SiteShell } from "@/components/SiteShell";
import { Toaster } from "@/components/ui/sonner";
import { company } from "@/lib/site";
import { LiveChat } from "@/components/LiveChat";
import { LoadingScreen } from "@/components/LoadingScreen";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white"
          >
            Try again
          </button>
          <a href="/" className="rounded-full glass px-5 py-2.5 text-sm font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  slogan: company.tagline,
  email: company.email,
  telephone: company.phone,
  founder: { "@type": "Person", name: company.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Ibadan",
    addressRegion: "Oyo",
    addressCountry: "NG",
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${company.name} — ${company.tagline}` },
      {
        name: "description",
        content:
          "Delight Tech Network — premium web development, cyber security, design, branding and GSM repair services in Ibadan, Nigeria.",
      },
      { name: "author", content: company.name },
      { name: "theme-color", content: "#0b1020" },
      { property: "og:title", content: `${company.name} — ${company.tagline}` },
      {
        property: "og:description",
        content: "Premium technology, design and branding services for ambitious African brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://delighttechnetwork.com" },
      { rel: "icon", href: logo, id: "favicon" },
      { rel: "apple-touch-icon", href: logo },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(orgJsonLd) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const routerState = useRouterState();
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const isNavigating = routerState.status === "pending";
  const isLoading = isInitialLoading || isNavigating;

  React.useEffect(() => {
    // Artificial delay for premium feel and to ensure all assets are ready
    const timer = setTimeout(() => setIsInitialLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animated Favicon Logic
  React.useEffect(() => {
    let animationFrame: number;
    let rotation = 0;
    const favicon = document.getElementById("favicon") as HTMLLinkElement;

    if (!favicon || !isLoading) return;

    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");

    const animate = () => {
      if (!ctx) return;
      rotation = (rotation + 10) % 360;
      ctx.clearRect(0, 0, 32, 32);

      // Draw background (optional, let's keep it clean)
      ctx.save();
      ctx.translate(16, 16);
      ctx.rotate((rotation * Math.PI) / 180);

      // Draw a simple bulb shape or just use a character/path
      ctx.fillStyle = "#3b82f6"; // primary color
      ctx.beginPath();
      // Simple bulb-like path
      ctx.arc(0, -4, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(-4, 2, 8, 6);

      // Add a glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#fff";

      ctx.restore();

      favicon.href = canvas.toDataURL("image/png");
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      // Reset favicon
      if (favicon) favicon.href = logo;
    };
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen isVisible={isLoading} />
      <SiteShell>
        <Outlet />
      </SiteShell>
      <LiveChat />
      <Toaster />
    </QueryClientProvider>
  );
}
