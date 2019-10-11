import React from "react";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";
import { Breadcrumb } from "../../lib/Breadcrumb/Breadcrumb";

const DataBreadcrumb = [
  { page: "Home" },
  {
    page: "Page 1",
  },
  {
    page: "Page 2",
  },
];

const BreadcrumbPage = () => {
  const card = [
    {
      name: "Default",
      var: <Breadcrumb items={DataBreadcrumb}></Breadcrumb>,
    },
  ];
  return (
    <Layout>
      <CompLayout
        compName="Breadcrumb"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={card}
        compData={["test", "baaa", "hmmm"]}
      ></CompLayout>
    </Layout>
  );
};

export default BreadcrumbPage;
