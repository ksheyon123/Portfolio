import React from "react";

interface IProps {
  text: string;
}

const TypeWriter: React.FC<IProps> = ({ text }) => {
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
      {text}
    </div>
  )
}

export { TypeWriter }