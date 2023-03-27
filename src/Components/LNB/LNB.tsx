import React from "react";
import { PAGES } from "@src/Constants/index";

const LNB: React.FC = () => {
  return (
    <div className="w-20 h-full flex items-center justify-center">
      <div>
        {PAGES.map(el => {
          return (
            <div className="text-sm from-green-400">
              {el}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { LNB }