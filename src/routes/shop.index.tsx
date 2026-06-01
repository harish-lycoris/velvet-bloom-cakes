import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { cakes } from "@/data/cakes";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop · Coco Sage" },
      { name: "description", content: "Browse our full collection of handcrafted luxury cakes." },
      { property: "og:title", content: "Shop · Coco Sage" },
      { property: "og:description", content: "Browse our full collection of handcrafted luxury cakes." },
    ],
  }),
  component: Shop,
});

// const filters = ["All", "Chocolate", "Classic", "Cheesecake", "Fruit", "Signature"];
const filters = ["All", "Cakes", "Brownies", "Cinnamon Rolls", "Cookies", "Pastries"];

function Shop() {
  const [active, setActive] = useState("All");
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");

  const visible = useMemo(() => {
    let list = active === "All" ? cakes : cakes.filter((c) => c.category === active);
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [active, sort]);

  return (
    <SiteLayout>
      <section className="bg-cream pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">The collection</span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight sm:text-6xl">
            Every cake, <em className="italic">an heirloom.</em>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground">
            Browse our seasonal selection — each baked to order in our Parisian atelier.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${active === f
                  ? "bg-cocoa text-primary-foreground"
                  : "border border-border bg-background text-foreground/70 hover:border-cocoa"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="rounded-full border border-border bg-background px-4 py-2 text-xs uppercase tracking-[0.18em] outline-none transition focus:border-cocoa"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <ProductCard key={c.id} cake={c} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
