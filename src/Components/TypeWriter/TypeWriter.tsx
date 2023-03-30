import React, { useEffect, useState } from "react";

interface IProps {
}

const TypeWriter: React.FC<IProps> = () => {

  const [text, setText] = useState<string>('');

  useEffect(() => {
    const initialText = "Hello World! I'm web developer!";
    const len = initialText.length;
    let idx = 0;

    const timerId = setInterval(() => {
      if (idx === len) {
        clearInterval(timerId)
      }
      setText(prev => {
        return prev + initialText.slice(idx, idx + 1);
      });
      idx++;
    }, 100);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="
    text-4xl 
    overflow-hidden 
    whitespace-nowrap 
    border-r-2 
    border-solid 
    divide-black w-auto">
      {text}
    </div>
  )
}

export { TypeWriter }