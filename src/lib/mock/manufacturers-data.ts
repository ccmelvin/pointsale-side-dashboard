// Helper function to generate random dates within a range
const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Generate random number within a range
const randomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// List of countries for random selection
const countries = [
  'United States', 'China', 'Germany', 'Japan', 'South Korea', 
  'Taiwan', 'United Kingdom', 'France', 'Italy', 'Canada'
];

// Generate a list of manufacturers
export const manufacturers = Array.from({ length: 20 }, (_, i) => {
  const id = i + 1;
  const name = `Manufacturer ${id}`;
  const country = countries[Math.floor(Math.random() * countries.length)];
  const established = randomDate(new Date(1950, 0, 1), new Date(2020, 0, 1));
  const rating = (3 + Math.random() * 2).toFixed(1); // Rating between 3.0 and 5.0
  const totalProducts = randomInRange(5, 100);
  const annualRevenue = randomInRange(1, 500) * 1000000; // $1M to $500M
  
  return {
    id,
    name,
    country,
    established: established.getFullYear(),
    rating: parseFloat(rating),
    totalProducts,
    annualRevenue,
    contactInfo: {
      email: `contact@manufacturer${id}.com`,
      phone: `+1-${randomInRange(200, 999)}-${randomInRange(100, 999)}-${randomInRange(1000, 9999)}`,
      website: `https://manufacturer${id}.com`
    },
    onTimeDeliveryRate: randomInRange(75, 99),
    qualityScore: randomInRange(60, 100)
  };
});

// Generate product lines for each manufacturer
export const manufacturerProducts = manufacturers.flatMap(manufacturer => {
  return Array.from({ length: randomInRange(3, 10) }, (_, i) => {
    const productId = `${manufacturer.id}-${i + 1}`;
    const categories = ['Electronics', 'Mechanical', 'Plastics', 'Textiles', 'Chemicals', 'Metals', 'Components'];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const name = `${category} Product ${i + 1}`;
    const unitPrice = randomInRange(1, 1000);
    
    return {
      id: productId,
      manufacturerId: manufacturer.id,
      name,
      category,
      unitPrice,
      leadTime: randomInRange(1, 30)
    };
  });
});

export default { manufacturers, manufacturerProducts };
