import React, { Component, Fragment } from "react";
import Router from "next/router";
import Layout from "../layouts/Layout";
import Axios from "axios";
import Link from "next/link";
import API_URL from "../config/config";
import io from "socket.io-client";
import LandingPage from "../components/updateTag/landingPage";
const socket = io(API_URL);
// import CustomTab from "../components/tab";

import {
  user_recommendation,
  _GET_TOPICS,
  GET_RELATED_TOPICS_URL,
  GET_SPECIFIC_TOPIC_URL,
  AddUserReactionToOption,
  GetUserReactionToOption,
  MarkOptionAsSpam,
  GetQuestionUpdateHistory
} from "../apiRequests/apiRequests";
import Signin from "./signin";
import Signup from "./signup";
import ListUpdatedOptionView from "../components/updatedQuestion/ListOptionUpdateHistory";

export default class extends Component {
  static async getInitialProps({ query: { questionId } }) {
    const res = await GetQuestionUpdateHistory(questionId);
    const response = await Axios(_GET_TOPICS);
    return {
      //   option,
      question: res.data.question,
      data: response.data
      // optionUpdateHistory: res.data
    };
  }

  state = {
    // option: this.props.option,
    question: this.props.question,
    data: this.props.data.data,
    // updateHistory: this.props.optionUpdateHistory.result,
    user: {},
    UserClickedLogin: false,
    UserClickedSignup: false
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("user_details"))) {
      const user = JSON.parse(localStorage.getItem("user_details"));
      this.setState({
        user
      });
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

  render() {
    const {
      optionConsidered,
      UserClickedLogin,
      UserClickedSignup,
      updateHistory,
      option,
      question
    } = this.state;

    return (
      <Fragment>
        <Layout
          {...this.state}
          openSignup={this.openSignupOverlay}
          openLogin={this.openLoginOverlay}
          topicview={true}
          title={question}
        />
        <LandingPage {...this.state} />
        <div className={"view-container"}>
          {/**View Updated Option */}

          <ListUpdatedOptionView question={question} updated={updateHistory} />
        </div>

        <div
          className={UserClickedSignup ? "overlayShow" : "overlay"}
          onClick={e => this.handleDivCloseSignUp(e)}
          ref={el => (this.div = el)}
        >
          <span className="close-icon" onClick={this.closeSignupOverlay}>
            &times;
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
            &times;
          </span>

          {UserClickedLogin && <Signin openSignup={this.openSignupOverlay} />}
        </div>
        {/* End of Signin */}

        <style jsx>
          {`
            .view-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              position: relative;
              justify-content: center;
              align-items: center;
              top: 90px;
              left: 4vw;
            }
            .related-questions {
              position: absolute;
              left: 69vw;
              top: 330px;
            }

            .close-icon {
              position: absolute;
              top: 25px;
              left: 90%;
              font-size: 80px !important;
              color: #000;
              cursor: pointer;
              z-index: 2000;
            }

            .overlay {
              height: 100%;
              width: 0;
              position: fixed;
              z-index: 6000;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.05);
              overflow-x: hidden;
              transition: 0.5s;
            }
            .overlayShow {
              height: 100%;
              width: 100%;
              position: fixed;
              z-index: 5000;
              top: 0;
              left: 0;
              background-color: #fdfdfd;
              overflow-x: hidden;
              overflow-y: visible;
              transition: 0.5s;
            }

            .overlayShowie {
              height: 100%;
              width: 100%;
              position: fixed;
              z-index: 5000;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.07);
              overflow-x: hidden;

              transition: 0.5s;
            }

            .related-items-card {
              position: absolute;
              left: 920px;
              top: 580px;
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
