import React from "react";
import { Banned } from "../Icons";
const ReactionBanner = () => (
  <div className="reaction-banner-container">
    <div
      style={{
        display: "flex",
        paddingLeft: "15px"
        // justifyContent: "center"
        // alignItems: "center"
      }}
      className="cont"
    >
      <span className="banned-icon">
        <Banned color={"#4d4d4d"} />
      </span>
      <span className="text">
        This question has been marked as
        <span style={{ paddingLeft: "4px", paddingRight: "4px" }}>
          <b>Not a Fit</b>
        </span>
        for the format of Toprating.
      </span>
    </div>
    <style jsx>
      {`
        .reaction-banner-container {
          width: 100%;
          background-color: #fdfdfd;
          padding-top: 20px;
          padding-bottom: 20px;
          overflow: hidden;
          border: 1px solid #e6e8eb;
        }

        .text {
          font-size: 16px;
          margin-left: 30px;
          color: #4d4d4d;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.1px;
          text-transform: none;
          display: flex;
          flex-wrap: wrap;
          //   border: 1px solid orange;
          //   width: 60%;
        }

        .cont {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 900px) {
          .cont {
            display: flex;
            justify-content: flex-start;
          }
        }
      `}
    </style>
  </div>
);

export default ReactionBanner;
