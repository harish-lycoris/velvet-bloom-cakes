import truffle from "@/assets/cake-chocolate-truffle.jpg";
import redVelvet from "@/assets/cake-red-velvet.jpg";
import biscoff from "@/assets/cake-biscoff.jpg";
import blueberry from "@/assets/cake-blueberry.jpg";
import blackforest from "@/assets/cake-blackforest.jpg";
import mango from "@/assets/cake-mango.jpg";

export type Cake = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  tag?: "Bestseller" | "New" | "Signature";
};

export const cakes: Cake[] = [
  {
    id: "chocolate-truffle",
    name: "Chocolate Truffle",
    description: "Belgian dark chocolate, silken ganache, gold leaf finish.",
    longDescription:
      "An indulgent ode to cacao. Three layers of moist chocolate sponge are blanketed in a glossy 70% Belgian ganache, finished with delicate flakes of edible gold. A celebration in every slice.",
    price: 48,
    image: truffle,
    category: "Chocolate",
    tag: "Signature",
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    description: "Buttermilk crumb layered with cream cheese frosting.",
    longDescription:
      "A timeless classic refined. Crimson buttermilk sponge stacked with whipped Philadelphia cream cheese frosting — soft, tangy, unforgettable.",
    price: 42,
    image: redVelvet,
    category: "Classic",
    tag: "Bestseller",
  },
  {
    id: "lotus-biscoff",
    name: "Lotus Biscoff",
    description: "Caramelised biscoff mousse with golden cookie crunch.",
    longDescription:
      "Layers of toasted biscoff crumb, silken caramel mousse and whipped vanilla cream — crowned with hand-broken Lotus cookies.",
    price: 52,
    image: biscoff,
    category: "Signature",
    tag: "New",
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    description: "Slow-baked New York style with wild blueberry compote.",
    longDescription:
      "A buttery graham base supports our silky baked cheesecake, finished with a slow-cooked wild blueberry compote and fresh mint.",
    price: 46,
    image: blueberry,
    category: "Cheesecake",
  },
  {
    id: "black-forest",
    name: "Black Forest",
    description: "Cherry-kissed chocolate sponge, vanilla chantilly.",
    longDescription:
      "An old-world favourite. Dark chocolate sponge soaked in cherry syrup, layered with whipped chantilly and morello cherries.",
    price: 50,
    image: blackforest,
    category: "Classic",
    tag: "Bestseller",
  },
  {
    id: "mango-delight",
    name: "Mango Delight",
    description: "Alphonso mango mousse on a vanilla génoise.",
    longDescription:
      "Sun-ripened Alphonso mango whipped into a delicate mousse, set over light vanilla génoise and finished with fresh mango petals.",
    price: 54,
    image: mango,
    category: "Fruit",
    tag: "New",
  },
];

export const categories = [
  { id: "chocolate", name: "Chocolate", count: 12 },
  { id: "classic", name: "Classic", count: 9 },
  { id: "cheesecake", name: "Cheesecake", count: 6 },
  { id: "fruit", name: "Fruit & Fresh", count: 7 },
  { id: "celebration", name: "Celebration", count: 14 },
  { id: "signature", name: "Signature", count: 5 },
];

export const testimonials = [
  {
    name: "Anaïs Laurent",
    role: "Paris, FR",
    quote:
      "The truffle cake arrived like a piece of jewellery. Every detail — from the box to the gold leaf — felt considered.",
  },
  {
    name: "Marcus Bell",
    role: "London, UK",
    quote:
      "I've ordered from the world's best patisseries. Maison Velour sits comfortably among them. Honest, exquisite craft.",
  },
  {
    name: "Priya Shah",
    role: "Mumbai, IN",
    quote:
      "Our wedding cake was breathtaking. Guests stopped mid-conversation when it was wheeled in. Worth every penny.",
  },
];

export const instagramGallery = cakes.map((c) => c.image);
