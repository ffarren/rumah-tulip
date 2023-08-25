import React from "react";
import { data } from "./TestimonialData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimony = () => {
  return (
    <div className="bg-orange-50 p-10 sm:p-16 border-b border-black">
      <h1 className="font-petrona text-blue-950 text-4xl sm:text-5xl">
        What they say about our place
      </h1>
      <Carousel className="p-10 sm:py-20"
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {data.map((item) => (
          <div className="p-2 sm:p-0">
            <h1 className="text-lg sm:text-4xl font-petrona text-blue-950 mb-5">
              {item.name}
            </h1>
            <h2 className="text-md sm:text-2xl font-petrona text-blue-950 mb-5">
              {item.date}
            </h2>
            <p className="font-bold text-xl sm:text-4xl font-petrona text-blue-950">
              "{item.quote}"
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimony;