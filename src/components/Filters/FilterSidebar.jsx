import CategoryFilter from "./CategoryFilter/CategoryFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import BrandFilter from "./BrandFilter/BrandFilter";

const FilterSidebar = ({ category, onCategoryChange, brands,
  selectedBrands,
  setSelectedBrands,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice}) => {
  return (
    <div className="w-64 border rounded-lg p-4 h-fit bg-gray-100">

      <h2 className="text-xl font-semibold mb-4">
        Filters
      </h2>

      <CategoryFilter
        category={category}
        onChange={onCategoryChange}
      />
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />

      <BrandFilter
        brands={brands}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />

    </div>
  );
};

export default FilterSidebar;