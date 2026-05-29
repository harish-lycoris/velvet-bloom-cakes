import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useCart } from "@/store/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout · Maison Velour" }] }),
  component: Checkout,
});

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-cocoa focus:ring-2 focus:ring-cocoa/10";
const label = "text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground";

function Checkout() {
  const { detailed, subtotal, clear } = useCart();
  const shipping = subtotal > 0 ? 12 : 0;
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10">
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">Almost there</span>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl">
          <em className="italic">Checkout</em>
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitting(true);
            setTimeout(() => {
              toast.success("Order placed — a confirmation is on its way.");
              clear();
              navigate({ to: "/" });
            }, 900);
          }}
          className="mt-12 grid gap-12 lg:grid-cols-[1fr_400px]"
        >
          <div className="space-y-12">
            <fieldset className="space-y-6">
              <legend className="font-display text-2xl">Contact</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block"><span className={label}>Email</span><input required type="email" className={`${field} mt-2`} placeholder="you@example.com" /></label>
                <label className="block"><span className={label}>Phone</span><input required className={`${field} mt-2`} placeholder="+33 ..." /></label>
              </div>
            </fieldset>

            <fieldset className="space-y-6">
              <legend className="font-display text-2xl">Delivery</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block"><span className={label}>First name</span><input required className={`${field} mt-2`} /></label>
                <label className="block"><span className={label}>Last name</span><input required className={`${field} mt-2`} /></label>
              </div>
              <label className="block"><span className={label}>Address</span><input required className={`${field} mt-2`} /></label>
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="block"><span className={label}>City</span><input required className={`${field} mt-2`} /></label>
                <label className="block"><span className={label}>Postcode</span><input required className={`${field} mt-2`} /></label>
                <label className="block"><span className={label}>Country</span><input required defaultValue="France" className={`${field} mt-2`} /></label>
              </div>
            </fieldset>

            <fieldset className="space-y-6">
              <legend className="font-display text-2xl">Payment</legend>
              <label className="block"><span className={label}>Card number</span><input required className={`${field} mt-2`} placeholder="1234 1234 1234 1234" /></label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block"><span className={label}>Expiry</span><input required className={`${field} mt-2`} placeholder="MM / YY" /></label>
                <label className="block"><span className={label}>CVC</span><input required className={`${field} mt-2`} placeholder="123" /></label>
              </div>
            </fieldset>
          </div>

          <aside className="h-fit rounded-3xl border border-border bg-cream p-8">
            <h2 className="font-display text-2xl">Your order</h2>
            <ul className="mt-6 space-y-4">
              {detailed.map((it) => (
                <li key={it.id} className="flex items-center gap-4">
                  <img src={it.cake.image} alt="" className="h-14 w-14 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{it.cake.name}</p>
                    <p className="text-xs text-muted-foreground">× {it.qty}</p>
                  </div>
                  <span className="text-sm">${it.cake.price * it.qty}</span>
                </li>
              ))}
              {detailed.length === 0 && (
                <li className="text-sm text-muted-foreground">Your cart is empty.</li>
              )}
            </ul>
            <dl className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between text-muted-foreground"><dt>Subtotal</dt><dd>${subtotal}</dd></div>
              <div className="flex justify-between text-muted-foreground"><dt>Delivery</dt><dd>${shipping}</dd></div>
              <div className="flex justify-between border-t border-border pt-3 font-display text-xl"><dt>Total</dt><dd>${subtotal + shipping}</dd></div>
            </dl>
            <button
              type="submit"
              disabled={submitting || detailed.length === 0}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa py-4 text-sm uppercase tracking-[0.18em] text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
            >
              {submitting ? "Placing order..." : (<><Check className="h-4 w-4" /> Place order</>)}
            </button>
          </aside>
        </form>
      </section>
    </SiteLayout>
  );
}
