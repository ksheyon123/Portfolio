import React, { useEffect, useState } from "react";

interface IProps {
  textList: string[];
}

const TypeWriter: React.FC<IProps> = ({ textList }) => {
  const [curText, setCurText] = useState<string>(textList[0]);
  useEffect(() => {
    const len = textList.length;
    let idx = 1;
    const intervalId = setInterval(() => {
      console.log(idx % len);

      setCurText(textList[idx % len]);
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
    divide-black w-auto">
      {curText}
    </div>
  )
}

export { TypeWriter }