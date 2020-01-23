import React from "react";
import {MainLayout} from "../../components/MainLayout";
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

  const propsData = [
    {
      Name: "placeholder",
      Params: "",
      Description:
        "When the props 'placeholder' is added to the component, the loader component that will be used is the one appointed for data loading, and developer will have to fill the props 'lines'",
    },
    {
      Name: "lines",
      Params: "",
      Description:
        "the props 'lines' will receive a number of placeholder line that the developer wants",
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Loader"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={loader}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default LoaderPage;
