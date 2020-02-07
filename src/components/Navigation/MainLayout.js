import React, { useState } from "react";
import PropTypes from "prop-types";
// import Seo from "../components/HelmetSeo";
import { Link } from "gatsby";
import { colors } from "../../assets/mixins/mixins";
import HCLogo from "../../assets/svg/HCID_smiley.svg";

const sideNavSize = "250px";

const MainLayout = props => {
  const [isHidden, setIsHidden] = useState(true);
  const {
    children,
    description = "Home Credit Direct Documentation",
    lang = "en",
    title = "Main",
  } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="main-container">
        {/* <Seo description={description} lang={lang} title={title} /> */}
        <SideMenu isHidden={isHidden} setIsHidden={setIsHidden} />
        <MainView isHidden={isHidden} setIsHidden={setIsHidden}>
          {children}
        </MainView>
      </div>
      <style jsx="true">{`
        .main-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          z-index: 1;
        }
      `}</style>
      <style jsx="true" global="true">{`
        body {
          overflow-y: ${!isHidden ? "hidden" : "scroll"};
        }
      `}</style>
    </React.Fragment>
  );
};

const MainView = ({ children, isHidden, setIsHidden }) => {
  return (
    <React.Fragment>
      <div
        className="overlay"
        onClick={() => setIsHidden(!isHidden)}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      />
      <div className="main-view">
        <div className="main-content">{children}</div>
        <div className="main-footer">
          <div
            style={{ padding: "1rem", fontSize: "10px", textAlign: "right" }}
          >
            Direct is a Design System for Home Credit Indonesia <br />© 2020
            Home Credit Indonesia.
          </div>
        </div>
      </div>
      <style jsx="true">{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5) !important;
          z-index: 3;
          display: ${isHidden ? "none" : "block"};
        }
        .main-view {
          background-color: ${colors.background};
          margin-left: ${sideNavSize};
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .main-content {
          min-height: calc(100vh - 60px);
          padding-left: 40px;
        }
        .main-footer {
          color: ${colors.mainWhite};
          background-color: ${colors.darkerBlack};
          border-top: 1px solid ${colors.darkerBlack};
          border-bottom: 1px solid ${colors.darkerBlack};
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-end;
        }
        @media only screen and (max-width: 960px) {
          .main-view {
            margin-left: 0;
            width: 100vw;
          }
          .main-footer {
            margin: 0;
            width: 100vw;
          }
          .main-content {
            width: 100vw;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

const SideMenu = ({ isHidden, setIsHidden }) => {
  const handleSideMenu = () => {
    setIsHidden(!isHidden);
  };
  return (
    <React.Fragment>
      <div className="side-menu-main">
        <div style={{ width: "auto" }}>
          <NavigationItem />
        </div>
      </div>
      <div
        className="js-burg"
        tabIndex={0}
        role="button"
        onClick={handleSideMenu}
        onKeyDown={handleSideMenu}
      >
        <img
          src={HCLogo}
          alt="Direct Home Credit Indonesia"
          height="24"
          style={{ margin: "8px 0 0 6px" }}
        />
      </div>
      <style jsx="true">{`
        .js-burg {
          position: fixed;
          z-index: 11;
          top: 16px;
          left: 1px;
          color: ${colors.mainWhite};
          background-color: ${colors.primaryRed};
          width: 64px;
          height: 42px;
          border-top-right-radius: 21px;
          border-bottom-right-radius: 21px;
          display: none;
          z-index: 5;
        }
        .side-menu-main {
          position: fixed;
          top: 0;
          left: 0;
          width: ${sideNavSize};
          height: 100vh;
          background-color: ${colors.mainWhite};
          z-index: 11;
          display: block;
        }
        @media only screen and (max-width: 960px) {
          .side-menu-main {
            display: ${isHidden ? "none" : "block"};
          }
          .js-burg {
            display: ${isHidden ? "block" : "none"};
          }
        }
        @media only screen and (max-width: 420px) {
          .side-menu-main {
            width: 70vw;
          }
          .scroller {
            margin: 0.5rem 0.5rem 0.5rem 1rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

const NavigationItem = () => {
  return (
    <React.Fragment>
      <Link to="/" className="nav-logo">
        <img
          src={HCLogo}
          alt="Direct Home Credit Indonesia"
          className="img-logo"
        />
        <h1 style={{ fontSize: "42px", marginBottom: "0px" }}>Direct</h1>
      </Link>
      <div className="scroller">
        {NavigationItemData.map(itemData => {
          return (
            <div className="nav-group" key={itemData.title}>
              <div className="nav-group-title">{itemData.title}</div>
              {itemData.content.map(item => {
                return (
                  <React.Fragment key={item.title}>
                    <Link
                      to={item.path}
                      className="nav-item"
                      activeClassName="nav-item-active"
                    >
                      {item.title}
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
      <style jsx="true">{`
        .scroller {
          margin: 2rem 0 0 2rem;
          overflow-y: auto;
          height: calc(100vh - 140px);
        }
        .nav-group {
          margin: 1.1rem 0;
          display: flex;
          flex-direction: column;
        }
        .nav-group-title {
          font-size: 1.1rem;
          font-weight: bolder;
          margin-bottom: 0.5rem;
        }
        .nav-item {
          font-size: 1rem;
          margin: 0.6rem 1rem;
          text-decoration: none;
          color: ${colors.darkerBlack};
        }
        .nav-item-active {
          font-size: 1rem;
          margin: 0.6rem 1rem;
          font-weight: bolder;
          color: ${colors.primaryRed}!important;
          text-decoration: none;
        }
        .nav-item:hover,
        .nav-item:visited {
          text-decoration: none;
          color: ${colors.darkerBlack};
        }
        .img-logo {
          height: 2rem;
          margin-right: 16px;
        }
        .nav-logo {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: ${colors.primaryRed};
          color: ${colors.mainWhite};
          padding: 1rem 2rem;
          text-decoration: none;
          width: calc(${sideNavSize} + 30px);
          border-top-right-radius: 38px;
          border-bottom-right-radius: 38px;
        }
        @media only screen and (max-width: 960px) {
          .scroller {
            margin: 0.5rem;
          }
        }
        @media only screen and (max-width: 420px) {
          .nav-logo {
            width: calc(70vw - 30px);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

const NavigationItemData = [
  {
    title: "Getting Started",
    path: "/",
    content: [
      { title: "Introduction", path: "/" },
      {
        title: "How To Use",
        path: "/how-to-use",
      },
    ],
  },
  {
    title: "Components",
    path: "/components",
    content: [
      {
        title: "Button",
        path: "/components/button",
      },
      {
        title: "Input",
        path: "/components/input",
      },
      {
        title: "Checkbox",
        path: "/components/checkbox",
      },
      {
        title: "Date Picker",
        path: "/components/date-picker",
      },
      {
        title: "Radio",
        path: "/components/radiobutton",
      },
      {
        title: "Select",
        path: "/components/select",
      },
      {
        title: "Text",
        path: "/components/text",
      },
    ],
  },
  {
    title: "Tokens",
    path: "/tokens/color",
    content: [{ title: "Color", path: "/tokens/color" }],
  },
];

const GlobalStyle = () => {
  return (
    <style jsx="true" global="true">{`
      * {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}</style>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
};

export { MainLayout };
