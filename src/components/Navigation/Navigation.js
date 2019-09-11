import React, { useState } from "react";
import "./Navigation.css";
import GettingStarted from "../../pages/GettingStarted";
import Header from "../header";
import InputPage from "../../pages/InputPage";
import CardPage from "../../pages/CardPage";
import ButtonPage from "../../pages/ButtonPage";
import { Button } from "../../lib";
import { Link } from "@reach/router";

const Body = () => {
  const [accordion, setAccordion] = useState("");
  const [accordionId, setAccordionId] = useState("");

  const navigationContent = [
    {
      title: "Getting Started",
      content: ["Introduction", "How to Install", "Style Guide"],
    },
    { title: "Components", content: ["Atoms", "Molecule"] },
    { title: "Tokens", content: ["Color", "Fonts"] },
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
    const { title, items } = props;

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
            {items.map(item => (
              <li>
                <Link to="/CardPage">{item}</Link>;
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="body-wrapper">
      <div className="body-container">
        <Header siteTitle="Direct" />
        <div className="navigation-body-wrapper">
          {navigationContent.map((data, index) => (
            <Navigation title={data.title} key={index} items={data.content} />
          ))}
        </div>
      </div>
      {accordion}
    </div>
  );
};

export default Body;
