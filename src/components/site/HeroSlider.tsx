import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroCake from "@/assets/banners/banner1-web.avif";
import celebration from "@/assets/banners/banner2-web.avif";
import dessertTub from "@/assets/banners/banner3-web.avif";

const banners = [
  {
    id: 1,
    image: heroCake,
    title: "Indulge Like a",
    highlight: "Master Chef",
    subtitle: "Experience the ultimate chocolate indulgence crafted with passion and precision. One bite, and you’ll taste the art of perfection.",
  },
  {
    id: 2,
    image: celebration,
    title: "Indulge in Joy with Our",
    highlight: "Celebration Cakes",
    subtitle: "Perfect for birthdays, anniversaries, or any special moment.",
  },
  {
    id: 3,
    image: dessertTub,
    title: "Layers of Luxury. Moments of Bliss.",
    highlight: "Double Treat Dessert Tubs",
    subtitle: "Decadent cream, rich ganache & delightful layers in every bite.",
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = banners[currentIndex];

  return (
    <section className="relative h-screen overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <img
            src={banner.image}
            alt={banner.highlight}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r" />

          <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-none tracking-tight">
                {banner.title}<br />
                <span className="text-amber-400">{banner.highlight}</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl max-w-lg text-white/90">
                {banner.subtitle}
              </p>

              <Link
                to="/shop"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-4 text-lg font-medium text-black hover:bg-white transition-all hover:scale-105"
              >
                ORDER NOW
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-4 rounded-full text-2xl transition"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-4 rounded-full text-2xl transition"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? "bg-amber-400 w-8" : "bg-white/50 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
}