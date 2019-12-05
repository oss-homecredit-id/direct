import React from "react";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";
import { Placeholder } from "../../lib/PlaceholderLoader/PlaceholderLoader";

const LoaderPage = () => {
  const loader = [
    {
      name: "Placeholder",
      var: <Placeholder lines="6"></Placeholder>,
    },
    {
      name: "Default",
      var: <p>default</p>,
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Loader"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={loader}
      ></CompLayout>
    </Layout>
  );
};

export default LoaderPage;
