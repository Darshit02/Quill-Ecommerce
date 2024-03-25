import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { PackageCheck, Truck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { store } from "../../../State/store";

const DeleveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { order } = useSelector((store) => store)
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    const orderData = {
      address,
      navigate,
    };
    console.log("address", orderData);
   dispatch(createOrder(orderData));
  };
  const {auth} = useSelector((store) => store);
  console.log("auth", auth.user)
  console.log("order", order.order?.shippAddress);
  const addrress = order.order?.shippAddress;
  console.log("addrress", addrress);
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-lg shadow-md h-[30rem] overflow-y-auto"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
           {order.order?.address.map((item) =>  <AddressCard address={item}/>)}
            <button className=" flex justify-center items-center gap-2 mt-2 bg-blue-500 py-2 px-3 rounded-md text-white">
              <PackageCheck className="h-4 w-4" />
              Deliver Here
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-lg shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="LastName"
                    name="firstName"
                    label="First Name"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="lastName"
                    label="last Name"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    autoComplete="given-name"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    autoComplete="given-name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <button
                    className=" flex justify-center items-center gap-2 mt-2 bg-blue-500 py-2 px-3 rounded-md text-white"
                    type="submit"
                  >
                    <PackageCheck className="h-4 w-4" />
                    Deliver Here
                  </button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeleveryAddressForm;
