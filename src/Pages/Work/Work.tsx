import React from "react";
import { useNavigate } from "react-router-dom";

const Work: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div onClick={() => {
        navigate("/detail/1")
      }}>
        Work 1
      </div>
    </div>
  )
}

export { Work }