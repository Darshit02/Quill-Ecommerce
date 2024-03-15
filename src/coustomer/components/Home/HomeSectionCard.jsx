import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col justify-center bg-white rounded-md shadow-md overflow-hidden w-[15rem] mx-3 border border-gray-400 drop-shadow-md">
      <div className="">
        <img
          className="object-cover object-top w-full h-[20rem]"
          src={product.image}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
