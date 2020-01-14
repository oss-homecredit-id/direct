import { string, bool } from "prop-types";
import React from "react";

export const Block = props => {
  const { name, items, icon, slug, imgWidth } = props;
  return slug ? (
    <a className="commodities-blocks">
      {icon ? (
        <div className="commodities-icon">
          <img src={icon} />
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      {name ? (
        <div className="commodities-name">{name}</div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      {items ? (
        <div className="commodities-items">{items}</div>
      ) : (
        <React.Fragment></React.Fragment>
      )}

      <style jsx>{`
        .commodities-blocks {
          max-width: 300px;
          width: 100%;
          min-height: 250px;
          margin-bottom: 24px;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 4px 10px 0 rgba(64, 64, 64, 0.2);
          display: flex;
          justify-content: center;
          flex-direction: column;
          border: solid 1px white;
        }

        .commodities-icon {
          display: flex;
          justify-content: center;
          margin: 24px;
        }

        .commodities-icon img {
          max-width: 170px;
          width: ${imgWidth};
        }

        .commodities-name {
          font-size: 16px;
          text-align: center;
          font-weight: bold;
        }

        .commodities-items {
          font-size: 14px;
          margin: 24px;
        }

        .commodities-blocks:hover {
          cursor: pointer;
          border: solid 1px red;
        }
      `}</style>
    </a>
  ) : (
    <a className="commodities-blocks">
      {icon ? (
        <div className="commodities-icon">
          <img src={icon} />
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      {name ? (
        <div className="commodities-name">{name}</div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      {items ? (
        <div className="commodities-items">{items}</div>
      ) : (
        <React.Fragment></React.Fragment>
      )}

      <style jsx>{`
        .commodities-blocks {
          max-width: 300px;
          width: 100%;
          min-height: 250px;
          margin-bottom: 24px;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 4px 10px 0 rgba(64, 64, 64, 0.2);
          display: flex;
          justify-content: center;
          flex-direction: column;
          border: solid 1px white;
        }

        .commodities-icon {
          display: flex;
          justify-content: center;
          margin: 24px;
        }

        .commodities-icon img {
          max-width: 170px;
          width: ${imgWidth};
        }

        .commodities-name {
          font-size: 16px;
          text-align: center;
          font-weight: bold;
        }

        .commodities-items {
          font-size: 14px;
          margin: 24px;
        }

        .commodities-blocks:hover {
          cursor: pointer;
          border: solid 1px red;
        }
      `}</style>
    </a>
  );
};

Block.propTypes = {
  name: string,
  items: string,
  icon: string,
  slug: bool,
  commodity: string,
  imgWidth: string,
};
