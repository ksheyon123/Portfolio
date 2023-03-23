import React from "react";
import { Header, TypeWriter, Slider } from "@src/Components";

const text = ["I'm Kang Seohyeon", "Front End Developer",]

const Home: React.FC = () => {
  return (
    <div className="container my-0 mx-auto pt-16">
      <Header />
      <TypeWriter
        textList={text}
      />
      <Slider />
    </div>
  )
}
export { Home } 