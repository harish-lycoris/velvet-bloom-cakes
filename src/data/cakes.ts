import carrotCake from "@/assets/carrot-cake.jpg";
import fudgyBrownie from "@/assets/fudgy-brownie.jpg";
import brookie from "@/assets/brookie.jpg";
import bananaBread from "@/assets/chocolate-chip-banana-bread.jpg";
import marbleCake from "@/assets/chocolate-marble-cake.jpg";
import carrotCakeSmall from "@/assets/carrot-cake-small.jpg";
import doubleChocolateBananaBread from "@/assets/double-chocolate-banana-bread.jpg";
import strawberryBlueberryWhite from "@/assets/strawberry-blueberry-white.jpg";
import blondie from "@/assets/choco-chip-blondie.jpg";
/* import cinnamonRolls from "@/assets/classic-cinnamon-rolls.jpg";
import thickCookies from "@/assets/thick-choco-chip-cookies.jpg";
import applePieRolls from "@/assets/apple-pie-cinnamon-rolls.jpg";
import doubleChocolateCookie from "@/assets/double-chocolate-cookie.jpg";
import cinnamonCookie from "@/assets/cinnamon-cookie.jpg";
import chaiSpiceCookie from "@/assets/chai-spice-cookie.jpg";
import classicRolls from "@/assets/classic-rolls.jpg";
import twoChipCookie from "@/assets/two-chip-cookie.jpg";
import nutellaRolls from "@/assets/nutella-cinnamon-rolls.jpg";
import pineapplePuffs from "@/assets/pineapple-puffs.jpg";
import bananaNutellaPuffs from "@/assets/banana-nutella-puffs.jpg"; */

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
    id: "carrot-cake",
    name: "Carrot Cake",
    description: "Soft, moist carrot cake with butter cream cheese frosting.",
    longDescription:
      "Double layer carrot cake loaded with flavor and finished with rich butter cream cheese frosting. Approx. 2kg net weight.",
    price: 1200,
    image: carrotCake,
    category: "Cakes",
    tag: "Signature",
  },
  {
    id: "fudgy-brownie",
    name: "Fudgy Brownie",
    description: "Rich and indulgent chocolate brownie.",
    longDescription:
      "Dense, fudgy brownie made with premium chocolate for the perfect gooey texture.",
    price: 1000,
    image: fudgyBrownie,
    category: "Brownies",
    tag: "Bestseller",
  },
  {
    id: "brookie",
    name: "Brookie (8 Pieces)",
    description: "Brownie meets chocolate chip cookie.",
    longDescription:
      "A delicious combination of rich fudgy brownie and chewy brown butter chocolate chip cookie.",
    price: 800,
    image: brookie,
    category: "Brownies",
    tag: "Signature",
  },
  {
    id: "chocolate-chip-banana-bread",
    name: "Chocolate Chip Banana Bread",
    description: "Moist banana loaf loaded with chocolate chips.",
    longDescription:
      "Freshly baked loaf cake with ripe bananas and chocolate chips. Approx. 1kg net weight.",
    price: 800,
    image: bananaBread,
    category: "Cakes",
  },
  {
    id: "chocolate-marble-cake",
    name: "Chocolate Marble Cake",
    description: "Classic vanilla and chocolate marble loaf.",
    longDescription:
      "Soft loaf cake featuring swirls of vanilla and chocolate. Approx. 1kg net weight.",
    price: 800,
    image: marbleCake,
    category: "Cakes",
  },
  {
    id: "carrot-cake-small",
    name: "Carrot Cake (8x8)",
    description: "Smaller version of the signature carrot cake.",
    longDescription:
      "Double layer carrot cake with cream cheese frosting. Approx. 1kg net weight.",
    price: 700,
    image: carrotCakeSmall,
    category: "Cakes",
  },
  {
    id: "double-chocolate-banana-bread",
    name: "Double Chocolate Banana Bread",
    description: "Chocolate banana loaf packed with cocoa flavor.",
    longDescription:
      "Rich double chocolate banana bread baked to perfection. Approx. 1kg net weight.",
    price: 500,
    image: doubleChocolateBananaBread,
    category: "Cakes",
  },
  {
    id: "strawberry-blueberry-white",
    name: "Strawberry / Blueberry White",
    description: "Fruit-infused white loaf cake.",
    longDescription:
      "Light and fluffy loaf cake featuring strawberry or blueberry flavors.",
    price: 1100,
    image: strawberryBlueberryWhite,
    category: "Cakes",
    tag: "New",
  },
  {
    id: "choco-chip-blondie",
    name: "Choco-Chip Blondie",
    description: "Buttery blondie loaded with chocolate chips.",
    longDescription:
      "Soft and chewy blondie with a rich buttery flavor and generous chocolate chips.",
    price: 650,
    image: blondie,
    category: "Brownies",
  },
  /* {
    id: "classic-cinnamon-rolls",
    name: "Classic Cinnamon Rolls (8 Pieces)",
    description: "Soft cinnamon rolls with cream cheese frosting.",
    longDescription:
      "Pillowy soft cinnamon rolls topped with thick, tangy cream cheese frosting.",
    price: 500,
    image: cinnamonRolls,
    category: "Cinnamon Rolls",
    tag: "Bestseller",
  },
  {
    id: "thick-choco-chip-cookies",
    name: "Thick Choco-Chip Cookies",
    description: "Thick bakery-style chocolate chip cookies.",
    longDescription:
      "Large soft-centered cookies packed with premium chocolate chips.",
    price: 700,
    image: thickCookies,
    category: "Cookies",
  },
  {
    id: "apple-pie-cinnamon-rolls",
    name: "Apple Pie Cinnamon Rolls",
    description: "Cinnamon rolls filled with apple pie goodness.",
    longDescription:
      "Classic cinnamon rolls layered with sweet apple pie filling.",
    price: 800,
    image: applePieRolls,
    category: "Cinnamon Rolls",
  },
  {
    id: "double-chocolate-chip-cookie",
    name: "Double Chocolate Chip Cookie",
    description: "Extra chocolatey cookie with chocolate chips.",
    longDescription:
      "Rich chocolate cookie loaded with even more chocolate chips.",
    price: 850,
    image: doubleChocolateCookie,
    category: "Cookies",
  },
  {
    id: "cinnamon-cookie",
    name: "Cinnamon Cookie",
    description: "Warm cinnamon-spiced cookie.",
    longDescription:
      "Soft baked cookie with a comforting cinnamon flavor.",
    price: 850,
    image: cinnamonCookie,
    category: "Cookies",
  },
  {
    id: "chai-spice-cookie",
    name: "Chai Spice Cookie",
    description: "Cookie infused with chai spices.",
    longDescription:
      "Aromatic cookie flavored with traditional chai spice blend.",
    price: 500,
    image: chaiSpiceCookie,
    category: "Cookies",
  },
  {
    id: "classic-cinnamon-rolls-regular",
    name: "Classic Cinnamon Rolls",
    description: "Freshly baked cinnamon rolls.",
    longDescription:
      "Soft and fluffy cinnamon rolls topped with cream cheese frosting.",
    price: 550,
    image: classicRolls,
    category: "Cinnamon Rolls",
  },
  {
    id: "two-chip-cookie",
    name: "Two Chip Choco-Chip Cookies",
    description: "Double-chip cookie delight.",
    longDescription:
      "Crunchy outside, chewy inside, packed with two varieties of chocolate chips.",
    price: 550,
    image: twoChipCookie,
    category: "Cookies",
  },
  {
    id: "nutella-cinnamon-rolls",
    name: "Nutella Cinnamon Rolls",
    description: "Classic cinnamon rolls filled with Nutella.",
    longDescription:
      "Soft cinnamon rolls generously filled with creamy Nutella.",
    price: 450,
    image: nutellaRolls,
    category: "Cinnamon Rolls",
    tag: "Signature",
  },
  {
    id: "pineapple-puffs",
    name: "Pineapple Puffs",
    description: "Bite-sized pineapple puff pastries.",
    longDescription:
      "Flaky puff pastries filled with sweet pineapple filling. 10 bite-sized pieces.",
    price: 300,
    image: pineapplePuffs,
    category: "Pastries",
  },
  {
    id: "banana-nutella-puffs",
    name: "Banana Nutella Puffs",
    description: "Flaky pastry with banana and Nutella.",
    longDescription:
      "Golden puff pastries filled with banana and Nutella. 10 bite-sized pieces.",
    price: 350,
    image: bananaNutellaPuffs,
    category: "Pastries",
    tag: "New",
  }, */
];

export const categories = [
  { id: "cakes", name: "Cakes", count: 8 },
  { id: "brownies", name: "Brownies", count: 3 },
  { id: "cookies", name: "Cookies", count: 5 },
  { id: "cinnamon-rolls", name: "Cinnamon Rolls", count: 4 },
  { id: "pastries", name: "Pastries", count: 2 },
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
      "I've ordered from the world's best patisseries. Coco Sage sits comfortably among them. Honest, exquisite craft.",
  },
  {
    name: "Priya Shah",
    role: "Mumbai, IN",
    quote:
      "Our wedding cake was breathtaking. Guests stopped mid-conversation when it was wheeled in. Worth every penny.",
  },
];

export const instagramGallery = cakes.map((c) => c.image);
