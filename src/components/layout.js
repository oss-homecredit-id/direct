import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import Navigation from "./Navigation/Navigation";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navigation></Navigation>
      <div
        style={{
          margin: `0 14rem`,
          width: `100%`,
          height: `100vh`,
          maxWidth: 960,
          padding: `0px 2.0875rem 1.45rem`,
          paddingTop: 0,
          backgroundColor: `#f7f7f7`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
