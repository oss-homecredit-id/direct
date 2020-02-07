import React from "react";
import { MainLayout } from "../../components/Navigation/MainLayout";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";
import ColorBlock from "../../components/ColorBlock/ColorBlock";

const colorPage = () => {
  const color = {
    black: [
      { code: "#262626", name: "darkerBlack" },
      { code: "#7b7b7b", name: "primaryBlack" },
      { code: "#c8c8c8", name: "secondaryBlack" },
      { code: "#f4f4f4", name: "lighterBlack" },
      { code: "#ffffff", name: "mainWhite" },
      { code: "#f9f9f9", name: "background" },
    ],
    red: [
      { code: "#860E1D", name: "darkerRed" },
      { code: "#E11931", name: "primaryRed" },
      { code: "#EC7482", name: "secondaryRed" },
      { code: "#FCE8EA", name: "lighterRed" },
    ],
    green: [
      { code: "#246634", name: "darkerGreen" },
      { code: "#3EAC58", name: "primaryGreen" },
      { code: "#8ACC9A", name: "secondaryGreen" },
      { code: "#ECF6EE", name: "lighterGreen" },
    ],
    blue: [
      { code: "#235689", name: "darkerBlue" },
      { code: "#3C91E6", name: "primaryBlue" },
      { code: "#89BCEF", name: "secondaryBlue" },
      { code: "#EBF4FC", name: "lighterBlue" },
    ],
    orange: [
      { code: "#985619", name: "darkerOrange" },
      { code: "#FF912A", name: "primaryOrange" },
      { code: "#FFBC7E", name: "secondaryOrange" },
      { code: "#FFF4EA", name: "lighterOrange" },
    ],
    yellow: [
      { code: "#986E04", name: "darkerYellow" },
      { code: "#FFBA08", name: "primaryYellow" },
      { code: "#FFD569", name: "secondaryYellow" },
      { code: "#FFF8E6", name: "lighterYellow" },
    ],
  };

  const colorData = {
    name: "Color",
    desc:
      "Here is the list of color that corresponds with Home Credit Indonesia regulation. You can import the mixins and add the color by name to your project.",
    code: `   import { colors } from "../../assets/mixins/mixins";
    const styles = {
      container: {
        backgroundColor: colors.primaryRed
      }
      `,
  };

  const style = {
    container: {
      display: "flex",
      margin: "10px",
    },
    color: {
      display: "flex",
      flexDirection: "column",
      margin: "10px 0",
    },
  };

  return (
    <MainLayout>
      <TemplateLayout
        color
        tempName={colorData.name}
        tempDesc={colorData.desc}
        tempCode={colorData.code}
      >
        <div style={style.container}>
          {color.black.map((black, key) => (
            <div key={key}>
              <ColorBlock border color={black}></ColorBlock>
              <ColorBlock color={black}></ColorBlock>
            </div>
          ))}
        </div>
        <div style={style.container}>
          {color.red.map((red, key) => (
            <div key={key}>
              <ColorBlock border key={key} color={red}></ColorBlock>
              <ColorBlock key={key} color={red}></ColorBlock>
            </div>
          ))}
        </div>
        <div style={style.container}>
          {color.green.map((green, key) => (
            <div key={key}>
              <ColorBlock border key={key} color={green}></ColorBlock>
              <ColorBlock key={key} color={green}></ColorBlock>
            </div>
          ))}
        </div>
        <div style={style.container}>
          {color.blue.map((blue, key) => (
            <div key={key}>
              <ColorBlock border key={key} color={blue}></ColorBlock>
              <ColorBlock key={key} color={blue}></ColorBlock>
            </div>
          ))}
        </div>
        <div style={style.container}>
          {color.orange.map((orange, key) => (
            <div key={key}>
              <ColorBlock border key={key} color={orange}></ColorBlock>
              <ColorBlock key={key} color={orange}></ColorBlock>
            </div>
          ))}
        </div>
        <div style={style.container}>
          {color.yellow.map((yellow, key) => (
            <div key={key}>
              <ColorBlock border key={key} color={yellow}></ColorBlock>
              <ColorBlock key={key} color={yellow}></ColorBlock>
            </div>
          ))}
        </div>
      </TemplateLayout>
    </MainLayout>
  );
};

export default colorPage;
