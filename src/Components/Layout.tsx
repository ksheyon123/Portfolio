import React, { ReactNode } from "react";
import { LNB, BackgroundWord, Header } from "@src/Components";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="md:hidden lg:hidden sm:fixed top-0 w-screen h-10 p-2">
        <Header />
      </div>
      <div className="flex w-full h-full">
        <div className="w-40 h-full sm:hidden">
          <LNB />
        </div>
        <div className="w-[calc(100%-160px)] h-screen sm:w-full sm:h-full overflow-hidden relative">
          {children}
          <BackgroundWord />
        </div>
      </div>
    </div>
  )
}

export { Layout }