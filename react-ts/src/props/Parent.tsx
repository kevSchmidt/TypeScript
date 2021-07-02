import React from "react";
import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
      Bonjour
    </ChildAsFC>
  );
};

export default Parent;
