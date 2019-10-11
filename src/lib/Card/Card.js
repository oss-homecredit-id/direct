import React from "react";

export const Card = props => {
  const { img, date, button, title, subtitle, category } = props;
  return (
    <div className="card-container">
      {img ? (
        <div className="card-image">
          <img src={img} />
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}

      <div className="card-description">
        <p className="card-title">{title}</p>
        <p className="card-subtitle">{subtitle}</p>
        <div>
          {date ? (
            <div className="card-datetime">
              <strong>{category}</strong>{" "}
              <div className="card-separator">&nbsp; | &nbsp;</div> {date}
            </div>
          ) : (
            <div />
          )}

          <a>
            <div className="card-button">{button}</div>
          </a>
        </div>
      </div>
      <style jsx>{`
        .card-description {
          min-height: 120px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-description p {
          margin: 0px;
        }
        .card-description div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-description div .card-datetime {
          font-size: 14px;
        }
        .card-description div .card-datetime .card-separator {
          color: #e11931;
          font-weight: bold;
        }
        .card-description div .card-button {
          background-color: #e11931;
          color: white;
          width: 87px;
          height: 33px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-weight: bold;
        }
        .card-title {
          font-size: 18px;
          font-weight: bold;
        }
        .card-subtitle {
          font-size: 16px;
          font-weight: normal;
        }
        .card-container {
          height: auto;
          max-width: 432px;
          width: 100%;
          border-radius: 8.33px;
          background-color: #ffffff;
          box-shadow: 0 3px 10px 0 #d4d4d4;
        }
        .card-container .card-image {
          width: 100%;
        }
        .card-container .card-image img {
          width: 100%;
          height: 100%;
          border-radius: 8.33px 8.33px 0px 0px;
        }
        @media only screen and (max-width: 600px) {
          .card-title {
            font-size: 14px;
          }
          .card-subtitle {
            font-size: 12px;
          }
          .card-description {
            min-height: auto;
          }
          .card-description div .card-button {
            width: auto;
            height: auto;
            padding: 8px 16px;
            font-size: 10.5px;
          }
        }
      `}</style>
    </div>
  );
};
