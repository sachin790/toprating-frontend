import React, { Component, Fragment } from "react";
import Router from "next/router";
import Layout from "../layouts/Layout";
import Axios from "axios";
import Link from "next/link";
import API_URL from "../config/config";
// import io from "socket.io-client";
// const socket = io(API_URL);
// import CustomTab from "../components/tab";

import {
  user_recommendation,
  _GET_TOPICS,
  GET_RELATED_TOPICS_URL,
  GET_SPECIFIC_TOPIC_URL,
  AddUserReactionToOption,
  GetUserReactionToOption,
  MarkOptionAsSpam,
  GetProUpdateHistory,
  GetProDetail
} from "../apiRequests/apiRequests";
import Signin from "./signin";
import Signup from "./signup";
import ListUpdatedProView from "../components/optionView/listProUpdateHistory";
const TopicLandingPage = ({ question, option, tag }) => {
  return (
    <div className="landing">
      <div className="landing-tag">
        {tag ? (
          <React.Fragment>
            {_tag.map((item, i) => {
              return (
                <span className={"tagged"} key={i}>
                  {item}
                </span>
              );
            })}
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
      <div className="landing-question">
        {question ? question + "?" : "loading..."}
      </div>
      <div className="landing-details">
        <div className="details"> {option} </div>
        {/* <div className="details"> {0} Last Updated</div> */}
      </div>
      <style jsx>
        {`
          .not {
            display: none;
          }

          .landing {
            width: 100%;
            background: #fdfdfd !important;
            height: 150px;
            margin-top: 1px;
            box-sizing: border-box;
            font-family: inherit;
          }

          .landing-tag {
            padding: 10px 20px;
            margin-bottom: 5px;
          }
          .tagged {
            display: inline-block;
            margin-right: 5px;
          }
          .landing-question {
            display: flex;
            justify-content: center;
            font-size: 25px;
            font-weight: 600;
          }

          .landing-details {
            display: flex;
            align-item: center;
            justify-content: center;
          }

          .landing-details .details {
            padding: 3px 9px;
            margin-top: 30px;
            color: #637381;
            font-size: 1.2em;
            font-weight: 600;
            text-transform: uppercase;
          }

          @media only screen and (min-width: 360px) and (max-width: 600px) {
            .landing-question {
              justify-content: center;
              font-size: 4.5vw;
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

export default class extends Component {
  static async getInitialProps({ query: { id } }) {
    const response = await Axios(_GET_TOPICS);
    const historyResponse = await GetProUpdateHistory(id);
    const specificProDetail = await GetProDetail(id);
    return {
      data: response.data,
      updated: historyResponse.data,
      proDetail: specificProDetail.data
    };
  }

  state = {
    data: this.props.data.data,
    updated: this.props.updated,
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
      updated,
      option,
      question
    } = this.state;

    const { proDetail } = this.props;

    return (
      <Fragment>
        <Layout
          {...this.state}
          openSignup={this.openSignupOverlay}
          openLogin={this.openLoginOverlay}
          topicview={true}
          title={option}
        />
        <TopicLandingPage {...proDetail} />
        <div className={"view-container"}>
          {/**View Updated Option */}

          <ListUpdatedProView question={question} updated={updated} />
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
              // left: 4vw;
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
