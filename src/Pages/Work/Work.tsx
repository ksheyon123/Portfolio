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
              <div className="group inline-block h-24 text-3xl font-display cursor-pointer">
                <div className="inline relative">
                  <div className="inline group-hover:after:content-[''] group-hover:after:absolute group-hover:after:w-full group-hover:after:h-0.5 group-hover:after:bottom-[-2px] group-hover:after:left-0 group:hover:after:animate-txt-deco-underline group-hover:after:bg-slate-400">
                    {name}
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { Work }