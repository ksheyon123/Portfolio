import React, { Dispatch, SetStateAction } from "react";
import { PROJECTS } from "@src/Constants";

interface IProps {
  toggler: (el: any) => void;
}

const WorkList: React.FC<IProps> = ({ toggler }) => {
  return (
    <div className="grid grid-cols-[auto_auto] gap-5">
      {PROJECTS.map((el) => {
        const { name } = el;
        return (
          <div className="group inline-block h-24  font-display cursor-pointer"
            onClick={() => {
              toggler(el)
            }}>
            <div className="inline relative">
              <div className="inline text-3xl group-hover:after:content-[''] group-hover:after:absolute group-hover:after:w-full group-hover:after:h-0.5 group-hover:after:bottom-[-2px] group-hover:after:left-0 group:hover:after:animate-txt-deco-underline group-hover:after:bg-slate-400">
                {name}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { WorkList };