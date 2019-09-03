import React from "react";
import { Button } from "../../lib/Button/Button";
import CompLayout from "../../components/CompLayout/CompLayout";

const Component = () => {
  return (
    <div style={{ width: "100%" }}>
      <CompLayout
        compName="Button"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={["Filled", "Rounded"]}
      >
        <Button filled>This is Button</Button>
      </CompLayout>
    </div>
  );
};

export default Component;
