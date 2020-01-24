import React from "react";

const PageTemplate = ({ children, title, subTitle }) => {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <div className="page-main">
          <h1>{title}</h1>
          <h5>{subTitle}</h5>
          <div style={{ height: "1px", margin: "1rem 0" }}></div>
          {children}
        </div>
      </div>
      <style jsx="true">{`
        .page-wrapper {
          display: flex;
          flex-direction: row;
        }
        .page-main {
          display: flex;
          flex-direction: column;
          margin: 4rem;
        }
        @media only screen and (max-width: 960px) {
          .page-main {
            margin: 5rem 1rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default PageTemplate;
