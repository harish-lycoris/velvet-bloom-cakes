import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import celebration from "@/assets/celebration-banner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Maison Velour" },
      { name: "description", content: "The atelier, the philosophy, and the hands behind Maison Velour." },
      { property: "og:title", content: "About · Maison Velour" },
      { property: "og:description", content: "The atelier, the philosophy, and the hands behind Maison Velour." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="bg-cream pt-40 pb-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa">Our story</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
            Patisserie, the <em className="italic">slow way.</em>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Maison Velour began in 2014 in a small atelier off Rue Saint-Honoré. A pastry chef,
            a chocolatier, and an obsession with one question — what does a perfect cake feel like?
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <div className="overflow-hidden rounded-3xl">
          <img src={celebration} alt="Atelier" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Single-origin. <em className="italic">Hand-laid.</em> Untouched by shortcuts.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Every cake leaves our kitchen baked to order. We work with small producers — Belgian
            cacao houses, Madagascar vanilla farmers, Alphonso mango growers in Maharashtra — and
            we don't compromise when something is out of season.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our pieces ship in our signature velour boxes, packed with reusable cooling, so what
            arrives at your door is the same cake that left our hands.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-10">
          {[
            { n: "01", t: "Sourced", d: "Single-origin ingredients, traceable to the grower." },
            { n: "02", t: "Hand-made", d: "Layered, piped, finished — never by machine." },
            { n: "03", t: "Delivered chilled", d: "Same-day Paris, next-morning anywhere in Europe." },
          ].map((s) => (
            <div key={s.n}>
              <p className="font-display text-5xl text-cocoa/30">{s.n}</p>
              <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
