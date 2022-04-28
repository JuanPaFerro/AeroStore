import { useEffect, useState } from "react";
import axios from "axios";

export function useGetAllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
  };

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`,
        config
      );
      setProducts(res.data);
    };
    fetchProducts();
    setLoading(false);
  }, []);

  return { products, loading };
}
