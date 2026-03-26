const products = [

  // 🔑 Keychains
  {
    id: "KC-001",
    name: "Threading Keychain",
    price: 120,
    image: "/images/KeyChain_1.jpg",
    category: "keychain",
    caption: "✨ Cute & Personalized",
    description: "Handmade Threading Keychain perfect for gifting and daily use."
  },
  {
    id: "KC-002",
    name: "Threading Keychain",
    price: 120,
    image: "/images/KeyChain_2.jpg",
    category: "keychain",
    caption: "💖 Custom Memory Keychain",
    description: "Carry your favorite memories with this stylish Threading Keychain."
  },
  {
    id: "KC-003",
    name: "Threading Keychain",
    price: 120,
    image: "/images/KeyChain_3.jpg",
    category: "keychain",
    caption: "🎁 Perfect Gift Choice",
    description: "Ideal gift for friends and couples."
  },
  {
    id: "KC-004",
    name: "Threading Keychain",
    price: 120,
    image: "/images/KeyChain_4.jpg",
    category: "keychain",
    caption: "✨ Elegant Design",
    description: "Beautifully crafted premium Threading Keychain."
  },
  {
    id: "KC-005",
    name: "Threading Keychain",
    price: 120,
    image: "/images/KeyChain_5.jpg",
    category: "keychain",
    caption: "💎 Premium Quality",
    description: "Durable and aesthetic everyday keychain."
  },
  {
    id: "KC-006",
    name: "Threading Keychain",
    price: 120,
    image: "/images/KeyChain_6.jpg",
    category: "keychain",
    caption: "🌟 Trendy Look",
    description: "Modern and stylish design."
  },
  {
    id: "KC-007",
    name: "Budget Keychain",
    price: 70,
    image: "/images/KeyChain_7.jpg",
    category: "keychain",
    caption: "💰 Affordable & Stylish",
    description: "Budget-friendly keychain with good quality."
  },
  {
    id: "KC-008",
    name: "Budget Keychain",
    price: 120,
    image: "/images/KeyChain_8.jpg",
    category: "keychain",
    caption: "💰 Affordable & Stylish",
    description: "Budget-friendly Letters keychain with good quality."
  },

  // ⏰ Clocks
  {
    id: "CLK-001",
    name: "Resin Wall Clock",
    price: 800,
    image: "/images/clock_1.jpg",
    category: "clock",
    caption: "⏰ Elegant Wall Decor",
    description: "Premium resin clock for interiors."
  },
  {
    id: "CLK-002",
    name: "Resin Wall Clock",
    price: 800,
    image: "/images/clock_2.jpg",
    category: "clock",
    caption: "🏡 Stylish Interior Piece",
    description: "Perfect modern home decor."
  },
  // {
  //   id: "CLK-003",
  //   name: "Resin Wall Clock",
  //   price: 800,
  //   image: "/images/clock_3.jpg",
  //   category: "clock",
  //   caption: "✨ Luxury Look",
  //   description: "Adds premium aesthetic."
  // },
   {
    id: "CLK-004",
    name: "Resin Wall Clock",
    price: 800,
    image: "/images/clock_4.jpg",
    category: "clock",
    caption: "✨ Luxury Look",
    description: "Adds premium aesthetic."
  },
   {
    id: "CLK-005",
    name: "Resin Wall Clock",
    price: 800,
    image: "/images/clock_5.jpg",
    category: "clock",
    caption: "✨ Luxury Look",
    description: "Adds premium aesthetic."
  },

  // 📱 Custom
  {
    id: "CUS-001",
    name: "Resin Mobile Case",
    price: 600,
    image: "/images/Mobilecase_1.jpg",
    category: "custom",
    caption: "📱 Your Style",
    description: "Customized with your photos."
  },

  {
    id: "CUS-002",
    name: "Resin Name Board",
    price: 500,
    image: "/images/name_board_1.jpg",
    category: "custom",
    caption: "💡 Personalized",
    description: "LED name board customization."
  },

  {
    id: "CUS-003",
    name: "Resin Photo Frame",
    price: 700,
    image: "/images/resin_frame.jpg",
    category: "custom",
    caption: "🖼 Preserve Memories",
    description: "Custom photo frame design."
  },

  {
    id: "CUS-004",
    name: "Logo Patch + Magnet",
    price: 220,
    image: "/images/patch_1.jpg",
    category: "custom",
    caption: "🏷 Branding",
    description: "Custom logo patch."
  },

  // 🌻 Gifts
  {
    id: "GFT-001",
    name: "Sunflower Decor",
    price: 300,
    image: "/images/sunflower.jpg",
    category: "gifts",
    caption: "🌻 Bright & Aesthetic",
    description: "Desk decor gift."
  },
  {
    id: "GFT-002",
    name: "Flower Bouquet",
    price: 150,
    image: "/images/flower_bouqet.jpg",
    category: "gifts",
    caption: "💐 Cute Gift",
    description: "Handmade bouquet."
  },
  {
    id: "GFT-003",
    name: "Premium Bouquet",
    price: 200,
    image: "/images/flower_bouqet_2.jpg",
    category: "gifts",
    caption: "🌸 Premium Gift",
    description: "Elegant bouquet."
  },
  {
    id: "GFT-004",
    name: "Luxury Bouquet",
    price: 800,
    image: "/images/bouquet_1.jpg",
    category: "gifts",
    caption: "🌷 Luxury Gift",
    description: "Premium celebration bouquet."
  },

  // 💇 Accessories
  {
    id: "ACC-001",
    name: "Hair Clips",
    price: 25,
    image: "/images/Hairclips_1.jpg",
    category: "accessories",
    caption: "🎀 Daily Wear",
    description: "Stylish hair clips."
  },
  {
    id: "ACC-002",
    name: "Combo Hair Clips",
    price: 120,
    image: "/images/combo_clips_1.jpg",
    category: "accessories",
    caption: "✨ Combo Pack",
    description: "Multiple clips set."
  },
  {
    id: "ACC-003",
    name: "Flower Pair",
    price: 120,
    image: "/images/flowerpair.jpg",
    category: "accessories",
    caption: "🌸 Elegant Pair",
    description: "Stylish flower accessories."
  },
  {
    id: "ACC-004",
    name: "Premium Clips",
    price: 150,
    image: "/images/combo_clips_2.jpg",
    category: "accessories",
    caption: "💎 Premium Set",
    description: "High-quality clips."
  },
  {
    id: "ACC-005",
    name: "Hair Clips Set",
    price: 25,
    image: "/images/Hairclips_2.jpg",
    category: "accessories",
    caption: "🌈 Trendy Clips",
    description: "Colorful everyday clips."
  },

  // ❗ Custom Orders
  {
    id: "CUS-005",
    name: "Customized Photo Frame",
    price: null,
    image: "/images/customized_photo_fram_1.jpg",
    category: "custom",
    custom: true,
    caption: "🖼 Fully Customized",
    description: "Price depends on requirement."
  },
  {
    id: "CUS-006",
    name: "Return Gifts",
    price: null,
    image: "/images/return_gifts_1.jpg",
    category: "custom",
    custom: true,
    caption: "🎁 Bulk Orders",
    description: "Price based on quantity."
  },
  {
    id: "CUS-007",
    name: "Rose Preservation",
    price: null,
    image: "/images/Rose_preservation_1.jpg",
    category: "custom",
    custom: true,
    caption: "🌹 Forever Memory",
    description: "Preserve your roses."
  },
  // {
  //   id: "CUS-008",
  //   name: "Celebration Gifts",
  //   price: null,
  //   image: "/images/customized_celebration_gifts_1.jpg",
  //   category: "custom",
  //   custom: true,
  //   caption: "🎉 Custom Gifts",
  //   description: "For all occasions."
  // },
  {
    id: "CUS-009",
    name: "Gifts",
    price: null,
    image: "/images/customized_celebration_gifts_1.jpg",
    category: "custom",
    custom: true,
    caption: "🎉 Custom Gifts",
    description: "For all occasions."
  },
  {
    id: "CUS-010",
    name: "Return Gifts",
    price: null,
    image: "/images/return_gifts_2.jpg",
    category: "custom",
    custom: true,
    caption: "🎁 Bulk Orders",
    description: "Price based on quantity."
  },

];

export default products;