import { IconButton } from "@mui/material";
import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItems = ({item}) => {
  const dispatch = useDispatch();
 const handleUpdateCartItem = (num) => {
    console.log("item", item);
    const data = {
      cartItemId: item._id,
      data: {
        quantity: item.quantity + num,
      },
    };
    console.log("quantitydata", data.quantity);
    dispatch(updateCartItem(data));
    console.log("data", data);
 }
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item?._id));
  }
  return (
    <div className="p-5  mt-5 mx-4 shadow-md border rounded-md">
      <div className="flex items-center">
        <div className="w-[7rem] h-[7rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src={item.product.imageUrl}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size : {item.size},White</p>
          <p className="opacity-70 mt-2">Seller : {item.product.brand}</p>
          <div className="flex space-x-5 items-center text-base lg:text-base text-gray-900 mt-10">
            <p className="font-semibold">₹{item.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item.price}</p>
            <p className="text-green-600 font-semibold">{item.product.discountedPersent}% off</p>
          </div>
          <p>{item.quantity}</p>
        </div>
      </div>
      <div className="flex items-center justify-between lg:space-x-10 pt-4">
        <div className=" flex items-center space-x-2">
          <IconButton onClick={() => handleUpdateCartItem(-1)}>
            <CircleMinus />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton  onClick={() => handleUpdateCartItem(+1)}>
            <CirclePlus />
          </IconButton>
        </div>
        <div className="border border-red-500 bg-red-500 px-3 py-2 rounded-md">
          <button onClick={()=> handleRemoveCartItem()}  className="text-white flex  justify-center items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
