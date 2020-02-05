import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../INput/Input.js";
import PropTypes from "prop-types";

export const DatePickerComponent = ({
  dateFormat,
  isDisabled,
  selected,
  onChange,
  label,
}) => {
  const ref = React.createRef();
  return (
    <>
      <ReactDatePicker
        selected={selected}
        dateFormat={dateFormat ? dateFormat : "dd/MM/yyyy"}
        onChange={date => onChange(date)}
        customInput={
          <Input
            label={label}
            isDisabled={isDisabled ? true : false}
            type="date"
            ref={ref}
          />
        }
      />
    </>
  );
};

DatePickerComponent.propTypes = {
  label: PropTypes.string,
  isDisabled: PropTypes.string,
  dateFormat: PropTypes.string,
};
