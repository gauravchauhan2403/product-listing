import { useNavigate } from "react-router";
import { memo } from "react";
import Star from "../../assets/graph.png";

const ProductCard = ({product}) => {

  const navigate = useNavigate();

  return (
    <div
      className="border rounded-lg px-3 py-2 cursor-pointer hover:shadow-lg transition duration-200"
      onClick={() => navigate(`/product/${product.id}`)}
    >

      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="w-full h-40 object-cover mb-3"
      />

      <h3 className="font-semibold">
        {product.title}
      </h3>

      <span className=" flex">
        <p className="text-gray-600">
          ${product.price}
        </p>
        
        <span className="flex flex-wrap">
          <img className="h-5 w-18 mt-0.5 ml-2" src={Star} />
          <p className="text-black ml-1">
            ({product.rating})
          </p>
        </span>
      </span>

    </div>
  );
};

export default memo(ProductCard);