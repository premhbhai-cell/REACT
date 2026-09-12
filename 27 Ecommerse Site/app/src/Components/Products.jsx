import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLaoding] = useState(false);
  const navigate = useNavigate();

  const fecthData = async () => {
    setLaoding(true);
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data);
    setLaoding(false);
  };

  useEffect(() => {
    fecthData();
  }, []);

  if (loading)
    return (
      <Loader className="h-screen flex justify-center items-center overflow-hidden" />
    );

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="grid grid-cols-5 gap-5 p-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[300px]:grid-cols-1">
        {products.map((product) => {
          return (
            <div
              onClick={() => navigate(`/products/${product.id}`)}
              className="group bg-gray-700 rounded-lg p-4"
              key={product.id}
            >
              <img
                className="aspect-square object-contain p-8 group-hover:cursor-pointer"
                src={product.image}
                alt=""
              />

              <h1 className="text-xl font-medium text-white line-clamp-2 ">
                {product.title}
              </h1>

              <div className="flex flex-raw gap-1 my-2">
                <p className="bg-gray-300 h-full w-15 p-1 rounded-xl">
                  ⭐{product.rating.rate}
                </p>
                <p className="p-1 rounded-xl text-white">
                  {product.rating.count}
                </p>
              </div>

              <div className="flex justify-end">
                <p className="text-x text-green-400">
                  Mrp :- {product.price}rs
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
