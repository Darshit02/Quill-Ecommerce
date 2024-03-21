import React from "react";
import "./productcard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer border border-gray-300"
    >
      <div className="h-[20rem] hover:drop-shadow-md">
        <img
          src={product.imageUrl}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-65">{product.title}</p>
          <p>{product.title}</p>
          <p>{product.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through text-gray-500">{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountedPersent}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
