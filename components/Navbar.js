import React, { Fragment } from "react";
import Link from "next/link";
import HeaderForm from "../utils/headerForm";
import Chip from "@material-ui/core/Chip";
//import Bell from "../utils/bell";
import Badge from "@material-ui/core/Badge";
import {
  UserIcon,
  StarIcon,
  ProfileIcon,
  QuestionBox,
  Bellie,
  LogoutIcon
} from "./Icons";
import Router from "next/router";
import { Popup, Feed } from "semantic-ui-react";
import {
  GET_USER_KARMA,
  GET_USER_NOTIFICATION,
  USER_HAS_SEEN_NOTIFICATION
} from "../apiRequests/apiRequests";
import API_URL from "../config/config";
import io from "socket.io-client";
const socket = io(API_URL);

const Badgie = function Badgie(props) {
  //handles the notification and badge
  return (
    <Fragment>
      <Badge color="secondary" badgeContent={props.numOfNotifications || 0}>
        <i className="far fa-bell icon-bell" />

        {/*<FontAwesomeIcon className="icon-bell" icon={faBell} /> */}
      </Badge>
      <style jsx>
        {`
          .icon-bell {
            color: rgb(91, 56, 141) !important;
            background-color: rbg(91, 56, 141) !important;
            font-size: 25px;
          }
        `}
      </style>
    </Fragment>
  );
};

class NavBar extends React.Component {
  state = {
    Chipie: false,
    data: "",
    seen: false
  };

  async componentDidMount() {
    socket.on("user_viewed_notification", data => {
      //console.log(data, " I am here na");
      this.setState(
        {
          seen: data.viewed
        },
        () => {
          if (this.state.numOfNotifications !== 0) {
            this.setState({
              numOfNotifications: this.state.numOfNotifications - 1
            });
          }
        }
      );
    });

    this.checkUser();
    this.fetchUserKarma();
    this.fetchUserNotification();
  }

  fetchUserKarma = () => {
    let _data = JSON.parse(localStorage.getItem("user_details"));
    if (_data) {
      GET_USER_KARMA(_data._id)
        .then(axiosRes => {
          // console.log(axiosRes.data.karma);
          this.setState({
            userKarma: axiosRes.data.karma
          });
        })
        .catch(err => {
          this.setState({
            err
          });
        });
    }
  };

  fetchUserNotification = () => {
    let _data = JSON.parse(localStorage.getItem("user_details"));
    if (_data) {
      GET_USER_NOTIFICATION(_data._id)
        .then(axiosResponse => {
          let _num = axiosResponse.data.viewed ? 0 : 1;
          //console.log(axiosResponse.data.notification);
          this.setState({
            notification: axiosResponse.data.notification,
            numOfNotifications: _num,
            seen: axiosResponse.data.viewed
          });
        })
        .catch(error => {
          this.setState({
            error
          });
          // console.log(error);
        });
    }
  };

  checkUser = () => {
    let data = JSON.parse(localStorage.getItem("user_details"));
    //let isRegistered = true //fake check;

    if (data !== "" && data !== null) {
      this.setState({
        Chipie: true,
        data: data
      });
    }
  };

  handleSeenNotifications = () => {
    let data = JSON.parse(localStorage.getItem("user_details"));
    if (data) {
      if (this.state.numOfNotifications !== 0) {
        this.setState(
          {
            numOfNotifications: this.state.numOfNotifications - 1
          },
          () => {
            let data = JSON.parse(localStorage.getItem("user_details"));

            USER_HAS_SEEN_NOTIFICATION(socket.id, data._id)
              .then(res => {
                this.setState({
                  res
                });
                // console.log(res);
              })
              .catch(err => {
                this.setState({
                  err
                });
              });
          }
        );
      }
    }
  };

  handleLogout = e => {
    new Promise((resolve, reject) => {
      if (e) {
        resolve(localStorage.removeItem("user_details"));
      } else {
        reject("Yo do nothing");
      }
    })
      .then(() => {
        Router.push("/");
        localStorage.removeItem("user_token");
        window.location.reload();
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  };

  // UserHasSeen = myData => {
  //   var setIt;
  //   for (let item in myData) {
  //     if (item.seen === false) {
  //       setIt = true;
  //       item.seen = setIt;
  //     }
  //   }
  //   var _len = myData.filter(item => {
  //     return item.seen !== false;
  //   });
  //   this.setState({
  //     len: _len.length
  //   });
  // };

  render() {
    const {
      Chipie,
      data,
      userKarma,
      notification,
      numOfNotifications,
      seen,
      viewed
    } = this.state; // I love destructuring

    if (!Chipie) {
      return (
        <Fragment>
          <nav className="navbar-style">
            <ul>
              <li className="logo-style">
                <Link prefetch href="/">
                  <img src="/static/new-icon.png" alt="logo" width="60px" />
                </Link>
              </li>

              <li className="header-form-style">
                <HeaderForm data={this.props.data} />
              </li>

              <li className="not-login-action">
                <a onClick={() => this.props.openSignup()}>Get started</a>
              </li>
              <li className="not-signup-action">
                <a onClick={() => this.props.openLogin()}>Sign in</a>
              </li>

              <li className="header-call-to-action">
                <Link href="/ask">
                  <button className="header-btn-ask">Add Question</button>
                </Link>
              </li>
            </ul>
          </nav>
          <style jsx>
            {`
              .logo-style {
                position: relative;
                top: -10px;
                left: -6.5vw;
                cursor: pointer;
              }
              .navbar-style {
                display: flex;
                background: #fdfdfd; /*#f6f4f9de;*/
                width: 100%;
                height: 58px;
                box-sizing: border-box;
                box-shadow: 0 3px 2px -2px rgba(200, 200, 200, 0.4);
                position: fixed;
                margin-bottom: 50px;
                z-index: 2000;
                top: 0;
                justify-content: center;
                overflow: hidden;
              }

              ul {
                box-sizing: border-box;
                display: inline-block;
                position: relative;
                top: 11px;
                left: -40px;
              }

              ul li {
                list-style-type: none;
                float: left;
                padding: 0px 5px;
              }

              .header-form-style {
                position: relative;
                left: -3vw;
                top: -1px;
              }

              .not-login-action a {
                position: relative;
                left: 01vw;
                font-weight: 800;
                color: rgb(91, 56, 141) !important;
                top: 0.6vw;
                font-size: 1.2em;
                cursor: pointer;
              }

              .not-signup-action a {
                position: relative;
                left: 4vw;
                font-weight: 600;
                color: rgb(91, 56, 141) !important;
                top: 0.6vw;
                cursor: pointer;
              }

              .header-call-to-action {
                position: relative;
                left: 7.5vw;
              }

              .header-btn-ask {
                position: relative;
                min-width: 130px !important;
                outline: none !important;
                height: 35px !important;
                font-size: 1em;
                font-weight: 600;
                border-radius: 3px !important;
                background: rgb(96, 51, 141);
                color: #fdfdfd;
                text-align: center !important;
                padding: 0px 5px !important;
                outline: 0 !important;
                cursor: pointer;
                border: 1px solid rgb(96, 51, 141);
              }

              @media (width: 360px) {
                .logo-style {
                  margin-left: 4px;
                  top: -12px;
                }
              }

              @media screen and (max-width: 720px) {
                .header-call-to-action {
                  display: none;
                }

                .header-btn-ask {
                  display: none;
                }

                .header-form-style {
                  left: -23px;
                }
                .logo-style {
                  left: -10px;
                  top: -12px;
                }

                .not-login-action a {
                  top: -25px;
                  left: 41vw;
                  font-size: 4.2vw;
                  word-spacing: 0.001em;
                }
                .not-signup-action a {
                  top: -25px;
                  left: 40vw;
                  font-size: 4.2vw;
                  word-spacing: 0.001em;
                }

                .navbar-style {
                  background: #fdfdfd; /*I love this color #d7cde0*/
                  width: 100%;
                  height: 58px;
                  box-sizing: border-box;
                  box-shadow: 0 3px 2px -2px rgba(200, 200, 200, 0.2);
                  position: fixed;
                  margin-bottom: 50px;
                  z-index: 2000;
                }
              }
            `}
          </style>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <nav className="navbar-style">
          <ul>
            <li className="logo-style">
              <Link prefetch href="/">
                <img src="/static/new-icon.png" alt="logo" width="60px" />
              </Link>
            </li>
            <li className="notification-style">
              <a>
                <Popup
                  trigger={
                    <span className="anchor-style">
                      <Badgie numOfNotifications={numOfNotifications} />
                      {/* <Badgie numOfNotifications={len} /> */}
                      <span className="span-notification">Notifications</span>
                    </span>
                  }
                  content={
                    <>
                      <span onMouseOver={this.handleSeenNotifications}>
                        <Fragment>{seen ? "None yet" : notification}</Fragment>
                      </span>
                    </>
                  }
                  on="click"
                  hideOnScroll
                  position="bottom center"
                  style={{ background: "#f0eff5", zIndex: 9000 }}
                />
              </a>
            </li>
            <li className="karma-style">
              <a className="anchor-style">
                <Popup
                  trigger={
                    <span>
                      <i className="far fa-star icon-bell" />
                      <span className="span-coin">Coins</span>
                    </span>
                  }
                  content={
                    <>
                      <span>
                        {userKarma ? (
                          <Fragment>{userKarma}</Fragment>
                        ) : (
                          "Nothing yet"
                        )}
                      </span>
                    </>
                  }
                  on="click"
                  hideOnScroll
                  position="bottom center"
                  style={{ background: "#f0eff5", zIndex: 9000 }}
                />
              </a>
            </li>
            <li className="header-form-style">
              <HeaderForm data={this.props.data} />
            </li>
            <ul className="profile-icon-style">
              <Popup
                trigger={
                  <span>
                    <Chip
                      label={<UserIcon />}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "24px"
                      }}
                    />
                  </span>
                }
                content={
                  <>
                    <li className="inner-list">
                      <Link
                        as={`/profile/${this.state.data.username}`}
                        href={`/profile/${this.state.data.username}`}
                      >
                        <a className="anchor-style">
                          <span>
                            <ProfileIcon color="rgb(91, 56, 141)" />
                          </span>
                          <span className="icon-text">Profile</span>
                        </a>
                      </Link>
                    </li>
                    <li className="inner-list">
                      <Link href="/ask">
                        <a>
                          <span>
                            <QuestionBox color="rgb(91, 56, 141)" />
                          </span>
                          <span className="icon-text">Question</span>
                        </a>
                      </Link>
                    </li>
                    <li className="inner-list">
                      <Link href="/ask">
                        <a>
                          <span>
                            <Bellie color="rgb(91, 56, 141)" />
                          </span>
                          <span className="icon-text">Notifications</span>
                        </a>
                      </Link>
                    </li>

                    <li className={"inner-list"}>
                      <a
                        className={"add-cursor"}
                        onClick={e => this.handleLogout(e)}
                      >
                        <span>
                          <LogoutIcon color="rgb(91, 56, 141)" />
                        </span>
                        <span className="icon-text">Logout</span>
                      </a>
                    </li>
                  </>
                }
                on="click"
                hideOnScroll
                position="bottom center"
                style={{ background: "#f0eff5", zIndex: 9000 }}
              />
            </ul>

            <li className="header-call-to-action">
              <Link href="/ask">
                <button className="header-btn-ask">Add Question</button>
              </Link>
            </li>
          </ul>
        </nav>
        <style jsx>
          {`

            .icon-bell {
              color: rgb(91, 56, 141) !important;
              font-size : 25px;
            }

            .inner-list {
              list-style-type : none;
            }

            
            a span {
              color: #58647b;
            }
            span.icon-text {
              position : relative;
              top : -5px;
              margin-left : 5px;
            }
            .anchor-style {
              cursor : pointer;
            }

            .span-coin {
              font-size : 1.04;
              font-family : inherit;
              font-weight : 600;
              color : #666;
              padding : 0 4px;
              position : relative;
              top : -2px;
            }

            .add-cursor {
              cursor : pointer;
            }

            a {
              color : #000 !important;
              font-family : inherit;
            }

            .span-notification {
              font-size : 1.04;
              font-family : inherit;
              font-weight : 600;
              color : #666;
              padding : 0 2px;
              position : relative;
              top : 2px;
              margin-left : 5px;
            }
            .navbar-style {
              display : flex;
              background: #fdfdfd; /*#f6f4f9de;*/
              width: 100%;
              height: 58px;
              box-sizing: border-box;
              position: fixed;
              margin-bottom: 50px;
              z-index: 2000;
              top : 0;
              justify-content : center;
            }

            ul {
              display : inline-block !important;
              box-sizing : border-box;
              position : relative;
              left : 48px;
            }

            ul li {
              list-style-type: none;
              float : left;
              margin-top : 15px;
              padding : 0px 5px;
            }



            .header-call-to-action {
              position : relative;
              left : 30px;
              top : -4px;
            }
            .profile-icon-style {
              position : relative;
              left : -220px;
              top : 10px;
            }
            .karma-style {
              position : relative;
              left : -70px;
              display : block;
            }




            .notification-style {
              position : relative;
              left : -90px;
              top : 1px;
              display : block;
            }

            .notification-style li a {
              text-align : center;
            }

            .logo-style {
              position : relative;
              left : -110px;
              top : -15px;
              cursor : pointer;

            }

            .header-form-style {
              position : relative;
              left : -75px;
              top : -5px;
            }

            .header-btn-ask {
              position: relative;
              min-width: 130px !important;
              outline: none !important;
              height: 35px !important;
              font-size: 1em;
              font-weight: 600;
              border-radius: 3px !important;
              background : rgb(96, 51, 141);
              color : #fdfdfd;
              text-align: center !important;
              padding: 0px 5px !important;
              outline: 0 !important;
              cursor: pointer;
              border: 1px solid rgb(96, 51, 141);
            }

           

            .profile-icon-style .profile {
              visibility: hidden;
              width: 110px;
              min-height: 10vw;
              display: flex;
              flex-direction: column;
              background: #eee;
              color: #000;
              text-align: center;
              border-radius: 6px;
              padding: 5px 5px;
              position: absolute;
              z-index: 1;
              top: 95%;
              left: 50%;
              margin-top: 12px;
              margin-left: -35px;
            }

            .profile-icon-style .profile::after {
              content: "";
              position: absolute;
              bottom: 100%;
              left: 50%;
              margin-left: -5px;
              border-width: 5px;
              border-style: solid;
              border-color: transparent transparent #eee transparent;
            }

            .profile-icon-style:hover .profile {
              visibility: visible;
            }

            .notification-style .work {
              visibility: hidden;
              width: 120px;
              height: 150px;
              background: #eee;
              color: #000;
              text-align: center;
              border-radius: 6px;
              padding: 5px 0;
              position: absolute;
              z-index: 1;
              top: 96%;
              left: 50%;
              margin-left: -60px;
              margin-top: 5px;
            }

            .notification-style .work::after {
              content: "";
              position: absolute;
              bottom: 100%;
              left: 50%;
              margin-left: -5px;
              border-width: 5px;
              border-style: solid;
              border-color: transparent transparent #eee transparent;
            }

            .notification-style:hover .work {
              visibility: visible;
            }

            .karma-style .work {
              visibility: hidden;
              width: 120px;
              height: 150px;
              background: #eee;
              color: #000;
              text-align: center;
              border-radius: 6px;
              padding: 5px 0;
              position: absolute;
              z-index: 1;
              top: 65%;
              left: 50%;
              margin-top: 15px;
              margin-left: -60px;
            }

            .karma-style .work::after {
              content: "";
              position: absolute;
              bottom: 100%;
              left: 50%;
              margin-left: -5px;
              border-width: 5px;
              border-style: solid;
              border-color: transparent transparent #eee transparent;
            }

            .karma-style:hover .work {
              visibility: visible;
            }

            @media screen and (max-width: 600px) {
              .header-call-to-action {
                display: none !important;
              }

              .header-btn-ask {
                display: none !important;
              }

              .karma-style {
                display: none !important;
              }

              .notification-style {
                display: none !important;
              }

              .header-form-style {
                left: -100px;
                top : 0px;
              }
              .logo-style {
                left: -90px;
              }
              .profile-icon-style {
                left : 30vw;
                top : -35px;
              }
            }

            @media screen and (width : 411px) {
              .profile-icon-style {
                left : 40vw;
                top : -35px;
              }

              .logo-style {
                left: -80px;
            }

            .header-form-style {
              left: -85px;
              top : 0px;
            }

            @media screen and (width :375px){
              .profile-icon-style{
                left : 38px !important;
                top : -35px;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default NavBar;
