import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RecComponent from "./recComponent";
import FeedCard from "../feedCard";
import HelpRecommendCard from "./helpRecommendCard";
import IrecommendCard from "./IrecommendCard";
import TopicViewPopupModal from "../modal/topicviewPopupModal";
import API_URL from "../../config/config";
import io from "socket.io-client";
import TopBar from "./topbarComponent";
import {
  SortRecommendations,
  SortQuestions
} from "../../apiRequests/apiRequests";

import { QuestionBox, StarBoxIcon } from "../Icons";

const socket = io(API_URL);

export default class HomePage extends Component {
  state = {
    showQuestion: false,
    showRec: true,
    improve: false,
    showIrecommendCard: false,
    showAddRecommendation: false,
    selectedOption: "",
    selectedOptionImage: "",
    selectedOptionQuestion: "",
    topics: this.props.topics,
    recommendations: this.props.recommendations,
    question: "",
    id:""
  };

  /**==========================Sorting functions begin here===================================== */
  //SortByDay

  handleSortBy = period => {
    //Fetch items here
    SortRecommendations(period)
      .then(result => {
        // console.log(result.data);
        this.setState({
          recommendations: result.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  //SortQuestions

  handleSortQuestions = period => {
    SortQuestions(period)
      .then(result => {
        this.setState({
          topics: result.data
        });
        // console.log(result.data);
      })
      .catch(error => console.log(error));
  };

  /*==================Sorting Functions ends here=========================== */

  showQuestionCard = () => {
    this.setState({
      showQuestion: true,
      showRec: false,
      improve: false
    });
  };

  /** This handles showing */
  handleShowIrecommend = () => {
    this.setState(previousState => ({
      showIrecommendCard: !previousState.showIrecommendCard
    }));
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

  addSelectedOption = (option, image) => {
    this.setState({
      selectedOption: option,
      selectedOptionImage: image
    });
  };

  /** Ends here */

  hideQuestionCard = () => {
    this.setState({
      showQuestion: false,
      showRec: true,
      improve: false
    });
  };

  showImprove = () => {
    this.setState({
      improve: true,
      showQuestion: false,
      showRec: false
    });
  };

  getQuestion = question => {
     console.log("yea am here", question);
    this.setState({
      question
    });
  };

  getId = id => {
    console.log("yea am here", id);
   this.setState({
     id
   });
 };

  render() {
    const {
      showQuestion,
      showRec,
      improve,
      showAddRecommendation,
      selectedOption,
      selectedOptionQuestion,
      selectedOptionImage,
      showIrecommendCard,
      topics,
      recommendations
    } = this.state;
    const { props } = this;

    let highlight = "nav-header-item highlight";

    let customStyle = {
      display: "flex",
      justifyContent: "center"
    };

    return (
      <React.Fragment>
        <div className="home-page">
          <div className="home-page-view">
            <div
              className="nav-header scrollable show-mobile"
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <div className="nav-header-content page-content">
                <div className="nav-header-list" style={customStyle}>
                  <a
                    className={showRec ? highlight : `nav-header-item`}
                    onClick={this.hideQuestionCard}
                  >
                    Recommendations
                  </a>
                  <a
                    className={showQuestion ? highlight : ` nav-header-item `}
                    onClick={this.showQuestionCard}
                  >
                    Question
                  </a>
                  <a
                    className={improve ? highlight : ` nav-header-item `}
                    onClick={this.showImprove}
                  >
                    Top
                  </a>
                  {/*<a className=" nav-header-item" href="#">Top</a>
                 <a className=" nav-header-item" href="#">Improve</a>*/}
                </div>
              </div>
            </div>
            <div>
              <div className="page-content">
                <div className="new-feed-container">
                  <FeedCard {...this.props} />
                </div>

                <div className="home-page-feed card-list">
                  <HelpRecommendCard
                    showIrecommendCard={this.handleShowIrecommend}
                    {...this.props}
                    holdQuestion={this.getQuestion}
                    holdId={this.getId}
                  />
                  <div className="rec-card-list">
                    {showRec && (
                      <div className="rec-card-list-header">Recent</div>
                    )}
                    {showQuestion && (
                      <div className="rec-card-list-header">Recent</div>
                    )}
                    {improve && (
                      <div className="rec-card-list-header">
                        Sort Question Populartiy By
                      </div>
                    )}

                    {/* <div className="rec-card-list-header">Sort by</div> */}

                    {/* {showRec && <TopBar sort={this.handleSortBy} />}

                    {showQuestion && <TopBar sort={this.handleSortQuestions} />} */}

                    {improve && <TopBar sort={this.handleSortQuestions} />}

                    {showQuestion && (
                      <React.Fragment>
                        {topics.data.map(item => {
                          return (
                            <QuestionCard
                              key={item._id}
                              question={item.question}
                              questionId={item._id}
                              optionImage={item.optionImage}
                              tag={item.tag}
                              option={item.option}
                              login={this.props.login}
                            />
                          );
                        })}
                      </React.Fragment>
                    )}
                    {showRec && (
                      <React.Fragment>
                        {recommendations.result.map(item => {
                          return (
                            <RecComponent
                              id={item._id}
                              key={item._id}
                              tag={item.tag}
                              question={item.question}
                              data={props}
                              option={item.option}
                              userImage={item.userImage}
                              username={item.username}
                              experience={item.experience}
                              pro={item.pro}
                              con={item.con}
                              proTitle={item.proTitle}
                              conTitle={item.conTitle}
                              userId={item.userId}
                              createdAt={item.createdAt}
                              login={this.props.login}
                            />
                          );
                        })}
                      </React.Fragment>
                    )}
                    {improve && (
                      <React.Fragment>
                        {topics.data.map(item => {
                          return (
                            <QuestionCard
                              key={item._id}
                              question={item.question}
                              questionId={item._id}
                              optionImage={item.optionImage}
                              tag={item.tag}
                              option={item.option}
                            />
                          );
                        })}
                      </React.Fragment>
                    )}
                  </div>
                </div>

                {/*<HomePageFeed {...this.props} showQuestion={showQuestion} /> */}
              </div>
            </div>
          </div>

          <React.Fragment>
            <div className={"feed"}>
              <ul className="feed-card">
                <li>
                  <a
                    className={showRec ? "a-feedie highlight" : "a-feed"}
                    onClick={this.hideQuestionCard}
                  >
                    <i className="fas fa-poll-h" />
                    Recommendations
                  </a>
                </li>
                <li>
                  <a
                    className={showQuestion ? "a-feedie highlight" : "a-feed"}
                    onClick={this.showQuestionCard}
                  >
                    <i style={{ position: "relative", left: "-4px" }}>
                      <QuestionBox
                        width={"24px"}
                        height={"24px"}
                        color={showQuestion ? "rgb(91, 56, 141)" : "#58647b"}
                      />
                    </i>
                    <span
                      style={{
                        position: "relative",
                        left: "-6px",
                        top: "-4px"
                      }}
                    >
                      Questions
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={this.showImprove}
                    className={improve ? "a-feedie highlight" : "a-feed"}
                  >
                    <i style={{ position: "relative", left: "-4px" }}>
                      <StarBoxIcon
                        width={"24px"}
                        height={"24px"}
                        color={improve ? "rgb(91, 56, 141)" : "#58647b"}
                      />
                    </i>
                    <span
                      style={{
                        position: "relative",
                        left: "-6px",
                        top: "-4px"
                      }}
                    >
                      Top
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </React.Fragment>

          {
            //Show recommendation card here
          }
          {showIrecommendCard && (
            <div className={showIrecommendCard ? "showOverlay" : "overlay"}>
              <section className="section-theme section-theme-i-rec-1">
                <IrecommendCard
                  question={this.state.question}
                  questionId ={this.state.id}
                  handleShowIrecommend={this.handleAddRecommendation}
                  login={this.props.login}
                  closeIRecommendCard={this.handleShowIrecommend}
                />
              </section>
            </div>
          )}

          {
            //End of showRecommend card
          }

          {
            //Show add recommedation overlay
            <div
              className={showAddRecommendation ? "showOverlayie" : "overlay"}
            >
              <section className="section-theme section-theme-i-rec">
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
                <span style={{ position: "relative", top: "-2px" }}>
                  &times;
                </span>
              </div>
            </div>
          }

          <style jsx>
            {`
              @media (min-width: 1024px) {
                .new-feed-container {
                  position: relative;
                  // border: 1px dashed yellow;
                  float: right;
                  left: -3.6%;
                  top: 42px;
                }
              }

              @media screen and (min-width: 1024px) and (max-width: 1280px) {
                .new-feed-container {
                  left: -12px;
                }
              }

              @media (max-width: 1024px) {
                .new-feed-container {
                  display: none;
                }
              }

              @media (max-width: 767px) {
                .feed {
                  display: none;
                }
                .feed-card {
                  display: none;
                }
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
              .showOverlay {
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

              .section-theme-i-rec {
                margin-top: 0%;
              }

              .section-theme-i-rec-1 {
                margin-top: 25%;
              }

              .close-popup-icon > span {
                position: relative;
                top: -2px;
              }

              .section-theme {
                display: flex;
                justify-content: center;
                align-items: center;
              }

              @media (min-width: 768px) {
                .close-popup-iconie {
                  top: 0;
                  cursor: pointer;
                  position: absolute;
                  left: 66%;
                  height: 40px;
                  width: 40px;
                  color: rgb(91, 56, 141);
                  border-radius: 50px;
                  background: #e6ecf0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .close-popup-iconie-irec {
                  top: 53.2%;
                  cursor: pointer;
                  position: absolute;
                  left: 61.5%;
                  height: 40px;
                  width: 40px;
                  color: rgb(91, 56, 141);
                  border-radius: 50px;
                  background: #e6ecf0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }

              .feedCardWhenUserisLogged {
                position: fixed;
                top: 15.4%;
                left: 72.3%;
              }

              .feedCardWhenUserIsNotLogged {
                position: relative;
                left: 905px;
                top: -123px;
              }

              .highlight {
                // border-left: 4px solid rgb(91, 56, 141);
              }
              .feedCard {
                position: absolute;
                left: 80.03%;
              }

              .feed {
                display: block;

                box-sizing: border-box;
                position: absolute;
                left: 5.8%;
                top: 42px !important;
              }
              i {
                position: relative;
                padding-right: 5px;
                top: 1px;
              }
              li {
                list-style-type: none;
                margin-bottom: 10px;
                padding-right: 20px;
                cursor: pointer;
                overflow: hidden;
                box-sizing: border-box;
              }

              li .a-feed {
                font-size: 1.2em;
                font-family: inherit;
                font-weight: 600;
                text-spacing: 0.9px;
                // color: rgb(117, 86, 113) !important;
                color: #58647b !important;
                padding: 0px;
              }
              li .a-feedie {
                font-size: 1.2em;
                font-family: inherit;
                font-weight: 600;
                text-spacing: 0.9px;
                color: rgb(91, 56, 141) !important;
                padding: 0px;
              }
              .active {
                background: #e9ebee;
              }

              .card-list-item {
                overflow: hidden;
                background-color: #fdfdfd;
                margin-bottom: 0px;
                padding: 18px;
                border: 1px solid #e6e8eb;
                border-radius: 5px;
              }
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-weight: inherit;
                line-height: 24px;
                font-size: inherit;
                color: #0d0d0d;
              }
              .home-page {
                height: 100vh;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0.1px;
                text-transform: none;
              }

              .home-page-view {
                max-width: none;
                min-width: 320px;
                width: auto;
                margin: 0 auto;
                padding: 0;
                // border: 1px solid red;
              }

              .page-content {
                max-width: 1280px;
                margin: 0 auto;
                padding-left: 36px;
                padding-right: 36px;
                // border: 1px solid brown;
              }

              .page-content:after {
                content: "";
                display: block;
                clear: both;
                flex-basis: 0;
                flex-grow: 0;
                flex-shrink: 0;
              }

              .tag-selector-header {
                position: relative;
                background-image: linear-gradient(135deg, #2b5876, #4e4376);
                transition: height 0.2s;
                min-height: 252px;
              }

              .tag-selector-tag-builder {
                position: absolute;
                left: 50%;
                width: 100%;
                transform: translateX(-50%);
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                padding-top: 24px;
                padding-bottom: 24px;
                color: #fff;
                transition: opacity 0.2s;
              }

              .tag-selector-tag-builder-content {
                display: flex;
                flex: 1 0 100%;
                max-width: 100%;
              }

              .tag-selector-tag-builder-section {
                flex: 1 1;
                max-width: 50%;
                text-align: center;
                margin: 0 36px;
              }

              .tag-selector-tag-builder-section:first-child {
                margin-left: 0;
              }

              .tag-selector-tag-builder-label {
                font-size: 18px;
                font-weight: 600;
                line-height: 24px;
                margin-bottom: 12px;
              }

              .tag-selector-search {
                position: relative;
                display: flex;
                align-items: center;
                max-width: 624px;
                margin: 0 12px;
              }

              .icon.tag-selector-search-icon {
                position: absolute;
                left: 0;
                width: 18px;
                height: 18px;
                color: #b3b3b3;
                margin: 0 12px;
                font-size: 18px;
                line-height: 36px;
              }

              input[type="text"].tag-selector-search-input {
                font-size: 14px;
                font-weight: 400;
                line-height: 18px;
                border: 1px solid #d9d9d9;
                outline: none;
                border-radius: 4px;
                display: block;
                font-family: inherit;
                line-height: 24px;
                padding: 0 12px;
                width: 100%;
                margin-top: 12px;
                height: 36px;
                padding-left: 42px;
                margin: 0;
                line-height: 36px;
                border-radius: 4px;
                border: none;
              }

              .tag-selector-tag-builder-copy {
                margin-top: 18px;
              }

              .tag-selector-tag-builder-list {
                margin-top: 12px;
                overflow: hidden;
              }

              .tag-selector-tag-builder-list.suggested {
                max-height: 108px;
              }

              .tag-selector-tag {
                color: inherit;
                cursor: pointer;
                text-decoration: none;
                transition: color 0.15s;
                font-size: 13px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.4px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 27px;
                padding: 0 9px;
                margin: 3px;
                border-radius: 15px;
                box-shadow: inset 0 0 0 1.5px #4d4d4d;
                color: #4d4d4d;
                white-space: nowrap;
                transition: background-color 0.15s;
                height: 21px;
                line-height: 21px;
                margin: 0 1.5px 3px;
                color: #fff;
                box-shadow: inset 0 0 0 1.5px hsla(0, 0%, 100%, 0.4);
              }
              .tag-selector-tag-builder-submit {
                flex: 1 0 100%;
                margin-top: 24px;
                text-align: center;
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
              button:hover {
                cursor: pointer;
              }
              .text-button {
                color: #fff;
                min-width: 120px;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.4px;
              }
              .text-button:hover {
                background-color: transparent;
              }
              .primary-button {
                min-width: 120px;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.4px;
                box-shadow: none;
                border-radius: 9px;
                color: #fff;
                background-color: #1b9ad1;
              }

              .nav-header {
                width: 100%;
                position: relative;
                overflow: hidden;
                box-shadow: 0 0 0 1px #e6e8eb;
                line-height: 36px;
                background-color: #fdfdfd;
                transform: translateZ(0);
                height: 36px;
              }
              .nav-header.scrollable {
                overflow-x: auto;
              }
              .show-mobile {
                display: none;
              }
              .nav-header-content {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
              }
              .nav-header.scrollable .nav-header-content {
                flex-wrap: nowrap;
                white-space: nowrap;
              }
              .nav-header-list {
                flex-shrink: 1;
                flex-grow: 1;
                flex-basis: 100px;
              }
              .nav-header.scrollable .nav-header-list {
                flex-shrink: 0;
              }

              a {
                color: #000;
                cursor: pointer;
                text-decoration: none;
                transition: color 0.15s;
              }
              .nav-header-item {
                font-size: 11px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.4px;
                display: inline-flex;
                align-items: center;
                color: #58647b !important;
                margin-right: 13px;
                vertical-align: top;
                font-family: Cabin;
              }
              .nav-header-item.selected {
                position: relative;
                color: #1b9ad1;
              }

              .nav-sidebar {
                position: relative;
                width: 258px;
                min-height: 24px;
                padding-top: 42px;
              }
              .nav-sidebar.left {
                float: left;
              }

              .nav-sidebar.left .nav-sidebar-content {
                padding-right: 60px;
              }
              .nav-sidebar-content {
                width: 258px;
              }

              .home-page-feed {
                padding-top: 42px;
                padding-bottom: 48px;
                margin-right: 300px;
                margin-left: 258px;
                padding-right: 27px;
                box-shadow: none;
              }
              .card-list-answer-skip {
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.4px;
                float: right;
                height: 36px;
                border-radius: 9px;
                color: #60338d;
              }
              .card-list-answer-subtitle {
                line-height: 4px;
                margin: auto;
              }

              .card-list-answer-title {
                margin: auto;
                font-size: 18px;
                font-weight: 600;
                line-height: 14px;
                display: flex;
                align-items: center;
                min-height: 102px;
                padding: 6px 0;
                text-align: center;
              }
              .card-list-footer {
                padding-top: 18px;
              }
              .card-list-footer.center {
                text-align: center;
              }
              .FAB {
                display: inline-flex;
                text-align: center;
                height: 48px;
                color: #fff !important;
                text-align: center !important;
                border-radius: 5px;
                vertical-align: top;
                font-size: 10px;
                transition: background-color 0.15s;
              }

              .FAB.small {
                height: 42px;
                border-radius: 21px;
              }

              a {
                color: #000 !important;
              }

              .rec-card-list {
                margin-bottom: 30px;
              }
              .rec-card-list-header {
                font-size: 18px;
                font-weight: 600;
                line-height: 27px;
                letter-spacing: 0.4px;
                line-height: 48px;
                // margin-bottom: 10px;
                color: #4d4d4d;
              }
              @media (max-width: 1279px) {
                .home-page-feed {
                  margin-left: 204px;
                  margin-right: 240px;
                }
              }

              @media (max-width: 1023px) {
                .tag-selector-header {
                  min-height: 270px;
                }
                .home-page-feed {
                  padding-right: 0;
                  margin-right: auto;
                  box-shadow: none;
                  padding-top: 42px;
                }
              }

              @media (max-width: 767px) {
                .page-content {
                  padding-left: 12px;
                  padding-right: 12px;
                }

                .tag-selector-header {
                  min-height: 497px;
                }

                .tag-selector-tag-builder-content {
                  flex-direction: column;
                }

                .tag-selector-tag-builder-section {
                  margin: 0 0 36px;
                  max-width: none;
                }

                .tag-selector-tag-builder-label {
                  line-height: 27px;
                  margin-bottom: 24px;
                }
                .tag-selector-tag-builder-list {
                  margin-top: 18px;
                }
                .tag-selector-tag-builder-list {
                  max-height: 80px;
                }
                .tag-selector-tag-builder-submit {
                  margin-top: 0;
                }
                .show-mobile {
                  display: flex;
                }
                .nav-sidebar {
                  display: none;
                }
                .home-page-feed {
                  margin-left: auto;
                  padding-top: 30px;
                }
                .home-page-view {
                  background-color: inherit;
                }
                .card-list-item {
                  margin: 0 0 30px;
                  padding: 12px;
                }
                .card-list-answer-title {
                  font-size: 21px;
                  line-height: 30px;
                }
                .card-list-footer {
                  padding-top: 12px;
                }
                .FAB-label {
                  line-height: 42px;
                  margin-left: 18px;
                  margin-right: 6px;
                }
                .rec-card-list-header {
                  font-size: 18px;
                  line-height: 24px;
                  line-height: 36px;
                  margin-top: 24px;
                  margin-bottom: 24px;
                  padding-left: 12px;
                }
              }

              @media only screen and (min-width: 768px) and (max-width: 900px) {
                .feed {
                  left: 0;
                }
              }

              @media only screen and (min-width: 900px) and (max-width: 1025px) {
                .feed {
                  left: 0px;
                }
              }

              @media only screen and (min-width: 1025px) and (max-width: 1281px) {
                /* big landscape tablets, laptops, and desktops */

                .feed {
                  left: 0px;
                }
              }
            `}
          </style>
        </div>
      </React.Fragment>
    );
  }
}
