import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import hcidIcon from "../assets/svg/HCID_smiley.svg";

const Header = ({ siteTitle }) => (
  <div className="header-container">
    <img src={hcidIcon} alt="" />
    <h1 style={{ marginBottom: "0" }}>
      <Link to="/" className="header-text">
        {siteTitle}
      </Link>
    </h1>
    <style jsx="true">{`
      .header-container {
        display: flex;
        justify-content: center;
      }
      .header-container img {
        margin: 0px;
        width: 40px;
        margin-right: 8px;
      }
    `}</style>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
