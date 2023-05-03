import React, { useState, useCallback } from "react";
import { WorkDetail, WorkList } from "@src/Components/WorkPage/";

const WorkContainer: React.FC = () => {

  const [toggle, setToggle] = useState<boolean>(false);
  const [item, selectItem] = useState<any>();

  const toggler = useCallback((item: any) => {
    selectItem(item);
    setToggle(prev => !prev);
  }, []);

  return (
    <>
      <WorkList toggler={toggler} />
      {toggle && (
        <WorkDetail />
      )}
    </>
  )
}

export { WorkContainer }