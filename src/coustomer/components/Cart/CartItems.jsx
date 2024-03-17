import { Button, IconButton } from "@mui/material";
import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";
import React from "react";

const CartItems = () => {
  return (
    <div className="p-5  mt-5 mx-4 shadow-md border rounded-md">
      <div className="flex items-center">
        <div className="w-[7rem] h-[7rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://img.freepik.com/free-photo/online-fashion-shopping-collage_23-2150535821.jpg?size=626&ext=jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Stunning Design</p>
          <p className="opacity-70">Size : L,White</p>
          <p className="opacity-70 mt-2">Seller : Zudio</p>
          <div className="flex space-x-5 items-center text-base lg:text-base text-gray-900 mt-10">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between lg:space-x-10 pt-4">
        <div className=" flex items-center space-x-2">
          <IconButton>
            <CircleMinus />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton>
            <CirclePlus />
          </IconButton>
        </div>
        <div className="border border-red-500 bg-red-500 px-3 py-2 rounded-md">
          <button className="text-white flex justify-center items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
