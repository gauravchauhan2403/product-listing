import { useEffect, useState } from "react";
import { getCategories } from "../../../services/productService";

const CategoryFilter = ({ category, onChange }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (

    <div className="mb-6">
      <h3 className="font-semibold mb-2">
        Category
      </h3>
      <select
        value={category}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border p-2 rounded bg-white"
      >
        <option value="all">All</option>

        {categories.map((cat) => (
          <option key={cat.slug} value={cat.slug}>
            {cat.name}
          </option>
        ))}

      </select>

    </div>

  );
};

export default CategoryFilter;