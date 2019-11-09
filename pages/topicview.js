import React, { Component, Fragment } from "react";
import Layout from "../layouts/Layout";
import Axios from "axios";
import API_URL from "../config/config";
import io from "socket.io-client";
import TopicViewLandingPage from "../components/topicview/topicViewLandingPage";
import RelatedOptions from "../components/topicview/relatedOptionsComponent";
import OptionCardie from "../components/topicview/optionCardComponent";
import { AddSpacesRemoveHyphen } from "../lib/removeSpaces";
import OptionList from "../components/topicview/optionList";
import RecFeedCard from "../components/topicview/recFeed";

import ReactionBanner from "../components/topicview/reactionBanner";
import UserAddedQuestionCard from "../components/topicview/UserAddedQuestionCard";

import {
  _GET_TOPICS,
  GET_RELATED_TOPICS_URL,
  GET_SPECIFIC_TOPIC_URL,
  GetQuestionUpdatedAt,
  GetQuestionNumOfRecs,
  GetTopicRecommendations,
  CheckIfUserAddedQuestion,
  CheckIfQuestionHasBeenRejected,
  GetUserReactionToLikeOption,
  GetUserReactionToDisLikeOption,
} from "../apiRequests/apiRequests";
import Signin from "./signin";
import Signup from "./signup";
const socket = io(API_URL);

function GetLikeNumber(data){
  let obj = {};
for(let i=0;i<data.length;i++){
obj[data[i].option] = data[i].like
}

return obj;

}

function GetDisLikeNumber(data){
  let obj = {};
for(let i=0;i<data.length;i++){
obj[data[i].option] = data[i].dislike
}

return obj;

  }

export default class extends Component {
  static async getInitialProps({ query: { name } }) {
    const question = AddSpacesRemoveHyphen(name);
    const res = await Axios(GET_SPECIFIC_TOPIC_URL(question));
   // const LikeColor = await GetUserReactionToLikeOption("5dada7908a5390365411a11f",res.data);
  //  const DisLikeColor = await GetUserReactionToDisLikeOption("5dada7908a5390365411a11f",res.data);
    const LikeNumber = await GetLikeNumber(res.data.data.data);
    const DisLikeNumber = await GetDisLikeNumber(res.data.data.data);
    const relatedTopicResponse = await Axios(GET_RELATED_TOPICS_URL(question));
    const questionUpdatedAt = await GetQuestionUpdatedAt(question);
    const questionNumOfRecs = await GetQuestionNumOfRecs(question);
    const recsActivity = await GetTopicRecommendations(question);
    const rejectedResponse = await CheckIfQuestionHasBeenRejected(question);
    const response = await Axios(_GET_TOPICS);

    return {
      question,
      data: res.data,
      relatedTopic: relatedTopicResponse.data,
      updatedAt: questionUpdatedAt.data,
      numOfRecs: questionNumOfRecs.data,
      RecsActivity: recsActivity.data,
      topics: response.data,
      questionRejected: rejectedResponse.data,
     // LikeColor : LikeColor.data,
     // DisLikeColor : DisLikeColor.data,
      LikeNumber : LikeNumber,
      DisLikeNumber : DisLikeNumber
    };
  }

  state = {
    question: this.props.question,
    data: this.props.data.data.data,
    lastUpdated: this.props.updatedAt,
    numOfRecs: this.props.numOfRecs,
    optionConsidered: this.props.data.data.optionConsidered,
    tagie: this.props.data.data.tagie,
    relatedTopics: this.props.relatedTopic.data,
    recommendations: this.props.RecsActivity,
    user: {},
    UserClickedLogin: false,
    UserClickedSignup: false,
  // LikeColor : this.props.LikeColor,
  // DisLikeColor : this.props.DisLikeColor,
   LikeNumber :  this.props.LikeNumber,
   DisLikeNumber :  this.props.DisLikeNumber
  };

  //Check if user Added Question

  checkIfUserAddedQuestion = (question, id) => {
    CheckIfUserAddedQuestion(question, id)
      .then(response => {
        this.setState({
          addedQuestion: response.data
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

   componentDidMount() {
    if (JSON.parse(localStorage.getItem("user_details"))) {
      const user = JSON.parse(localStorage.getItem("user_details"));
      this.setState(
        {
          user
        },
        () => {
          this.checkIfUserAddedQuestion(this.props.question, user._id);
        }
      );

    }

  }


  handleDivCloseSignIn = e => {
    if (e.target === this.div) {
      this.setState(previousState => ({
        UserClickedLogin: !previousState.UserClickedLogin
      }));
    }
  };

  handleDivCloseSignUp = e => {
    if (e.target === this.div) {
      this.setState(previousState => ({
        UserClickedSignup: !previousState.UserClickedSignup
      }));
    }
  };

  openLoginOverlay = () => {
    //alert("click");
    this.setState({
      UserClickedSignup: false,
      UserClickedLogin: !this.state.UserClickedLogin
    });
  };

  openSignupOverlay = () => {
    this.setState({
      UserClickedLogin: false,
      UserClickedSignup: !this.state.UserClickedSignup
    });
  };

  closeSignupOverlay = () => {
    this.setState({
      UserClickedSignup: !this.state.UserClickedSignup
    });
  };

  closeLoginOverlay = () => {
    this.setState({
      UserClickedLogin: !this.state.UserClickedLogin
    });
  };

  userId = async ()=>{
   return  await JSON.parse(localStorage.getItem("user_details"))._id
  }

  render() {
    const {
      optionConsidered,
      UserClickedLogin,
      UserClickedSignup,
      question,
      addedQuestion
    } = this.state;

    const { questionRejected } = this.props;

    const tag = this.state.tagie.map(item => {
      return item.tag;
    });

    return (
      <Fragment>
        <Layout
          // {...this.state}
          data={this.props.topics.data}
          openSignup={this.openSignupOverlay}
          openLogin={this.openLoginOverlay}
          topicview={true}
          title={this.state.question}
        />
        <TopicViewLandingPage
          {...this.state}
          tag={tag}
          questionRejected={questionRejected}
        />
        <div className={"view-container"}>
          <div className="considered-option-card">
            {optionConsidered !== 0 && <OptionCardie {...this.state} />}
          </div>

          {optionConsidered === 0 &&
            addedQuestion &&
            questionRejected === false && (
              <UserAddedQuestionCard url={question} />
            )}
          {optionConsidered !== 0 && questionRejected === false && (
            <OptionList {...this.state } user_id =  { this.userId()}  />
          )}

          {questionRejected === true && <ReactionBanner />}
        </div>

        <div className="related-questions">
          {<RelatedOptions {...this.state} />}
        </div>

        <div
          className={UserClickedSignup ? "overlayShow" : "overlay"}
          onClick={e => this.handleDivCloseSignUp(e)}
          ref={el => (this.div = el)}
        >
          <span className="close-icon" onClick={this.closeSignupOverlay}>
            <span>&times;</span>
          </span>
          {UserClickedSignup && <Signup openLogin={this.openLoginOverlay} />}
        </div>

        {/** For Signin is here */}
        <div
          className={
            UserClickedLogin ? "overlayShow showSignin-container" : "overlay"
          }
          onClick={e => this.handleDivCloseSignIn(e)}
          ref={el => (this.div = el)}
        >
          <span className="close-icon" onClick={this.closeLoginOverlay}>
            <span>&times;</span>
          </span>

          {UserClickedLogin && <Signin openSignup={this.openSignupOverlay} />}
        </div>
        {/* End of Signin */}

        <div className="related-items-card">
          {/*<CardExampleContentBlock /> */}
        </div>

        <style jsx>
          {`
            .view-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              position: relative;
              width: 65%;
              top: 90px;
              left: 4vw;
            }
            .related-questions {
              position: absolute;
              left: 72%;
              top: 346px;
            }

            .close-icon {
              position: absolute;
              top: 20px;
              left: 90%;
              min-height: 20px;
              max-height: 100px;
              padding: 9px;
              background: #e6ecf0;
              font-size: 55px !important;
              color: rgb(91, 56, 141);
              cursor: pointer;
              z-index: 2000;
              border-radius: 5px;
            }
            .close-icon > span {
              position: relative;
              top: -2px;
            }

            .overlay {
              height: 100%;
              width: 0;
              position: fixed;
              z-index: 6000;
              top: 0;
              left: 0;
              background-color: rgb(0, 0, 0);
              background-color: rgba(0, 0, 0, 0.05);
              overflow-x: hidden;
              // transition: 0.5s;
            }
            .overlayShow {
              height: 100%;
              width: 100%;
              position: fixed;
              z-index: 9000;
              top: 0;
              left: 0;
              background-color: #fdfdfd;
              overflow-x: hidden;
              overflow-y: visible;
              // transition: 0.5s;
            }

            .overlayShowie {
              height: 100%;
              width: 100%;
              position: fixed;
              z-index: 9000;
              top: 0;
              left: 0;
              background-color: rgb(0, 0, 0);
              background-color: rgba(0, 0, 0, 0.05);
              overflow-x: hidden;

              // transition: 0.5s;
            }

            .related-items-card {
              position: absolute;
              left: 920px;
              top: 580px;
            }

            .considered-option-card {
              margin-bottom: 30px;
            }
            @media screen and (max-width: 768px) {
              .considered-option-card {
                display: none;
              }
              .related-questions {
                display: none;
              }

              .view-container {
                width: 88%;
                left: 6.2vw;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}
