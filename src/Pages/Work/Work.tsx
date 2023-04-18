import React from "react";
import { useNavigate } from "react-router-dom";

const Work: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full">

      </div>
      <div className="flex items-center justify-center w-1/2 h-full">
        <div className="">
          <div>
            HAVAH Mitter
        </div>
          <div>
            HAVAH Planet Runner
        </div>
          <div>
            HAVAH Scan
        </div>
          <div>
            Partner Center
        </div>
          <div>
            Zzeung
        </div>
          <div>
            Jeju Safety QR
        </div>
        </div>
      </div>
    </div>
  )
}

export { Work }