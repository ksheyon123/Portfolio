import { useState, useCallback } from "react";
import { PAGES } from "@src/Constants/index";

const useSwiper = () => {
  const [] = useState<number>(0);
  const [touchStart, setTouchStart] = useState(0);
  // const [touchEnd, setTouchEnd] = useState(0);

  // console.log("Subtract : ", touchEnd - touchStart)

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const curPositionX = e.targetTouches[0].clientX;
    console.log("End : ", touchStart)
    if (curPositionX - touchStart > 150) {
      // do your stuff here for left swipe
      console.log("Swipe Right")
    }

    if (curPositionX - touchStart < -150) {
      // do your stuff here for right swipe
      console.log("Swipe Left")
    }
  }, [touchStart]);

  const handleTouchEnd = () => {

  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  }
}

export { useSwiper }