import React from "react";
import HomeSectionCard from "./HomeSectionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperBtn from "../UI/SwiperBtn";

const HomeSectionCarousel = ({ data, sectionName }) => {
  return (
    <div className="border relative">
      <h2 className="text-3xl font-bold mx-5">{sectionName}</h2>
      <div className="swiper-container">
        <Swiper
          centeredSlides={true}
          breakpoints={{
            648: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          loop={true}
        >
          <div className="flex justify-center items-center w-full my-5">
            <SwiperBtn />
          </div>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center items-center">
                <HomeSectionCard product={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
