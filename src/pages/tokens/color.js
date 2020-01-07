import React from "react";
import Layout from "../../components/layout";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";
import ColorBlock from "../../components/ColorBlock/ColorBlock";

const colorPage = () => {
  const color = {
    black: ["#262626", "#7B7B7B", "#C8C8C8", "#F4F4F4", "#FFFFFF", "#F9F9F9"],
    red: ["#860E1D", "#E11931", "#EC7482", "#FCE8EA"],
    green: ["#246634", "#3EAC58", "#8ACC9A", "#ECF6EE"],
    blue: ["#235689", "#3C91E6", "#89BCEF", "#EBF4FC"],
    orange: ["#985619", "#FF912A", "#FFBC7E", "#FFF4EA"],
    yellow: ["#986E04", "#FFBA08", "#FFD569", "#FFF8E6"],
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
    <Layout>
      <TemplateLayout tempName="Colors">
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
    </Layout>
  );
};

export default colorPage;
