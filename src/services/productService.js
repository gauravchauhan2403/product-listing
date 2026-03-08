/* eslint-disable no-useless-catch */
import { BASE_URL } from "../constants/api";

/** Fetch products with pagination */
export const getProducts = async (limit = 10, skip = 0) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?limit=${limit}&skip=${skip}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};


/** Fetch all categories */
export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};


/** Fetch products by category */
export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products/category/${category}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch category products");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};


/** Fetch single product */
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};