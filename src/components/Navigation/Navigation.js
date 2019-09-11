import React, { useState } from "react";
import "./Navigation.css";
import GettingStarted from "../../pages/GettingStarted";
import Header from "../header";
import InputPage from "../../pages/InputPage";
import CardPage from "../../pages/CardPage";
import ButtonPage from "../../pages/ButtonPage";
import { Button } from "../../lib";
import { Link } from "@reach/router";
import { NavigationContent } from "./DataNavigation";

const Body = () => {
  const [accordion, setAccordion] = useState("");
  const [accordionId, setAccordionId] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  };

  const navigationContent = [
    {
      title: "Getting Started",
      content: ["Introduction", "How to Install", "Style Guide"],
    },
    { title: "Components", content: ["Button", "Input"], type: "Atoms" },
    { title: "Tokens", content: ["Color", "Fonts"] },
  ];

  const componentList = [
    { type: "Atoms", content: ["Button"] },
    { type: "Molecules", content: ["Input", "Card"] },
  ];

  const handleDropDown = title => {
    switch (title) {
      case "Getting Started":
        setAccordion();
        break;
      case "Components":
        break;
      case "Tokens":
        setAccordion();
        break;
      default:
        console.log();
    }
    console.log(accordionId);
  };

  const Navigation = props => {
    const { title, items, type } = props;

    return (
      <div
        className="navigation-wrapper"
        onClick={() => {
          handleDropDown(title);
          setAccordionId(title);
        }}
      >
        <div
          className={
            title === accordionId
              ? "navigation-menu-inactive"
              : "navigation-menu"
          }
        >
          {title}
        </div>
        <div className="navigation-items-container">
          <div
            className={
              title === accordionId
                ? "navigation-items"
                : "navigation-items-inactive"
            }
          >
            <div className="item-type">{type}</div>
            {items.map(item => (
              <li>
                <Link to={"/" + item.page}>{item.title}</Link>
              </li>
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
            key={index}
            items={data.content}
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
              items={data.content}
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
      `}</style>
    </>
  );
};

export default Body;
