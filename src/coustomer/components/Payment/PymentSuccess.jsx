import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useParams } from "react-router-dom";
import { updatePayment } from "../../../State/Payment/Action";
import { LucideCheckCheck } from "lucide-react";
import OrderTracker from "../Order/OrderTracker";
import { Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const PymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);
  useEffect(() => {
    if (paymentId) {
      const data = {
        orderId,
        paymentId,
      };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [paymentId, orderId]);

  return (
    <div className="mx-5 lg:mx-14 my-10">
      <div className="flex justify-between rounded-md w-[25rem] px-4 py-1 bg-green-500 gap-3 text-white/90">
        <LucideCheckCheck className="h-6 w-6" />
        <div className="flex justify-start font-semibold text-sm flex-col">
          <h1> PAYMENT SUCCESSFULL</h1>
          <p>
            Your payment will be successfully paid your order reah you soon.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-sm font-semibold my-7">Show your order status :</p>
        <OrderTracker activeStep={1} />
      </div>
      <Grid container className="space-y-5 py-5 pt-20">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            className="flex justify-between items-cente px-10 py-4 border border-gray-200 rounded-md shadow-md gap-3"
          >
            <Grid item sx={6}>
              <div className="flex cursor-pointer">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product?.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold">
                    Size : {item.size}
                  </p>
                  <p>seller : {item.product.brand}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <AddressCard address={order.order?.shippAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PymentSuccess;
