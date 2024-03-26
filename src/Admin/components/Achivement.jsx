import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import Trophy from "../../assets/trophy.png"
import Triengle from "../../assets/triangle.png"

import React from "react";

const TriangleImage = styled("img")({
  right: "0",
  bottom: "0",
  height: 170,
  position: "absolute",
});
const TrophyImage = styled("img")({
  right: 36,
  bottom: 20,
  height: 90,
  position: "absolute",
});

const Achivement = () => {
  return (  
  <Card sx={{position: "relative"}}>
    <CardContent className="space-y-">
        <Typography variant="h6" sx={{latterSpacing : ".25px"}}>
            Quill E-commerce
        </Typography>
        <Typography className="pb-5" variant="body2">
            Congratulations 🎉
        </Typography>
        <Typography className="pb-3" variant="h5" sx={{my :3.1}}>
            420.8K
        </Typography>
        <Button variant="contained" size="small">
           View Sales
        </Button>
        <TriangleImage src={Triengle} alt="triangle" />
        <TrophyImage src={Trophy} alt="trophy" className="text-gray-500" />
    </CardContent>
  </Card>
  )
};

export default Achivement;
