import React, { Fragment } from "react";
import Link from "next/link";
import { ViewMore, Collapse, IRec } from "../Icons";
import { Placeholder } from "semantic-ui-react";
import PopupModal from "../modal/popupModal";
import {
  GetQuestionNumOfRecs,
  GET_USER_WHO_ADDED_QUESTION,
  GET_OPTION_DETAILS,
  FetchSpecificQuestionId
} from "../../apiRequests/apiRequests";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Irecommend from "./iRecommend";
import IrecommendCard from "./IrecommendCard";
import TopicViewPopupModal from "../modal/topicviewPopupModal";
import API_URL from "../../config/config";
import io from "socket.io-client";
import RemoveSpacesAddHyphen from "../../lib/removeSpaces";
const socket = io(API_URL);

export default class RecComponent extends React.Component {
  state = {
    openPopup: false,
    maxItem: 4,
    showUpIcon: false,
    color: false,
    showIrecommendCard: false,
    showAddRecommendation: false,
    selectedOption: "",
    selectedOptionImage: "",
    selectedOptionQuestion: "",
    optionImage: null
  };

  componentDidMount() {
    //Get the number of Recommendations
    this.getQuestionNumOfRecs(this.props.option);
    this.getUserWhoAddedQuestion(this.props.question);
    this.getOptionImage(this.props.option);
    this.getSpecificQuestionId(this.props.question);
  }

  getOptionImage = option => {
    GET_OPTION_DETAILS(option)
      .then(result => {
        this.setState({
          optionImage: result.data.mediaUrl[0]
        });
      })
      .catch(err => {
        // console.log(err);
      });
  };

  //GetQuestionNumOfRecs

  getQuestionNumOfRecs = option => {
    GetQuestionNumOfRecs(option)
      .then(axiosResponse => {
        // console.log(axiosResponse.data);
        this.setState({
          QuestionRecs: axiosResponse.data
        });
      })
      .catch(error => {
        // console.log(error.response);
      });
  };

  getUserWhoAddedQuestion = question => {
    GET_USER_WHO_ADDED_QUESTION(question)
      .then(axiosResponse => {
        this.setState({
          userWhoAddedQuestion: axiosResponse.data.username
        });
      })
      .catch(err => {
        // console.log(err);
      });
    //do something here
  };

  getSpecificQuestionId = question => {
    FetchSpecificQuestionId(question)
      .then(axiosResponse => {
        this.setState({
          questionId: axiosResponse.data.id
        });
      })
      .catch(err => {
        this.setState({
          err: err
        });
      });
  };

  /** Open popup*/

  handleOpenPopup = () => {
    //alert("click");
    this.setState({
      openPopup: true
    });
  };

  /**Close popup */
  closeBtn = () => {
    this.setState({
      openPopup: false
    });
  };

  /** Show 10 items */
  handleShowMore = () => {
    this.setState(
      {
        maxItem: 10
      },
      () => {
        this.setState(previousState => ({
          showUpIcon: !previousState.showUpIcon
        }));
      }
    );
  };

  /**show only 1 item */
  handleShowUpIcon = () => {
    this.setState(
      {
        maxItem: 1
      },
      this.setState(previousState => ({
        showUpIcon: !previousState.showUpIcon
      }))
    );
  };

  handleShowIrecommend = () => {
    this.setState(previousState => ({
      showIrecommendCard: !previousState.showIrecommendCard
    }));
  };

  closeIRecommendCard = () => {
    this.setState({
      showIrecommendCard: false
    });
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

  render() {
    const {
      openPopup,
      maxItem,
      showUpIcon,
      QuestionRecs,
      userWhoAddedQuestion,
      color,
      showIrecommendCard,
      showAddRecommendation,
      selectedOption,
      selectedOptionImage,
      selectedOptionQuestion,
      optionImage,
      questionId
    } = this.state;
    const url = "/static/avatar.png";

    const _color = color ? "rgb(91,56,141)" : "#000";

    const {
      con,
      option,
      experience,
      pro,
      question,
      username,
      tag,
      userId,
      createdAt,
      userImage
    } = this.props;

    const newQuestionString = RemoveSpacesAddHyphen(question);

    const defaultCardImageStyle = {
      backgroundImage: "url('/static/im.png')"
    };

    const cardImageStyle = optionImage
      ? { backgroundImage: `url(${optionImage})` }
      : defaultCardImageStyle;

    const tagie = () => tag.slice(0, 5);

    return (
      <Fragment>
        <div className="rec-card card-list-item has-footer">
          {/*<CardImage /> */}
          <div
            className="rec-card-image images-image-list-item-image"
            style={defaultCardImageStyle}
          >
            <div className="rec-card-image-gradient">
              {/*<CardQuestionHeader /> */}
              <div className="rec-card-question-header">
                <div className="rec-card-question-header-flex">
                  <h4 className="rec-card-question-title  rec-card-question-header-content">
                    <Link
                      prefetch
                      as={`/topic/${newQuestionString}`}
                      href={`/topic/${newQuestionString}`}
                    >
                      <a className="question-title-hover">{question + "?"}</a>
                    </Link>
                  </h4>

                  <div>
                    <OverlayTrigger
                      key={"top"}
                      placement={"top"}
                      overlay={
                        <Tooltip>
                          Recommend or add the options you think are the best
                        </Tooltip>
                      }
                    >
                      <span>
                        <Irecommend
                          width={23}
                          height={23}
                          showIrecommendCard={this.handleShowIrecommend}
                        />
                      </span>
                    </OverlayTrigger>
                  </div>
                </div>

                <div className=" card-list-stats-item on-mobile num-rec ">
                  <div className=" card-list-stats-item a">
                    <a> {QuestionRecs ? QuestionRecs : 0} Recs </a>
                  </div>
                  <div
                    className="card-list-stats-seperator "
                    style={{
                      fontSize: "30px"
                    }}
                  >
                    <span className="rounded">•</span>
                  </div>
                  <span className={"card-list-tags"}>
                    {tag.length < 5 && (
                      <Fragment>
                        {tag.map((item, i) => {
                          let newItem = item;
                          return (
                            <Link
                              prefetch
                              as={`/tags/${newItem}`}
                              href={`/tags/${newItem}`}
                            >
                              <div key={i} className="card-list-stats-item a">
                                <a>{item}</a>
                              </div>
                            </Link>
                          );
                        })}
                      </Fragment>
                    )}

                    {tag.length > 5 && (
                      <Fragment>
                        {tagie.map((item, i) => {
                          return (
                            <div key={i} className="card-list-stats-item a">
                              <a>{item}</a>
                            </div>
                          );
                        })}
                        <div className=" card-list-stats-item ">
                          <a>+{tag.length - tagie.length} more</a>
                        </div>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              {/*<CardImageContent /> */}
              <div className="rec-card-image-content">
                <div className="rec-card-user-rec">
                  <div className="rec-card-user-rec-avatar">
                    <Link prefetch href={`/user/${username}`}>
                      <a className=" avatar hide-mobile bigger">
                        {userImage ? (
                          <img src={userImage} alt={username} />
                        ) : (
                          <img src={"/static/gravatar2.png"} alt={"image"} />
                          // <Placeholder style={{ height: 150, width: 150 }}>
                          //   <Placeholder.Image square />
                          // </Placeholder>
                        )}
                        }
                      </a>
                    </Link>
                    <Link prefetch href={`/user/${username}`}>
                      <a className="avatar show-mobile big">
                        {this.props.userImage ? (
                          <img
                            src={this.props.userImage}
                            alt={this.props.username}
                          />
                        ) : (
                          <Placeholder style={{ height: 150, width: 150 }}>
                            <Placeholder.Image square />
                          </Placeholder>
                        )}
                      </a>
                    </Link>
                  </div>
                  <div className="rec-card-user-rec-content">
                    <div className="rec-card-user-rec-content-header">
                      Recommendation by {username}
                    </div>
                    <Link prefetch href={`/topic/${newQuestionString}`}>
                      <a className=" rec-card-title" title={option}>
                        {option}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {/*End of CardImage */}
            </div>
          </div>

          {/* End of ImageContent */}
          <div className="rec-card-content">
            <h3 className="rec-card-description rec-card-experience content">
              {experience}
            </h3>
            {pro && (
              <Fragment>
                {pro.slice(0, maxItem).map((item, i) => {
                  return (
                    <div className="rec-card-description" key={i}>
                      <span className="rec-card-content-pro">&#43; </span>
                      <span className="content rec-text">{item}</span>
                    </div>
                  );
                })}
              </Fragment>
            )}

            {con && (
              <Fragment>
                {con.slice(0, maxItem).map((item, i) => {
                  return (
                    <div className="rec-card-description" key={i}>
                      <span className="rec-card-content-con">&#8722; </span>
                      <span className="content rec-text">{item}</span>
                    </div>
                  );
                })}
              </Fragment>
            )}
            {!showUpIcon && (
              <div
                className={"rec-card-view-more"}
                // onClick={this.handleShowMore}
                onClick={this.handleOpenPopup}
                onMouseEnter={() => {
                  this.setState({
                    color: true
                  });
                }}
                onMouseLeave={() => {
                  this.setState({
                    color: false
                  });
                }}
              >
                <span
                  onMouseEnter={() => {
                    this.setState({
                      color: true
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      color: false
                    });
                  }}
                  className={"rec-card-view-more-icon"}
                >
                  <ViewMore
                    color={color ? "rgb(91, 56, 141)" : "#595959"}
                    height={16}
                    width={16}
                  />
                </span>
                <span className={"rec-card-view-more-text"}>SEE FULL</span>
              </div>
            )}
          </div>

          {/** Popup Overlay here */}

          {
            <div className={openPopup ? "showOverlay" : "overla"}>
              <section
                className="section-theme"
                style={{ justifyContent: "flex-end" }}
              >
                <PopupModal {...this.props} />
              </section>

              <div
                style={{
                  fontSize: "55px",
                  padding: "9px",
                  textAlign: "center"
                }}
                className="close-popup-icon i-rec-popup"
                onClick={this.closeBtn}
              >
                <span>&times;</span>
              </div>
            </div>
          }

          {
            //This handles showing the I rec..
          }

          {showIrecommendCard && (
            <div className={showIrecommendCard ? "showOverlay-2" : "overlay"}>
              <section className="section-theme section-theme-i-rec showIrec">
                <IrecommendCard
                  handleShowIrecommend={this.handleAddRecommendation}
                  closeIRecommendCard={this.closeIRecommendCard}
                  questionId={questionId}
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
            <div
              className={showAddRecommendation ? "showOverlayie" : "overlay"}
            >
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
                <span style={{ position: "relative", top: "-2px" }}>
                  &times;
                </span>
              </div>
            </div>
          }

          <style jsx>
            {`
          .user-chip {
            background-image: url(${url});
            background-position : center;
            backgroud-repeat : no-repeat;
            width: 50px;
            height: 50px;
            border-radius: 50px;
            position: relative;
           
          }

          .i-rec-popup {
            top : 2%
          }
          .rec-card-experience{
            background-image : url("/static/quotes.svg");
            background-repeat : no-repeat;
            background-size: 27px 24px;
          //  background-position: left -1px;
          }

          .close-popup-icon {
            // top: 2%;
            cursor: pointer;
            position: absolute;
            background : #444;
            left : 88%;
            height : 40px;
            width : 40px;
            color: #fff;
            border-radius : 50px;
            // background : #e6ecf0;
            display : flex;
            align-items : center;
            justify-content : center;
          }
          .close-popup-icon:hover {
            background : rbg(91, 56, 141) !important;
          }

          .close-popup-iconie {
            top: 2%;
            cursor: pointer;
            position: absolute;
            left : 90%;
            height : 40px;
            width : 40px;
            color: rgb(91,56,141);
            border-radius : 50px;
            background : #e6ecf0;
            display : flex;
            align-items : center;
            justify-content : center;
          }

          .section-theme-i-rec {
            margin-top :0%;
          }
          .section-theme-i-rec-1 {
            margin-top : 0%;
          }

          

          .close-popup-icon > span {
           position : relative;
           top : -2px;
          }

          .content {
            // color: #595959;
            font-weight : 400px;
            letter-spacing : 0.1px;
            line-height : 1.9;
            font-size : 16px;
            
          }
          .rec-text {
            position : relative;
            top : -1px;
          }

          .section-theme {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          

          @media(min-width : 768px){
            .close-popup-iconie {
              // top: 0;
              cursor: pointer;
              position: absolute;
              // left : 66%;
              height : 40px;
              width : 40px;
              color: rgb(91,56,141);
              border-radius : 50px;
              background : #e6ecf0;
              display : flex;
              align-items : center;
              justify-content : center;
            }

            .close-popup-icon {
              top: 92vh;
              cursor: pointer;
              position: absolute;
              margin-left : -365px;
              height : 40px;
              width : 40px;
              color: #fff;
              border-radius : 50px;
              background : #444;
              display : flex;
              align-items : center;
              justify-content : center;
            }

            .close-popup-icon:hover {
              background-color : rgb(91, 56, 141);
            }
            .i-rec {
            top : 10%;
            left : 60%;
            }
            .section-theme-i-rec {
              margin-top : 5%;
              position : relative;
              left : 20%;
            }
          }

          .rounded {
            border-radius : 10px;
            position : relative;
            
            color : hsla(0,0%,98.8%,.8) !important;
            font-size : 20px;
          }
          
          .rec-time {
            font-weight : 600;
            font-size : 16px;
          }

          .rec-card-view-more {
            float : right;
            cursor : pointer;
            // box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .05);
            // border-radius : 35px;
            // width : 60px;
            // height : 60px;
            display : flex;
          
            justify-content : center;
            align-items : center;
            margin-bottom : 10px;
           
          }
          .rec-card-view-more:hover {
            color : rgb(91, 56,141);
          }
          .rec-card-view-more-icon {
            position : relative;
            top : 3px;
            padding-right : 4px;
          }
          .rec-card-view-more-text{
            font-size : 12px;
            font-weight : 600;
            word-spacing : .2px;
          }

          .pro-section {
            padding: 0.5em;
            color: #000;
          }

          .pro-section > em {
            display: block;
            font-size: 0.9em;
            font-family: inherit;
          }

          .experience {
            font-size: 0.9em;
            padding: 0.5em;
          }

          .user-rec-img {
            width: 100%;
            height: 200px;
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

          .overla {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 6000;
            top: 0;
            right: 0;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.5);
            overflow-x: hidden;
            
          }
          .showOverlay {
            height: 100%;
            width: 100%;
            position: fixed;
            z-index: 5000;
            top: 0;
            right: 0;
            background-color: hsla(0,0%,97%,.78);
            // background-color: rgba(0, 0, 0, 0.5);
            overflow-x: hidden;
         
          }

          .showOverlay-2{
            height: 100%;
            width: 100%;
            position: fixed;
            z-index: 5000;
            top: 0;
            left: 0;
            // background-color: rgb(0, 0, 0);
            // background-color: rgba(0, 0, 0, 0.5);
            overflow-x: hidden;
           
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
           
          }
          .closebtn {
            position: absolute;
            bottom: 50px;
          }

          .fluke {
            position : relative;
            left : 45%;
            top : -140px;
          }

          .num-rec {
            position : relative;
            top : -100px;
            
          }


      .card-list-stats-item  a {
            margin-right : 4px;
            font-size : 0.9em;
            padding : 2px;
            border-radius : 2px;
            text-transform : Uppercase;
            color : hsla(0,0%,98.8%,.8);
            font-weight : 500;
            word-spacing : 0.3px;
            cursor : pointer;
          }

          .card-list-stats-item  span {
            font-weight : 800;
            color : #fcfcfc;
            cursor : pointer;
          }

          .card-list-stats-item.a{
              // background : #939393;
              text-shadow: 0 2px 2px rgba(0,0,0,.6)
          }

          .card-list-stats-item > a:hover{
            // color : hsla(0,0%,98.8%,.8);
            color : #fff;
           }

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
              font-family: inherit;
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

          .rec-card.card-list-item.has-footer{
              overflow: hidden;
              background-color: #fff;
              margin-bottom: 16px;
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .05);
              // border: 1px solid #e6e8eb;
              padding: 0 ;
              border-radius : 1px;
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
              letter-spacing: .4px;
              margin-bottom: 6px;
              max-height: 24px;
              overflow: hidden;
               margin-top : -40px;
          }

          .card-list-stats-item {
              display: inline-block;
              margin-right: 12px;
              position : relative;
              bottom : 120px
              z-index : 4000;
          }

          @media (max-width : 720px){

            .card-list-stats {

                margin-top : -60px;
            }
          }

          @media (min-width : 900px) {
            .close-popup-icon {

              left : 75%;
             
            }
          }

          .card-list-stats-seperator {
              display: inline-block;
              margin-right: 12px;
              color : #fdfdfd;
              text-shadow: 0 2px 2px rgba(0,0,0,.6);
          }

          .rec-card-question-title a {
            color : #fdfdfd;
            font-family : Cabin;
            text-shadow: 0 2px 2px rgba(0,0,0,.6);
            font-weight : 800;
          }
          .rec-card-question-title > a:hover {
            color : hsla(0,0%,98.8%,.8);
          }

          .rec-card-question-title {
              font-size: 1.6em;
              font-weight: 600;
              line-height: 30px;
              display: block;
              flex-grow: 1;
              flex-shrink: 1;
              word-break: break-word;
              margin: auto;
              color: #fdfdfd !important;
              padding: 30px 0px;
              margin-top : 8px;
              font-weight : 800;
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
              background: #1b9ad1;
              color: #fdfdfd;
              border-radius: 30px;
              vertical-align: top;
              transition: background-color .15s;
          }

          .FAB.micro {
              height: 24px;
              border-radius: 12px;
          }

          .FAB-label {
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: .4px;
              line-height: 43px;
              margin-left: 21px;
              margin-right: 6px;
              vertical-align: text-bottom;
              flex-shrink: 1;
              flex-grow: 1;
              white-space: nowrap;
          }

          .FAB.micro .FAB-label {
              line-height: 24px;
              margin-left: 12px;
              margin-right: 6px;
          }

          .rec-card-image {
              position: relative;
              width:100% ;
              min-height: 201px;
              background: 50%/cover no-repeat;
              color: #fff;
              height: 100%;
        
          }
          .rec-card-image:hover {
            background-color: rgba(0,0,0,.6);
          }

          .rec-card-image-gradient {
              padding: 24px;
              color: white;
              position: relative;
              width: 100%;
              min-height: inherit;
              height: 100%;
            background-image: linear-gradient(180deg,rgba(0, 0, 0, .6), rgba(0, 0, 0, .6));

              //background-image: linear-gradient(180deg, rgba(28, 41, 62, 0.2) 0, rgba(28, 41, 62, .3) 30%, rgba(7, 15, 29, .9));
          }

          .rec-card-image-gradient:hover {
            
            background-image: linear-gradient(180deg,rgba(0, 0, 0, .75), rgba(0, 0, 0, .75));
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
              left: 24px;
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
              margin-top : 05px;
          }

          .avatar {
              position: relative;
              display: inline-block;
              overflow: hidden;
              background: 50%/contain no-repeat #fff;
              border-radius: 50%;
              width: 24px;
              height: 24px;
              font-weight: 700;
              text-align: center;
              color: #58647b;
              vertical-align: top;
              box-shadow: inset 0 0 0 1.5px #4d4d4d, 0 0 0 1px #e6e8eb;
              z-index: 100;
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
              margin-top : 05px;
          }

          .rec-card-title {
              font-size: 24px;
              font-weight: 600;
              line-height: 30px;
              display: block;
              line-height: 33px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              text-shadow: 0 1px 2px rgba(0, 0, 0, .36);
              color : #fdfdfd;
          }
          div .rec-card-content {
              padding: 24px;
              /*box-shadow: inset 0 0 4px rgba(222, 209, 209, 0.36);*/
              color : rgba(0,0,0, 0.6);
              cursor : pointer;
          }

          div .rec-card-content:hover {
            color: #4d4d4d;
          }
    
          .rec-card-description{
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: .1px;
            text-transform: none;
          }
          .rec-card-content-con,
          .rec-card-content-pro{
              font-weight: bold;
              margin-right: 5px;
              font-size : 22px;
              letter-spacing : 0.4px;
              text-transform : uppercase;
          }
          .rec-card-content-con{
            color: #cb1a4a;
          }
          .rec-card-content-pro{
            color: #1d9127;
          }
          .community-recommendation-body {
              position: relative;
              display: inline-block;
              padding-left: 12px;
              color: #595959;
          }

          .community-recommendation-body-testimonial {
              word-break: break-word;
          }

          .community-recommendation-body-testimonial:before {
              position: absolute;
              top: 0;
              left: 0;
              width: 27px;
              height: 24px;
              background-size: 27px 24px;
              background-image: url("");
              content: "";
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
              letter-spacing: .4px;
              display: flex;
              height: 30px;
              line-height: 30px;
              border-radius: 4px;
              box-shadow: inset 0 0 0 1.5px #4d4d4d;
              color: #4d4d4d;
              padding: 0 6px;
              vertical-align: middle;
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
              letter-spacing: .4px;
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

          .card-list-seperator {
              width: 100%;
              height: 1px;
              background-color: #e6e8eb;
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
              transition: .15s;
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

         
         @media screen (min-width : 768px) and (max-width : 900px ) {
          .num-rec {
            position : relative;
            top : -80px;
            
          }
         }
         @media screen (min-width : 900px) and (max-width : 1220px ) {
          .num-rec {
            position : relative;
            top : -120px;
            border : 1px soild red;
            
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
                  padding: 20px 0px 15px 0px;
              }

              .rec-card-image {
                  width: calc(100% + 24px);
                  left: -12px;
                  min-height: 138px;
              }
              
                .num-rec {
                  position : relative;
                  top : -80px;
                  
                }
              
              .card-list-stats-item.a{
                background : none;
              
                color : #595959 !important;
            }
            .card-list-stats-item a {
              color : #fdfdfd;
              font-weight : 800;
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

              .rec-card-title {
                  font-size: 21px;
                  line-height: 30px;
              }

              .community-recommendation-body {
                  padding-left: 0;
              }

              .community-recommendation-body-testimonial:before {
                  transform: translateX(-6px);
              }

              .community-recommendation-rec-footer {
                  padding-bottom: 12px;
              }
          }

          @media (max-width: 424px) {
              .rec-card-image {
                  min-height: 120px;
              }

              .num-rec {
                position : relative;
                top : -110px;
              }

              .reaction-button {
                  padding-left: 6px;
                  padding-right: 6px;
              }

              .community-recommendation-rec-footer-link {
                  margin-left: 12px;
              }
              .rec-card-content{
                  padding: 12px;
              }
              .rec-card-description{
                  font-size: 1rem;
              }

          }

          // @media (min-width : 900px) {
          //   .section-theme {
          //     margin-top : .4%;
          //   }
          // }
          `}
          </style>
        </div>
      </Fragment>
    );
  }
}
