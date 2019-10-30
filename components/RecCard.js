import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { More } from "./Icons"
import {
  faCaretDown,
  faTrophy,
  faComment,
  faExpandArrowsAlt
} from "@fortawesome/free-solid-svg-icons";
import { Button, Card, Divider, Image, Placeholder } from "semantic-ui-react";
import Link from "next/link";

function CardStats({ tag, question }) {
  return (
    <div>
      <div className="card-list-stats">
        <div className=" card-list-stats-item">
          <a href="#">0 Recs</a>
        </div>
        <div className="card-list-stats-seperator">•</div>
        <span>
          {tag ? (
            <React.Fragment>
              {tag.map((item, index) => {
                return (
                  <div key={index} className=" card-list-stats-item ">
                    <a href="#">{item}</a>
                  </div>
                );
              })}
            </React.Fragment>
          ) : (
            <Placeholder>
              <Placeholder.Line
                length={"very short"}
                style={{ width: "5px" }}
              />
            </Placeholder>
          )}
        </span>
      </div>
    </div>
  );
}

function CardContent(props) {

//console.log(props.handleShowOverflow, true)
  //console.log(holder, "i am here");

  return (
    <div className=" rec-card-content">
      <a className="community-recommendation-body">
        <div className=" community-recommendation-rec-text  community-recommendation-body-testimonial">
          {props.experience ? (
            props.experience
          ) : (
            <Placeholder>
              <Placeholder.Line length={"medium"} />
            </Placeholder>
          )}
          <div className="tip">
            {props.pro ? (
              <React.Fragment>
              {
                props.pro.map((item, i) => {
                  return (
                    <div key={i}>
                      <strong className="pro">Cons</strong> { item }
                    </div>
                  )
                })
              }

              </React.Fragment>
            ) : (
              <Placeholder>
                <Placeholder.Line length={"full"} style={{ width: "400px" }} />
                <Placeholder.Line
                  length={"medium"}
                  style={{ width: "400px" }}
                />
                <Placeholder.Line length={"short"} style={{ width: "400px" }} />
                <Placeholder.Line length={"full"} style={{ width: "400px" }} />
              </Placeholder>
            )}
          </div>
        </div>
      </a>
      <div className="community-recommendation-rec-footer">

        <a className="community-recommendation-rec-footer-link community-recommendation-rec-expand-link">
          {props.pro ? (
            <React.Fragment>
              <FontAwesomeIcon
                className="icon icon-expand "
                icon={faExpandArrowsAlt}
              />
              <span onClick={props.handleShowOverflow}>More Details</span>
            </React.Fragment>
          ) : (
            <Placeholder>
              <Placeholder.Line length={"medium"} style={{ width: "100px" }} />
            </Placeholder>
          )}
        </a>
      </div>
      <div className="card-list-seperator" />
    </div>
  );
}
function CardImageContent(props) {
  return (
    <div className="rec-card-image-content">
      <div className="rec-card-user-rec">
        <div className="rec-card-user-rec-avatar">
          <a className=" avatar hide-mobile bigger" href="#">
            {props.userImage ? (
              <img
                src={props.userImage}
                alt={props.username}
              />
            ) : (
              <Placeholder style={{ height: 150, width: 150 }}>
                <Placeholder.Image square />
              </Placeholder>
            )}
            }
          </a>
          <a className="avatar show-mobile big" href="#">
            {props.userImage ? (
              <img
                src={props.userImage}
                alt={props.username}
              />
            ) : (
              <Placeholder style={{ height: 150, width: 150 }}>
                <Placeholder.Image square />
              </Placeholder>
            )}
          </a>
        </div>
        <div className="rec-card-user-rec-content">
          <div className="rec-card-user-rec-content-header">
            {props.username ? (
              props.username
            ) : (
              <Placeholder style={{ borderRadius: "5px" }}>
                <Placeholder.Line length="full" style={{ width: "0px" }} />
              </Placeholder>
            )}
          </div>
          <a style={{color : "red !important"}} className="rec-card-Title" href="#" title="title">
            {props.option ? props.option : "Progress"}
          </a>
        </div>
      </div>
    </div>
  );
}

function CardQuestionHeader(props) {
  const caretIconSpanStyle = {
    backgroundColor: "rgb(96,51,141)",
    borderRadius: "50%",
    color: "#1b9ad1",
    padding: "0px 4px",
    marginLeft: 6,
    marginRight: -4,
    fontSize: "medium"
  };

  return (
    <div className="rec-card-question-header">
      <CardStats {...props} />
      <div className="rec-card-question-header-flex">
        <h4 className="rec-card-question-title rec-card-question-header-content">
          <Link as={`/topic/${props.question}`} href={"/topicview"}>
            <a href="#">
              {props.question ? (
                `${props.question}? `
              ) : (
                <Placeholder>
                  <Placeholder.Line length={"medium"} />
                </Placeholder>
              )}
            </a>
          </Link>
        </h4>
        <div className="rec-card-question-header-button">
          <a className="">
            {props.option ? (
              <span className="FAB-label">
                <span>
                <More />
                </span>
              </span>
            ) : (
              <Placeholder>
                <Placeholder.Line length={"medium"} />
              </Placeholder>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
function CardImage(props) {
  const cardImageStyle = {
    backgroundImage: "url('/static/wor.jpg')"
  };
  return (
    <div
      className="rec-card-image images-image-list-item-image"
      style={cardImageStyle}
    >
      <div className="rec-card-image-gradient">
        <a
          className="rec-card-image-link"
          href="#"
          title="Narcisse"
          rel="nofollow"
        />
        <CardImageContent { ...props } />
      </div>
    </div>
  );
}
export default class RecCard extends React.Component {
  render() {
    return (
      <div className="rec-card card-list-item has-footer">
        <CardQuestionHeader
          { ...this.props }

        />
        <CardImage { ...this.props } />
        <div>
          <CardContent { ...this.props } />
          {/*<CardComment /> */}
        </div>

        <style jsx global>
          {`

            textarea {
              font-size: 14px;
              font-weight: 400;
              line-height: 18px;
              border: 1px solid #d9d9d9;
              outline: none;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              border-radius: 4px;
              display: block;
              font-family: Cabin;
              line-height: 24px;
              padding: 0 12px;
              width: 100%;
              margin-top: 12px;
            }


            button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              border: none;
              line-height: 36px;
              padding: 0 18px;
              background-color: transparent;
              white-space: nowrap;
              border-radius: 0;
            }

            .card-list-item {
              overflow: hidden;
              background-color: #fdfdfd;
              margin-bottom: 5px;
              padding: 18px;
              border: 1px solid #e6e8eb;
              border-radius: 5px;
            }
            .card-list-item a {
              color : #000;
            }

            .card-list-item.has-footer {
              padding-bottom: 12px;
            }

            .rec-card-question-header {
              margin-bottom: 12px;
            }

            .rec-card-question-header-flex {
              display: flex;
              align-items: flex-start;
            }

            .card-list-stats {
              font-size: 13px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.4px;
              color: #58647b;
              margin-bottom: 6px;
              max-height: 24px;
              overflow: hidden;
            }

            .card-list-stats-item {
              display: inline-block;
              margin-right: 12px;
            }

            .card-list-stats-seperator {
              display: inline-block;
              margin-right: 12px;
            }

            .rec-card-question-title {
              font-size: 24px;
              font-weight: 600;
              line-height: 30px;
              display: block;
              flex-grow: 1;
              flex-shrink: 1;
              word-break: break-word;
              margin: auto;
              color : #000 !important;
            }

            .rec-card-question-header-button {
              display: flex;
              align-items: center;
              padding-left: 12px;
              flex-shrink: 0;
              flex-grow: 0;
              height: 30px;
            }

            .FAB {
              display: inline-flex;
              height: 48px;
              background: rgb(96, 51, 141);
              border-radius: 5px;
              text-align: center !important;
              vertical-align: top;
              transition: background-color 0.15s;
            }

            .FAB.micro {
              height: 24px;
              border-radius: 12px;
            }

            .FAB.micro .FAB-label {
              line-height: 24px;
              margin-left: 12px;
              margin-right: 6px;
            }

            .rec-card-image {
              position: relative;
              width: calc(100% + 36px);
              left: -18px;
              min-height: 201px;
              background: 50% / cover no-repeat;
              color: #fff;
              /*top : -90px;*/
            }

            .rec-card-image-gradient {
              position: relative;
              width: 100%;
              min-height: inherit;
              background-image: linear-gradient(
                180deg,
                rgba(28, 41, 62, 0) 0,
                rgba(28, 41, 62, 0.2) 30%,
                rgba(7, 15, 29, 0.9)
              );
            }

            .rec-card-image-link {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 100;
            }

            .rec-card-image-content {
              position: absolute;
              left: 24px;
              margin-right: 24px;
              max-width: calc(100% - 48px);
              bottom: 18px;
              z-index: 101;
            }

            .rec-card-user-rec {
              display: flex;
            }

            .rec-card-user-rec-avatar {
              margin-right: 12px;
              flex-grow: 0;
              flex-shrink: 0;
            }

            .avatar {
              position: relative;
              display: inline-block;
              overflow: hidden;
              background: 50% / contain no-repeat #fff;
              border-radius: 50%;
              width: 24px;
              height: 24px;
              font-weight: 700;
              text-align: center;
              color: #58647b;
              vertical-align: top;
              box-shadow: inset 0 0 0 1.5px #4d4d4d, 0 0 0 1px #e6e8eb;
              z-index: 100;
              top : 78px;
            }

            .avatar.bigger {
              height: 48px;
              width: 48px;
            }

            .avatar.big {
              height: 36px;
              width: 36px;
            }

            .show-mobile {
              display: none !important;
            }

            .rec-card-user-rec-content {
              font-size: 14px;
              font-weight: 400;
              line-height: 18px;
              flex-grow: 1;
              flex-shrink: 1;
              overflow: hidden;
              position : relative;
              top : 78px;
            }

            .rec-card-Title {
              font-size: 24px;
              font-weight: 600;
              line-height: 30px;
              display: block;
              line-height: 33px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.36);
              color : #000 !important;
            }

            .rec-card-content {
              margin-top: 18px;
            }

            .community-recommendation-body {
              position: relative;
              display: inline-block;
              padding-left: 12px;
              color: #595959;
              top : 40px;
            }

            .community-recommendation-body-testimonial {
              word-break: break-word;
            }



            .community-recommendation-rec-text {
              display: inline-block;
            }

            .community-recommendation-rec-footer {
              display: flex;
              align-items: flex-end;
              justify-content: flex-start;
              align-self: flex-end;
              width: 100%;
              flex-shrink: 0;
              flex-grow: 1;
              padding-top: 12px;
              line-height: 30px;
              padding-bottom: 18px;
            }

            .community-recommendation-rec-reaction-button {
              display: flex;
              flex-grow: 0;
              flex-shrink: 0;
            }

            .reaction-button-set-link {
              margin-right: 10px;
              display: inline-flex;
            }

            .reaction-button {
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.4px;
              display: flex;
              height: 30px;
              line-height: 30px;
              border-radius: 4px;
              box-shadow: inset 0 0 0 1.5px #4d4d4d;
              color: #4d4d4d;
              padding: 0 6px;
              vertical-align: middle;
            }
            a {
              color: #000 !important;
            }

            .reaction-button.has-text {
              font-weight: 700;
            }

            .icon-trophy {
              color: #f2b203;
            }

            .reaction-button-text {
              margin: 0 3px 0 6px;
            }

            .community-recommendation-rec-footer-link {
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.4px;
              display: flex;
              height: 30px;
              align-items: center;
              margin-left: 24px;
              flex-shrink: 0;
              flex-grow: 0;
            }

            .community-recommendation-rec-footer-comments-icon {
              height: 24px !important;
              width: 24px !important;
              vertical-align: text-bottom;
              color: #4d4d4d;
            }

            .community-recommendation-rec-expand-link {
              margin-left: auto !important;
              color: #4d4d4d;
            }

            .icon-expand {
              height: 18px !important;
              width: 18px !important;
              margin-right: 3px;
            }

            .rec-card-comment {
              display: flex;
              align-items: flex-start;
              padding-top: 12px;
            }

            .rec-card-comment-avatar {
              margin-right: 6px;
              flex-shrink: 0;
              flex-grow: 0;
            }

            .avatar:before,
            .avatar img {
              position: absolute;
              top: 0;
              width: 100%;
              height: 100%;
            }

            .avatar img {
              left: 0;
            }

            .rec-card-comment-input-container {
              position: relative;
              flex-shrink: 1;
              flex-grow: 1;
            }

            textarea.rec-card-comment-input {
              height: 36px;
              line-height: 18px;
              font-size: 14px;
              padding: 9px;
              padding-right: 48px;
              margin: 0;
              border-radius: 9px;
              border: none;
              background-color: #ecf0f0;
              resize: none;
            }

            .rec-card-comment-input-submit {
              position: absolute;
              bottom: 0;
              right: 0;
              padding: 9px;
              font-size: 12px;
              line-height: 16px;
              font-weight: 700;
              color: #1b9ad1;
              text-transform: uppercase;
              transition: 0.15s;
            }

            .rec-card-comment-input-submit.disabled {
              color: #8d959c;
            }

            a.disabled {
              pointer-events: none;
              cursor: default;
            }

            @media (max-width: 1023px) {
              .rec-card-image-content {
                left: 18px;
                margin-right: 18px;
              }
            }

            @media (max-width: 767px) {
              .card-list-item {
                margin: 0 0 30px;
                padding: 12px;
              }

              .rec-card-question-title {
                font-size: 19px;
                line-height: 30px;
                color : #000;
              }

              .rec-card-image {
                width: calc(100% + 24px);
                left: -12px;
                min-height: 138px;
              }

              .rec-card-image-content {
                bottom: 12px;
              }

              .rec-card-user-rec-avatar {
                margin-right: 6px;
              }

              .hide-mobile {
                display: none !important;
              }

              .show-mobile {
                display: block !important;
              }

              .rec-card-Title {
                font-size: 21px;
                line-height: 30px;
                color : #000  !important;
              }

              .community-recommendation-body {
                padding-left: 0;
              }


              .community-recommendation-rec-footer {
                padding-bottom: 12px;
              }
            }

            @media (max-width: 424px) {
              .rec-card-image {
                min-height: 120px;
              }

              .reaction-button {
                padding-left: 6px;
                padding-right: 6px;
              }

              .community-recommendation-rec-footer-link {
                margin-left: 12px;
              }
            }

            .pro {
              color: green;
              font-family: Cabin;
              font-size: 14px;
            }

            .con {
              color: #cb1a4a;
              font-family: Cabin;
              font-size: 14px;
            }
          `}
        </style>
      </div>
    );
  }
}
