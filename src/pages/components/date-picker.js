import React from "react";
import { DatePickerComponent } from "../../lib/DatePicker/DatePicker";
import CompLayout from "../../components/CompLayout/CompLayout";
import Layout from "../../components/layout";

const DatePickerPage = () => {
  const datePicker = [
    {
      name: "Default",
      var: <DatePickerComponent></DatePickerComponent>,
      code: `<DatePickerComponent></DatePickerComponent>`,
    },
    {
      name: "Custom date format",
      var: <DatePickerComponent dateFormat="dd-MM-yyyy"></DatePickerComponent>,
      code: `<DatePickerComponent dateFormat="dd-MM-yyyy"></DatePickerComponent>`,
    },
    {
      name: "Disabled date format",
      var: (
        <DatePickerComponent
          dateFormat="dd-MM-yyyy"
          isDisabled
        ></DatePickerComponent>
      ),
      code: `<DatePickerComponent
      dateFormat="dd-MM-yyyy"
      isDisabled
    ></DatePickerComponent>`,
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
    <Layout>
      <CompLayout
        compName="Date Picker"
        compDesc="Date-picker component is generally used in forms to get a date data from user."
        compVariation={datePicker}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default DatePickerPage;
