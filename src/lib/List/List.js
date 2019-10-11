import { bool, array } from "prop-types";
import React from "react";

export const List = ({ data, withoutNumber, title }) => {
  return (
    <div className="list-wrapper">
      <h2>{title}</h2>
      {data.map((data, key) => {
        return data.subtitle ? (
          <>
            <p className={withoutNumber ? "nonumber" : "title"} key={key}>
              {data.title}
            </p>
            <p
              className="subtitle"
              dangerouslySetInnerHTML={{ __html: data.subtitle }}
            ></p>
          </>
        ) : (
          <>
            <p
              dangerouslySetInnerHTML={{ __html: data }}
              className={withoutNumber ? "nonumber" : "title"}
              key={key}
            ></p>
          </>
        );
      })}
      <style jsx>{`
        .list-wrapper {
          counter-reset: terms-counter;
          margin: 0 16px;
        }
        h2 {
          color: #404040;
          font-size: 24px;
          font-weight: bold;
          line-height: 31px;
          text-align: center;
        }
        .title {
          padding-left: 50px;
          position: relative;
          font-weight: bold;
          margin: 10px 0;
        }
        .title::before {
          counter-increment: terms-counter;
          content: counter(terms-counter);
          border-radius: 50%;
          position: absolute;
          left: 0em;
          padding: 2px 8px;
          margin-right: 37px;
          color: white;
          text-align: center;
          font-size: 80%;
          background-color: #e11931;
        }
        .nonumber {
          padding-left: 0px;
          margin: 10px 0px;
          position: relative;
          font-weight: bold;
        }
        .subtitle {
          padding-left: ${withoutNumber ? "0px" : "50px"};
          position: relative;
          margin: 0px;
        }
        @media only screen and (max-width: 600px) {
          p {
            font-size: 12px;
          }
          h2 {
            font-size: 16px;
            line-height: 20px;
          }
        }
      `}</style>
    </div>
  );
};

List.propTypes = {
  data: array,
  withoutNumber: bool,
};
