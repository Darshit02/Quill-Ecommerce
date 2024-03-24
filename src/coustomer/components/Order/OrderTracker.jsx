import { Step, StepLabel, Stepper } from "@mui/material";
import { blue } from "@mui/material/colors";
import { X } from "lucide-react";
import React from "react";

const steps = [
  "Placed",
  "Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];
const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ color: blue[500], fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      {/* <div className="flex justify-center xl:mr-4 cursor-pointer bg-red-500 px-2 py-2 mr-4 rounded-md items-center gap-3 text-white font-semibold text-sm">
        <X className="h-4 w-4"/>
        Cancal Order
      </div> */}
      </Stepper>
     
    </div>
  );
};

export default OrderTracker;
