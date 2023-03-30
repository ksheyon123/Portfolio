import React from "react";
import { Link } from "react-router-dom";
import { useUrlPathname } from "@src/Hooks/useUrlPathname";
import { PAGES } from "@src/Constants/index";

const LNB: React.FC = () => {
  const { path } = useUrlPathname();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col">
        {PAGES.map(link => {
          const lower = link.toLowerCase();
          return (
            <Link
              key={lower}
              className={`text-sm  mb-2 last:mb-0 ${path === lower ? "text-white" : "text-gray-400"}`}
              to={`/${lower}`}
            >
              {link}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export { LNB }