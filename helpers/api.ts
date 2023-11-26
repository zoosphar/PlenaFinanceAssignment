import { Product } from "../utils/interfaces.util";

export const fetchRecommendedProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const { products }: { products: Product[] } = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};