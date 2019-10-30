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

class TagLandingPage extends Component {
  state = {
    recs: [],
    follow: false,
    copied: false
    // url: `${CLIENT_API}/topic/${RemoveSpacesAddHyphen(this.props.question)}`
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

      tag
    } = this.props;

    return (
      <div className="landing">
        <div className="landing-question">{tag ? tag : "loading..."}</div>

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

            .landing-question {
              display: flex;
              justify-content: flex-start;
              padding: 30px 0px;
              text-transform: capitalize;
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
                justify-content: flex-start;
                position: relative;
                left: 60px;
                font-size: 40px;
                font-weight: 700;
                font-family: Cabin;
              }

              .option-considered {
                font-size: 26px;
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

export default TagLandingPage;
