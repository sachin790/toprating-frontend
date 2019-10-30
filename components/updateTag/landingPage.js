import React from "react";
import { LeftArrow } from "../Icons";
import Link from "next/link";
import RemoveSpacesAddHyphen from "../../lib/removeSpaces";
const UpdateTagLandingPage = ({ question }) => {
  const newQuestionString = RemoveSpacesAddHyphen(question);
  return (
    <div className="landing">
      <div className="landing-tag" />
      <div className="landing-question">
        {question ? question + "?" : "loading..."}
      </div>
      <div className="landing-details">
        <div className="landing-stat-container">
          <div className="details">
            <Link href={`/topic/${newQuestionString}`}>
              <span className="option-considered ">
                <LeftArrow />
                {"See All Options"}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .landing-stat-container {
            display: flex;
            justify-content: flex-start;
            position: relative;
            // border: 1px solid green;
            top: 16px;
          }
          .option-considered {
            font-size: 0.9em;
            padding-right: 10px;
            position: relative;
            display: flex;
            font-weight: 600;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            text-transform: uppercase;
            color: rgb(91, 56, 141);
          }

          .option-considered:hover {
            color: rgb(91, 56, 141);
            cursor: pointer;
          }
          .option-considered-text {
            display: block;
            font-size: 0.8em;
            width: 60%;
            color: #8d959c;
            margin-right: 15px;
            padding-right: 13px;
            font-weight: 400;
            letter-spacing: 0.4px;
            text-transform: uppercase;
            // border: 1px solid blue;
          }
          .not {
            display: none;
          }

          .landing {
            width: 100%;
            background: #fdfdfd !important;
            margin-top: 1px;
            box-sizing: border-box;
            font-size: 15px;
            font-family: inherit;
            border: 1px solid transparent;
          }

          .time-added {
            padding-right: 3px;
          }

          .landing-tag {
            padding: 10px 20px;
            margin-bottom: 5px;
            margin-left: 15px;
            margin-top: 15px;
          }
          .tagged {
            display: inline-block;
            margin-right: 10px;
            padding-right: 5px;
            text-transform: uppercase;
            font-size: 1em;
            color: rgb(91, 56, 141);
            font-weight: 600;
            font-family: inherit;
            letter-spacing: 0.4px;
          }
          .landing-question {
            display: flex;
            justify-content: center;
            font-size: 1.2em;
            font-weight: 700;
            color: rgb(91, 56, 141);
            font-family: Cabin;
          }

          .landing-details {
            display: flex;
            align-item: center;
            justify-content: center;
            margin-bottom: 30px;
          }

          .details {
            padding: 3px 10px;
            margin-top: 30px;
            // border: 1px dotted yellow;
            box-sizing: border-box;
            display: flex;
            margin-right: 8px;
          }

          @media screen and (min-width: 900px) {
            .landing {
              max-width: 100%;
              background: #fff !important;
              // height: 150px;
              margin-top: 1px auto;
              box-sizing: border-box;
              font-family: inherit;
              padding: 24px 0;
              border: 1px solid #e6e8eb;
              padding-left: 48px;
              padding-right: 48px;
            }

            .landing-question {
              display: flex;
              justify-content: center;
              font-size: 40px;
              font-weight: 700;
              font-family: Cabin;
            }
          }

          @media screen and (min-width: 768px) and (max-width: 900px) {
            .landing-question {
              justify-content: center;
              font-size: 30px;
              align-items: center;
            }
          }

          @media screen and (max-width: 768px) {
            .landing-question {
              justify-content: center;
              font-size: 25px;
              align-items: center;
            }
          }

          @media only screen and (min-width: 360px) and (max-width: 600px) {
            .landing-question {
              justify-content: center;
              font-size: 16px;
              align-items: center;
            }

            .landing-details .details {
              padding: 3px 9px;
              margin-top: 30px;
              color: #637381;
              font-size: 3.2vw;
              font-weight: 600;
              text-transform: uppercase;
            }
          }
        `}
      </style>
    </div>
  );
};

export default UpdateTagLandingPage;
