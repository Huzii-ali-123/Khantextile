export interface Product {
  id: string;
  name: string;
  desc: string;
  longDesc: string;
  img: string;
  gsm: string;
  size: string;
  material: string;
  price: string;
  care: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "face-towel",
    name: "Face Towel",
    desc: "Gentle exfoliation & premium absorption for facial care",
    longDesc: "Expertly woven for delicate skin contact. Our facial towels provide superior softness with low-linting performance. Ideal for daily facial care, cosmetics removal, and warm compress applications.",
    img: "/collection/face-towel.png",
    gsm: "300 - 600 GSM",
    size: "14 x 14 inch",
    material: "100% Combed Cotton",
    price: "Custom Bulk Quote",
    care: "Machine wash warm, tumble dry low. Avoid optical brighteners to preserve premium fiber integrity."
  },
  {
    id: "wash-cloth",
    name: "Wash Cloth",
    desc: "Thick, highly-absorbent daily cleansing essential",
    longDesc: "Durable multi-loop weave designed to handle rigorous laundering while maintaining supreme plushness. Features reinforced lock-stitched hems to ensure long-lasting commercial and residential utility.",
    img: "/collection/wash-cloth.png",
    gsm: "450 - 600 GSM",
    size: "12 x 12 inch",
    material: "Combed Ring-Spun Cotton",
    price: "Custom Bulk Quote",
    care: "Wash with like colors, wash temperature up to 60°C. Heavy-duty construction withstands high-temperature industrial drying."
  },
  {
    id: "hand-towel",
    name: "Hand Towel",
    desc: "Perfect balance of weight, size, and wicking speed",
    longDesc: "Designed with optimized twist yarn for ultra-fast moisture absorbency. These hand towels offer a generous weight class and are accented with a subtle double-dobby border suited for high-end hospitality washrooms.",
    img: "/collection/hand-towel.jpg",
    gsm: "400 - 700 GSM",
    size: "16 x 28 inch",
    material: "100% Egyptian Cotton",
    price: "Custom Bulk Quote",
    care: "Wash before first use. Machine wash warm, gentle cycle. Tumble dry normal."
  },
  {
    id: "bath-towel",
    name: "Bath Towel",
    desc: "Standard luxury bath wrap with enhanced yarn structure",
    longDesc: "Our flagship bathing towel. Combining long-staple cotton with a dense loop structure, it offers a deeply indulgent wrap-around feel. Highly durable side hems ensure it never frays under daily laundering.",
    img: "/collection/bath-towel.jpg",
    gsm: "400 - 700 GSM",
    size: "27 x 54 inch",
    material: "100% Long-Staple Combed Cotton",
    price: "Custom Bulk Quote",
    care: "Tumble dry medium to lift cotton loops. Wash separate from dark clothing to prevent lint migration."
  },
  {
    id: "hotel-towel",
    name: "Hotel Towel",
    desc: "Industrial-strength high-density premium linen wrap",
    longDesc: "Engineered specifically for five-star hospitality standards. Offers supreme plushness coupled with unmatched tensile strength to withstand daily industrial bleaching and laundering cycles. Truly hotel-grade density.",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    gsm: "400 - 700 GSM",
    size: "35 x 70 inch",
    material: "100% Egyptian Cotton",
    price: "Custom Bulk Quote",
    care: "Industrial launder friendly. Chlorine bleach safe (white only). Dry on medium high."
  },
  {
    id: "gym-towel",
    name: "Gym Towel",
    desc: "Lightweight, ultra-wicking, and fast-drying sports weave",
    longDesc: "Compact dimensions crafted to drape perfectly over fitness benches or around your neck. Features a high-velocity moisture-wicking structure that inhibits bacterial accumulation and ensures fresh, quick-dry performance.",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    gsm: "300 - 500 GSM",
    size: "16 x 32 inch",
    material: "Combed Cotton Blend",
    price: "Custom Bulk Quote",
    care: "Wash warm after each workout session. Tumble dry low. Do not use silicon-based softeners."
  },
  {
    id: "spa-towel",
    name: "Spa Towel",
    desc: "Velvety, soft, low-twist texture for optimal comfort",
    longDesc: "Infused with zero-twist micro-loops to create an exceptionally light, fluffy surface. Gentle on relaxed skin after thermal or hydrotherapy sessions. Provides a cloud-like texture of unparalleled therapeutic softness.",
    img: "/collection/spa-towel.jpg",
    gsm: "450 - 700 GSM",
    size: "30 x 60 inch",
    material: "Linen-Cotton Blend",
    price: "Custom Bulk Quote",
    care: "Wash with warm water and liquid detergent. Tumble dry on air-fluff setting to preserve airy fibers."
  },
  {
    id: "beach-towel",
    name: "Beach Towel",
    desc: "Oversized, dynamic yarn-dyed flat woven front",
    longDesc: "Sun-resistant dye technology preserves vivid striping and designs against intense UV rays, salt water, and pool chemicals. Features a velour sheared face for sand-repelling properties and a reverse terry backing for supreme absorption.",
    img: "/collection/beach-towel.png",
    gsm: "450 - 600 GSM",
    size: "27 x 54 inch",
    material: "100% Combed Cotton",
    price: "Custom Bulk Quote",
    care: "Machine wash cold with like colors. Shake out dry sand prior to laundering. Tumble dry low."
  },
  {
    id: "salon-towel",
    name: "Salon Towel",
    desc: "Bleach-safe and chemical-resistant specialized weave",
    longDesc: "Specifically dyed using advanced vat-dyeing techniques to prevent discoloration from salon chemicals, hair dyes, and styling agents. Exceptionally absorbent, thin yet strong, and designed to wrap comfortably around wet hair.",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    gsm: "300 - 500 GSM",
    size: "16 x 27 inch",
    material: "100% Combed Cotton",
    price: "Custom Bulk Quote",
    care: "Machine wash warm. Bleach-safe and salon-chemical resistant. Low linting yarn preserves drain lines."
  },
  {
    id: "kitchen-towel",
    name: "Kitchen Towel",
    desc: "Tough, streak-free flat weave for culinary tasks",
    longDesc: "Dobby-woven with premium combed cotton to ensure zero lint residue on glass or silver. Highly flexible fiber structure offers reliable hand grip while removing warm cookware, wiping prep counters, or drying crystal.",
    img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=800",
    gsm: "300 - 400 GSM",
    size: "16 x 24 inch",
    material: "Linen-Cotton Blend",
    price: "Custom Bulk Quote",
    care: "Hot wash compatible. Tumble dry high. Ironing expands linen fibers and improves moisture uptake."
  },
  {
    id: "bar-mop",
    name: "Bar Mop",
    desc: "Heavy-duty ribbed utility towel for fast counter cleaning",
    longDesc: "Features a specialized ribbed textured weave that traps spills, coffee residue, and kitchen grease instantly. Sturdy double-sided construction provides high durability for commercial restaurant settings.",
    img: "/collection/bar-mop.png",
    gsm: "300 - 350 GSM",
    size: "16 x 19 inch",
    material: "Combed Ring-Spun Cotton",
    price: "Custom Bulk Quote",
    care: "Wash with warm water, high bleach concentration compatible. High temperature tumble dry to sanitize."
  },
  {
    id: "microfiber-towel",
    name: "Microfiber Towel",
    desc: "Ultra-fine synthetic fiber for polishing and detailing",
    longDesc: "Woven with advanced split-microfiber technology that acts as a dust magnet. Ideal for glass detailing, optical screens, and high-gloss surfaces. Absorbs up to 7 times its own weight in water without leaving scratches.",
    img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800",
    gsm: "300 - 400 GSM",
    size: "18 x 26 inch",
    material: "Combed Microfiber Terry Blend",
    price: "Custom Bulk Quote",
    care: "Machine wash cold with liquid detergent. DO NOT use bleach or fabric softener, as it destroys static wicking fibers. Air dry."
  },
  {
    id: "sports-towel",
    name: "Sports Towel",
    desc: "Elongated, super-light sweat absorbent companion",
    longDesc: "Engineered with long dimensions to loop perfectly around training equipment or sports bags. Offers high-velocity evaporation rates to keep you dry and comfortable during marathon workouts or golf matches.",
    img: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=800",
    gsm: "250 - 450 GSM",
    size: "16 x 40 inch",
    material: "Combed Cotton Blend",
    price: "Custom Bulk Quote",
    care: "Machine wash warm, tumble dry low. For sports performance, avoid wax-based softeners."
  },
  {
    id: "baby-hooded-towel",
    name: "Baby Hooded Towel",
    desc: "Hypoallergenic, ultra-soft organic hood wrapper",
    longDesc: "Crafted specifically for baby-soft sensitive skin. Features an integrated cozy corner hood to keep your baby's head warm and dry immediately after bath time. Exquisitely gentle combed fibers prevent skin friction.",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800",
    gsm: "300 - 500 GSM",
    size: "30 x 30 inch",
    material: "100% Organic Combed Cotton",
    price: "Custom Bulk Quote",
    care: "Launder with mild baby detergent on delicate warm cycle. Tumble dry low. Avoid chemical additives."
  },
  {
    id: "wash-mits",
    name: "Wash Mits",
    desc: "Contoured glove design for soft personal bathing comfort",
    longDesc: "Premium terry fabric shaped into an ergonomic hand glove to provide superior control during shower washing. Features an elasticized cuff to prevent slipping and double-sided loop pile for dynamic soap lathering.",
    img: "/collection/wash-mits.png",
    gsm: "400 - 700 GSM",
    size: "6 x 8 inch",
    material: "100% Egyptian Cotton",
    price: "Custom Bulk Quote",
    care: "Rinse thoroughly and hang dry after use. Machine wash hot with bleach periodically to prevent mildew."
  },
  {
    id: "bath-sheet",
    name: "Bath Sheet",
    desc: "Oversized luxurious full body cocoon wrapper",
    longDesc: "An expansive, indulgent bathing wrap that surpasses standard bath towels. Offers deep double-loop pile construction that completely envelops you in premium comfort. Truly a spa-grade master bath essential.",
    img: "/collection/bath-sheet.jpg",
    gsm: "500 - 700 GSM",
    size: "35 x 70 inch",
    material: "100% Egyptian Cotton",
    price: "Custom Bulk Quote",
    care: "Launder in warm water. Shake out before tumble drying on normal heat to fully expand the fibers."
  },
  {
    id: "dish-towel",
    name: "Dish Towel",
    desc: "Absorbent flat-weave cotton for streak-free dish drying",
    longDesc: "Tightly spun yarn prevents lint shedding on glass. Outstanding wicking properties ensure plates, cutlery, and culinary prep tables are dried quickly with premium non-abrasive action.",
    img: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800",
    gsm: "200 - 450 GSM",
    size: "15 x 27 inch",
    material: "100% Combed Cotton",
    price: "Custom Bulk Quote",
    care: "Wash with hot cycle. Use color-safe detergent. Hang to dry or tumble dry high."
  },
  {
    id: "pool-towel",
    name: "Pool Towel",
    desc: "Salt and chlorine resistant high-absorption loop design",
    longDesc: "Durable multi-twist yarn provides superb absorption. Dyed using chlorine-resistant pigments to ensure colors remain bright and vibrant throughout season-long outdoor lounge and deck exposures.",
    img: "/collection/pool-towel.png",
    gsm: "450 - 600 GSM",
    size: "30 x 60 inch",
    material: "100% Combed Cotton",
    price: "Custom Bulk Quote",
    care: "Rinse pool water prior to machine laundering. Tumble dry warm. Wash separately from light textiles."
  }
];
