import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { LNB, BackgroundWord } from "@src/Components";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="flex w-full h-full">
        <div className="w-20 h-full">
          <LNB />
        </div>
        <div className="w-[calc(100%-80px)] h-screen overflow-hidden relative">
          {children}
          <BackgroundWord

          />
        </div>
      </div>
    </div>
  )
}

export { Layout }