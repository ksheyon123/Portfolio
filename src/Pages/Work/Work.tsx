import React from "react";
import { useNavigate } from "react-router-dom";

const Work: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full">

      </div>
      <div className="flex items-center justify-center w-1/2 h-full">
        <div className="grid grid-cols-[200px_200px]">
          <div className="h-24">
            HAVAH MITTER
          </div>
          <div>
            HAVAH PLANET RUNNER
          </div>
          <div>
            HAVAH EXPLORER
          </div>
          <div>
            PARTNER CENTER
          </div>
          <div>
            ZZEUNG
          </div>
          <div>
            JEJU SAFETY
        </div>
        </div>
      </div>
    </div>
  )
}

export { Work }