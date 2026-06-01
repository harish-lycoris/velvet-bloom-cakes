import { Link } from "@tanstack/react-router";

import catCelebration from "@/assets/cat-celebration.avif";
import catEggless from "@/assets/cat-eggless.avif";
import catPies from "@/assets/eggpuff.png";
import catPastries from "@/assets/pastry.png";

const gridItems = [
  {
    id: 1,
    image: catCelebration,
    link: "/shop?category=celebration",
  },
  {
    id: 2,
    image: catPies,
    link: "/shop?category=pies",
  },
  {
    id: 3,
    image: catPastries,
    link: "/shop?category=pastries",
  },
  {
    id: 4,
    image: catEggless,
    link: "/shop?category=eggless",
  },
];

export function FeaturedGrids() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 text-center">
        <h2 className="font-display text-3xl font-bold tracking-wide text-[#D4AF37] uppercase sm:text-4xl">
          Turning Moments Into Masterpieces
        </h2>
        <p className="mt-3 text-base font-medium text-neutral-600 dark:text-neutral-300">
          Step into our shop and treat yourself to heavenly bites of pure chocolate perfection.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {gridItems.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image Background */}
            <img
              src={item.image}
              alt={`${item.action} ${item.type}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />

          </Link>
        ))}
      </div>
    </section>
  );
}