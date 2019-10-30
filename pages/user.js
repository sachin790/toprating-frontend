import React, { Component } from "react";
import ProfilePageBody from "../components/profilePageBody";
import Moment from "react-moment";
import Layout from "../layouts/Layout";
import {
  VIEW_A_USER,
  _GET_TOPICS,
  GetRecHistory
} from "../apiRequests/apiRequests";
import Axios from "axios";
import Signin from "./signin";
import Signup from "./signup";

function ProfileHeaderStat(props) {
  return (
    <div className="profile-page-header-user-stat">
      <div className="profile-page-header-user-stat-count">
        {props.statCount}
      </div>
      <div className="profile-page-header-user-stat-text">{props.statText}</div>
      <style jsx>
        {`
          .profile-page-header-user-stat {
            text-align: center;
          }
          .profile-page-header-user-stat-count {
            font-size: 40px;
            font-weight: 200;
            letter-spacing: 0.4px;
            line-height: 36px;
          }
          .profile-page-header-user-stat-text {
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 0.4px;
            line-height: 18px;
          }
        `}
      </style>
    </div>
  );
}

class ProfilePageHeader extends Component {
  state = {
    open: false,
    modal: false,
    file: null,
    progressLevel: 0,
    updateImage: false,
    updateProfile: false,
    profileModal: false
  };

  //This handles updating user's avatar

  render() {
    let image = this.props.image ? this.props.image : "/static/avatar.png";
    const { open, size, progressLevel, imageAdded, updateImage } = this.state;
    const { recHistory } = this.props;
    return (
      <React.Fragment>
        <div className="profile-page-header-wrapper">
          <div className="page-content">
            <div className="profile-header">
              <div className="profile-page-header-avatar avatar">
                <img
                  className="profile-page-header-avatar-image"
                  alt="Avatar"
                  src={`${image}`}
                />
                <div className="profile-page-header-user-stats hide-mobile">
                  <ProfileHeaderStat
                    statCount={recHistory ? recHistory.length : 0}
                    statText={"RECS"}
                  />
                  <ProfileHeaderStat
                    statCount={this.props.coin || 0}
                    statText={"COINS"}
                  />
                </div>
              </div>
              <div className="profile-page-header-content">
                <div className="profile-page-header-name">
                  {this.props.name}
                </div>
                <div className="profile-page-header-username">
                  {this.props.username || "@username"}
                </div>

                <div className="profile-page-header-bio">
                  <div className="profile-page-header-bio-content">
                    I’ve been a user since
                    <Moment format={"LL"}>
                      {this.props.createdAt || "March 19th, 2019"}
                    </Moment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            input[type="text"],
            input[type="password"],
            input[type="email"] {
              padding: 10px;
              width: 250px !important;
              height: 38px;
              border: 2px solid rgb(96, 51, 141);
              border-radius: 5px;
              outline: 0;
              font-family: inherit;
              line-height: 2px;
              font-size: 0.9em;
              font-weight: 600;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default class extends React.Component {
  static async getInitialProps({ query: { username } }) {
    const res = await Axios(_GET_TOPICS);
    // const userDataResponse = await Axios( `${Auth}/view/user?username=${username}`);
    const userDataResponse = await VIEW_A_USER(username);
    return {
      topics: res.data,
      userData: userDataResponse.data
    };
  }
  state = {
    userData: this.props.userData.data,
    data: this.props.topics.data,
    UserClickedLogin: false,
    UserClickedSignup: false,
    recHistory: []
  };

  getUserRecHistory = id => {
    GetRecHistory(id)
      .then(result => {
        this.setState({
          recHistory: result.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  componentDidMount() {
    //console.log(this.state.userData._id);
    this.getUserRecHistory(this.state.userData._id);
  }

  handleDivClose = e => {
    console.log(e.target.className);
    console.log(this.div);
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
      userData,
      recHistory,
      UserClickedLogin,
      UserClickedSignup
    } = this.state;

    return (
      <React.Fragment>
        <Layout
          openSignup={this.openSignupOverlay}
          openLogin={this.openLoginOverlay}
          title={userData.username + "'s profile"}
          {...this.state}
        >
          <div className="profile-page-header">
            <ProfilePageHeader
              {...this.state.userData}
              imageUrl={this.state.imageUrl}
              recHistory={recHistory}
            />
          </div>

          <div className="profile-page">
            <ProfilePageBody
              {...this.state.userData}
              recHistory={recHistory}
              notUser={true}
            />

            <div
              className={UserClickedSignup ? "overlayShowie" : "overlay"}
              onClick={e => this.handleDivClose(e)}
              ref={el => (this.div = el)}
            >
              <span className="close-icon" onClick={this.closeSignupOverlay}>
                &times;
              </span>
              {UserClickedSignup && (
                <Signup openLogin={this.openLoginOverlay} />
              )}
            </div>
            {/** For Signin is here */}
            <div
              className={UserClickedLogin ? "overlayShowie" : "overlay"}
              onClick={e => this.handleDivClose(e)}
              ref={el => (this.div = el)}
            >
              {
                <span className={"close-icon"} onClick={this.closeLoginOverlay}>
                  &times;
                </span>
              }

              {UserClickedLogin && (
                <Signin openSignup={this.openSignupOverlay} />
              )}
            </div>
            {/* End of Signin */}
            <style jsx global>
              {`
                .page-content {
                  max-width: 1280px;
                  margin: 0 auto;
                  padding-left: 36px;
                  padding-right: 36px;
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
  
                .overlayShowie {
                  height: 100%;
                  width: 100%;
                  position: fixed;
                  z-index: 5000;
                  top: 0;
                  left: 0;
                  background-color: #fff;
                  overflow-x: hidden;
                  transition: 0.5s;
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


                form .update-div {
                  margin-top : 10px;
                  display : flex;
                  justify-content : center;
                }

                .image-container-body {
                  position : relative;
                  top : 50px !important;
                }
                .level {
                  position : relative;
                  top : -12px;
                  left : 10px
                }
                .choose {
                  position : relative;
                  top : 45%;
                }
                .added {
                  border : 1px dotted green !important;
                }

                .fileContainer {
                  border : 1px dotted red;
                  width : 150px;
                  height : 150px;
                  text-align :center;
                }

              .custom-file-input:hover::before {
                border-color: black;
              }
              .custom-file-input:active::before {
                background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
              }

                .custom-file-input::-webkit-file-upload-button {
                   visibility: hidden;
                  }
                  .custom-file-input::before {
                    content: 'Select some files';
                    display: inline-block;
                    background: linear-gradient(top, #f9f9f9, #e3e3e3);
                    border: 1px solid #999;
                    border-radius: 3px;
                    padding: 5px 8px;
                    outline: none;
                    white-space: nowrap;
                    -webkit-user-select: none;
                    cursor: pointer;
                    text-shadow: 1px 1px #fff;
                    font-weight: 700;
                    font-size: 10pt;
                  }

                .progress-style {
                  padding : 1.2em;
                  margin-left : 50px;
                }

                strong {
                  font-weight: 600;
                  font-style: normal;
                }
                a {
                  color: inherit;
                  cursor: pointer;
                  text-decoration: none;
                  transition: color 0.15s;
                }
                a:hover {
                  color: #167ba7;
                }

                @media (max-width: 767px) {
                  .page-content {
                    padding-left: 12px;
                    padding-right: 12px;
                  }
                }

                .profile-page {
                  display: flex;
                  flex-direction: column;
                  min-height: calc(100vh - 84px);
                }
                .profile-page-body {
                  flex-grow: 1;
                  background-color: #fafbfb;
                }
                .sidebar {
                  float: left;
                  position: relative;
                  width: 258px;
                  min-height: 24px;
                  padding-top: 42px;
                }
                .sidebar-content {
                  padding-right: 60px;
                  width: 258px;
                }
                .sidebar-section {
                  padding-bottom: 36px;
                  margin-bottom: 36px;
                }
                .sidebar-link.selected {
                  font-weight: 700;
                  color: #1b9ad1;
                  box-shadow: inset 3px 0 #1b9ad1;
                }
                .sidebar-link,
                .sidebar-link.selected {
                  font-size: 14px;
                  text-transform: uppercase;
                  letter-spacing: 0.4px;
                  line-height: 18px;
                  line-height: 30px;
                }
                .sidebar-link {
                  font-weight: 400;
                  display: block;
                  height: 30px;
                  padding-left: 12px;
                  margin-bottom: 12px;
                }
                .sidebar-link:hover {
                  color: #1b9ad1;
                }
                .sidebar ~ .profile-sections-wrapper {
                  margin-left: 258px;
                }

                .profile-sections-wrapper {
                  padding-top: 42px;
                  padding-bottom: 48px;
                }
                .profile-page-title {
                  margin-bottom: 24px;
                }

                .card-list-section-label {
                  font-size: 21px;
                  font-weight: 700;
                  line-height: 27px;
                  letter-spacing: 0.4px;
                  text-transform: uppercase;
                  margin-bottom: 24px;
                  color: #58647b;
                }
                .view-section {
                  margin-bottom: 90px;
                }
                .empty-state.compact {
                  padding: 18px;
                }
                .empty-state {
                  text-align: center;
                  padding: 24px;
                  background-color: #e7f5fc;
                  border: 2px dashed #86cfef;
                  color: #58647b;
                }
                .empty-state-icon {
                  display: inline-block;
                  margin-right: 18px;
                  margin-bottom: 0;
                  vertical-align: middle;
                  width: 60px;
                  height: 60px;
                  color: #96a1b4;
                }
                .icon.thumbtack-icon {
                  font-size: large;
                  height: 48px !important;
                  width: 24px !important;
                }
                .icon.thumbtack-icon-sm {
                  height: 12px !important;
                  width: 12px !important;
                  color: #58647b;
                  transform: rotate(45deg);
                  position: absolute;
                  top: 25%;
                  left: 25%;
                }
                .thumbtack-icon {
                  transform: rotate(45deg);
                }
                .rec {
                  display: inline-flex;
                  flex-direction: column;
                  margin-right: 24px;
                  margin-bottom: 24px;
                  width: calc(33.333% - 24px);
                  height: 342px;
                  padding: 18px;
                }
                .card-list-item {
                  overflow: hidden;
                  background-color: #fff;
                  margin-bottom: 36px;
                  padding: 18px;
                  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
                  border: 1px solid #e6e8eb;
                  border-radius: 15px;
                }
                .rec-card-option-content {
                  width: 100%;
                }
                .rec-image {
                  position: relative;
                  height: 162px;
                  margin-bottom: 24px;
                  background: 50% / cover no-repeat;
                  box-shadow: inset 0 0 0 1px #f2f2f2;
                  border-radius: 9px;
                }
                .rec-pin-link {
                  position: absolute;
                  top: 6px;
                  right: 6px;
                  width: 24px;
                  height: 24px;
                  background-color: #fff;
                  border-radius: 2px;
                  box-shadow: 0 1px 2px #a8b0c1;
                }
                .rec-card-header {
                  font-size: 24px;
                  font-weight: 600;
                  line-height: 30px;
                  text-align: center;
                  margin-bottom: 18px;
                  padding: 0 12px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                }
                .rec-card-subheader {
                  margin-bottom: 3px;
                }

                .secondary-detailed-header {
                  font-size: 14px;
                  font-weight: 400;
                  text-transform: uppercase;
                  letter-spacing: 0.4px;
                  line-height: 18px;
                  margin-bottom: 18px;
                  color: #58647b;
                  text-align: start;
                }
                .rec-card-text {
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 18px;
                  max-height: 54px;
                  overflow: hidden;
                }
                /*karma view*/
                .card-list.contained {
                  max-width: 708px;
                }
                .activity-list-item {
                  padding: 18px 0;
                }
                .activity-list-item:first-child {
                  padding-top: 0;
                }
                .activity-list-item:after {
                  content: "";
                  display: block;
                  border-top: 1px solid #e6e8eb;
                  height: 0;
                  width: calc(100% + 36px);
                  position: relative;
                  left: -18px;
                  bottom: -18px;
                }
                .activity-list-question-title {
                  font-size: 16px;
                  color: #8d959c;
                  margin-left: 48px;
                  margin-bottom: 6px;
                }
                .karma-activity-body {
                  display: flex;
                  justify-content: space-between;
                }
                .karma-activity-event {
                  flex-grow: 1;
                  flex-shrink: 1;
                }
                .event-avatar {
                  margin-right: 12px;
                  align-self: flex-start;
                  flex-grow: 0;
                  flex-shrink: 0;
                  width: 36px;
                  height: 36px;
                }
                .event,
                .event-avatar {
                  display: flex;
                  align-items: center;
                }
                .icon.plus-circle-icon {
                  width: 24px !important;
                  height: 20px;
                  margin: 0 6px;
                  color: #8d959c;
                }
                .event-content {
                  flex-grow: 1;
                  flex-shrink: 1;
                  min-width: 0;
                  line-height: 18px;
                  word-break: break-word;
                }
                .event-time {
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 18px;
                  margin-left: 6px;
                  color: #8d959c;
                  white-space: nowrap;
                }
                .karma-activity-bonus-count {
                  height: 30px;
                  margin-top: 3px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-grow: 0;
                  flex-shrink: 0;
                  padding: 0 9px;
                  margin-left: 36px;
                  background-color: #f47264;
                  color: #fff;
                  font-weight: 700;
                  border-radius: 3px;
                }
                .avatar.big {
                  height: 36px;
                  width: 36px;
                }
                @media (max-width: 1279px) {
                  .rec {
                    margin-right: 18px;
                    margin-bottom: 18px;
                    width: calc(33.333% - 18px);
                    height: 330px;
                  }
                  .card-list-item {
                    margin: 0 0 30px;
                    padding: 12px;
                  }
                }
                @media (max-width: 1023px) {
                  .rec {
                    width: calc(50% - 24px);
                    height: 312px;
                  }
                }
                @media (max-width: 767px) {
                  .profile-page-body {
                    background-color: #efefef;
                  }
                  .profile-sections-wrapper {
                    margin-left: auto !important;
                  }
                  .mobile-navbar {
                    background-color: white;
                  }
                  .mobile-navbar-link {
                    padding: 15px;
                    font-size: 18px;
                    color: #5f5b5b !important;
                  }
                  .mobile-navbar-dropdown-link-icon {
                    margin-left: 2px;
                    position: relative;
                    bottom: 2px;
                  }
                  .mobile-nav-select-wrapper {
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: white;
                    z-index: 9999;
                  }
                  .mobile-nav-select {
                    display: flex;
                    padding: 0px 18px;
                    border-bottom: 1px solid gainsboro;
                  }
                  .mobile-nav-select-title {
                    flex-grow: 1;
                    font-weight: bold;
                  }
                  .mobile-nav-close-icon {
                    position: relative;
                    top: 13px;
                    width: 36px !important;
                    height: 36px;
                  }
                  .mobile-nav-select-link-item {
                    padding: 15px;
                    padding-bottom: 5px;
                    border-bottom: 1px solid #eee;
                  }
                  .rec {
                    width: 100%;
                    height: inherit;
                    min-height: 306px;
                    max-height: 360px;
                    margin-right: 0;
                    margin-left: 0;
                  }
                  .card-list-item {
                    margin: 0 0 30px;
                    padding: 12px;
                  }
                  /* karma */
                  .card-list.contained {
                    max-width: none;
                  }
                }

                .profile-page-header-wrapper {
                  display: flex;
                  flex-direction: column;
                  // background: rgb(105, 112, 254);
                  background-image: linear-gradient(135deg,rgb(91, 56, 141),#4e4376);
                }
                .profile-header {
                  position: relative;
                  display: flex;
                  color: #fff;
                  flex-wrap: wrap;
                }
                .profile-page-header-avatar.avatar {
                  position: relative;
                  margin: 30px;
                  margin-left: 0;
                  flex-shrink: 0;
                  width: 240px;
                  height: 240px;
                  border-radius: 0;
                  box-shadow: none;
                }
                .profile-page-header-avatar-image {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                }
                .profile-page-header-user-stats {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  display: flex;
                  justify-content: space-around;
                  padding: 6px 0;
                  color: #fff;
                  background-color: rgba(88, 100, 123, 0.5);
                }
                /*.profile-page-header-user-stat {
                  text-align: center;
                }
                .profile-page-header-user-stat-count {
                  font-size: 40px;
                  font-weight: 200;
                  letter-spacing: 0.4px;
                  line-height: 36px;
                }
                .profile-page-header-user-stat-text {
                  font-size: 14px;
                  font-weight: 400;
                  text-transform: uppercase;
                  letter-spacing: 0.4px;
                  line-height: 18px;
                }*/
                .profile-page-header-content {
                  padding: 27px 36px 0 0;
                  flex-shrink: 0;
                  flex-grow: 0;
                  flex-basis: calc(100% - 300px);
                }
                .profile-page-header-name {
                  font-size: 40px;
                  font-weight: 700;
                  line-height: 48px;
                  display: inline-block;
                  margin-right: 12px;
                  line-height: 40px;
                }
                .profile-page-header-username {
                  font-size: 18px;
                  font-weight: 600;
                  line-height: 24px;
                  display: inline-block;
                  margin-top: 6px;
                }
                .profile-page-header-edit-links {
                  font-size: 14px;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.4px;
                  margin-top: 12px;
                  line-height: 16px;
                }
                .link-seperator:before {
                  content: "·";
                }
                .link-seperator {
                  position: relative;
                  display: inline-block;
                  margin: 0 6px;
                  vertical-align: top;
                }
                .profile-page-header-bio {
                  margin-top: 24px;
                }
                .profile-page-header-bio-content {
                  display: flex;
                  flex-direction: column;
                }
                .main-header-search-toggle {
                  width: 78px;
                  height: 78px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                @media (max-width: 1023px) {
                  .main-header-profile.avatar {
                    top: 0;
                  }
                  .main-header-dropdown {
                    top: 48px;
                  }
                }
                @media (max-width: 767px) {
                  .main-header {
                    height: 66px;
                  }
                  .main-header-search {
                    height: 42px;
                    margin-left: 12px;
                    margin-right: 12px;
                  }
                  .profile-header {
                    flex-direction: column;
                    align-items: center;
                    padding: 24px 0 0;
                    text-align: center;
                    margin-top: 24px;
                  }
                  .profile-page-header-avatar.avatar {
                    width: 126px;
                    height: 126px;
                    border-radius: 2px;
                    margin: 0;
                    margin-left: 0;
                  }
                  .profile-page-header-content {
                    flex-basis: calc(100% - 126px);
                    padding: 18px;
                  }
                  .profile-page-header-name {
                    font-size: 30px;
                    line-height: 34px;
                  }
                  .profile-page-header-user-stats {
                    position: relative;
                    width: calc(100% + 24px);
                  }
                  .main-header-search-toggle,
                  .main-header-search-toggle:hover {
                    width: 60px;
                    height: 60px;
                    color: #4e4376;
                  }
                  .main-header-profile-link {
                    margin: 0;
                  }


                @media (max-width: 424px) {
                  .main-header-section:first-child {
                    flex-grow: 1;
                  }
                  .main-header-dropdown {
                    top: 47px;
                    margin-right: 5px;
                  }
                  .icon.times {
                    color: #372f53;
                    font-size: large;
                  }
                }
              `}
            </style>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}
