import React, { ReactNode, useEffect, useRef, RefObject, useState, useCallback } from "react";
import { LNB, BackgroundWord, Header } from "@src/Components";
import { useSwiper } from "@src/Hooks/useSwiper";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  // const {
  //   handleTouchEnd,
  //   handleTouchMove,
  //   handleTouchStart
  // } = useSwiper();
  const divEl = useRef<HTMLDivElement>();
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const handleTouchStart = (e: TouchEvent) => {
    setIsTouched(prev => !prev);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = useCallback(() => {
    console.log("touchStart : ", touchEnd - touchStart)
    if (touchEnd - touchStart > 150) {
      // do your stuff here for left swipe
      console.log("Swipe Right")
    }

    if (touchEnd - touchStart < -150) {
      // do your stuff here for right swipe
      console.log("Swipe Left")
    }
    setIsTouched(prev => !prev);
  }, [touchEnd, touchStart]);

  useEffect(() => {
    const { current } = divEl;
    if (isTouched && current) {
      current.addEventListener("touchmove", handleTouchMove);
      current.addEventListener("touchend", handleTouchEnd);

      return () => {
        current.addEventListener("touchmove", handleTouchMove);
        current.removeEventListener("touchend", handleTouchEnd);
      }
    }
  }, [touchEnd, touchStart]);

  useEffect(() => {
    const { current } = divEl;
    if (current) {
      current.addEventListener("touchstart", handleTouchStart);
      return () => {
        current.removeEventListener("touchstart", handleTouchStart);
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