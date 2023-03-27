import React from "react";

interface IProps {

}


const items = ["Slide1", "Slide2", "Slide3"];
const Slider: React.FC = () => {

  return (
    <div className="w-full my-0 mx-auto border-solid border border-stone-600">
      <div className="w-full h-48 relative rounded-md overflow-hidden">
        <div
          className="absolute sm:hidden lg:block md:hidden top-0 left-0 w-40 h-full cursor-pointer"
          onClick={() => { }}
        >
          Prev
        </div>
        <div className="w-full h-full sm:px-0 lg:px-40 md:px-0">
          <div className="flex sm:flex-col overflow-hidden w-120 h-full">
            {items.map((el) => {
              return (
                <div className="h-full w-full shrink-0 bg-slate-400">
                  {el}
                </div>
              )
            })}
          </div>
        </div>
        <div
          className="absolute block sm:hidden lg:block md:hidden top-0 right-0 w-40 h-full cursor-pointer"
          onClick={() => { }}
        >
          Next
        </div>
      </div>
    </div>
  )
}

export { Slider }