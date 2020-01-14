import React from "react";
import { MainHeader } from "../MainHeader/MainHeader";
import { MainNavigation } from "../MainNavigation/MainNavigation";

const LayoutTemplate = props => {
  const {
    headerLogo,
    headerText,
    headerButton,
    headerClick,
    navList,
    navClick,
    content,
  } = props;

  const styles = {
    body: {
      display: "flex",
    },
    contentWrapper: {
      padding: "15px",
      width: "100%",
    },
  };

  const mainContent = content;

  return (
    <div>
      <MainHeader
        headerLogo={headerLogo}
        headerText={headerText}
        headerButton={headerButton}
        buttonClick={headerClick}
      ></MainHeader>
      <div style={styles.body}>
        <MainNavigation navList={navList} navClick={navClick}></MainNavigation>
        <div style={styles.contentWrapper}> {mainContent}</div>
      </div>
    </div>
  );
};

export { LayoutTemplate };
