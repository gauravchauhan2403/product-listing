import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getProductById } from "../../services/productService";
import BackArrow from "../../assets/back.png";
import Star from "../../assets/graph.png";

const ProductDetailPage = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {

    try {
      setLoading(true);
      setError(null);

      const data = await getProductById(id);
      setProduct(data);

    } catch (err) {
      setError("Failed to load product" + err );
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  if (!product) {
    return null;
  }

  return (

    <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 border px-4 py-2 rounded"
      >
        <span className="flex text-center align-bottom ">
          <img className="h-5 w-5 mt-0.5 mr-0.5" src={BackArrow} title="back arrow icon" />
          <p>Back</p>
        </span>
      </button>

      <div className="flex gap-10">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-96 h-96 object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>
          <span className="flex flex-wrap mt-2">
            <p className="text-2xl text-gray-600">
              ${product.price}
            </p>
            <span className="flex mt-1 ml-6">
              <img className="h-5 w-18 mt-0.5 ml-2" src={Star} />
              <p className="text-black">
                ({product.rating})
              </p>
            </span>
          </span>
          <p className="mt-4">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p className="mt-4 text-2xl font-bold">Description</p>
          <p className=" text-gray-700">
            {product.description}
          </p>
          <p className="mt-4 text-2xl font-bold">Reviews</p>
          <p className="mt-4">
            <span className="flex">
              <strong>Emily:</strong>
              <span className="flex ml-6">
                <img className="h-5 w-18 mt-0.5 ml-2" src={Star} />
                <p className="text-black">
                  ({product.rating})
                </p>
              </span>
            </span>
            <p className=" text-gray-700 mt-0.5" >Excellent Product, Highly Recommended! </p>
          </p>
        </div>
      </div>
    </div>

  );
};

export default ProductDetailPage;