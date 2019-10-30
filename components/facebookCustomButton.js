import React from "react";
const FacebookLoginButton = props => {
  return (
    <React.Fragment>
      <button className="loginBtn loginBtn--facebook">{props.action}</button>
      <style jsx>{`
        .loginBtn {
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
          font-size: 1em;
          color: #fff;
          font-weight : 600;
         box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.1);
        }
        .loginBtn:before{
            content : "",
            box-sizing : border-box;
            position : absolute;
            top : 0;
            left : 0;
            width : 34px;
            height : 100%;
        }

        .loginBtn:focus {
            outline : none;
        }

        .loginBtn:active{
            box-shadow : inset 0 0 0 32px rgba(0,0,0,0.1);
        }

        .loginBtn--facebook {
            background-color : #4C69BA;
            background-image : linear-gradient(#4C69BA, #3B55A0);
            text-shadow : 0 -1px 0 #354C8C;
        }

        .loginBtn--facebook:before{
            border-right : #364e92 1px solid;
            background : url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png") 6px 6px no-repeat;
        }
        .loginBtn--facebook:hover, .loginBtn--facebook:focus {
            background-color : #5B7BD5;
            background-image : linear-gradient(#5B7BD5, #4864b1);
        }




      `}</style>
    </React.Fragment>
  );
};

export default FacebookLoginButton;
