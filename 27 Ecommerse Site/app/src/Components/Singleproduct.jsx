import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "./Navbar";

const Singleproduct = () => {
  const { id } = useParams();
  const [singleProducts, setSingleProducts] = useState({});
  const [loading, setLaoding] = useState(false);

  const fecthData = async () => {
    setLaoding(true);
    const response = await axios(`https://fakestoreapi.com/products/${id}`);
    setSingleProducts(response.data);
    setLaoding(false);
  };

  useEffect(() => {
    fecthData();
  }, [id]);

  if (loading)
    return (
      <Loader className="h-screen flex justify-center items-center overflow-hidden" />
    );

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 grid grid-cols-2 gap-12 max-[700px]:grid-cols-1">
          {/* Product Image */}
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-8">
            <img
              className="w-full h-[450px] object-contain"
              src={singleProducts.image}
              alt={singleProducts.title}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-500 uppercase mb-3">
              {singleProducts.category}
            </p>

            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-5">
              {singleProducts.title}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-medium">
                ⭐ {singleProducts.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singleProducts.rating?.count} reviews)
              </span>
            </div>

            <p className="text-3xl font-bold text-gray-900 mb-6">
              ₹{singleProducts.price}
            </p>

            <p className="text-gray-600 leading-7 mb-8">
              {singleProducts.description}
            </p>

            <div className="flex gap-5 p-12">
              <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
                Add to Cart
              </button>
              <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition">
                But Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
