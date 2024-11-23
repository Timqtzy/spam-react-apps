import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../images/image1.png";
import logo2 from "../images/image2.png";
import logo3 from "../images/image3.png";
import logo4 from "../images/image4.png";

const CarouselLogo = () => {
  return (
    <Marquee speed={50} gradient={false}>
      {" "}
      <img
        src={logo1}
        alt="logo"
        className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
      />{" "}
      <img
        src={logo2}
        alt="logo"
        className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
      />{" "}
      <img
        src={logo3}
        alt="logo"
        className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
      />{" "}
      <img
        src={logo4}
        alt="logo"
        className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
      />{" "}
    </Marquee>
  );
};

export default CarouselLogo;
