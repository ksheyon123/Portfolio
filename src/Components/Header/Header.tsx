import React from "react";
import { useUrlPathname } from "@src/Hooks/useUrlPathname";
import { PAGES } from "@src/Constants/index";

const Header: React.FC = () => {
  const { path } = useUrlPathname();

  return (
    <div className="w-full h-full">
      {PAGES.map(link => {
        const lower = link.toLowerCase();
        if (path === lower) {
          return (
            <span className="text-sm text-white">
              {lower}
            </span>
          )
        }
      })}
    </div>
  )
}

export { Header }