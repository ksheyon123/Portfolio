import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PAGES } from "@src/Constants/index";

const LNB: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.replace("/", "");
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        {PAGES.map(link => {
          const lower = link.toLowerCase();
          return (
            <div
              key={lower}
              className={`text-sm  mb-2 last:mb-0 ${path === lower ? "text-white" : "text-gray-400"}`}
              onClick={() => { navigate(`/${lower}`) }}
            >
              {link}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { LNB }