import React from "react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "@src/Constants";

const Work: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full">

      </div>
      <div className="flex items-center justify-center w-1/2 h-full">
        <div className="grid grid-cols-[300px_200px] ">
          {PROJECTS.map((el) => {
            const { name } = el;
            return (
              <div className="h-24 text-3xl font-display">
                {name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { Work }