import { Grid } from "@mui/material";
import { Disc } from "lucide-react";
import React from "react";

const OrderCard = () => {
  return (
    <div className="px-5 py-5 border mt-5 ml-10 rounded-md shadow-md">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://img.freepik.com/free-photo/online-fashion-shopping-collage_23-2150535821.jpg?size=626&ext=jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Stunning outfit</p>
              <p className="opacity-50 text-xs font-semibold">Size : M</p>
              <p className="opacity-50 text-xs font-semibold">Color : Gray</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p className="flex  items-center">
                <Disc className="h-4 w-4 text-green-500 mr-2 text-sm" />
                <span>Deliverd On March 03</span>
              </p>
              <p className="text-xs">Your Item has been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
