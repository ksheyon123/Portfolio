import React from "react";

const Header: React.FC = () => {
  return (
    <div className="w-full fixed top-0 border-solid border border-stone-600">
      <div className="w-full h-16 flex justify-between items-center">
        <div className="flex">
          <div className="rounded-full w-20 h-20">

          </div>
          <div className="text-2xl">
            Kang Seohyeon
          </div>
        </div>
        <div>
          <img />
        </div>
      </div>
    </div>

  )
}

export { Header }