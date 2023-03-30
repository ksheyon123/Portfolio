import React from "react";
import { useUrlPathname } from "@src/Hooks/useUrlPathname";

const BackgroundWord: React.FC = () => {
  const { path } = useUrlPathname();
  const upperCasePathname = path.toUpperCase();
  return (
    <div className="absolute bottom-0 left-0 bg-transparent text-stone-500 text-7xl opacity-30 font-bold">
      {upperCasePathname}
    </div>
  )
}

export { BackgroundWord }