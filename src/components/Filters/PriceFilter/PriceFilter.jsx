const PriceFilter = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice
}) => {

  return (

    <div className="mb-6">

      <h3 className="font-semibold mb-2">
        Price Range
      </h3>

      <div className="flex gap-2">

        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 w-1/2 rounded bg-white"
        />

        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 w-1/2 rounded bg-white"
        />

      </div>

    </div>

  );
};

export default PriceFilter;