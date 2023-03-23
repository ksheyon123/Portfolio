import React, { useState } from "react";

interface IProps {
  textList: string[];
}

const TypeWriter: React.FC<IProps> = ({ textList }) => {
  const [curText, setCurText] = useState<string>("");
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