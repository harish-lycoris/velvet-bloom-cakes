import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useCart } from "@/store/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart · Coco Sage" }] }),
  component: CartPage,
});

function CartPage() {
  const { detailed, setQty, remove, subtotal, count } = useCart();
  const shipping = subtotal > 0 ? 12 : 0;

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10">
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">Your selection</span>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl">
          Shopping <em className="italic">bag</em>
        </h1>

        {detailed.length === 0 ? (
          <div className="mt-20 rounded-3xl border border-border bg-cream py-24 text-center">
            <p className="font-display text-3xl">Your bag is empty.</p>
            <p className="mt-3 text-muted-foreground">A cake or two would feel right at home here.</p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cocoa px-7 py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground"
            >
              Browse cakes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_400px]">
            <ul className="divide-y divide-border">
              {detailed.map((it) => (
                <li key={it.id} className="flex gap-6 py-8">
                  <Link to="/shop/$id" params={{ id: it.id }} className="shrink-0">
                    <img src={it.cake.image} alt={it.cake.name} className="h-32 w-32 rounded-2xl object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-4">
                      <div>
                        <Link to="/shop/$id" params={{ id: it.id }} className="font-display text-2xl hover:text-cocoa">
                          {it.cake.name}
                        </Link>
                        <p className="mt-1 text-sm text-muted-foreground">{it.cake.category}</p>
                      </div>
                      <span className="font-display text-xl">${it.cake.price * it.qty}</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="flex items-center rounded-full border border-border">
                        <button onClick={() => setQty(it.id, it.qty - 1)} className="grid h-9 w-9 place-items-center">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{it.qty}</span>
                        <button onClick={() => setQty(it.id, it.qty + 1)} className="grid h-9 w-9 place-items-center">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(it.id)}
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-cocoa"
                      >
                        <X className="h-3 w-3" /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="h-fit rounded-3xl border border-border bg-cream p-8">
              <h2 className="font-display text-2xl">Order summary</h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <dt>Subtotal ({count} items)</dt>
                  <dd className="text-foreground">${subtotal}</dd>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <dt>Chilled delivery</dt>
                  <dd className="text-foreground">${shipping}</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-4 font-display text-xl">
                  <dt>Total</dt>
                  <dd>${subtotal + shipping}</dd>
                </div>
              </dl>
              <Link
                to="/checkout"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground transition hover:opacity-90"
              >
                Checkout <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/shop" className="mt-4 block text-center text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-cocoa">
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
