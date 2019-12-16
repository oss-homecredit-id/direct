import React from "react";
import { colors } from "../../assets/mixins/mixins";

const Checkbox = props => {
  return (
    <label className="checkbox-container">
      {props.label}
      <input type="checkbox"></input>
      <span className="checkmark"></span>
      <style jsx>{`
        .checkbox-container {
          display: block;
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 22px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 25px;
          width: 25px;
          background-color: white;
          border: solid 1px ${colors.mainRed};
          border-radius: 3px;
        }

        .checkbox-container input:checked ~ .checkmark {
          background-color: ${colors.mainRed};
          border-color: ${colors.mainRed};
        }
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        .checkbox-container input:checked ~ .checkmark:after {
          display: block;
        }
        .checkbox-container .checkmark:after {
          left: 8px;
          top: 4px;
          width: 7px;
          height: 12px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      `}</style>
    </label>
  );
};

export { Checkbox };
