import React from "react";

const Modal = ({ close, children }) => {
  return (
    <div className="modal-wrapper display-block">
      <div className="modal-main">
        <button onClick={close} className="close-btn">
          X
        </button>
        <div className="content">{children}</div>
      </div>
      <style jsx="true">{`
        .modal-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          z-index: 21;
        }
        .modal-main {
          position: fixed;
          background: white;
          max-width: 780px;
          width: 80%;
          max-height: 546px;
          height: 100%;
          top: 50%;
          left: 50%;
          border-radius: 16px;
          transform: translate(-50%, -50%);
          padding: 50px 40px 40px 40px;
        }
        button {
          width: 32px;
          height: 32px;
          background-color: var(--color-red);
          color: white;
          cursor: pointer;
          border-radius: 8px;
          border: none;
        }
        button:disabled {
          cursor: auto;
          opacity: 0.3;
        }
        .button-red-disabled {
          background: #4f4f4f;
          color: #fff;
          cursor: not-allowed !important;
        }
        .content {
          width: 100%;
          height: 100%;
          overflow: auto;
          padding: 10px 10px 0 5px;
        }
        .display-block {
          display: block;
        }
        .close-btn {
          position: absolute;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          right: 20px;
          top: 15px;
          font-size: 15px;
        }
        .content h3 {
          color: #404040;
          font-family: Campton-Bold;
          font-size: 24px;
          font-weight: bold;
          line-height: 31px;
          text-align: center;
        }

        .button-submit {
          height: 40px;
          width: 160px;
          background-color: #e11931;
          color: #ffffff;
          font-family: Roboto;
          font-size: 15px;
          font-weight: bold;
          letter-spacing: 0.26px;
          line-height: 20px;
          justify-content: center;
          align-items: center;
          display: flex;
          margin: 20px 0 0 0;
          border-radius: 8px;
          cursor: pointer;
        }
        @media only screen and (max-width: 320px) {
          .modal-main {
            width: 95% !important;
            padding: 50px 10px 20px 10px !important;
          }
        }
        @media only screen and (max-width: 600px) {
          .modal-main {
            width: 85%;
            max-height: 460px;
            padding: 50px 15px 20px 15px;
          }
          .content {
            padding: 0;
          }
          .button-submit {
            height: 35px;
            width: 130px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};
export { Modal };
