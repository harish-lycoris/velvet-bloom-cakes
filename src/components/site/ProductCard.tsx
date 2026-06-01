import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import type { Cake } from "@/data/cakes";
import { useCart } from "@/store/cart";
import { toast } from "sonner";

export function ProductCard({ cake }: { cake: Cake }) {
  const { add } = useCart();

  return (
    <article className="group relative">
      <Link
        to="/shop/$id"
        params={{ id: cake.id }}
        className="block overflow-hidden rounded-3xl bg-secondary/40"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={cake.image}
            alt={cake.name}
            loading="lazy"
            width={900}
            height={900}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          {cake.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cocoa backdrop-blur">
              {cake.tag}
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              add(cake.id);
              toast.success(`${cake.name} added to cart`);
            }}
            aria-label={`Add ${cake.name} to cart`}
            className="absolute bottom-4 right-4 inline-flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-cocoa text-primary-foreground opacity-0 shadow-card transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </Link>
      <div className="mt-5 flex items-start justify-between gap-4 px-1">
        <div>
          <h3 className="font-display text-xl leading-tight">
            <Link to="/shop/$id" params={{ id: cake.id }} className="hover:text-cocoa">
              {cake.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {cake.description}
          </p>
        </div>
        <span className="shrink-0 font-display text-lg">₹{cake.price}</span>
      </div>
    </article>
  );
}
