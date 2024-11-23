import React from "react";
import { Carousel } from "flowbite-react";
import img1 from "../imgCarousel/img1.jpg";
import img2 from "../imgCarousel/img2.jpg";
import img3 from "../imgCarousel/img3.jpg";
import img4 from "../imgCarousel/img4.jpg";
import img5 from "../imgCarousel/img5.jpg";

function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 max-w-screen-xl mx-auto">
      <Carousel>
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
        <img src={img5} alt="..." />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
