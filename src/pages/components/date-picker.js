import React, { useState } from "react";
import { DatePickerComponent } from "../../lib/DatePicker/DatePicker";
import CompLayout from "../../components/CompLayout/CompLayout";
import { MainLayout } from "../../components/Navigation/MainLayout";

const DatePickerPage = () => {
  const [selected, setSelected] = useState();
  const onChange = date => {
    setSelected(date);
  };
  const datePicker = [
    {
      name: "Default",
      var: (
        <DatePickerComponent
          onChange={onChange}
          selected={selected}
          label="Default date picker"
        ></DatePickerComponent>
      ),
      code: `<DatePickerComponent onChange={onChange} selected={selected} label="Default date picker"></DatePickerComponent>`,
    },
    {
      name: "Custom date format",
      var: (
        <DatePickerComponent
          dateFormat="dd-MM-yyyy"
          onChange={onChange}
          selected={selected}
          label="Custom date format"
        ></DatePickerComponent>
      ),
      code: `<DatePickerComponent dateFormat="dd-MM-yyyy" onChange={onChange} selected={selected} label="Custom date format"></DatePickerComponent>`,
    },
    {
      name: "Disabled date format",
      var: (
        <DatePickerComponent
          dateFormat="dd-MM-yyyy"
          isDisabled
          label="Disabled date picker"
        ></DatePickerComponent>
      ),
      code: `<DatePickerComponent dateFormat="dd-MM-yyyy" isDisabled label="Disabled date picker"></DatePickerComponent>`,
    },
  ];

  const propsData = [
    {
      Name: "dateFormat",
      Params: "dd-MM-yyyy",
      Description:
        "This props is used to change date-picker component's date format and can only accept dd-MM-yyyy",
    },
    {
      Name: "Disabled",
      Params: "",
      Description:
        "When adding props 'Disabled', the date-picker component will be unable to be clicked",
    },
  ];

  return (
    <MainLayout>
      <CompLayout
        compName="Date Picker"
        compDesc="Date-picker component is generally used in forms to get a date data from user. You can add 'disabled' props to disable the component and also change the date format to dd-MM-yy."
        compVariation={datePicker}
        compProps={propsData}
      ></CompLayout>
    </MainLayout>
  );
};

export default DatePickerPage;
