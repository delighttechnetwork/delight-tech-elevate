import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import {
  About,
  WhyUs,
  FeaturedProjects,
  Testimonials,
  FounderSpotlight,
  RecentPosts,
  CtaBanner,
} from "@/components/sections/Common";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Delight Tech Network — Lighting Through Technology" }] }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid limit={6} />
      <WhyUs />
      <FeaturedProjects />
      <Testimonials />
      <RecentPosts />
      <FounderSpotlight />
      <CtaBanner />
    </>
  );
}
