import React, { Component, Fragment } from "react";
import Link from "next/link";
import Router from "next/router";
import GoogleLogin from "react-google-login";
import FacebookLogin from  "react-facebook-login"
import { mySignup ,mySocial } from "../apiRequests/apiRequests";
import { GOOGLE_CLIENT_KEY } from "../config/config";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    displayName: "",
    loading: false,
    joined: false,
    message:"",
    error: "",
    errors: {
      email: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    let { email, password, username, displayName } = this.state;
    this.setState({
      loading: true
    });

    mySignup(email, username, password, displayName)
      .then(result => {
        this.setState({
          loading: false
        });
        new Promise((resolve, reject) => {
          if(result.data.status ==400){
            resolve(
              setTimeout(() => {
                this.setState({
                  message: result.data.message
                });
              }, 1500)
            );
          }
         else if (result.data.status ==200) {
         
            resolve(
              setTimeout(() => {
                this.setState({
                  joined: true
                });
              }, 1500)
            );
              localStorage.setItem("user_token", result.data.result.token);
              localStorage.setItem(
                "user_details",
                JSON.stringify(result.data.data)
              );
              //this.props.closeLogin();
              window.location.reload();
              //Router.push("/");
          
          }
        }).then(() => {
          // Router.push("/");
         // window.location.reload();
        });
      })
      .catch(error => {
        this.setState({
          loading: false
        });
        // console.log(error);
      });
  };

  handleChange = ({ target: { name, value } }) => {
    const errors = this.state.errors;

    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({
      [name]: value,
      errors
    });
  };

  render() {
    const { error, errors } = this.state;

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

    let {
      email,
      password,
      username,
      displayName,
      loading,
      joined,
      message
    } = this.state;
    return (
      <div>
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
            <em
              style={{
                color: "rgb(96, 51, 141)",
                fontWeight: 600,
                marginTop: "10px"
              }}
            >
              {error ? error : "Welcome, Create an Account!"}
            </em>

            <FacebookLogin
              appId="538947710271871"
              fields="name,email,picture"
              textButton="Sign up with Facebook"
              cssClass="loginButton loginButton--facebook"
              icon="fab fa-facebook-f"
              callback={responseFacebook}
            />

            <GoogleLogin
              clientId={GOOGLE_CLIENT_KEY}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className="google-auth-button"
              buttonText="Sign up with Google"
            />
            <span
              style={{
                color: "#637381",
                fontWeight: 400,
                fontFamily: "inherit",
                marginBottom: "-10px"
              }}
            >
              Or
            </span>

            {joined ? (
              <em style={{ color: "green" }}>Joined successfully</em>
            ) : (
              ""
            )}
              {message !="" ? (
              <em style={{ color: "red" }}>{message}</em>
            ) : (
              ""
            )}
            <form>
              <div style={{ marginTop: "-3px" }} />
              <div>
                <input
                  type="text"
                  value={username}
                  name="username"
                  onChange={e => this.handleChange(e)}
                  placeholder="Username"
                  autoFocus
                />
              </div>
              <div>
                <input
                  type="text"
                  value={email}
                  name="email"
                  onChange={e => this.handleChange(e)}
                  placeholder="Email"
                />

                {errors.email.length > 0 && (
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#cb1a4a",
                      textalign: "center"
                    }}
                    className="error"
                  >
                    {errors.email}
                  </span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  value={displayName}
                  name="displayName"
                  onChange={e => this.handleChange(e)}
                  placeholder="Display name(optional)"
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={e => this.handleChange(e)}
                  placeholder="Password"
                />
                {errors.password.length > 0 && (
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#cb1a4a",
                      textalign: "center"
                    }}
                    className="error"
                  >
                    {errors.password}
                  </span>
                )}
              </div>
              <button
                className="signup-btn"
                onClick={this.handleSubmit}
                disabled={!password}
              >
                {loading ? <i className="fa fa-spinner fa-spin" /> : "Join"}
              </button>
            </form>
          </div>

          <div className={"i-have-account"}>
            I have signed up!
            <a
              onClick={() => this.props.openLogin()}
              style={{ marginLeft: "5px", textDecoration: "none" }}
              className={"join"}
            >
              login
            </a>
          </div>
          <style jsx global>
            {`

              .google-auth-button{
                width : 250px !important;
                border-radius: 6px;
                box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1) !important;
                box-sizing: border-box !important;
                position : relative;
                left : 0px !important;
                height : 38px;
                top : 5px !important;
                border-radius : 5px !important;
                text-align : center !important;
                margin-top : -15px !important;
                margin-bottom : 10px !important;
              }

              .google-auth-button:active {
                  box-shadow : inset 0 0 0 32px rgba(0,0,0,0.1) !important;
              }

              .google-auth-button > span {
                color: #000 !important;
                font-size: 15px !important;
                font-weight : 600 !important;
                font-family : "Cabin" !important;
                white-space: nowrap !important;

              }

              .google-auth-button > div {
                height : 18px !important;
                margin-top : -16px !important;
                margin-left : 7px !important;
              }

              .custom-signin .form-card {
                background: #fdfdfd;
                width: 400px;
                min-height: 320px;
                -webkit-box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
                box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                z-index: 1000;
              }

              .custom-signin {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                top: 70px;
                box-sizing: border-box;
                min-height: 100%;
                transition : 2s;
                margin-top : 50px;
              }

              .custom-signin .form-card div {
                padding: 5px 0px;
                margin-top: 10px;
              }

              input[type="text"],
              input[type="password"],
              input[type="email"]{
                padding: 10px;
                width: 250px;
                height: 38px;
                border: 2px solid rgb(96, 51, 141);
                border-radius: 5px;
                outline: 0;
                font-family: inherit !important;
                font-size : 1em;
                font-weight : 600;
              }

              ::placeholder {
                font-family: inherit;
              }

              .signup-btn {
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
                margin-left: 75px;
                margin-top: 10px;
                margin-bottom: 15px;
              }
              .join {
                cursor: pointer !important;
                color: rgb(91, 56, 141) !important;
                font-weight: 600 !important;
              }

              .signup-btn:hover {
                background-color: #e6ecf0;
                color: rgb(96, 51, 141);
                border: 2px solid rgb(96, 51, 141);
              }

              .signup-btn:disabled {
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
                top: -70px;
              }

              .i-have-account {
                textalign: center;
                fontfamily: inherit;
                margin-top: 5px;
                margin-bottom: 15px;
              }

              .loginButton > i {
                position : relative;
                left  : -20px;
              }
              .loginButton {
                box-sizing: border-box;
                position: relative;
                width : 250px;
                margin-top: 0.8em;
                margin-bottom : 1.5em;
                padding: 0 15px 0 46px;
                border: none;
                text-align: left;
                line-height: 34px;
                white-space: nowrap;
                border-radius: 0.2em;
                color: #fff;
                font-family : inherit;
                font-weight : 600;
                font-size : 15px !important;
                box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
                text-transform : none !important;
              }
              .loginButton:before{
                  content : "",
                  box-sizing : border-box;
                  position : absolute;
                  top : 0;
                  left : 0;
                  width : 34px;
                  height : 100%;
              }

              .loginButton:focus {
                  outline : none;
              }

              .loginButton:active{
                  box-shadow : inset 0 0 0 32px rgba(0,0,0,0.1);
              }

              .loginButton--facebook {
                  background-color : #4C69BA;
                  background-image : linear-gradient(#4C69BA, #3B55A0);
                  text-shadow : 0 -1px 0 #354C8C;
              }

              .loginButton--facebook:before{
                  border-right : #364e92 1px solid;
              }
              .loginButton--facebook:hover, .loginButton--facebook:focus {
                  background-color : #5B7BD5;
                  background-image : linear-gradient(#5B7BD5, #4864b1);
              }

              @media screen and (max-width: 600px) {
                .custom-signin .form-card {
                  width: 300px;
                  min-height: 300px;
                }

                .custom-signin {
                  top: 70px;
                }
                .img-logo-style {
                  top: -65px;
                }

                input[type="text"],
                input[type="password"] {
                  padding: 5px;
                }

                .custom-signin .form-card div {
                  padding: 5px 10px;
                  margin-top: 10px;
                }

                .i-have-account {
                  position: relative;
                }

                .signup-btn {
                  margin-left: 85px;

                }
              }
            `}
          </style>
        </div>
      </div>
    );
  }
}

export default Signup;
