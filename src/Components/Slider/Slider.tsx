import React from "react";

interface IProps {

}


const items = ["Slide1", "Slide2", "Slide3"];
const Slider: React.FC = () => {

  return (
    <div className="w-full my-0 mx-auto border-solid border border-stone-600">
      <div className="w-full h-48 relative rounded-md overflow-hidden">
        <div
          className="absolute lg md sm top-0 left-0 w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => { }}
        >
          Prev
        </div>
        <div className="w-full h-full px-40">
          <div className="flex flex-grow-0 overflow-hidden w-120 h-full">
            {items.map((el) => {
              return (
                <div className="h-full w-full">
                  {el}
                </div>
              )
            })}
          </div>
        </div>
        <div
          className="absolute lg md sm top-0 right-0 w-40 h-full flex justify-center items-center cursor-pointer"
          onClick={() => { }}
        >
          Next
        </div>
      </div>
    </div>
  )
}

export { Slider }