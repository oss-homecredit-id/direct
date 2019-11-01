import React from "react";
import { H1, H2, H3, H4, H5, H6 } from "../../lib/Headings/Headings";
import Layout from "../../components/layout";
import CompLayout from "../../components/CompLayout/CompLayout";

const HeadingsPage = () => {
  const headings = [
    {
      name: "H1",
      var: <H1>Hello</H1>,
    },
    {
      name: "H2",
      var: <H2>Hello</H2>,
    },
    {
      name: "H3",
      var: <H3>Hello</H3>,
    },
    {
      name: "H4",
      var: <H4>Hello</H4>,
    },
    {
      name: "H5",
      var: <H5>Hello</H5>,
    },
    {
      name: "H6",
      var: <H6>Hello</H6>,
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Headings"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={headings}
      ></CompLayout>
    </Layout>
  );
};

export default HeadingsPage;
