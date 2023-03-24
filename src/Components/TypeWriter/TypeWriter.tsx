import React, { useEffect, useState } from "react";

interface IProps {
  textList: string[];
}

const TypeWriter: React.FC<IProps> = ({ textList }) => {
  const [curText, setCurText] = useState<string>("");
  useEffect(() => {
    const len = textList.length;
    let idx = 0;
    const intervalId = setInterval(() => {
      if (idx > len - 1) {
        idx = 0;
      }
      setCurText(textList[idx]);
      idx++;
    }, 5000);
    return () => clearInterval(intervalId);
  }, [textList]);

  return (
    <div className="
    text-4xl 
    animate-typing 
    animate-blinkcaret 
    overflow-hidden 
    whitespace-nowrap 
    border-r-2 
    border-solid 
    divide-black">
      {curText}
    </div>
  )
}

export { TypeWriter }