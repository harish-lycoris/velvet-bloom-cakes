import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { cakes, categories, testimonials, instagramGallery } from "@/data/cakes";
import heroCake from "@/assets/hero-cake.jpg";
import celebration from "@/assets/celebration-banner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Velour — Handcrafted Luxury Cakes" },
      { name: "description", content: "Heirloom cakes handcrafted by Parisian pastry chefs. Single-origin chocolate, seasonal fruit, and patisserie technique." },
      { property: "og:title", content: "Maison Velour — Handcrafted Luxury Cakes" },
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
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCake}
            alt="Signature chocolate truffle cake"
            width={1600}
            height={1280}
            className="h-full w-full object-cover ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
          <div className="max-w-2xl fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-cocoa" /> Parisian patisserie · since 2014
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
              Cakes worth <em className="italic text-cocoa">remembering.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
              Slow-baked in small batches. Layered by hand. Delivered chilled to your door in
              signature velour boxes.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 rounded-full bg-cocoa px-7 py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground transition hover:opacity-90"
              >
                Shop the collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full border border-cocoa/30 bg-background/60 px-7 py-4 text-sm uppercase tracking-[0.18em] text-cocoa backdrop-blur transition hover:bg-background"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

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
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">Featured</span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              This season's <em className="italic">muses</em>
            </h2>
          </div>
          <Link to="/shop" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-cocoa">
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <ProductCard key={c.id} cake={c} />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-secondary/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">Browse</span>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              An occasion for <em className="italic">every craving</em>
            </h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to="/shop"
                className="group flex items-center justify-between rounded-2xl border border-border/60 bg-background px-6 py-7 transition hover:border-cocoa hover:shadow-card"
              >
                <div>
                  <h3 className="font-display text-2xl">{cat.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {cat.count} cakes
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
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

      {/* CELEBRATION BANNER */}
      <section className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-cocoa">
          <img
            src={celebration}
            alt="Celebration cake"
            loading="lazy"
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cocoa/70 via-cocoa/30 to-transparent" />
          <div className="relative grid gap-8 px-8 py-20 text-primary-foreground sm:px-14 lg:py-32">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cream/80">
              Celebration cakes
            </span>
            <h2 className="max-w-2xl font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              For the moments that <em className="italic">deserve more.</em>
            </h2>
            <p className="max-w-lg text-base text-cream/80">
              Birthdays, anniversaries, weddings — commissioned and crafted to your story by our
              head pâtissier.
            </p>
            <Link
              to="/shop"
              className="w-fit rounded-full bg-cream px-7 py-4 text-sm uppercase tracking-[0.18em] text-cocoa transition hover:bg-background"
            >
              Commission a cake
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-14 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">Praise</span>
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

      {/* INSTAGRAM */}
      <section className="border-t border-border/60 bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">@maisonvelour</span>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                From our <em className="italic">atelier</em>
              </h2>
            </div>
            <a href="#" className="text-sm uppercase tracking-[0.18em] text-cocoa">Follow on Instagram →</a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {instagramGallery.map((src, i) => (
              <a
                key={i}
                href="#"
                className="group relative aspect-square overflow-hidden rounded-2xl"
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
