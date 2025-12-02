export const products = [
  {
    id: 1,
    name: 'Premium Headlight Assembly',
    description: 'High-quality LED headlight assembly with excellent visibility and durability',
    price: 4500,
    originalPrice: 5500,
    discount: 18,
    category: 'Lighting',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1549207107-2704df6b92ab?q=80&w=400&h=400&fit=crop',
    specifications: {
      material: 'High-grade Polycarbonate',
      warranty: '2 Years',
      compatibility: 'Universal Fit',
      type: 'LED'
    },
    features: [
      'Bright LED illumination',
      'Weather-resistant design',
      'Easy installation',
      'Long-lasting durability'
    ]
  },
  {
    id: 2,
    name: 'Car Side Mirror Set',
    description: 'Aerodynamic side mirrors with integrated turn signals and heating',
    price: 3200,
    originalPrice: 4000,
    discount: 20,
    category: 'Mirrors',
    image: 'https://images.unsplash.com/photo-1599476140806-f98d94d78c52?q=80&w=400&h=400&fit=crop',
    specifications: {
      material: 'ABS Plastic',
      warranty: '1 Year',
      compatibility: 'Multiple Models',
      features: 'Heated, Turn Signal'
    },
    features: [
      'Integrated turn signals',
      'Heated glass',
      'Aerodynamic design',
      'Easy mounting'
    ]
  },
  {
    id: 3,
    name: 'PVC Front Bumper',
    description: 'Durable PVC bumper with superior impact resistance and sleek design',
    price: 6800,
    category: 'Body Parts',
    isNew: true,
    image: '/images/products/pvc-bumper.webp',
    specifications: {
      material: 'High-Impact PVC',
      warranty: '3 Years',
      compatibility: 'Custom Fit',
      finish: 'Matte/Glossy'
    },
    features: [
      'Impact resistant',
      'UV protected',
      'Custom color options',
      'Perfect fit guarantee'
    ]
  },
  {
    id: 4,
    name: 'Brake Light Assembly',
    description: 'LED brake lights with quick response time and enhanced safety',
    price: 2100,
    originalPrice: 2800,
    discount: 25,
    category: 'Lighting',
    image: 'https://images.unsplash.com/photo-1614032431701-5c4b3993641e?q=80&w=1025&auto=format&fit=crop',
    specifications: {
      material: 'Polycarbonate Lens',
      warranty: '1 Year',
      compatibility: 'Universal',
      type: 'LED'
    },
    features: [
      'Instant illumination',
      'Energy efficient',
      'Waterproof design',
      'Easy replacement'
    ]
  },
  {
    id: 5,
    name: 'Rubber Door Seal Kit',
    description: 'Complete rubber seal kit for all doors, ensuring noise and water protection',
    price: 1500,
    category: 'Rubber Parts',
    image: '/images/products/rubber-door-seal.webp',
    specifications: {
      material: 'EPDM Rubber',
      warranty: '2 Years',
      compatibility: 'All Models',
      pieces: '4-piece set'
    },
    features: [
      'Noise reduction',
      'Water tight seal',
      'Weather resistant',
      'Easy installation'
    ]
  },
  {
    id: 6,
    name: 'Car Air Filter',
    description: 'High-efficiency air filter for improved engine performance',
    price: 800,
    originalPrice: 1000,
    discount: 20,
    category: 'Mechanical',
    image: '/images/products/car-air-filter.webp',
    specifications: {
      material: 'Multi-layer Filter Media',
      warranty: '6 Months',
      compatibility: 'Multiple Makes',
      efficiency: '99.5%'
    },
    features: [
      'Enhanced filtration',
      'Improved fuel efficiency',
      'Easy to replace',
      'Long service life'
    ]
  },
  {
    id: 7,
    name: 'Door Handle Set',
    description: 'Premium chrome-finished door handles with smooth operation',
    price: 2500,
    category: 'Body Parts',
    image: '/images/products/door-handle-set.webp',
    specifications: {
      material: 'Chrome-plated ABS',
      warranty: '1 Year',
      compatibility: 'Model Specific',
      finish: 'Chrome'
    },
    features: [
      'Corrosion resistant',
      'Smooth operation',
      'Premium finish',
      'Direct replacement'
    ]
  },
  {
    id: 8,
    name: 'Tail Light Assembly',
    description: 'Modern LED tail lights with distinctive design and superior brightness',
    price: 3800,
    originalPrice: 4500,
    discount: 15,
    category: 'Lighting',
    isNew: true,
    image: '/images/products/tail-light-assembly.webp',
    specifications: {
      material: 'Polycarbonate',
      warranty: '2 Years',
      compatibility: 'Universal Fit',
      type: 'LED'
    },
    features: [
      'Bright LED lights',
      'Modern design',
      'Long lifespan',
      'Weather sealed'
    ]
  },
  {
    id: 9,
    name: 'Engine Oil Filter',
    description: 'Premium oil filter for optimal engine protection and performance',
    price: 600,
    category: 'Mechanical',
    image: '/images/products/engine-oil-filter.webp',
    specifications: {
      material: 'Synthetic Filter Media',
      warranty: '1 Year',
      compatibility: 'Multiple Engines',
      efficiency: '99%'
    },
    features: [
      'Superior filtration',
      'Extended service intervals',
      'Anti-drain back valve',
      'Easy installation'
    ]
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'Lighting', name: 'Lighting' },
  { id: 'Mirrors', name: 'Mirrors' },
  { id: 'Body Parts', name: 'Body Parts' },
  { id: 'Rubber Parts', name: 'Rubber Parts' },
  { id: 'Mechanical', name: 'Mechanical Parts' }
];