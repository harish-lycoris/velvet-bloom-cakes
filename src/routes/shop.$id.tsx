import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Minus, Plus, ArrowLeft, Truck, Leaf, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { cakes } from "@/data/cakes";
import { useCart } from "@/store/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/shop/$id")({
  head: ({ params }) => {
    const cake = cakes.find((c) => c.id === params.id);
    return {
      meta: [
        { title: cake ? `${cake.name} · Maison Velour` : "Cake · Maison Velour" },
        { name: "description", content: cake?.description ?? "Handcrafted luxury cake" },
        { property: "og:title", content: cake?.name ?? "Maison Velour" },
        { property: "og:description", content: cake?.description ?? "" },
        ...(cake ? [{ property: "og:image", content: cake.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const cake = cakes.find((c) => c.id === params.id);
    if (!cake) throw notFound();
    return cake;
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl">Cake not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-sm uppercase tracking-[0.18em] text-cocoa">
          ← Back to shop
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl">Something went wrong</h1>
      </div>
    </SiteLayout>
  ),
  component: ProductPage,
});

function ProductPage() {
  const cake = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const related = cakes.filter((c) => c.id !== cake.id).slice(0, 3);

  return (
    <SiteLayout>
      <section className="pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-cocoa">
            <ArrowLeft className="h-3 w-3" /> Back to shop
          </Link>
          <div className="mt-8 grid gap-16 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-cream">
              <img
                src={cake.image}
                alt={cake.name}
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              {cake.tag && (
                <span className="self-start rounded-full bg-secondary px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">
                  {cake.tag}
                </span>
              )}
              <h1 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">{cake.name}</h1>
              <p className="mt-4 font-display text-2xl text-cocoa">${cake.price}.00</p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {cake.longDescription}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex items-center rounded-full border border-border">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="grid h-12 w-12 place-items-center rounded-full hover:bg-secondary"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center font-display text-lg">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="grid h-12 w-12 place-items-center rounded-full hover:bg-secondary"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => {
                    add(cake.id, qty);
                    toast.success(`${cake.name} added to cart`);
                  }}
                  className="flex-1 rounded-full bg-cocoa py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground transition hover:opacity-90"
                >
                  Add to cart — ${cake.price * qty}
                </button>
              </div>

              <div className="mt-12 grid gap-5 border-t border-border pt-8 sm:grid-cols-3">
                {[
                  { icon: Truck, label: "Chilled delivery" },
                  { icon: Leaf, label: "Single-origin" },
                  { icon: ShieldCheck, label: "Baked to order" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 text-cocoa" /> {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <h2 className="mb-12 font-display text-4xl">You may also <em className="italic">love</em></h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((c) => (
            <ProductCard key={c.id} cake={c} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
