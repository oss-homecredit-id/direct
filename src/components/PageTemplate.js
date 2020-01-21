import React from "react";

const PageTemplate = ({ children }) => {
  return (
    <React.Fragment>
      <div className="page-template">{children}</div>
      <style jsx="true">{`
        .page-template {
          margin: 4rem;
        }
        @media only screen and (max-width: 960px) {
          .page-template {
            margin: 5rem 0.5rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default PageTemplate;
