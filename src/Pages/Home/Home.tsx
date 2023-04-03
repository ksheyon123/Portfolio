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
      <TypeWriter />
    </div>
  )
}
export { Home } 