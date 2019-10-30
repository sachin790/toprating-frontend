import React, { Component, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import FacebookLoginButton from "../components/facebookCustomButton";
import GoogleCustomButton from "../components/googleCustomButton";
import {
  login,
  forgotPasswordFunction,
  checkIfUserExist,
  mySocial
} from "../apiRequests/apiRequests";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { GOOGLE_CLIENT_KEY } from "../config/config";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false,
    showClass: false,
    msg: "",
    err: false //
    //myloading: true
  };

  openBtn = () => {
    //alert("click");
    this.setState({
      showClass: true
    });
  };

  closeBtn = () => {
    this.setState({
      showClass: false
    });
  };

  handleDivClose = e => {
    if (e.target === this.div) {
      this.setState(previousState => ({ showClass: !previousState }));
    }
  };

  async componentDidMount() {
    let user_data = await JSON.parse(localStorage.getItem("user_details"));
    if (user_data !== null) {
      Router.push("/");
    }
  }

  handleForgot = e => {
    e.preventDefault();
    forgotPasswordFunction(this.state.email)
      .then(result => {
        this.setState({
          msg: "Password Sent to your email",
          err: false
        });
      })
      .catch(error => {
        this.setState({
          msg: error.response.data.msg,
          err: true
        });
      });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({
      loading: true
    });

    login(email.trim(), password)
      .then(result => {
        if (result) {
          localStorage.setItem("user_token", result.data.result.token);
          localStorage.setItem(
            "user_details",
            JSON.stringify(result.data.data)
          );
          //this.props.closeLogin();
          window.location.reload();
          //Router.push("/");
        }

        // console.log(result.data.data)
      })
      .catch(error => {
        if (error.response.status === 400) {
          this.setState({
            error: error.response.data,
            loading: false
          });
        }
      });
  };

  render() {


    const responseGoogle = response => {
      if (response.tokenId) {
        let { email, imageUrl, givenName } = response.profileObj;
        let username = email.substring(0, email.lastIndexOf("@"));

        mySocial(email, username, "", imageUrl, givenName)
          .then(result => {
            // console.log(result.data.data._id)
            response.profileObj._id = result.data.data._id;
            response.profileObj.username = username;
            //result.data.data._id
          //  localStorage.setItem("user_token", response.tokenId);
          localStorage.setItem("user_token", result.data.result.token);
            localStorage.setItem(
              "user_details",
              JSON.stringify(response.profileObj)
            );
            window.location.reload();
          })
          .catch(error => {
            // console.log(error.response);
            this.setState({
              error: error.response.data.msg
            });
          });
      }
    };

    const responseFacebook = response => {
      console.log(response);  
        let  profileObj ={};
        let em = response.email;
        profileObj.email = response.email;
        profileObj.imageUrl = response.picture.data.url;
        profileObj.givenName = response.name;
        profileObj.username = em.substring(0, em.lastIndexOf("@"));

 let { email, imageUrl, givenName , username} = profileObj;
        mySocial(email, username, "", imageUrl, givenName)
          .then(result => {
           console.log(result);
            // console.log(result.data.data._id)
            profileObj._id = result.data.data._id;
           // profileObj.username = username;
            //result.data.data._id
           // localStorage.setItem("user_token", response.userID);
           localStorage.setItem("user_token", result.data.result.token);
            localStorage.setItem(
              "user_details",
              JSON.stringify(profileObj)
            );
            window.location.reload();
          })
          .catch(error => {
            console.log(error);
            // console.log(error.response);
            // this.setState({
            //   error: error.response.data.msg
            // });
          });
  
    };
    const { email, password, error, loading, showClass, msg, err } = this.state;
    return (
      <Fragment>
        <div
          onClick={e => this.handleDivClose(e)}
          id={showClass ? "overlayShow" : "overlay"}
          ref={el => (this.div = el)}
        >
          <div className={"custom-sign"}>
            <div className="form-card">
              {<em className={err ? "err" : "suc"}>{msg ? msg : ""}</em>}
              <span className="close-iconn" onClick={this.closeBtn}>
                &times;
              </span>
              <strong style={{ marginBottom: "5px", fontFamily: "Cabin" }}>
                Forgot Password
              </strong>
              <div>
                <input
                  type="email"
                  className={"input"}
                  value={email}
                  name="email"
                  onChange={e => this.handleChange(e)}
                  placeholder="Enter your email"
                  autoFocus
                />
              </div>
              <button className="btn-log" onClick={e => this.handleForgot(e)}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="custom-signin">
          <Link href="/">
            <img
              src={"/static/new-icon.png"}
              alt={"logo"}
              width={70}
              className="img-logo-style"
            />
          </Link>
          <div className={"form-card"}>
            <em style={{ color: "rgb(96, 51, 141)", fontWeight: 600 }}>
              Welcome back!
            </em>
            <FacebookLogin
              appId="538947710271871"
              fields="name,email,picture"
              cssClass="loginBtn loginBtn--facebook"
              icon="fa-facebook"
              callback={responseFacebook}
              textButton="Sign in with Facebook"
            />
            <GoogleLogin
              clientId={GOOGLE_CLIENT_KEY} //go to the config folder to add your client key
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className="google-auth-button"
              buttonText={"Sign in with Google"}
            />
            <span
              style={{
                color: "#637381",
                fontWeight: 400,
                fontFamily: "inherit"
              }}
            >
              Or
            </span>
            {error && <em style={{ color: "red" }}> {error} </em>}
            <form>
              <div>
                <input
                  type="email"
                  value={email}
                  className={"input"}
                  name="email"
                  onChange={e => this.handleChange(e)}
                  placeholder="Email"
                  autoFocus
                />
              </div>
              <div>
                <input
                  type="password"
                  className={"input"}
                  value={password}
                  name="password"
                  onChange={e => this.handleChange(e)}
                  placeholder="Password"
                />
              </div>
              <button
                className="btn-login"
                onClick={this.handleSubmit}
                disabled={!password}
              >
                {loading ? <i className="fa fa-spinner fa-spin" /> : "Login"}
              </button>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "Cabin",
                  color: "#637381",
                  padding: "2px",
                  fontSize: "12px"
                }}
              >
                <a style={{ cursor: "pointer" }} onClick={this.openBtn}>
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
          <div className={"already-registered"}>
            Ooh I haven't signed up!
            <a
              className={"join"}
              onClick={() => this.props.openSignup()}
              style={{ marginLeft: "5px", textDecoration: "none" }}
            >
              Join
            </a>
          </div>
          <style jsx global>
            {`
              .suc {
                color: green;
              }

              .err {
                color: red;
              }

              .close-iconn {
                position: absolute;
                top: 25px;
                left: 80%;
                font-size: 80px !important;
                color: #fdfdfd;
                cursor: pointer;
              }
              .google-auth-button {
                width: 250px !important;
                border-radius: 6px;
                box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1) !important;
                box-sizing: border-box !important;
                position: relative;
                left: 0px !important;
                height: 38px;
                top: 5px !important;
                border-radius: 5px !important;
                text-align: center !important;
                margin-top: -15px !important;
                margin-bottom: 10px !important;
              }

              .google-auth-button:active {
                box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1) !important;
              }

              .google-auth-button > span {
                color: #000 !important;
                font-size: 16px !important;
                font-weight: 600 !important;
                font-family: "Cabin" !important;
                white-space: nowrap !important;
              }

              .google-auth-button > div {
                height: 20px !important;
                margin-top: -20px !important;
                margin-left: 7px !important;
              }
              .custom-signin .form-card {
                background: #fdfdfd;
                width: 400px;
                min-height: 380px;
                -webkit-box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
                box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                margin-top: -20px;
              }

              .custom-signin {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                min-height: 100%;
                transition: 2s;
              }

              .custom-sign {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                min-height: 100%;
                transition: 2s;
              }

              .custom-sign .form-card {
                background: #fdfdfd;
                min-width: 300px;
                min-height: 200px;
                -webkit-box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
                box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                transition: 2s;
              }

              .custom-signin .form-card div {
                padding: 5px 10px;
                margin-top: 6px;
              }

              .input {
                padding: 10px;
                width: 250px !important;
                height: 38px;
                border: 2px solid rgb(96, 51, 141);
                border-radius: 5px;
                outline: 0;
                font-family: inherit;
                line-height: 2px;
                font-size: 1em;
                font-weight: 600;
              }

              ::placeholder {
                font-family: inherit;
              }

              .btn-login {
                width: 100px;
                height: 45px;
                border: 0;
                border-radius: 6px;
                cursor: pointer;
                background-color: rgb(96, 51, 141);
                text-transform: uppercase;
                font-family: inherit;
                font-size: 16px;
                font-weight: 200;
                color: #f2f2f2;
                outline: 0;
                display: relative;
                margin-left: 85px;
                margin-top: 9px;
              }

              .btn-login:hover {
                background-color: #e6ecf0;
                color: rgb(96, 51, 141);
                border: 2px solid rgb(96, 51, 141);
                padding: 0;
              }

              .btn-login:disabled {
                cursor: not-allowed;
                background: #e6e8eb;
                color: #8d959c;
              }

              a {
                text-decoration: none;
                font-weight: bold;
              }

              .img-logo-style {
                position: absolute;
                top: 32px;
              }

              .already-registered {
                text-align: center;
                font-family: inherit;
                margin: 20px 0px;
              }
              .join {
                cursor: pointer !important;
                color: rgb(91, 56, 141) !important;
                font-weight: 600 !important;
              }

              .loginBtn > i {
                position: relative;
                left: -20px;
              }
              .loginBtn {
                box-sizing: border-box;
                position: relative;
                width: 250px;
                margin-top: 0.8em;
                margin-bottom: 1.5em;
                padding: 0 15px 0 46px;
                border: none;
                text-align: left;
                line-height: 34px;
                white-space: nowrap;
                border-radius: 0.2em;
                font-size: 15px;
                color: #fff;
                font-weight: 600;
                box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
                font-family: inherit;
              }
              .loginBtn:before {
                content: "";
                box-sizing: border-box;
                position: absolute;
                top: 0;
                left: 0;
                width: 34px;
                height: 100%;
              }

              .loginBtn:focus {
                outline: none;
              }

              .loginBtn:active {
                box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
              }

              .loginBtn--facebook {
                background-color: #4c69ba;
                background-image: linear-gradient(#4c69ba, #3b55a0);
                text-shadow: 0 -1px 0 #354c8c;
              }

              .loginBtn--facebook:before {
                border-right: #364e92 1px solid;
              }
              .loginBtn--facebook:hover,
              .loginBtn--facebook:focus {
                background-color: #5b7bd5;
                background-image: linear-gradient(#5b7bd5, #4864b1);
              }

              #overlay {
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
              #overlayShow {
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

              .btn-log {
                width: 100px;
                height: 45px;
                border: 0;
                border-radius: 6px;
                cursor: pointer;
                background-color: rgb(96, 51, 141);
                font-family: inherit;
                font-size: 16px;
                font-weight: 200;
                color: #f2f2f2;
                outline: 0;
                display: relative;
                margin-top: 9px;
              }

              @media screen and (max-width: 767px) {
                .custom-signin .form-card {
                  width: 300px;
                  height: 250px;
                }
                .img-logo-style {
                  position: absolute;
                  top: 24px;
                }

                input[type="text"],
                input[type="password"] {
                  padding: 5px;
                }

                .custom-signin .form-card div {
                  padding: 5px 10px;
                  margin-top: 10px;
                }

                .already-registered {
                  margin: 4px 0px;
                }
              }
            `}
          </style>
        </div>
      </Fragment>
    );
  }
}

export default Signin;
