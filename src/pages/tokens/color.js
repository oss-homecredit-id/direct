import React from "react";
import Layout from "../../components/layout";
import TemplateLayout from "../../components/TemplateLayout/TemplateLayout";
import ColorBlock from "../../components/ColorBlock/ColorBlock";

const colorPage = () => {
  const color = [
    "#262626",
    "#7B7B7B",
    "#C8C8C8",
    "#F4F4F4",
    "#FFFFFF",
    "#F9F9F9",
    "#860E1D",
    "#E11931",
    "#EC7482",
    "#FCE8EA",
    "#246634",
    "#3EAC58",
    "#8ACC9A",
    "#ECF6EE",
    "#235689",
    "#3C91E6",
    "#89BCEF",
    "#EBF4FC",
    "#985619",
    "#FF912A",
    "#FFBC7E",
    "#FFF4EA",
    "#986E04",
    "#FFBA08",
    "#FFD569",
    "#FFF8E6",
  ];

  const style = {
    container: {
      display: "flex",
      margin: "10px",
    },
  };

  return (
    <Layout>
      <TemplateLayout tempName="Colors">
        <div style={style.container}>
          {color.map((color, key) => (
            <ColorBlock color={color}></ColorBlock>
          ))}
        </div>
      </TemplateLayout>
    </Layout>
  );
};

export default colorPage;
