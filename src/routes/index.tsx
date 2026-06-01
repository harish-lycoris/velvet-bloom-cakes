import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { cakes, categories, testimonials, instagramGallery } from "@/data/cakes";
import heroCake from "@/assets/hero-cake.jpg";
import celebration from "@/assets/celebration-banner.jpg";
import { HeroSlider } from "@/components/site/HeroSlider";
import { FeaturedGrids } from "@/components/site/FeaturedGrids";
import { ProductGrids } from "@/components/site/ProductGrids";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coco Sage — Handcrafted Luxury Cakes" },
      { name: "description", content: "Heirloom cakes handcrafted by Parisian pastry chefs. Single-origin chocolate, seasonal fruit, and patisserie technique." },
      { property: "og:title", content: "Coco Sage — Handcrafted Luxury Cakes" },
      { property: "og:description", content: "Heirloom cakes handcrafted by Parisian pastry chefs." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = cakes.slice(0, 3);
  const bestsellers = cakes.filter((c) => c.tag === "Bestseller" || c.tag === "Signature");

  return (
    <SiteLayout>
      {/* HERO */}
      <HeroSlider />

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-border/60 bg-cream py-6">
        <div className="marquee flex w-max gap-16 whitespace-nowrap font-display text-2xl text-cocoa/60">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              {["Belgian chocolate", "Madagascar vanilla", "Alphonso mango", "Wild blueberry", "Edible gold", "Hand-piped"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-16 italic">
                    {t}
                    <span className="text-cocoa/30">✦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <FeaturedGrids />

      {/* CATEGORIES */}
      <ProductGrids />

      {/* BESTSELLERS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-10">
        <div className="mb-14 max-w-xl">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">Bestsellers</span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Loved by <em className="italic">connoisseurs</em>
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {bestsellers.map((c) => (
            <ProductCard key={c.id} cake={c} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0f0705] text-white px-6 py-24 lg:px-10">
        <section className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white">Praise</span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Whispered <em className="italic">over coffee</em>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-border/60 bg-cream p-8 transition hover:shadow-card"
              >
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t.name} · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </section>

      {/* INSTAGRAM */}
      <section className="border-t border-border/60 bg-cream py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">@cocosage</span>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                From our <em className="italic">atelier</em>
              </h2>
            </div>
            <a href="#" className="text-sm uppercase tracking-[0.18em] text-cocoa">Follow on Instagram →</a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {instagramGallery.map((src, i) => (
              <a
                key={i}
                href="#"
                className="group relative aspect-square overflow-hidden rounded-xs"
              >
                <img
                  src={src}
                  alt="Instagram"
                  loading="lazy"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cocoa/0 transition group-hover:bg-cocoa/30" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
