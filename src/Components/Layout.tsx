import React, { ReactNode, useEffect, useRef, RefObject } from "react";
import { LNB, BackgroundWord, Header } from "@src/Components";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const divEl = useRef<HTMLDivElement>();

  const touchStart = (e: TouchEvent) => {
    console.log("touch start", e);
  }

  const touchMove = (e: TouchEvent) => {
    console.log("touch move", e);

  }

  const touchEnd = (e: TouchEvent) => {
    console.log("touch End", e);
  }

  useEffect(() => {
    const { current } = divEl;
    if (current) {
      current.addEventListener("touchstart", touchStart);
      current.addEventListener("touchmove", touchMove);
      current.addEventListener("touchend", touchEnd);
      return () => {
        current.removeEventListener("touchstart", touchStart);
        current.addEventListener("touchmove", touchMove);
        current.removeEventListener("touchend", touchEnd);
      }
    }
  }, [divEl]);

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