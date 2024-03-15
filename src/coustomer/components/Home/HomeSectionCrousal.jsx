import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "./HomeSectionCard";
import { Button } from "@mui/material";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { useState } from "react";
import { kurta } from "../../../Data/kurta";

const HomeSectionCrousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };
  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const items = kurta
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          animationType="fade"
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            className="z-50"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0",
              transform: "translateX(50%)",
            }}
            aria-label="next"
            onClick={slideNext}
          >
            <ChevronRightCircle />
          </Button>
        )}
        {activeIndex.length == 0 && (
          <Button
            onClick={slidePrev}
            className="z-50"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0",
              transform: "translateX(-50%)",
            }}
            aria-label="previous"
          >
            <ChevronLeftCircle />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCrousal;
