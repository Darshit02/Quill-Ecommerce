import React from "react";
import "./productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer border border-gray-300">
      <div className="h-[20rem] hover:drop-shadow-md">
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-65">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.selling_price}</p>
          <p className="line-through text-gray-500">{product.price}</p>
          <p className="text-green-600 font-semibold">{product.disscount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
