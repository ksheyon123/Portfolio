import React from "react";

interface IProps {
  word: string;
}

const BackgroundWord: React.FC<IProps> = ({ word }) => {
  return (
    <div className="absolute top-0 left-0 text-stone-500 text-7xl opacity-30 font-bold">
      {word}
    </div>
  )
}

export { BackgroundWord }