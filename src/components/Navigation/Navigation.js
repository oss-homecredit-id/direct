import React, { useState } from "react";
import "./Navigation.css";
import GettingStarted from "../../pages/GettingStarted";
import Introduction from "../../pages/Introduction";
import Component from "../../pages/Component/Component";

const Body = () => {
  const [accordion, setAccordion] = useState("");
  const [accordionId, setAccordionId] = useState("");

  const navigationContent = [
    {
      title: "Introduction",
      content: ["About"],
    },
    { title: "Getting Started", content: ["How To Install", "How To Use"] },
    { title: "Components", content: ["Button"] },
  ];

  const handleDropDown = title => {
    switch (title) {
      case "Introduction":
        setAccordion(<Introduction></Introduction>);
        break;
      case "Getting Started":
        setAccordion(<GettingStarted></GettingStarted>);
        break;
      case "Components":
        setAccordion(<Component></Component>);
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
              <li>{item}</li>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="body-wrapper">
      <div className="body-container">
        {navigationContent.map((data, index) => (
          <Navigation title={data.title} key={index} items={data.content} />
        ))}
      </div>
      {accordion}
    </div>
  );
};

export default Body;
