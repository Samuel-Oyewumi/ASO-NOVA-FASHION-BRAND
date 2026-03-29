export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Alaari",
    price: 30000,
    description: "A beautifully crafted traditional Aso Oke cap (Fila) featuring earthy brown, black, and white stripes. Perfect for completing any traditional menswear look.",
    images: [
      "/product-1.jpg.jpeg"
    ],
    category: "Accessories"
  },
  {
    id: "p2",
    name: "Crowntex (Two Tones)",
    price: 24000,
    description: "Premium quality Aso Oke fabric in a rich olive green with subtle yellow accents. Ideal for tailoring bespoke traditional attire.",
    images: [
      "/product-2.jpg.jpeg"
    ],
    category: "Fabric"
  },
  {
    id: "p3",
    name: "Double weaving",
    price: 15000,
    description: "A stunning, shimmering metallic pink and silver Aso Oke fabric. Woven with high-quality metallic threads that catch the light beautifully for special occasions.",
    images: [
      "/product-3.jpg.jpeg"
    ],
    category: "Fabric"
  },
  {
    id: "p4",
    name: "Full cotton Vintage",
    price: 18000,
    description: "A classic pairing of blue/pink plaid and red/white striped Aso Oke fabrics. These complementary patterns are perfect for creating dynamic, multi-textured outfits.",
    images: [
      "/product-4.jpg.jpeg"
    ],
    category: "Fabric"
  },
  {
    id: "p5",
    name: "Full cotton Vintage",
    price: 18000,
    description: "Vibrant, multi-colored Aso Oke bundles available in a wide variety of stripes and patterns. Perfect for creating matching family outfits (Aso Ebi).",
    images: [
      "/product-5.jpg.jpeg"
    ],
    category: "Fabric"
  },
  {
    id: "p6",
    name: "Full cotton Vintage",
    price: 18000,
    description: "A bold and regal Aso Oke bundle featuring striking yellow, red, black, and white stripes. Woven tightly for durability and a premium feel.",
    images: [
      "/product-6.jpg.jpeg"
    ],
    category: "Fabric"
  },
  {
    id: "p7",
    name: "Kente",
    price: 35000,
    description: "An elegant, minimalist Aso Oke fabric featuring clean tan and white stripes. A versatile choice that pairs beautifully with both bold and neutral accessories.",
    images: [
      "/product-7.jpg.jpeg"
    ],
    category: "Fabric"
  },
  {
    id: "p8",
    name: "Sanyan",
    price: 30000,
    description: "Premium Aso Oke fabric. Please provide a description for this beautiful piece.",
    images: [
      "/product-8.jpg.jpeg"
    ],
    category: "Fabric"
  },
  {
    id: "p9",
    name: "Vintage cap",
    price: 8000,
    description: "Premium Aso Oke fabric. Please provide a description for this beautiful piece.",
    images: [
      "/product-9.jpg.jpeg"
    ],
    category: "Fabric"
  }
];
