import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "./layout.css";
import Navigation from "./Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header siteTitle="Direct" />
      <div style={{ display: "flex" }}>
        <Navigation></Navigation>
        <main className="main-body">{children}</main>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
