import { useState } from "react";
import { useEffect } from "react";
// import { axiosInstance_store } from "../services/lib/axios.config";
import Card from "../../../components/Card/Card";

type ProductResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
const ProductList = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);
  return (
    <div className="pt-30 px-6">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-2">Filter</div>
        <div className="col-span-10">
          <Card products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
