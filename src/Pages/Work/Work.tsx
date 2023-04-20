import React, { useState } from "react";
import { PROJECTS } from "@src/Constants";
import { WorkDetail } from "@src/Components"

const Work: React.FC = () => {
  const [item, setItem] = useState<any>();
  return (
    <div className="flex w-full h-full justify-between">
      <div className="w-auto h-full">

      </div>
      <div className="relative flex items-center justify-center w-420 h-full">
        <div className="grid grid-cols-[200px_200px] ">
          {PROJECTS.map((el) => {
            const { name } = el;
            return (
              <div className="group inline-block h-24  font-display cursor-pointer" onClick={() => {
                setItem(el)
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
        {!!item && (
          <WorkDetail />
        )}
      </div>
    </div>
  )
}

export { Work }