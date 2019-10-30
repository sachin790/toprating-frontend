import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faFacebook,
  faGoogle
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import Typist from "react-typist";
import { LandingSvg } from "./Icons";

const LandingPage = ({ openSignup }) => {
  return (
    <React.Fragment>
      <div className="landing">
        <div className="landing-page">
          <h1>
            <Typist cursor={{ hideWhenDone: true }}>
              Top and bias free recommendations always!
            </Typist>
          </h1>
          <p>
            Top rating is more than just a review web app. You get the top and
            best products always
          </p>
          <div className="user-action">
            <span>
              <button
                className="loginBtnn loginBtnn--facebook"
                onClick={() => openSignup()}
              >
                <i className="fab fa-facebook-f" />
                Sign up with Facebook
              </button>
            </span>
            <span>
              <button
                className="google-auth-buttonn"
                onClick={() => openSignup()}
              >
                <img src="https://img.icons8.com/color/24/000000/google-logo.png" />
                Sign up with Google
              </button>
            </span>

            <span className="sign-up-with-email">
              <strong onClick={() => openSignup()}>Sign up with Email</strong>
            </span>
          </div>
        </div>
      </div>
      {/*<LandingSvg /> */}
      <style jsx>
        {`
      .landing{
        position : relative;
        display : flex;
        margin : 0;
        padding : 0;
        // background :  #fdfdfd;
        background-image: linear-gradient(135deg,rgb(91, 56, 141),#4e4376);
        width : 100%;
        overflow : hidden;
        justify-content : center;
        // border : 1px solid green;
        padding-bottom : 120px;
      }

      .landing-page {
        position : relative;
        top : 52px;
        text-align : center;
        box-sizing : border-box;
        // border : 1px solid orange;
      }

      h1 {
        // color : rgb(91,56,141);
        color : #fff;
        font-size : 2.75em;
        font-weight : 600;
        font-family : Cabin;
        line-height: 1.18181818;
        // border : 1px solid red;
        // margin-bottom: 18px;
        // margin-top : 8.2px;
      }

      p {
        // color : #000;
        color : #fff;
        font-size: 1.35em;
        letter-spacing: .3px;
        line-height: 1.4;
        // text-shadow : 0 2px 2px rgba(0,0,0,.1);
      }

      .get-started {
        width : 150px;
        outline : 0;
        color : #fdfdfd;
        background : rgb(96, 51, 141);
        height : 40px;
        border-radius : 2px;
        white-space : no-wrap;
        font-weight : 600
      }

      .user-action {
      //  border : 1px solid yellow;
      }

      .user-action span {
         padding : 0px 5px;
      }

      .loginBtnn i {
        margin-right : 8px !important;
        margin-left : 10px !important;
      }


      .loginBtnn {
        box-sizing: border-box;
        position: relative;
        width : 200px !important;
        height : 38px;
        margin-top: 0.8em;
        margin-bottom : 1.5em;
        border: none;
        text-align: left;
        line-height: 34px;
        white-space: nowrap;
        border-radius: 0.2em;
        font-size: 1em;
        color: #fff;
        font-weight : 600;
       box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
       font-family : "Cabin";
       cursor : pointer;
      }
      .loginBtnn:before{
          content : "",
          box-sizing : border-box;
          position : absolute;
          top : 0;
          left : 0;
          width : 34px;
          height : 100%;
      }

      .loginBtnn:focus {
          outline : none;
      }

      .loginBtnn:active{
          box-shadow : inset 0 0 0 32px rgba(0,0,0,0.1);
      }

      .loginBtnn--facebook {
          background-color : #4C69BA;
          background-image : linear-gradient(#4C69BA, #3B55A0);
          // text-shadow : 0 -1px 0 #354C8C;
      }

      .loginBtnn--facebook:before{
          border-right : #364e92 1px solid;
      }
      .loginBtnn--facebook:hover, .loginBtnn--facebook:focus {
          background-color : #5B7BD5;
          background-image : linear-gradient(#5B7BD5, #4864b1);
      }

      .google-auth-buttonn{
        min-width : 200px;
        box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1) !important;
        box-sizing: border-box !important;
        position : relative;
        height : 38px;
        outline : 0;
        text-align : center !important;
        margin-top : 0.8em;
        margin-bottom : 1.5em;
        font-family : "Cabin";
        font-weight : 600;
        font-size: 1em;
        line-height: 34px;
        white-space: nowrap;
        border-radius: 0.2em;
        color : #4d4d4d;
        background : #fdfdfd;
        border : 0;
        cursor : pointer;
      }

      .google-auth-buttonn img {
        margin-right : 9px;
        margin-left : -28px;
      }

      .google-auth-buttonn:active {
          box-shadow : inset 0 0 0 32px rgba(0,0,0,0.1) !important;
      }

      .sign-up-with-email {
        position : relative;
        font-family : "Cabin";
        cursor : pointer;
        display : block;
        color : #fff;
      }

      .sign-up-with-email:hover {
        color : #4C69BA;
      }

      @media(max-width : 767px) {
        h1 {
          font-size : 2em;
        }

        p {
          font-size: 1.2em;
        }
      }
      
      `}
      </style>
    </React.Fragment>
  );
};

export default LandingPage;
