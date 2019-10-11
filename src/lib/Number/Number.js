import React from "react";

const Number = props => {
  const style = {
    margin: "5px",
    width: props.width ? props.width : "32px",
    minWidth: props.width ? props.width : "32px",
    height: props.height ? props.height : "32px",
    backgroundColor: props.bgColor ? process.bgColor : "#e11931",
    fontSize: props.fontSize ? props.fontSize : "18px",
    border: props.border ? props.border : "2px solid #e11931",
    fontWeight: "bold",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={style}>
      <p
        style={{
          color: props.color ? props.color : "white",
        }}
      >
        {props.number}
      </p>
    </div>
  );
};

export { Number };
