import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export const useFetchProducts = (shouldFetch: boolean) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!shouldFetch) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=10"
        );
        const data = await response.json();
        console.log('',data);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [shouldFetch]);

  return { products, loading, error };
};
