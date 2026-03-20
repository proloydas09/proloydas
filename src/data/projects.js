export const projects = [
  {
    id: 1,
    title: "Luxe Watches",
    category: "E-Commerce / E-Branding",
    image: `${import.meta.env.BASE_URL}luxe_watch.png`,
    description: "A premium e-commerce experience for high-end horology. This project focused on creating a digital storefront that mirrors the craftsmanship and prestige of luxury timepieces.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    challenges: "The main challenge was conveying the tactile quality of watch materials (polished steel, sapphire glass) through a digital screen.",
    solution: "We implemented high-resolution zoom capabilities and smooth, material-accurate animations that highlight the watch's details as the user interacts."
  },
  {
    id: 2,
    title: "Zenith Banking",
    category: "Fintech / App Design",
    image: `${import.meta.env.BASE_URL}zenith_banking.png`,
    description: "Modernizing personal finance management. Zenith is a mobile-first banking application designed to make financial data accessible, actionable, and beautiful.",
    tech: ["React Native", "TypeScript", "D3.js", "Recoil"],
    challenges: "Financial data can be overwhelming. The goal was to simplify complex transaction histories into intuitive visual summaries.",
    solution: "A custom data visualization engine was built using D3.js to create interactive spending charts that help users better understand their habits at a glance."
  },
  {
    id: 3,
    title: "Aether Real Estate",
    category: "Proptech / Web Experience",
    image: `${import.meta.env.BASE_URL}aether_estate.png`,
    description: "A futuristic property search platform that uses immersive visuals to help users find their next home. Aether redefines the real estate browsing experience.",
    tech: ["Next.js", "Three.js", "GSAP", "Prismic"],
    challenges: "Integrating 3D virtual tours seamlessly into a standard web browsing flow without sacrificing performance.",
    solution: "Leveraged Three.js with optimized low-poly models and smart asset preloading to ensure smooth transitions between static listings and 3D tours."
  },
  {
    id: 4,
    title: "Organic Harvest",
    category: "Sustainability / UX Research",
    image: `${import.meta.env.BASE_URL}organic_harvest.png`,
    description: "Connecting local farmers directly to urban consumers. Organic Harvest is a platform that simplifies the sustainable food supply chain.",
    tech: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    challenges: "Building trust between urban buyers and rural sellers who may not be tech-savvy.",
    solution: "Implemented a transparent 'Farm-to-Table' tracking system and a simplified vendor dashboard that makes listing produce as easy as taking a photo."
  }
];
