import React, { ReactNode, useEffect, useRef, RefObject } from "react";
import { LNB, BackgroundWord, Header } from "@src/Components";
import { useSwiper } from "@src/Hooks/useSwiper";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const {
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart
  } = useSwiper();
  const divEl = useRef<HTMLDivElement>();

  useEffect(() => {
    const { current } = divEl;
    if (current) {
      current.addEventListener("touchstart", handleTouchStart);
      current.addEventListener("touchmove", handleTouchMove);
      current.addEventListener("touchend", handleTouchEnd);
      return () => {
        current.removeEventListener("touchstart", handleTouchStart);
        current.addEventListener("touchmove", handleTouchMove);
        current.removeEventListener("touchend", handleTouchEnd);
      }
    }
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="md:hidden lg:hidden sm:fixed top-0 w-screen h-10 p-2 z-10">
        <Header />
      </div>
      <div className="flex w-full h-full">
        <div className="w-40 h-full sm:hidden">
          <LNB />
        </div>
        <div className="w-[calc(100%-160px)] h-screen sm:w-full sm:h-full overflow-hidden relative"
          ref={divEl as RefObject<HTMLDivElement>}
        >
          {children}
          <BackgroundWord />
        </div>
      </div>
    </div>
  )
}

export { Layout }