import { useNavigate } from "react-router";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type CardProps = {
  products: Product[];
};
export default function Card({ products }: CardProps) {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-x-6 gap-y-6 mx-2 my-2 items-stretch">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="group relative col-span-2 shadow-lg p-4 rounded-lg border border-gray-200 h-full flex flex-col"
          >
            <img
              alt={product.image}
              src={product.image}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="flex flex-col flex-grow mt-4">
              <div className="flex-grow">
                <h3 className="text-md font-bold text-slate-600">
                  <span aria-hidden="true" className="absolute inset-0 " />
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-3 overflow-hidden">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm font-medium text-gray-900 mt-4">
                  {product.price * 1000}
                </p>
                {/* <button className="px-3 py-1 bg-blue-600 text-white rounded">
                  Cart
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
