import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Star } from "lucide-react";

const OrderDetail = () => {
  return (
    <div className="lg:px-10 px-5">
      <div>
        <h1 className="text-xl font-bold py-8">Delivery Address :</h1>
        <AddressCard />
      </div>
      <div className="py-10 border border-gray-300 rounded-md my-3">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        <Grid
          item
          container
          className="shadow-md rounded-md p-5 border border-gray-300"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex gap-4">
              <img
                className="w-[6rem] h-[6rem] object-cover object-top"
                src="https://img.freepik.com/free-photo/online-fashion-shopping-collage_23-2150535821.jpg?size=626&ext=jpg"
                alt=""
              />
              <div className="space-y-2">
                <p className="font-semibold">Stunning Design</p>
                <p className="space-x-5 text-gray-500">
                  <span>Color : Gray</span> <span>Size : M</span>
                </p>
                <p>Seller : Zudio</p>
                <p>₹1298</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box
              xs={{ color: blue[700] }}
              className="flex justify-center items-center gap-3"
            >
              <Star className="h-4 w-4 fill-blue-700 text-blue-700" />
              <span className="text-blue-700">Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetail;
