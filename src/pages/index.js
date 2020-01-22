import React from "react";

import { MainLayout } from "../components/MainLayout";
import PageTemplate from "../components/PageTemplate";

const IndexPage = () => (
  <MainLayout title="Home">
    <PageTemplate>
      <h1>Introduction</h1>
      <h5>Direct Design System</h5>
      <br />
      <p>
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
        A practice not without controversy, laying out pages with meaningless
        filler text can be very useful when the focus is meant to be on design,
        not content.{" "}
      </p>
      <div style={{ height: "100vh" }}></div>
    </PageTemplate>
  </MainLayout>
);

export default IndexPage;
