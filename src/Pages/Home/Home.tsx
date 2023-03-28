import React, { useState, useCallback } from "react";
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

const text = ["Hello! I'm Kang Seohyeon", "Front End Developer"]

const Home: React.FC = () => {
  const [pageIdx, setPageIdx] = useState<number>(1);
  const onScroll = useCallback((e: any) => {
    const _event = e.currentTarget as HTMLDivElement;
    const curPositionY = _event.scrollTop;
    const viewY = _event.clientHeight;
    // scrollHeight : Total Scrollable area height;
    // scrollTop : Current Top y position;
    // clientHeight : current window height

    if (curPositionY > viewY * (pageIdx - 1) + 100) {
      setPageIdx(prev => prev + 1);
      e.target.scrollTop = viewY * pageIdx;
    }
  }, [pageIdx]);

  return (
    <div className="w-full h-full">
      Home
      {/* <div className="border-solid border border-stone-600 w-full h-80">
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

          </div>
        </div>
      </div>
      <div className="w-full h-80 border-solid border border-stone-600">
        <div>
          Something...
        </div>
      </div> */}
      {/* <Slider />
      <Footer /> */}
    </div>
  )
}
export { Home } 