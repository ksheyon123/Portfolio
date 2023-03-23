import React from "react";
import { Header, TypeWriter } from "@src/Components";

const Home: React.FC = () => {
  return (
    <div className="container my-0 mx-auto pt-16">
      <Header />
      <TypeWriter
        text={"Hello World!"}
      />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}
export { Home } 