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
      <Header siteTitle="Direct" />
      <div style={{ display: `flex` }}>
        <Navigation></Navigation>
        <main
          style={{
            width: `100%`,
            height: `100%`,
            minHeight: `100vh`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            backgroundColor: `#f7f7f7`,
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
