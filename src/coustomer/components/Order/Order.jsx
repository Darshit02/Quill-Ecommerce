import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { lable : "On The Way" , value : "on_the_way"},
  { lable : "Delivered" , value : "delivered"},
  { lable : "Cancelled" , value : "cancelled"},
  { lable : "Returned" , value : "returned"},
 
]

const Order = () => {
  return (
    <div className="mb-10">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto mt-4 ml-3 shadow-md rounded-lg bg-white p-5 sticky top-5 border border-gray-200">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              
                { orderStatus.map((option) => (
                  <div className="flex items-center">
                   <input defaultValue={option.value} type="checkbox" className="h-4 w-4 border border-gray-300 text-blue-600"/>
                   <label htmlFor={option.value} className="ml-3 text-sm text-gray-600">
                     {option.lable}
                   </label>
              </div>
                ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9.5}>
          {
            [1,1,1,1].map((item) => (

              <OrderCard/>
            ))
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
