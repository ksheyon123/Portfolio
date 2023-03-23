import React from "react";
import { Header, TypeWriter, Slider, Footer } from "@src/Components";

const text = ["I'm Kang Seohyeon", "Front End Developer",]

const Home: React.FC = () => {
  return (
    <div className="container my-0 mx-auto pt-16">
      <Header />
      <TypeWriter
        textList={text}
      />
      <div className="w-full h-5 text-center">
        <div>
          Hello! [I'm Web Developer]
        </div>
        <div>
        </div>
      </div>
      <div className="w-full h-80">
        <div>
          About
        </div>
      </div>
      <div className="w-full h-80">
        <div>
          Work
        </div>
      </div>
      <Slider />
    </div>
  )
}
export { Home } 