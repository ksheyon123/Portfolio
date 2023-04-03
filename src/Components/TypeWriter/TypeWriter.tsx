import React, { useEffect, useState } from "react";

interface IProps {
}

const TypeWriter: React.FC<IProps> = () => {

  const [text, setText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [iteration, setIteration] = useState<number>(0);

  const textArr = ["안녕하세요. 강서현입니다.", "3년차 웹 개발자이고요.", "블록체인 서비스 개발에 관심이 많습니다."]

  useEffect(() => {

    if (isTyping) {
      const initialText = textArr[iteration];
      const len = initialText.length;
      let idx = -1;
      const timerId = setInterval(() => {
        if (idx === len) {
          setIsTyping(prev => !prev);
          clearInterval(timerId);
        }
        idx++;
        setText(prev => prev + initialText.slice(idx, idx + 1));
      }, 100);

      return () => clearInterval(timerId);
    } else {
      setIteration(prev => {
        if (prev > textArr.length) {
          return 0;
        } else {
          return prev + 1
        }
      });
    }

  }, [isTyping, iteration]);

  return (
    <div className="
    inline-block
    text-6xl 
    animation-blink-cursor
    border-r-2 
    border-solid
    ">
      {text}
    </div>
  )
}

export { TypeWriter }