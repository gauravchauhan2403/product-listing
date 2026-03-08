import { useState, useEffect } from "react";
import FilterSidebar from "../../components/Filters/FilterSidebar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Pagination from "../../components/Pagination/Pagination";
import useProducts from "../../hooks/useProducts";
import { applyFilters, extractUniqueBrands } from "../../utils/filterUtils";

const ProductListingPage = () => {

  const [category, setCategory] = useState("all");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

   const {
    products,
    loading,
    error,
    limit,
    skip,
    total,
    setSkip
  } = useProducts(category);

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSkip(0); // reset pagination
  };

  const filteredProducts = applyFilters(
  products,
  category,
  selectedBrands,
  minPrice,
  maxPrice
  );

  const brands = extractUniqueBrands(products);

  useEffect(() => {
  setSkip(0);
}, [category, selectedBrands, minPrice, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Product Listing
      </h1>

      <div className="flex gap-6">

        {/* Filters */}
        <FilterSidebar
          category={category}
          onCategoryChange={handleCategoryChange}
          brands={brands}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* Products */}
        <div className="flex-1">
          <ProductGrid
            products={filteredProducts}
            loading={loading}
            error={error}
          />

          <Pagination
            total={total}
            limit={limit}
            skip={skip}
            setSkip={setSkip}
          />
        </div>

      </div>

    </div>
  );
};

export default ProductListingPage;