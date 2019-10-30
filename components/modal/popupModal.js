import React, { Component } from "react";
import { GET_OPTION_DETAILS } from "../../apiRequests/apiRequests";
import timeDifference from "../../lib/dateConversion";

class PopupModal extends Component {
  state = {
    optionImage: null
  };

  componentDidMount() {
    //Get this
    GET_OPTION_DETAILS(this.props.option)
      .then(result => {
        this.setState({
          optionImage: result.data.mediaUrl[0]
        });
      })
      .catch(err => {
        this.setState({
          err: err.response
        });
        // console.log(err);
      });
  }
  render() {
    const {
      createdAt,
      option,
      username,
      pro,
      con,
      experience,
      userImage
    } = this.props;

    const url = userImage ? userImage : "/static/gravatar2.png";
    const _date = new Date(createdAt);
    const newDate = timeDifference(Date.now(), _date);

    const tempBgImge = this.state.optionImage
      ? this.state.optionImage
      : "/static/image.png";

    return (
      <>
        <div className="modal-theme">
          <div className="modal-content">
            <div className="bg-theme">
              <div
                style={{
                  // border: "1px solid red",
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(   180deg,   rgba(28, 41, 62, 0.2) 0,rgba(28, 41, 62, 0.3) 30%,rgba(7, 15, 29, 0.9))"
                }}
              >
                <img
                  src={tempBgImge}
                  alt={"bg-image"}
                  className="modal-bg-img"
                />
              </div>
            </div>
            <div style={{ zIndex: 2000, marginTop: "-74px" }}>
              <div className="user-chip" />
              <div className="modal-question-info">{username} recommends</div>
              <div className="modal-question-inf">{option}</div>
            </div>
            <div className="main-section-container">
              <div className="modal-date">Last updated {newDate} </div>
              <div className="modal-experience">
                <div
                  className={"modal-experience-title"}
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  My Experience
                </div>
                <span className="modal-experience-content">{experience}</span>
              </div>

              <div className="modal-recommendation">
                {/** Pro is here */}
                <>
                  {pro.length !== 0 ? (
                    <>
                      <div
                        style={{ marginTop: "20px" }}
                        className="modal-reason-i-recommend"
                      >
                        Reasons I recommend it
                      </div>
                      {pro.map((item, index) => {
                        return (
                          <div key={index} className="modal-pro">
                            <span className="rec-card-content-pro">&#43;</span>
                            <span className="rec-item">{" " + item}</span>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </>

                {/** Con is here */}

                <>
                  {con.length !== 0 ? (
                    <>
                      <div className="modal-reason-i-recommend">
                        Reasons I wouldn't recommend this
                      </div>
                      {con.map((item, index) => {
                        return (
                          <div key={index} className="modal-con">
                            <span className="rec-card-content-con">
                              &#8722;
                            </span>
                            <span className="rec-item">{" " + item}</span>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </>
              </div>
            </div>
          </div>
          <style jsx>{`
            .modal-theme {
              position: relative;
              width: 100%;
              height: 100vh;
              left: 0;
              box-sizing: border-box;
              background: #fdfdfd;
              // border: 1px solid red;
              // overflow: hidden;
              border-radius: 1px;
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
            }

            .clear-fix {
              border: 1px solid blue;
            }

            .main-section-container {
              // border: 1px solid green;
              margin-top: 10px;
              position: relative;
            }

            .bg-theme {
              overflow: hidden;
              width: 100%;
              height: 250px;
              background-image: linear-gradient(
                180deg,
                rgba(28, 41, 62, 0.2) 0,
                rgba(28, 41, 62, 0.3) 30%,
                rgba(7, 15, 29, 0.9)
              );
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              // border: 1px solid blue;
              position: relative;
              justify-content: center;
              align-items: center;
              // opacity: 0.5;
            }
            .modal-content {
              min-height: 100%;
              // background: #eee;
            }

            .modal-experience {
              padding-left: 30px;
              padding-right: 10px;
              border: 0;
              font-size: 14px;
              margin-bottom: 10px;
              // border: 1px dashed red;
            }

            .modal-bg-img {
              justify-content: center;
              align-items: center;
              display: flex;
              width: 100%;
              height: 100%;
            }
            .modal-date {
              padding-left: 30px;
              // padding-top: 5px;
              margin-top: 15px;
              margin-bottom: 15px;
              color: #8d959c;
              font-size: 11px;
              // text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
            }

            .modal-pro {
              padding-left: 30px;
              padding-right: 10px;
              // padding-top: 5px;
              margin-bottom: 20px;
              font-size: 16px;
              color: #595959;
              // margin-bottom: 10px;
            }
            .modal-con {
              padding-left: 30px;
              padding-right: 10px;
              // padding-top: 5px;
              font-size: 16px;
              color: #595959;
            }
            .user-chip {
              background-image: url(${url});
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              width: 60px;
              height: 60px;
              border-radius: 60px;
              margin-left: 30px;
              margin-top: 10px;
              overflow: hidden;
              border: 1px solid #fdfdfd;
            }

            .modal-reason-i-recommend {
              padding-left: 30px;
              // padding-top: 5px;
              // margin-bottom: 15px;
              font-weight: 600;
              font-size: 16px;
            }

            .modal-fix {
              margin-top: 10px;
              padding: 10px;
              // background: #eee;
            }

            .modal-question-info {
              margin-left: 94px;
              margin-top: -56px;
              color: #fff;
              font-size: 22px;
              font-weight: 600;
            }
            .modal-question-inf {
              margin-left: 94px;
              color: #fff;
              font-size: 21px;
              font-weight: 600;
            }
            .modal-question-info.modal-user-name {
              margin-bottom: 10px;
            }

            .modal-experience-content {
              font-size: 16px;
              color: #595959;
              font-family: "Cabin";
            }

            .rec-card-content-con,
            .rec-card-content-pro {
              font-weight: bold;
              margin-right: 6px;
              font-size: 40px;
              letter-spacing: 0.4px;
              text-transform: uppercase;
            }
            .rec-card-content-con {
              color: #cb1a4a;
            }
            .rec-card-content-pro {
              color: #1d9127;
            }

            @media (min-width: 768px) and (max-width: 900px) {
              .modal-theme {
                max-width: 650px;
              }
            }
            @media (min-width: 900px) {
              .modal-theme {
                max-width: 625px;
                height: 100vh;
                margin-left: -6.9%;
              }
              .modal-experience {
                font-size: 1em;
              }
              .modal-date {
                font-size: 16px;
                padding-top: 20px;
                padding-bottom: 5px;
                color: #595959;
              }

              .rec-item {
                position: relative;
                top: -6px;
              }

              .modal-reason-i-recommend {
                font-size: 24px;
                font-weight: 600;
                line-height: 1.4;
                color: #595959;
                // padding-top: 10px;
                // padding-bottom: 10px;
              }

              .rec-card-content-con,
              .rec-card-content-pro {
                // font-size: 1em;
              }
              .modal-experience-title {
                font-size: 24px;
                font-weight: 600;
                line-height: 1.3;
                font-family: inherit;
                color: #595959;
                // border: 1px solid red;
              }
              // .modal-experience-content {
              //   font-size: 14px;
              // }
            }
          `}</style>
        </div>
      </>
    );
  }
}

export default PopupModal;
