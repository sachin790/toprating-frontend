import React from "react";
import Layout from "../layouts/Layout";
import HomePage from "../components/homepage/homepage";
import Axios from "axios";
import LandingPage from "../components/landingPage";
import Signin from "./signin";
import Signup from "./signup";
import {
  _GET_TOPICS,
  _GET_RECS,
  _GET_QUESTION_ACTIVITY
} from "../apiRequests/apiRequests";

export default class extends React.Component {
  static async getInitialProps() {
    const response = await Axios(_GET_TOPICS);
    const recResponse = await Axios(_GET_RECS);
    const questionActivityResponse = await Axios(_GET_QUESTION_ACTIVITY);
    return {
      topics: response.data,
      recommendations: recResponse.data,
      questionAct: questionActivityResponse.data
    };
  }

  state = {
    showModal: false,
    data: this.props.topics.data,
    showClass: false,
    recommendations: this.props.recommendations,
    quest: false,
    userIsLogged: false,
    questionActivity: this.props.questionAct.data,
    UserClickedLogin: false,
    UserClickedSignup: false
  };

  componentDidMount() {
    this.check();
  }

  check = () => {
    let check = JSON.parse(localStorage.getItem("user_details"));
    if (check) {
      this.setState({
        userIsLogged: true
      });
    } else {
      this.setState({
        userIsLogged: false
      });
    }
  };

  handleDivClose = e => {
    if (e.target === this.div) {
      this.setState(previousState => ({ showClass: !previousState }));
    }
  };

  openLoginOverlay = () => {
    //alert("click");
    this.setState({
      UserClickedLogin: !this.state.UserClickedLogin,
      UserClickedSignup: false
    });
  };

  openSignupOverlay = () => {
    this.setState({
      UserClickedSignup: !this.state.UserClickedSignup,
      UserClickedLogin: false
    });
  };

  closeLoginOverlay = () => {
    this.setState({
      UserClickedLogin: !this.state.UserClickedLogin
    });
  };

  closeSignupOverlay = () => {
    this.setState({
      UserClickedSignup: !this.state.UserClickedSignup
    });
  };

  render() {
    const {
      showClass,
      userIsLogged,
      UserClickedLogin,
      UserClickedSignup
    } = this.state;
    const url = "/static/wor.jpg";

    return (
      <Layout
        openSignup={this.openSignupOverlay}
        openLogin={this.openLoginOverlay}
        indexPage={true}
        {...this.state}
      >
        {!userIsLogged && <LandingPage openSignup={this.openSignupOverlay} />}

        <div
          className={UserClickedSignup ? "overlayShow" : "overlay"}
          onClick={e => this.handleDivClose(e)}
          ref={el => (this.div = el)}
        >
          <span className="close-icon" onClick={this.closeSignupOverlay}>
            <span>&times;</span>
          </span>
          {UserClickedSignup && <Signup openLogin={this.openLoginOverlay} />}
        </div>
        {/** For Signin is here */}
        <div
          className={UserClickedLogin ? "overlayShow" : "overlay"}
          onClick={e => this.handleDivClose(e)}
          ref={el => (this.div = el)}
        >
          {
            <span className={"close-icon"} onClick={this.closeLoginOverlay}>
              <span>&times;</span>
            </span>
          }

          {UserClickedLogin && <Signin openSignup={this.openSignupOverlay} />}
        </div>
        {/* End of Signin */}
        <div className="home">
          <HomePage
            {...this.state}
            topics={this.props.topics}
            handleShowOverflow={this.openBtn}
            login={this.openLoginOverlay}
          />
        </div>
        <style jsx>{`
          .feed {
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            position: relative;
            left: 80px;
            top: -590px;
          }
          .fluke {
            position: relative;
            left: 45%;
            top: -140px;
          }
          .fluke-action {
            display: inline-block;
            cursor: pointer;
            margin-top: -20px;
          }
          i {
            position: relative;
            padding-right: 5px;
            top: 1px;
          }

          .close {
            position: absolute;
            top: 25px;
            left: 10%;
            font-size: 80px !important;
            color: rgb(91, 56, 141);
            background: #e6ecf0;
            cursor: pointer !important;
          }
          li {
            list-style-type: none;
            margin-bottom: 10px;
            padding-right: 20px;
            cursor: pointer;
            overflow: hidden;
            box-sizing: border-box;
          }

          li a {
            font-size: 1.2em;
            font-family: inherit;
            font-weight: 600;
            text-spacing: 0.9px;
            color: #253858 !important;
            padding: 0px;
          }
          .active {
            background: #e9ebee;
          }

          .home {
            position: relative;
            display: flex;
            justify-content: center;
            flex-direction: column;
            left: -1vw;
          }

          .user-chip {
            background: url(${url}) no-repeat;
            width: 50px;
            height: 50px;
            border-radius: 50px;
            position: relative;
            margin-bottom: 1px;
            left: 5px;
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

          .user-rec-card {
            position: relative;
            width: 55%;
            min-height: 450px;
            top: 10%;
            left: 20%;
            background-color: #eee;
            box-sizing: border-box;
            border-radius: 5px;
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
          }
          .closebtn {
            position: absolute;
            bottom: 50px;
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

          @media only screen and (min-width: 360px) and (max-width: 480px) {
            .home {
              left: 0;
            }

            .fluke {
              left: 34.5% !important;
              top: -65px;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 900px) {
            .fluke {
              top: -100px;
            }
          }

          @media only screen and (min-width: 480px) and (max-width: 768px) {
            .fluke {
              top: -98px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
