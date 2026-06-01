import { useState } from "react";
import { Link } from "@tanstack/react-router";

import sensation from "@/assets/products/sensation.avif";
import madagascar from "@/assets/products/madagascar.avif";
import masterchef from "@/assets/products/masterchef.avif";
import moksha from "@/assets/products/moksha.avif";
import nutella from "@/assets/products/nutella.avif";
import rainbow from "@/assets/products/rainbow.avif";
import tuscanyDouble from "@/assets/products/tuscany-double.avif";
import tuscanyFerrero from "@/assets/products/tuscany-ferrero.avif";

// Dummy data structure reflecting your uploaded image
const tabs = ["BESTSELLERS", "TRUFFLE CAKES"];

const initialProducts = [
  {
    id: 1,
    name: "CHOCOLATE SENSATION CAKE",
    categories: "Celebration Cakes, Bestsellers, Eggless Celebration Cakes",
    priceRange: "₹1,395.00 – ₹6,012.00",
    image: sensation, // Replace with your paths
    discount: "-10%",
    soldOut: false,
    tab: "BESTSELLERS",
  },
  {
    id: 2,
    name: "MADAGASCAR (Single Origin Dark Chocolate Cake)",
    categories: "Celebration Cakes, Bestsellers, Eggless Celebration Cakes",
    priceRange: "₹1,415.70 – ₹6,094.80",
    image: madagascar,
    discount: "-10%",
    soldOut: false,
    tab: "TRUFFLE CAKES",
  },
  {
    id: 3,
    name: "MASTERCHEF CHOCOLATE CAKE",
    categories: "Celebration Cakes, Bestsellers",
    priceRange: "₹1,331.10 – ₹5,756.40",
    image: masterchef,
    discount: "-10%",
    soldOut: false,
    tab: "BESTSELLERS",
  },
  {
    id: 4,
    name: "MOKSHA CHOCOLATE CAKE",
    categories: "Celebration Cakes, Bestsellers, Eggless Celebration Cakes",
    priceRange: "₹1,377.50 – ₹5,510.00",
    image: moksha,
    discount: "-5%",
    soldOut: false,
    tab: "TRUFFLE CAKES",
  },
  {
    id: 5,
    name: "NUTELLA FERRERO CHOCOLATE CAKE",
    categories: "Celebration Cakes, Bestsellers",
    priceRange: "₹1,579.50 – ₹6,750.00",
    image: nutella,
    discount: "-10%",
    soldOut: false,
    tab: "TRUFFLE CAKES",
  },
  {
    id: 6,
    name: "SEVEN WONDER RAINBOW CAKE",
    categories: "Celebration Cakes, Bestsellers, Eggless Celebration Cakes",
    priceRange: "₹2,195.00 – ₹4,870.00",
    image: rainbow,
    discount: null,
    soldOut: true,
    tab: "BESTSELLERS",
  },
  {
    id: 7,
    name: "TUSCANY DOUBLE CRUNCH AWESOME CAKE",
    categories: "Celebration Cakes, Bestsellers, Eggless Celebration Cakes",
    priceRange: "₹1,755.00 – ₹7,452.00",
    image: tuscanyDouble,
    discount: "-10%",
    soldOut: true, // Note: It shows both -10% and Sold Out on the image
    tab: "BESTSELLERS",
  },
  {
    id: 8,
    name: "TUSCANY FERRERO CHOCOLATE CAKE",
    categories: "Celebration Cakes, Bestsellers, Eggless Celebration Cakes",
    priceRange: "₹1,133.35 – ₹4,989.40",
    image: tuscanyFerrero,
    discount: "-5%",
    soldOut: false,
    tab: "TRUFFLE CAKES",
  },
];

export function ProductGrids() {
  const [activeTab, setActiveTab] = useState("BESTSELLERS");

  // Filter products depending on selection
  const filteredProducts = initialProducts.filter(
    (product) => product.tab === activeTab
  );

  return (
    <section className="bg-[#0f0705] text-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-wide text-[#f3bd6b] sm:text-4xl">
            Cakes for Every Mood & Moment
          </h2>
        </div>

        {/* Tab Navigation Menu */}
        <div className="mt-8 flex justify-center gap-6 border-b border-white/10 pb-4 text-xs font-bold tracking-widest sm:text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-colors relative pb-4 uppercase ${activeTab === tab
                ? "text-[#f3bd6b]"
                : "text-neutral-400 hover:text-white"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f3bd6b]" />
              )}
            </button>
          ))}
        </div>

        {/* Product Cards Grid Layout */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/shop`} // Update path as required by router parameters
              className="group flex flex-col justify-between rounded-xs bg-white p-4 text-center shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xs bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                />

                {/* Badge Stack Layout (Top Left Corner) */}
                <div className="absolute top-2 left-2 flex flex-col gap-1.5">
                  {/* Discount Badge */}
                  {product.discount && (
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-bold text-white shadow-sm ${product.discount.includes("5%") ? "bg-[#d9b44a]" : "bg-red-600"
                      }`}>
                      {product.discount}
                    </span>
                  )}

                  {/* Sold Out Badge */}
                  {product.soldOut && (
                    <span className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-red-700 p-0.5 text-[10px] font-black uppercase leading-tight text-white shadow-sm">
                      <span>Sold</span>
                      <span>Out</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Product Card Info Data metadata */}
              <div className="mt-4 flex flex-grow flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold tracking-wide text-neutral-800 line-clamp-2 uppercase min-h-[2rem]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[16px] italic leading-relaxed text-neutral-400 line-clamp-2 px-1">
                    {product.categories}
                  </p>
                </div>

                <div className="mt-3 border-t border-neutral-100 pt-2">
                  <p className="text-sm font-bold text-[#c4984f]">
                    {product.priceRange}
                  </p>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}