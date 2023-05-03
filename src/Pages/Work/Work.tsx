import React, { useState } from "react";
import { WorkDetail } from "@src/Components";
import { WorkContainer } from "@src/Container/WorkContainer/WorkContainer";

const Work: React.FC = () => {
  const [item, setItem] = useState<any>();
  return (
    <div className="flex w-full h-full justify-between">
      <div className="w-auto h-full">

      </div>
      <div className="relative flex items-center justify-center w-auto h-full">
        <WorkContainer />
      </div>
    </div>
  )
}

export { Work }