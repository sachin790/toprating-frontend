import React from "react";

const SuccessSnackbar = ({ message, showclass }) => {
  return (
    <>
      <div id="snackbar" className="show">
        {message}
      </div>
      <style jsx>
        {`
          #snackbar {
            visibility: hidden;
            min-width: 200px;
            margin-left: -125px;
            background-color: rgb(67, 160, 71);
            color: #fff;
            text-align: center;
            border-radius: 2px;
            padding: 14px;
            position: fixed;
            z-index: 1;
            left: 10%;
            letter-spacing: 0.1px;
            bottom: 44px;
            font-size: 17px;
          }

          #snackbar.show {
            visibility: visible;
            -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
            animation: fadein 0.5s, fadeout 0.5s 2.5s;
          }

          @-webkit-keyframes fadein {
            from {
              bottom: 0;
              opacity: 0;
            }
            to {
              bottom: 30px;
              opacity: 1;
            }
          }

          @keyframes fadein {
            from {
              bottom: 0;
              opacity: 0;
            }
            to {
              bottom: 30px;
              opacity: 1;
            }
          }

          @-webkit-keyframes fadeout {
            from {
              bottom: 30px;
              opacity: 1;
            }
            to {
              bottom: 0;
              opacity: 0;
            }
          }

          @keyframes fadeout {
            from {
              bottom: 30px;
              opacity: 1;
            }
            to {
              bottom: 0;
              opacity: 0;
            }
          }

          @media screen and (max-width: 768px) {
            #snackbar {
              left: 30%;
              padding: 10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default SuccessSnackbar;
