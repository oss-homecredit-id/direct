import React from "react";

export const Breadcrumb = ({ items }) => {
  const Separator = item => {
    if (item.children === items.length) {
      return <React.Fragment />;
    } else {
      return (
        <div className="separator">
          >
          <style jsx>{`
            .separator {
              margin: 0 5px;
            }
          `}</style>
        </div>
      );
    }
  };
  return (
    <React.Fragment>
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb-container">
          {items.map((item, key) => {
            return (
              // <a href="#">
              <div className="breadcrumb-item" key={key}>
                {item.page}
                <Separator>{items.indexOf(item) + 1}</Separator>
              </div>
              // </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .breadcrumb-wrapper {
          display: flex;
          margin: 16px;
          justify-content: center;
        }
        .breadcrumb-container {
          display: flex;
          max-width: 940px;
          width: 100%;
        }
        .breadcrumb-item {
          display: flex;
          font-size: 14px;
        }
        .breadcrumb-item:hover {
          cursor: pointer;
        }
        @media only screen and (max-width: 600px) {
          .breadcrumb-wrapper {
            margin: 8px;
          }
          .breadcrumb-item {
            font-size: 10.5px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};
