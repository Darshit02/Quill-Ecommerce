import { Step, StepLabel, Stepper } from "@mui/material";
import { blue } from "@mui/material/colors";
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
      </Stepper>
    </div>
  );
};

export default OrderTracker;
