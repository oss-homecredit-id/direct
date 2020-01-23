import React from "react";
import { MainLayout } from "../components/MainLayout";
import PageTemplate from "../components/PageTemplate";

const NotFoundPage = () => (
  <MainLayout>
    <PageTemplate>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageTemplate>
  </MainLayout>
);

export default NotFoundPage;
