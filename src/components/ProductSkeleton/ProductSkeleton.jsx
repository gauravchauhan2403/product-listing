const ProductSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 animate-pulse">

      <div className="bg-gray-300 h-40 w-full rounded mb-4"></div>

      <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>

      <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded"></div>

      <div className="bg-gray-300 h-6 w-1/4 rounded"></div>

    </div>
  );
};

export default ProductSkeleton;