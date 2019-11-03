import React, { Fragment } from "react";
import myStyle from "../../utils/css/style";
import Link from "next/link";
import { AddIcon, More } from "../Icons";
import {
  GetQuestionNumOfRecs,
  SPECIFIC_QUESTION_OPTIONS
} from "../../apiRequests/apiRequests";
import { Popup } from "semantic-ui-react";
import IRecommend from "./iRecommend";
import RemoveSpacesAddHyphen from "../../lib/removeSpaces";
import TopicViewPopupModal from "../modal/topicviewPopupModal";
import IrecommendCard from "./IrecommendCard";
import API_URL from "../../config/config";
import io from "socket.io-client";
const socket = io(API_URL);

class QuestionCard extends React.Component {
  state = {
    title: "",
    description: "",
    option: [],
    mediaUrl: [],
    showIrecommendCard: false,
    showAddRecommendation: false
  };

  componentDidMount() {
    //Get the number of Recommendations
    this.getQuestionNumOfRecs(this.props.question);
    this.getQuestionOptions(this.props.question);
  }

  //GetQuestionNumOfRecs

  getQuestionNumOfRecs = question => {
    GetQuestionNumOfRecs(question)
      .then(axiosResponse => {
        this.setState({
          QuestionRecs: axiosResponse.data
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  getQuestionOptions = question => {
    SPECIFIC_QUESTION_OPTIONS(question)
      .then(options => {
        this.setState({
          option: options.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    //To do something here
  };

  handleAddRecommendation = (
    selectedOption,
    selectedOptionImage,
    selectedOptionQuestion
  ) => {
    this.setState(previousState => ({
      showAddRecommendation: !previousState.showAddRecommendation,
      showIrecommendCard: false,
      selectedOption,
      selectedOptionImage,
      selectedOptionQuestion
    }));
  };

  closeIRecommendCard = () => {
    this.setState({
      showIrecommendCard: false
    });
  };

  handleShowIrecommend = () => {
    this.setState(previousState => ({
      showIrecommendCard: !previousState.showIrecommendCard
    }));
  };

  render() {
    const { question, tag, optionImage } = this.props;
    const {
      mediaUrl,
      option,
      QuestionRecs,
      selectedOption,
      selectedOptionImage,
      selectedOptionQuestion,
      showIrecommendCard,
      showAddRecommendation
    } = this.state;

    const newQuestionString = RemoveSpacesAddHyphen(question);
    // console.log(option);

    //const mediaUrl = "/static/image.png";

    if (option.length > 3) {
      let numRemaining = option.length - 3;

      return (
        <div className={"card-list-item"}>
          <div style={{ marginBottom: "15px" }}>
            <span style={{ marginRight: "10px" }}>
              {/* <a className="question-tab">{"10 Recs"}</a> */}
              {
                <a className="question-tab">
                  {QuestionRecs ? QuestionRecs + " Recs" : "0 Recs"}
                </a>
              }
            </span>
            <span className="rounded question-rounded">•</span>
            {tag.map((item, i) => {
              return (
                <a key={i} className="question-tab">
                  {item}
                </a>
              );
            })}

            <span className="more-icon">
              <IRecommend showIrecommendCard={this.handleShowIrecommend} />
            </span>
          </div>
          <Link
            prefetch
            as={`/topic/${newQuestionString}`}
            href={`/topic/${newQuestionString}`}
          >
            <a className="question-header">{question + "?"}</a>
          </Link>
          {/* <span className="more-icon">
            <IRecommend showIrecommendCard={this.handleShowIrecommend} />
          </span> */}

          {/* <div>
            <span style={{ marginRight: "10px" }}>
             
              {
                <a className="question-tab">
                  {QuestionRecs ? QuestionRecs + " Recs" : "0 Recs"}
                </a>
              }
            </span>
            <span className="rounded question-rounded">•</span>
            {tag.map((item, i) => {
              return (
                <a key={i} className="question-tab">
                  {item}
                </a>
              );
            })}
          </div> */}

          <div className="little-card">
            {option ? (
              <React.Fragment>
                {option.slice(0, 3).map(itemie => {
                  return (
                    <Link
                      prefetch
                      as={`/topic/${newQuestionString}`}
                      href={`/topic/${newQuestionString}`}
                      key={itemie._id}
                    >
                      <div className="two">
                        {itemie.mediaUrl ? (
                          <img
                            src={itemie.mediaUrl[0]}
                            className="option-image"
                          />
                        ) : (
                          <img
                            src={"/static/image.png"}
                            className="option-image"
                          />
                        )}
                        {itemie.option}
                      </div>
                    </Link>
                  );
                })}
              </React.Fragment>
            ) : (
              ""
            )}

            <div className="two more-options">+{numRemaining} more</div>
          </div>
          <div className="button-holder">
            {/*<Link href={`/addoption/${this.props.questionId}`}>
              <button className="btn">Add Option</button>
          </Link> */}
          </div>
          <style jsx>
            {`
              .more-icon {
                position: relative;
                float: right;
              }
              .more-options {
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #757575;
              }

              .more-icon-button {
                background: #eee;
                border: 0;
                cursor: pointer;
                border-radius: 35px;
                outline: 0;
                height: 35px;
                width: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .more-icon-button-a {
                color: rgb(91, 56, 141);
                font-family: Cabin;
              }
              .question-rounded {
                position: relative;
                left: -6px;
              }
              .rounded {
                border-radius: 10px;
                position: relative;
                // top: 2px;
                color: #757575;
                font-size: 20px;
              }

              .question-tab {
                margin-right: 4px;
                font-size: 0.9em;
                padding: 4px;
                cursor: pointer;
                text-transform: uppercase;
                color: #757575 !important;
                font-weight: 400;
                word-spacing: 0.3px;
                // background: #58647b;
              }

              .question-tab:hover {
                // color: rgb(91, 56, 141) !important;
                // background: #fff !important;
                // font-weight: 700;
              }

              .option-image {
                width: 100%;
                height: 100px;
                margin: 0;
                padding: 0;
              }
              .card-list-item {
                overflow: hidden;
                background-color: #fdfdfd;
                margin-bottom: 36px;
                padding: 18px;
                border: 1px solid #e6e8eb;
                box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
                box-sizing: border-box;
                border-radius: 1px;
              }

              .card-list-item p {
                font-weight: 600;
                font-size: 1.2em;
              }

              hr.hr {
                border-top: 1px solid #fdfdfd;
              }

              .little-card {
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
              }

              .little-card .two {
                padding: 5px;
                background: #eee;
                height: 136px;
                margin: 5px;
                width: 150px;
                // color: #757575;
                border: 1px solid transparent;
                border-radius: 2px;
                box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.07);
                text-align: center;
                margin-top: 15px;
              }

              .little-card .two:hover {
                background: linear-gradient(to left, #fafafa, #eee);
                cursor: pointer;
              }

              .little-card .two:hover {
                background: linear-gradient(to left, #fafafa, #eee);
                cursor: pointer;
              }

              .button-holder {
                display: flex;
                justify-content: center;
              }
              .btn {
                margin-top: 5px;
                background-color: rgb(96, 51, 141);
                white-space: nowrap;
                outline: 0;
                cursor: pointer;
                font-size: 0.8em;
                font-weight: 500;
                border: 1px solid transparent;
                border-radius: 2px;
                color: #fff;
                font-family: Cabin !important;
                display: flex;
                justify-content: center;
              }

              p {
                font-family: verdana;
              }

              .image-style img {
                width: 100%;
                height: 20%;
                cursor: pointer;
              }

              .question-header {
                cursor: pointer;
                text-decoration: none;
                transition: color 0.15s;
                font-family: inherit;
                font-size: 1.6em;
                font-weight: 600;
                color: #222;
                overflow: hidden;
              }
              .question-header:hover {
                color: #757575;
              }

              @media only screen and (min-width: 240px) and (max-width: 360px) {
                .question-header {
                  font-size: 3.6vw;
                }
              }
              @media only screen and (min-width: 360px) and (max-width: 420px) {
                .question-header {
                  font-size: 3.6vw;
                }
              }
              @media only screen and (min-width: 420px) and (max-width: 600px) {
                .question-header {
                  font-size: 3.6vw;
                }
              }
              @media only screen and (min-width: 600px) and (max-width: 720px) {
                .question-header {
                  font-size: 3.6vw;
                }
              }

              @media only screen and (min-width: 720px) and (max-width: 900px) {
                .question-header {
                  font-size: 2.6vw;
                }
              }

              @media only screen and (min-width: 900px) and (max-width: 1020px) {
                .question-header {
                  font-size: 2.6vw;
                }
              }
            `}
          </style>
        </div>
      );
    }

    return (
      <div className={"card-list-item"}>
        <div style={{ marginBottom: "15px" }}>
          <span style={{ marginRight: "10px" }}>
            {/* <a className="question-tab">{"10 Recs"}</a> */}
            {
              <a className="question-tab">
                {QuestionRecs ? QuestionRecs + " Recs" : "0 Recs"}
              </a>
            }
          </span>
          <span className="rounded question-rounded">•</span>
          {tag.map((item, i) => {
            console.log("+++++++++");
            console.log(item);
            console.log("+++++++++");
            return (
              <a key={i} className="question-tab">
                {item}
              </a>
            );
          })}

          <span className="more-icon">
            <IRecommend showIrecommendCard={this.handleShowIrecommend} />
          </span>
        </div>
        <div style={{ width: "100%" }}>
          <Link
            prefetch
            as={`/topic/${newQuestionString}`}
            href={`/topic/${newQuestionString}`}
          >
            <a className="question-header">{this.props.question + "?"}</a>
          </Link>
          {/* <span className="more-icon">
            <IRecommend showIrecommendCard={this.handleShowIrecommend} />
          </span> */}
        </div>

        {/* <div>
          <span style={{ marginRight: "10px" }}>
            
            {
              <a className="question-tab">
                {QuestionRecs ? QuestionRecs + " Recs" : "0 Recs"}
              </a>
            }
          </span>
          <span className="rounded question-rounded">•</span>
          {tag.map((item, i) => {
            return (
              <a key={i} className="question-tab">
                {item}
              </a>
            );
          })}
        </div> */}
        <div className="little-card">
          {option ? (
            <React.Fragment>
              {option.map((item, i) => {
                return (
                  <Link
                    as={`/topic/${newQuestionString}`}
                    prefetch
                    href={`/topic/${newQuestionString}`}
                    key={i}
                  >
                    <div className="two" key={i}>
                      {item.mediaUrl ? (
                        <img src={item.mediaUrl[0]} className="option-image" />
                      ) : (
                        <img
                          src={"/static/image.png"}
                          className="option-image"
                        />
                      )}
                      {item.option}
                    </div>
                  </Link>
                );
              })}
            </React.Fragment>
          ) : (
            ""
          )}
          <Link prefetch href={`/addoption/${this.props.questionId}`}>
            <div className="two more-options">
              <div
                style={{
                  // paddingBottom: "10px",
                  // position: "relative",
                  marginTop: "35px",
                  color: "#757575"
                }}
              >
                <AddIcon color={"#757575"} />
              </div>
              Add Option
            </div>
          </Link>
        </div>

        {
          //This handles showing the I rec..
        }

        {showIrecommendCard && (
          <div className={showIrecommendCard ? "showOverlay-2" : "overlay"}>
            <section className="section-theme section-theme-i-rec showIrec">
              <IrecommendCard
                handleShowIrecommend={this.handleAddRecommendation}
                closeIRecommendCard={this.closeIRecommendCard}
                {...this.props}
              />
            </section>
          </div>
        )}
        {
          ///Ends here
        }

        {
          //Show add recommedation overlay
          <div className={showAddRecommendation ? "showOverlayie" : "overlay"}>
            <section className="section-theme section-theme-i-rec-1 topicview">
              {
                <TopicViewPopupModal
                  question={selectedOptionQuestion}
                  option={selectedOption}
                  optionImage={selectedOptionImage}
                  type={"like"}
                  socketId={socket.id}
                />
              }
            </section>

            <div
              style={{
                fontSize: "55px",
                padding: "9px",
                textAlign: "center"
              }}
              className="close-popup-iconie"
              onClick={() => {
                this.setState({ showAddRecommendation: false });
              }}
            >
              <span style={{ position: "relative", top: "-2px" }}>&times;</span>
            </div>
          </div>
        }

        <style jsx>
          {`
            .more-icon {
              position: relative;
              float: right;
            }

            .showOverlay-2 {
              height: 100%;
              width: 100%;
              position: fixed;
              z-index: 5000;
              top: 0;
              left: 0;
              // background-color: rgb(0, 0, 0);
              // background-color: rgba(0, 0, 0, 0.5);
              overflow-x: hidden;
              transition: 0.5s;
            }
            .showOverlayie {
              height: 100%;
              width: 100%;
              position: fixed;
              z-index: 5000;
              top: 0;
              left: 0;
              background-color: rgb(0, 0, 0);
              background-color: rgba(0, 0, 0, 0.5);
              overflow-x: hidden;
              transition: 0.5s;
            }

            .overlay {
              height: 100%;
              width: 0;
              position: fixed;
              z-index: 6000;
              top: 0;
              left: 0;
              background-color: rgb(0, 0, 0);
              background-color: rgba(0, 0, 0, 0.5);
              overflow-x: hidden;
              transition: 0.5s;
            }

            .section-theme {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .section-theme-i-rec {
              margin-top: 0%;
            }
            .section-theme-i-rec-1 {
              margin-top: 0%;
            }
            @media (min-width: 768px) {
              .close-popup-iconie {
                // top: 0;
                cursor: pointer;
                position: absolute;
                // left : 66%;
                height: 40px;
                width: 40px;
                color: rgb(91, 56, 141);
                border-radius: 50px;
                background: #e6ecf0;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .i-rec {
                top: 10%;
                left: 60%;
              }
              .section-theme-i-rec {
                margin-top: 5%;
                position: relative;
                left: 20%;
              }
            }

            .more-options {
              color: #757575;
            }

            .more-icon-button {
              border: 0;
              z-index: 3000;
              background: #eee;
              cursor: pointer;
              border-radius: 35px;
              outline: 0;
              height: 35px;
              width: 35px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .more-icon-button-a {
              color: rgb(91, 56, 141);
              font-family: Cabin;
            }
            .question-rounded {
              position: relative;
              left: -6px;
            }
            .rounded {
              border-radius: 10px;
              position: relative;
              // top: 2px;
              color: #757575;
              font-size: 20px;
            }

            .question-tab {
              margin-right: 4px;
              font-size: 0.9em;
              padding: 4px;
              cursor: pointer;
              color: #757575 !important;
              text-transform: uppercase;
              font-weight: 400;
              word-spacing: 0.3px;
            }

            .question-tab:hover {
              // color: rgb(96, 56, 141) !important;
              // background: #fff !important;
              // font-weight: 700;
            }

            .option-image {
              width: 100%;
              height: 100px;
              margin: 0;
              padding: 0;
            }
            .card-list-item {
              overflow: hidden;
              background-color: #fdfdfd;
              margin-bottom: 36px;
              padding: 18px;
              border: 1px solid #e6e8eb;
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
              border-radius: 1px;
              box-sizing: border-box;
            }

            .card-list-item p {
              font-weight: 600;
              font-size: 1.2em;
            }

            hr.hr {
              border-top: 1px solid #fdfdfd;
            }

            .little-card {
              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
            }

            .little-card .two {
              padding: 5px;
              background: #eee;
              height: 136px;
              margin: 5px;
              // color: #757575;
              width: 150px;
              border: 1px solid transparent;
              border-radius: 2px;
              box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.07);
              text-align: center;
              margin-top: 15px;
            }

            .little-card .two:hover {
              background: linear-gradient(to left, #fafafa, #eee);
              cursor: pointer;
            }

            .button-holder {
              display: flex;
              justify-content: center;
            }
            .btn {
              margin-top: 5px;
              background-color: rgb(96, 51, 141);
              white-space: nowrap;
              outline: 0;
              cursor: pointer;
              font-size: 0.8em;
              font-weight: 500;
              border: 2px solid transparent;
              border-radius: 2px;
              color: #fff;
              font-family: Cabin !important;
              display: flex;
              justify-content: center;
            }

            p {
              font-family: verdana;
            }

            .image-style img {
              width: 100%;
              height: 20%;
              cursor: pointer;
            }

            .question-header {
              cursor: pointer;
              text-decoration: none;
              transition: color 0.15s;
              font-family: inherit;
              font-size: 1.6em;
              font-weight: 600;
              color: #222;
              overflow: hidden;
            }
            .question-header:hover {
              color: #757575;
            }

            @media only screen and (min-width: 240px) and (max-width: 360px) {
              .question-header {
                font-size: 3.6vw;
              }
            }
            @media only screen and (min-width: 360px) and (max-width: 420px) {
              .question-header {
                font-size: 3.6vw;
              }
            }
            @media only screen and (min-width: 420px) and (max-width: 600px) {
              .question-header {
                font-size: 3.6vw;
              }
            }
            @media only screen and (min-width: 600px) and (max-width: 720px) {
              .question-header {
                font-size: 3.6vw;
              }
            }

            @media only screen and (min-width: 720px) and (max-width: 900px) {
              .question-header {
                font-size: 2.6vw;
              }
            }

            @media only screen and (min-width: 900px) and (max-width: 1020px) {
              .question-header {
                font-size: 2.6vw;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default QuestionCard;
