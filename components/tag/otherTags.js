import React from "react";
import Link from "next/link";
const OtherTags = ({ otherTags }) => (
  <div className="landing">
    <div className="landing-question">
      <div className="popular-tag">Other Popular Tags:</div>
      {otherTags.slice(0, 5).map((item, index) => {
        return (
          <div className="tag" key={index}>
            <Link prefetch as={`/tags/${item}`} href={`/tags/${item}`}>
              <span>{item}</span>
            </Link>
          </div>
        );
      })}
    </div>
    <style jsx>
      {`
        .landing {
          width: 100%;
          background: #fdfdfd !important;
          // margin-top: 1px;
          box-sizing: border-box;
          font-size: 15px;
          font-family: inherit;
          border: 1px solid transparent;
        }

        .popular-tag {
          margin-left: 5px;
          //   margin-right: 50px;
          font-size: 12px;
          color: #58647b;
        }

        .landing-question {
          display: flex;

          justify-content: flex-start;
          flex-wrap: wrap;
          padding: 10px 0px;
          text-transform: capitalize;
          font-size: 16px;
          font-weight: 700;
          color: rgb(91, 56, 141);
          font-family: Cabin;
          letter-spacing: 0.4px;
          cursor: pointer;
        }
        .tag {
          margin-left: 10px;
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.4px;
        }
        .landing-question:hover {
          color: #4e4376;
        }

        @media (min-width: 1023px) {
          .popular-tag {
            margin-left: 108px;
            margin-right: 50px;
            font-size: 16px;
            color: #58647b;
          }

          .tag {
            margin-left: 10px;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0.4px;
          }
        }
      `}
    </style>
  </div>
);

export default OtherTags;
