import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "@reach/router";
import { NavigationContent } from "./DataNavigation";

const Body = () => {
  // console.log(window.location.pathname);
  const [accordion, setAccordion] = useState("");
  const [accordionId, setAccordionId] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [pathname, setPathName] = useState(window.location.pathname);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  // const handleDropDown = title => {
  //   switch (title) {
  //     case "Getting Started":
  //       setAccordion();
  //       break;
  //     case "Components":
  //       break;
  //     case "Tokens":
  //       setAccordion();
  //       break;
  //     default:
  //       console.log();
  //   }
  //   console.log(accordionId);
  // };

  const Navigation = props => {
    const { title, items, type, path } = props;
    const isActive = window.location.pathname;

    console.log(isActive);
    return (
      <div
        className="navigation-wrapper"
        onClick={() => {
          setAccordionId(path);
        }}
      >
        <div className="navigation-menu">{title}</div>
        <div className="navigation-items-container">
          <div
            className={
              path === accordionId
                ? "navigation-items"
                : "navigation-items-inactive"
            }
          >
            <div className="item-type">{type}</div>
            {/* {items.map(item => (
              <li>
                <Link to={"/" + item.page}>{item.title}</Link>
              </li>
            ))} */}
            {items.content
              ? items.content.map(item => <li>{item.title}</li>)
              : items.anotherContent.map(item => (
                  <div className="component-type">
                    {item.type}
                    {item.list.map(child => (
                      <li className="component-child">
                        <Link to={"/" + child.page}>
                          <li onClick={() => setAccordionId("/components")}>
                            {child.title}
                          </li>
                        </Link>
                      </li>
                    ))}
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="navigation-body-wrapper">
        {NavigationContent.map((data, index) => (
          <Navigation
            title={data.title}
            path={data.path}
            key={index}
            items={data}
            type={data.type}
          />
        ))}
        {accordion}
      </div>
      <div
        className={
          navOpen ? "nav-wrapper-mobile-open" : "nav-wrapper-mobile-close"
        }
      >
        <div
          className={navOpen ? "burger-open" : "burger-close"}
          onClick={() => handleNavClick()}
        >
          <div
            className={navOpen ? "navbar-mobile-open" : "navbar-mobile-close"}
          ></div>
          <div
            className={navOpen ? "navbar-mobile-open" : "navbar-mobile-close"}
          ></div>
          <div
            className={navOpen ? "navbar-mobile-open" : "navbar-mobile-close"}
          ></div>
        </div>
        <div className="navbarbar">
          {NavigationContent.map((data, index) => (
            <Navigation
              title={data.title}
              key={index}
              items={data}
              type={data.type}
            />
          ))}
          {accordion}
        </div>
      </div>
      <style jsx>{`
        .navbarbar {
          display: ${navOpen ? "block" : "none"};
        }
        .component-type {
          margin-left: 50px;
        }
        .component-child {
          display: flex;
          flex-direction: column;
        }
        .component-child li {
          margin-left: 0px;
        }
      `}</style>
    </>
  );
};

export default Body;
