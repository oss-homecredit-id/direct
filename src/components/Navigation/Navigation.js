import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { Link } from "@reach/router";
import { NavigationContent } from "./DataNavigation";

const Body = () => {
  // console.log(window.location.pathname);
  const [accordion] = useState("");
  const [accordionId, setAccordionId] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };

  const Navigation = props => {
    const { title, items, type, path } = props;
    useEffect(() => {}, []);

    return (
      <div
        className="navigation-wrapper"
        onClick={() => {
          setAccordionId(path);
          // console.log(pathname);
          console.log(accordionId);
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

            {items.content
              ? items.content.map((item, key) => (
                  <li key={key}>{item.title}</li>
                ))
              : items.anotherContent.map((item, key) => (
                  <div key={key} className="component-type">
                    {item.type}
                    {item.list.map((child, key) => (
                      <li key={key} className="component-child">
                        <Link to={"/" + child.page}>
                          <li>{child.title}</li>
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
