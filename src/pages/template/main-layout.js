import React from "react";
import { MainLayout } from "../../components/Navigation/MainLayout";
import Icon from "../../assets/icon-logo.png";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";
import { Text } from "../../lib/Text/Text";
import { Button } from "../../lib/Button/Button";

const mainLayout = () => {
  const styles = {
    headerContainer: {
      width: "100%",
      display: "flex",
      backgroundColor: "#ffffff",
      boxShadow: "rgba(38, 38, 38, 0.1) 0px 1px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px",
    },
    headerLogo: {
      width: "auto",
      height: "85px",
      margin: "0 10px",
    },
    headerTextContainer: {
      display: "flex",
      margin: "15px 30px",
      alignItems: "center",
    },
    headerButton: {
      marginLeft: "30px",
    },
    navContainer: {
      display: "flex",
      flexDirection: "column",
      width: "20%",
    },
    navItem: {
      color: "black",
      fontWeight: "bold",
    },
    content: {
      width: "100%",
      margin: "25px",
    },
  };

  const test = () => {
    alert("Insert function to log out");
  };

  const what = () => {
    alert("Insert link to your navigation");
  };

  const navList = ["menu a", "menu b", "menu 3", "menu 4"];

  const mainPage = {
    name: "Main Page",
    desc:
      "Below is an example on how to use the components in the component library to make a general main page consisting of header, navigation, and content.",
    code: `
    <div className="main-page>
          <div className="header">
            <img src={HeaderIcon} alt="Main icon"></img>
            <div className="header-text">
              <Text textType="h4">Hello! </Text>
              <Button onClick={LogoutFunction}> Log out </Button>
            </div>
          </div>

          <div className="body>
            <div className="navigation>
              {navList.map((list, index) => (
                <Button
                  variant="text"
                  styleConfig={styles.navItem}
                  onClick={NavigationLink}
                  key={index}
                >
                  {list}
                </Button>
              ))}
            </div>

            <div className="content">Insert your content here </div>

          </div>
        </div>
    `,
  };

  return (
    <MainLayout>
      <TemplateLayout
        tempName={mainPage.name}
        tempDesc={mainPage.desc}
        tempCode={mainPage.code}
      >
        <div style={{ width: "100%" }}>
          <div style={styles.headerContainer}>
            <img style={styles.headerLogo} src={Icon} alt="Main icon"></img>
            <div style={styles.headerTextContainer}>
              <Text textType="h4">Hello! </Text>
              <Button onClick={test} styleConfig={styles.headerButton}>
                Log out
              </Button>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={styles.navContainer}>
              {navList.map((list, index) => (
                <Button
                  variant="text"
                  styleConfig={styles.navItem}
                  onClick={what}
                  key={index}
                >
                  {list}
                </Button>
              ))}
            </div>
            <div style={styles.content}>Insert your content here </div>
          </div>
        </div>
      </TemplateLayout>
    </MainLayout>
  );
};

export default mainLayout;
