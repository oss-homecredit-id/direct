import React from "react";
import { DatePickerComponent } from "../../lib/DatePicker/DatePicker";
import CompLayout from "../../components/CompLayout/CompLayout";
import {MainLayout} from "../../components/MainLayout";

const DatePickerPage = () => {
  const datePicker = [
    {
      name: "Default",
      var: <DatePickerComponent></DatePickerComponent>,
    },
    {
      name: "Custom date format",
      var: <DatePickerComponent dateFormat="dd-MM-yyyy"></DatePickerComponent>,
    },
    {
      name: "Disabled date format",
      var: (
        <DatePickerComponent
          dateFormat="dd-MM-yyyy"
          isDisabled
        ></DatePickerComponent>
      ),
    },
  ];

  const propsData = [
    {
      Name: "Variant",
      Params: "Primary, Seconday, Text",
      Description:
        "There are 3 variant type of Button that distinguishes the style of the button",
    },
    {
      Name: "Disabled",
      Params: "",
      Description:
        "When adding props 'Disabled', the Button component will be unable to be clicked",
    },
    {
      Name: "styleConfig",
      Params: "",
      Description:
        "When adding props 'styleConfig', some of the button style's aspect can be configured such as margin, padding, and width",
    },
  ];

  return (
    <Layout>
      <CompLayout
        compName="Date Picker"
        compDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        compVariation={datePicker}
        compProps={propsData}
      ></CompLayout>
    </Layout>
  );
};

export default DatePickerPage;
