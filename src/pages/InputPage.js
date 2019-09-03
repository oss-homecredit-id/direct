import React from "react";
import CompLayout from "../components/CompLayout/CompLayout";
import icon from "../assets/icon-close.png";
import { Input } from "../lib/Input/Input";

const InputPage = () => {
  return (
    <div style={{ width: "100%" }}>
      <CompLayout
        compName="Input"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={["With Icon", "Without Icon"]}
      >
        <Input>This is Input</Input>
      </CompLayout>
    </div>
  );
};

export default InputPage;
