import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../services/productService";

const useProducts = (category) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [limit] = useState(8);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchProducts = async () => {

    try {
      setLoading(true);
      setError(null);

      let data;

      if (category && category !== "all") {
        data = await getProductsByCategory(category);
      } else {
        data = await getProducts(limit, skip);
      }

      setProducts(data.products);
      setTotal(data.total);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    fetchProducts();
  }, [skip, category]);

  return {
    products,
    loading,
    error,
    limit,
    skip,
    total,
    setSkip
  };
};

export default useProducts;