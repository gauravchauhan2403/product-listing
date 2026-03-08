import ProductCard from "../ProductCard/ProductCard";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

const ProductGrid = ({ products, loading, error }) => {

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}

      </div>
    )
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
};

export default ProductGrid;