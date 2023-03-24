import React from "react";
import { Header, TypeWriter, Slider, Footer } from "@src/Components";

const Box: React.FC = ({
  width = "w-full",
  height = "h-80"
}: any) => {
  return (
    <div className={width + " " + height}>

    </div>
  )
}

const text = ["I'm Kang Seohyeon", "Front End Developer",]

const Home: React.FC = () => {
  return (
    <div className="my-0 mx-auto pt-16">
      <Header />
      <TypeWriter
        textList={text}
      />
      <div className="border-solid border border-stone-600 w-full h-80">
        <div>
          Parallax...
        </div>
      </div>
      <div className="w-full h-10 text-center border-solid border border-stone-600">
        <div>
          Something...
        </div>
      </div>
      <div className="w-full h-80 border-solid border border-stone-600">
        <div>
          Something...
        </div>
      </div>
      <div className="w-full h-80 border-solid border border-stone-600">
        <div>
          Something...
        </div>
      </div>
      <Slider />
      <Footer />
    </div>
  )
}
export { Home } 