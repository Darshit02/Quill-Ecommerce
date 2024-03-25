import React, { useEffect } from "react";
import CartItems from "./CartItems";
import { CircleCheckBig } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };
const Cartprice = cart.cart?.totalPrice - cart.cart?.discounte;
  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);
  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems?.map((item) => (
            <CartItems item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-5  ">
          <div className="border px-8 py-3 rounded-md drop-shadow-md">
            <p className="uppercase opacity-60 font-bold pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-gray-900">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart.cart?.discounte}</span>
              </div>
              <div className="flex justify-between pt-3 text-gray-900">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-gray-900">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{Cartprice}
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center px-3 py-2 bg-blue-500 my-7  rounded-md text-white">
              <button
                onClick={handleCheckOut}
                className="text-md font-semibold flex justify-center items-center gap-3"
              >
                <CircleCheckBig className="h-4 w-4" />
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
