import React, { Component, Fragment } from "react";
import timeDifference from "../../lib/dateConversion";
import {
  GetQuestionTotalRecs,
  FollowQuestion,
  FetchSpecificQuestionId,
  GetFollowedQuestion
} from "../../apiRequests/apiRequests";
import { Popup } from "semantic-ui-react";
import { More } from "../Icons";
import Link from "next/link";
import { CLIENT_API } from "../../config/config";
import RemoveSpacesAddHyphen from "../../lib/removeSpaces";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  EmailShareButton,
  EmailIcon,
  TwitterIcon
} from "react-share";

import ReactionBanner from "./reactionBanner";

class TopicViewLandingPage extends Component {
  state = {
    recs: [],
    follow: false,
    copied: false,
    url: `${CLIENT_API}/topic/${RemoveSpacesAddHyphen(this.props.question)}`
  };

  async componentDidMount() {
    //Do something here
    this.getTotalRecs(this.props.question);
    this.getQuestionId(this.props.question);

    const QuestId = await FetchSpecificQuestionId(this.props.question);

    this.CheckWhetherQuestionIsFollowed(QuestId.data.id);
  }

  getTotalRecs = question => {
    GetQuestionTotalRecs(question)
      .then(result => {
        this.setState({
          recs: result.data
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  };

  getQuestionId = id => {
    FetchSpecificQuestionId(id)
      .then(result => {
        this.setState({
          questionId: result.data.id
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  };

  CheckWhetherQuestionIsFollowed = questionId => {
    const user = JSON.parse(localStorage.getItem("user_details"));
    if (user) {
      GetFollowedQuestion(questionId, user._id)
        .then(result => {
          this.setState({
            follow: result.data
          });
        })
        .catch(err => {
          this.setState({
            error: err
          });
        });
    }
  };

  componentWillUnmount() {
    this.setState({
      recs: []
    });
  }

  handleFollowLink = () => {
    const user = JSON.parse(localStorage.getItem("user_details"));

    if (!user) {
      alert("Kindly login");
      return;
    }

    FollowQuestion(this.state.questionId, user._id)
      .then(result => {
        this.setState({
          follow: result.data.following
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
    // this.setState(previouState => ({
    //   follow: !previouState.follow
    // }));
  };

  copyToClipboard = () => {
    const copiedQuestion = `${CLIENT_API}/topic/${RemoveSpacesAddHyphen(
      this.props.question
    )}`;

    this.setState(
      {
        copied: true
      },
      () => {
        navigator.clipboard.writeText(copiedQuestion);
      }
    );
  };

  render() {
    const { recs, follow, copied, url, questionId } = this.state;
    const {
      question,
      data,
      lastUpdated,
      numOfRecs,
      optionConsidered,
      tag
    } = this.props;
    const flattenArray = arr => {
      return [].concat(...arr);
    };
    const _tag = flattenArray(tag);
    const d = new Date(lastUpdated);
    const date = timeDifference(Date.now(), d);

    return (
      <div className="landing">
        <div className="landing-tag">
          {tag ? (
            <React.Fragment>
              {_tag.map((item, i) => {
                return (
                  <Fragment key={i}>
                    <Link prefetch href={`/tags/${item}`} as={`/tags/${item}`}>
                      <span className={"tagged"} key={i}>
                        {item}
                      </span>
                    </Link>
                  </Fragment>
                );
              })}
            </React.Fragment>
          ) : (
            ""
          )}

          <div className="more-actions">
            <span
              onClick={this.handleFollowLink}
              className={follow ? "follow span bg" : "follow span"}
            >
              <span style={{ position: "relative", top: "1.5px" }}>
                {follow ? "Following" : "Follow"}
              </span>
            </span>
            <Popup
              trigger={
                <span className="more-links">
                  <More color="transparent" width="24" height="24" />
                </span>
              }
              content={
                <div
                  style={{ width: "200px", color: "#4d4d4d", fontSize: "16px" }}
                >
                  <div>
                    <Link
                      prefetch
                      // as={`/manageTag`}
                      href={`/updateTag/${questionId}`}
                    >
                      <p className="clickable">Add/Edit Tags</p>
                    </Link>
                    <Link
                      prefetch
                      href={`/update-history?id=${questionId}`}
                      as={`/update-history?id=${questionId}`}
                      // as={`/updatedQuestion`}
                    >
                      <p className="clickable">See Update History</p>
                    </Link>
                    <Link prefetch href={`/addoption/${questionId}`}>
                      <p className="clickable">Add Option</p>
                    </Link>
                  </div>

                  <hr />

                  <div>
                    <div>SHARE</div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: " column"
                        // border: "1px solid orange"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          padding: "10px",
                          color: "#4d4d4d",
                          fontSize: "16px"
                        }}
                      >
                        <div style={{ marginRight: "20px" }}>
                          <FacebookShareButton url={url}>
                            <FacebookIcon size={32} round={true} />
                          </FacebookShareButton>
                          <span>Share</span>
                        </div>
                        <div className="social-btn">
                          <TwitterShareButton url={url}>
                            <TwitterIcon size={32} round={true} />
                          </TwitterShareButton>
                          <span>Tweet</span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          padding: "10px",
                          color: "#4d4d4d",
                          fontSize: "16px"
                        }}
                      >
                        <div
                          style={{ marginRight: "20px" }}
                          // className="social-btn"
                        >
                          <EmailShareButton url={url}>
                            <EmailIcon size={32} round={true} />
                          </EmailShareButton>

                          <span>Share</span>
                        </div>

                        <div
                          className="social-btn"
                          onClick={this.copyToClipboard}
                        >
                          <i className="far fa-clipboard" />
                          <div>
                            {copied && "Copied"}
                            {!copied && "  Copy"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  {/* <div>
                    <div>MARK QUESTION AS SPAM</div>
                    <p>Mark as Spam</p>
                  </div> */}
                </div>
              }
              on="click"
              hideOnScroll
              position="bottom right"
            />
          </div>
        </div>
        <div className="landing-question">
          {question ? question + "?" : "loading..."}
        </div>
        <div className="landing-details">
          <div className="landing-stat-container">
            <div className="details">
              <span className="option-considered ">
                {optionConsidered ? optionConsidered : 0}
              </span>
              <span
                style={{ position: "relative", left: "-10px" }}
                className="option-considered-text "
              >
                Options <br />
                <span>Considered</span>
              </span>
            </div>
            <div className="details">
              <span className="option-considered">
                {recs ? recs.length : 0}
              </span>
              <span className="option-considered-text">
                User <br />
                <span>Recs</span>
              </span>
            </div>
            <div className="details">
              <span className="option-considered">{date ? date : 0}</span>
              <span className="option-considered-text">
                Last <br />
                <span>Updated</span>
              </span>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .landing-stat-container {
              display: flex;
              justify-content: flex-start;
              position: relative;
              top: 16px;
            }
            .option-considered {
              // font-size: 26px;
              padding-right: 10px;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: 200;
              flex-shrink: 0;
              // color: #8d959c;
              color: #2b5876;
              width: 50%;
            }

            .clickable {
              cursor: pointer;
            }

            .far {
              font-size: 30px;
              // color: blue;
              // text-align: center;
              position: relative;
              // left: 2px;
            }

            .share-facebook {
              box-shadow: none;
              color: #fff;
              background-color: #4267b2;
            }

            .share-twitter {
              box-shadow: none;
              color: #fff;
              background-color: #1da1f2;
            }
            .social-btn {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              // font-size: 14px;
              // font-weight: 400;
              // line-height: 18px;
              // height: 50px;
              // line-height: 24px;
              // background: transparent;
              // display: inline-block;
              // box-shadow: inset 0 0 0 1px #e6e8eb;
              // padding: 0 6px;
              // border-radius: 3px;
              cursor: pointer;
              // width: 50px;
            }
            .option-considered-text {
              display: block;
              // font-size: 0.8em;
              width: 60%;
              color: #2b5876;
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
              // margin-top: 1px;
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
              // border: 1px solid red;
            }
            .more-actions {
              float: right;
              position: relative;
              display: flex;
              top: -4px;
              // border: 1px solid green;
            }

            .follow {
              font-size: 12px;
              diplay: flex;
              position: relative;
              // height: 20px;
              // top: -6px;
              visibility: visible;
              justify-content: center;
              align-items: center;
              // text-align: center;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.4px;
              display: inline-block;
              color: #4d4d4d;
              border: 1px solid #4d4d4d;
              border-radius: 4px;
              cursor: pointer;
              padding-right: 10px;
              padding-left: 10px;
            }

            .bg {
              background-color: #4d4d4d;
              color: #fff !important;
            }

            .follow:hover {
              color: rgb(91, 56, 141);
              border: 1px solid rgb(91, 56, 141);
            }

            .more-links {
              background: #eee;
              border: 0;

              cursor: pointer;
              border-radius: 35px;
              outline: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .more-actions .span {
              margin-right: 12px;
            }
            .tagged {
              display: inline-block;
              margin-right: 10px;
              padding-right: 5px;
              text-transform: uppercase;
              font-weight: 600;
              font-family: inherit;
              letter-spacing: 0.4px;
              font-size: 13px;
              color: #2b5876;
              white-space: nowrap;
              cursor: pointer;
            }
            .landing-question {
              display: flex;
              justify-content: center;
              font-size: 40px;
              font-weight: 700;
              color: rgb(91, 56, 141);
              font-family: Cabin;
              letter-spacing: 0.4px;
              cursor: pointer;
            }
            .landing-question:hover {
              color: #4e4376;
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

            @media (min-width: 768px) {
              .landing {
                max-width: 100%;
                background: #fdfdfd !important;
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

              .option-considered {
                font-size: 1.4em;
              }
              .option-considered-text {
                font-size: 0.8em;
              }
            }

            @media (max-width: 768px) {
              .landing-question {
                justify-content: center;
                font-size: 21px;
                padding-right: 5px;
                padding-left: 5px;
                position: relative;
                top: 17px;
                align-items: center;
              }

              .follow {
                visibilty: hidden !important;
              }

              .landing-details .details {
                padding: 3px 9px;
                margin-top: 30px;
                color: #637381;
                font-size: 3.2vw;
                font-weight: 600;
                text-transform: uppercase;
              }

              .option-considered {
                font-size: 12px;
              }
              .option-considered-text {
                font-size: 0.9em;
              }
              .tagged {
                font-size: 11px;
                color: #2b5876;
                white-space: nowrap;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default TopicViewLandingPage;
