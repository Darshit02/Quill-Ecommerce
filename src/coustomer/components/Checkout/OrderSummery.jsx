import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { ShieldCheck, Truck } from "lucide-react";
import CartItems from "../Cart/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { store } from "../../../State/store";
import OrderCard from "./OrderCard";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummery = () => {
  const dispatch = useDispatch();
  const loaction = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(loaction.search);
  const orderId = searchParams.get("orderId");
  const addrress = order.order?.shippAddress;

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCheckout = () => {
    dispatch(createPayment(orderId))
  }
  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border border-gray-300">
        <h1 className="mb-4 text-lg font-semibold flex gap-2 items-center">
          Your Shipping Address :{" "}
          <span>{/* <Truck className='h-5 w-5'/> */}</span>{" "}
        </h1>
        <AddressCard address={addrress} />
      </div>
      <div className="mt-5">
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <OrderCard item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-5  ">
            <div className="border px-8 py-3 rounded-md drop-shadow-md">
              <p className="uppercase opacity-60 font-bold pb-4">
                Price details
              </p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-gray-900">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹{order.order?.discounte}
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-gray-900">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-gray-900">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ₹{order.order?.totalPrice - order.order?.discounte}
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center px-3 py-2 bg-blue-500 my-7  rounded-md text-white">
                <button onClick={handleCheckout} className="text-md font-semibold flex justify-center items-center gap-3">
                  <ShieldCheck className="h-4 w-4" />
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
