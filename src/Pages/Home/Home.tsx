import React from "react";
import { LNB, TypeWriter, Slider, Footer, BackgroundWord } from "@src/Components";

const Box: React.FC = ({
  width = "w-full",
  height = "h-80"
}: any) => {
  return (
    <div className={width + " " + height}>

    </div>
  )
}

const text = ["Hello! I'm Kang Seohyeon", "Front End Developer",]

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <LNB />
      <div className="border-solid border border-stone-600 w-full h-80">
        <div>
          <TypeWriter
            textList={text}
          />
        </div>
      </div>
      <div className="w-full h-10 text-center border-solid border border-stone-600">
        <div>
          <div>
            Something...
          </div>

        </div>
      </div>
      <div className="w-full h-80 border-solid border border-stone-600">
        <div className="flex">
          <div className="h-full w-1/4">
            Something...
          </div>
          <div className="w-3/4 h-full">
            <BackgroundWord word={"ABOUT"} />
          </div>
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