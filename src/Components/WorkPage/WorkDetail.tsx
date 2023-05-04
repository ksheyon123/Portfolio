import React from 'react';

interface IProps {
  close: () => void;
}

const WorkDetail: React.FC<IProps> = ({ close }) => {
  return (
    <div className="absolute right-0 top-0 w-full h-full p-5 border-l border-slate-400">
      <div className=" flex justify-end ">
        <div className="rounded-full w-6 h-6 bg-slate-400 " onClick={() => close()}>

        </div>
      </div>
    </div>
  )
}

export { WorkDetail };