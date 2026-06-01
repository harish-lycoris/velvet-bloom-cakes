import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import logo from "@/assets/coco-sage-logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-3xl flex items-center gap-2">
              <img src={logo} alt="Coco Sage Logo" className="h-12 w-12 md:h-16 md:w-16 object-contain" />
              Coco <span className="italic">Sage</span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A small atelier of pastry chefs handcrafting heirloom cakes with
              old-world technique and the finest single-origin ingredients.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition hover:border-cocoa hover:text-cocoa"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-foreground">Boutique</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground">Shop all</Link></li>
              <li><Link to="/shop" className="hover:text-foreground">Signature cakes</Link></li>
              <li><Link to="/shop" className="hover:text-foreground">Celebration</Link></li>
              <li><Link to="/shop" className="hover:text-foreground">Gifting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-foreground">Visit us</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Rajahmundry</li>
              <li>Andhrapradesh India</li>
              <li>hello@cocosage.com</li>
              <li>+33 1 42 60 18 04</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Coco Sage. Andhrapradesh India.</p>
          <p className="tracking-[0.18em] uppercase">Privacy · Terms · Shipping</p>
        </div>
      </div>
    </footer >
  );
}
