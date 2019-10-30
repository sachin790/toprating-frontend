import React, { Component } from "react";
import { More, InsertLink, Thumb_down, Thumb_up } from "../Icons";
import MediaCarousel from "./carousel";
import Link from "next/link";

class OptionMainCard extends Component {
  state = {
    data: this.props.OptionDetails,
    mediaUrl: this.props.OptionDetails.mediaUrl
  };

  // componentDidMount() {
  //   GET_OPTION_DETAILS(this.props.option)
  //     .then(axiosResponse => {
  //       this.setState({
  //         data: axiosResponse.data,
  //         mediaUrl: axiosResponse.data.mediaUrl
  //       });
  //     })
  //     .catch(axiosResponseError => {
  //       console.log(axiosResponseError);
  //     });
  // }

  render() {
    const { option } = this.props;
    const { data } = this.state;

    return (
      <>
        <div className="option-card-list">
          <div className="option-header " style={{ paddingBottom: "20px" }}>
            <span className="option-card-option">{option} Review</span>
          </div>

          <div className="option-header" style={{ paddingBottom: "30px" }}>
            <div>
              <button className="get-it-btn">
                <span className="thumb-icon">
                  <InsertLink color={"#fff"} />
                </span>
                <Link href={`http://${data.link}`}>
                  <a
                    style={{ color: "#fff" }}
                    className="btn-content get-it"
                    target={"_blank"}
                  >
                    {data.price && ` $ ${data.price}`}
                    {!data.price && " GET IT HERE"}
                  </a>
                </Link>
              </button>
            </div>
            <div>
              <button className="like-btn">
                <span style={{ position: "relative", left: "-15px" }}>
                  <span
                    style={{
                      position: "relative",
                      color: "#1b9ad1",
                      left: "-10px",
                      fontSize: "20px"
                    }}
                  >
                    {data.like ? data.like : 0}
                  </span>
                  <Thumb_up color="#1b9ad1" width="18px" height="18px" />
                </span>
              </button>
              <button className="dislike-btn">
                <span>
                  <span
                    style={{
                      position: "relative",
                      color: "#cb1a4a",
                      left: "-10px",
                      fontSize: "20px"
                    }}
                  >
                    {data.dislike ? data.dislike : 0}
                  </span>

                  <Thumb_down color="#cb1a4a" width="18px" height="18px" />
                </span>
              </button>
            </div>
          </div>

          <div className={"option-description"}>
            Angular is a TypeScript-based open-source web application framework
            led by the Angular Team at Google and by a community of individuals
            and corporations. Angular is a complete rewrite from the same team
            that built AngularJS
          </div>

          <div className="option-media-container">
            {<MediaCarousel {...this.state} />}
          </div>
        </div>
        <style jsx>
          {`
            .option-description {
              font-size: 16px;
              font-weight: 450;
              line-height: 24px;
              letter-spacing: 0.1px;
              text-transform: none;
              word-break: break-word;
              color: #4d4d4d;
              // margin-top: 5px;
              margin-bottom: 35px;
            }

            .option-header {
              // border: 1px dashed brown;
              display: flex;
              justify-content: space-between;
              // padding-right: 70px;
              // padding-top: 15px;
            }

            // .score-card {
            //   cursor: pointer;
            //   background: #000;
            //   color: #fff;
            //   text-align: center;
            //   border-radius: 2px;
            //   // border: 1px solid red;
            // }

            .score-card .score {
              // margin-top: 10px;
              // font-size: 18px;
            }
            .option-card-option {
              // margin-left: 15px;
              font-size: 25px;
              // border: 1px solid green;
              font-weight: 600;
              line-height: 24px;
              letter-spacing: 0.7px;
            }
            .get-it-btn {
              font-family: Cabin;
              font-weight: 600;
              font-size: 13px;
              letter-spacing: 0.3px;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              outline: 0;
              padding-top: 8px;
              padding-bottom: 8px;
              padding-left: 15px;
              padding-right: 15px;
              border: 0;
              cursor: pointer !important;
              background: #4a4a4a;
              text-transform: uppercase;
              border-radius: 9px;
            }
            .get-it {
              padding-right: 6px;
            }
            .thumb-icon {
              position: relative;
              top: 2px;
              padding-right: 2px;
            }
            .like-btn {
              font-size: 1.2em;
              font-family: Cabin;
              font-weight: 600;
              letter-spacing: 0.3px;
              border-top-left-radius: 9px;
              border-bottom-left-radius: 9px;
              outline: 0;
              padding: 0;
              border: 0;
              height: 40px;
              cursor: pointer !important;
              background: #fff;
              text-align: center;
            }

            .dislike-btn {
              font-size: 1.2em;
              font-family: Cabin;
              font-weight: 600;
              letter-spacing: 0.3px;
              border-top-right-radius: 9px;
              border-bottom-right-radius: 9px;
              height: 40px;
              outline: 0;
              border: 0;
              cursor: pointer !important;
              color: grey;
              background: #fff;
              padding-left: 20px;
            }
            .option-media-container {
              margin-top: 20px;
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.3) 0,
                rgba(0, 0, 0, 0.3) 30%,
                rgba(0, 0, 0, 0.9)
              );
              // border: 1px solid #58647b;
              width: 100%;
              //   height: 300px;
              border-radius: 10px;
            }
          `}
        </style>
      </>
    );
  }
}

export default OptionMainCard;
