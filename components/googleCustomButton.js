import React from "react";

const GoogleCustomButton = props => (
  <React.Fragment>
    <button className="loginBtn loginBtn--google"> {props.action} </button>

    <style jsx>
      {`

        .loginBtn {
            box-sizing: border-box;
            position: relative;
            width : 250px;
            margin-bottom: 0.8em;
            padding: 0 15px 0 46px;
            border: none;
            text-align: left;
            line-height: 34px;
            white-space: nowrap;
            border-radius: 6px;
            font-size: 16px;
            color: #637381;
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

        .loginBtn--google {
            background : #fff;
        }

        .loginBtn--google:before {
            border-right : #BB3F30 1px solid;
            background : url("/static/icon-google.png") 6px 6px no-repeat;
        }

        .loginBtn--google:hover, .loginBtn--google: focus{
            background : #E74B37;
        }


        `}
    </style>
  </React.Fragment>
);

export default GoogleCustomButton;
