import React from "react";
import { Button } from "../Button/Button";

const MainNavigation = props => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "20%",
    },
    navItem: {
      color: "black",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      {props.navList.map((list, index) => (
        <Button
          variant="text"
          styleConfig={styles.navItem}
          onClick={props.navClick}
          key={index}
        >
          {list}
        </Button>
      ))}
    </div>
  );
};

export { MainNavigation };
