import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  EmailShareButton,
  EmailIcon,
  TwitterIcon
} from "react-share";
const UserAddedQuestionCard = ({ url }) => (
  <div className="card-list">
    <div className="hello">
      <div className="hello-header">Thanks for asking this question!</div>
      <div className="text">
        The Community will add options and share their opinions.
      </div>
      <div className="text">
        Meanwhile, share your question to get answers from your network.
      </div>
      <div style={{ display: "flex", marginTop: "5px" }}>
        <span className="span">
          <FacebookShareButton>
            <FacebookIcon size={32} round={true} url={url} />
          </FacebookShareButton>
        </span>

        <span className="span">
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </span>
      </div>
    </div>
    <style jsx>{`
      .card-list {
        overflow: hidden;
        background-color: #fdfdfd;
        margin-bottom: 36px;
        padding: 18px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
        border: 1px solid #e6e8eb;
        border-radius: 15px;
        // min-width: 450px;
        // min-height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-family: Cabin;
        // border: 1px solid rgb(91, 56, 141);
      }

      .text {
        font-size: 16px;
        text-align: center;
      }

      .hello-header {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.4px;
      }

      .span {
        padding: 10px;
      }

      .hello {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      @media (min-width: 900px) {
        .card-list {
          overflow: hidden;
          background-color: #fdfdfd;
          margin-bottom: 36px;
          padding: 18px;
          box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
          border: 1px solid #e6e8eb;
          border-radius: 15px;
          min-width: 850px;
          min-height: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          font-family: Cabin;
          // border: 1px solid rgb(91, 56, 141);
        }
      }
    `}</style>
  </div>
);

export default UserAddedQuestionCard;
