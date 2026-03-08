export const applyFilters = (
  products,
  category,
  brands,
  minPrice,
  maxPrice
) => {

  let filtered = [...products];

  // Category filter
  if (category && category !== "all") {
    filtered = filtered.filter(
      (product) => product.category === category
    );
  }

  // Brand filter
  if (brands.length > 0) {
    filtered = filtered.filter((product) =>
      brands.includes(product.brand)
    );
  }

  // Price filter
  if (minPrice) {
    filtered = filtered.filter(
      (product) => product.price >= minPrice
    );
  }

  if (maxPrice) {
    filtered = filtered.filter(
      (product) => product.price <= maxPrice
    );
  }

  return filtered;
};

// for getting individual brand
export const extractUniqueBrands = (products) => {

  const brands = products.map((p) => p.brand);

  return [...new Set(brands)];

};