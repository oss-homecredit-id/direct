import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";

const Header = ({ siteTitle }) => (
  <div className="header-container">
    <h1 style={{ marginBottom: "0" }}>
      <Link to="/" className="header-text">
        {siteTitle}
      </Link>
    </h1>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
