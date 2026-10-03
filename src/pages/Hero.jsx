import React, { useEffect, useState } from "react";
import { Share2, Heart } from "lucide-react";


const Hero = ({products , setProducts}) => {
  

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    console.log(data)
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="h-150 w-100 border-2 rounded-2xl border-gray-500 shadow-2xl overflow-hidden bg-white"
        >

          <div className="h-[50%] bg-[#A4E4FE] w-full flex flex-col items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-64 h-[70%] object-contain rounded-4xl"
            />
          </div>

          <div>
            <h1 className="font-semibold text-xl mt-2 ml-2 uppercase">{product.title}</h1>
          </div>

         
          <div className="flex items-center justify-between px-3 mt-2 ">
            <h2 className="font-extrabold text-2xl">${product.price}</h2>
            <li className="text-gray-400 flex items-center gap-3">
              <ul><Share2 /></ul>
              <ul><Heart /></ul>
            </li>
          </div>

         
          <h2 className="mt-2 text-xl font-semibold uppercase px-3">
            {product.category}
          </h2>

        
          <p className="mt-3 text-gray-500 px-3">
            {product.description}
          </p>

          <button className="px-6 py-2 mt-6 mb-4 ml-3 text-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hero;
