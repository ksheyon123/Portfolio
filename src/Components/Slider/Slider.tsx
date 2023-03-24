import React from "react";

interface IProps {

}

const Slider: React.FC = () => {

  return (
    <div className="my-0 mx-auto border-solid border border-stone-600">
      <div className="w-full h-48 relative rounded-md">
        <div className="absolute lg md sm top-0 left-0 w-40 h-full">

        </div>
        <div className="w-full h-full px-40">

        </div>
        <div className="absolute lg md sm top-0 right-0 w-40 h-full">

        </div>
      </div>
    </div>
  )
}

export { Slider }