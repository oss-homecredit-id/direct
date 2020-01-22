import React, { useState } from "react";
import PropTypes from "prop-types";
import Seo from "../components/HelmetSeo";
import { Link } from "gatsby";
import { colors } from "../assets/mixins/mixins";
import HCLogo from "../assets/svg/HCID_smiley.svg";

const sideNavSize = "280px";

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
        <Seo description={description} lang={lang} title={title} />
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
          width: calc(100vw - (${sideNavSize} + 2px));
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          border-left: 1px solid ${colors.darkerBlack};
          border-right: 1px solid ${colors.darkerBlack};
        }
        .main-content {
          width: calc(100vw - (${sideNavSize} + 2px));
          min-height: calc(100vh - 60px);
        }
        .main-footer {
          background-color: ${colors.lighterBlack};
          border-top: 1px solid ${colors.darkerBlack};
          width: calc(100vw - (${sideNavSize} + 2px));
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-end;
          height: 58px;
        }
        @media only screen and (max-width: 960px) {
          .main-view {
            margin-left: 0;
            width: calc(100vw - 2px);
          }
          .main-footer {
            margin: 0;
            width: calc(100vw - 2px);
          }
          .main-content {
            width: calc(100vw - 2px);
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
          z-index: 10;
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
        <h1 style={{ fontSize: "42px" }}>Direct</h1>
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
          margin: 2rem;
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
          width: calc(${sideNavSize} - 30px);
          border-top-right-radius: 38px;
          border-bottom-right-radius: 38px;
        }
        @media only screen and (max-width: 960px) {
          .scroller {
            margin: 0.5rem;
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
        title: "How To Install",
        path: "/how-to-install",
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
        path: "/components/datepicker",
      },
      {
        title: "Radio",
        path: "/components/radio",
      },
      {
        title: "Select",
        path: "/components/select",
      },
      {
        title: "Text",
        path: "/components/text",
      },
      {
        title: "Coys",
        path: "/components/coys",
      },
      {
        title: "Nein",
        path: "/components/nein",
      },
    ],
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
