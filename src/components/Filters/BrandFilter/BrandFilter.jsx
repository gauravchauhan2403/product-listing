const BrandFilter = ({
  brands,
  selectedBrands,
  setSelectedBrands
}) => {

  const toggleBrand = (brand) => {

    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((b) => b !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }

  };

  return (

    <div className="mb-6">

      <h3 className="font-semibold mb-2">
        Brand
      </h3>

      <div className="flex flex-col gap-2">

        {brands.map((brand) => (

          <label key={brand}>

            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
            />

            {" "} {brand}

          </label>

        ))}

      </div>

    </div>

  );
};

export default BrandFilter;