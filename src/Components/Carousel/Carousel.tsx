import React from "react";
import Slider, { Settings } from "react-slick";

interface IProps {
  settings: Settings;
  items: string[];
}

const Carousel: React.FC<IProps> = ({ settings, items }) => {
  return (
    <div className="w-full h-60">
      <Slider {...settings}>

      </Slider>
    </div>
  )
}

export { Carousel }