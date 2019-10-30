import React from "react";
import { Popup } from "semantic-ui-react";
import { More } from "../Icons";
import Link from "next/link";
import { FetchAvatar } from "../../apiRequests/apiRequests";

export default class OptionCon extends React.Component {
  state = {
    avatar: null
  };

  componentDidMount() {
    this.getUserAvatar(this.props.userId);
  }
  getUserAvatar = id => {
    FetchAvatar(id)
      .then(data => {
        // console.log(data.data.userImage);
        this.setState({
          avatar: data.data.userImage
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { avatar } = this.state;
    const { title, description, id } = this.props;
    return (
      <>
        <div className="tabcontent">
          <div className="tab-content-holder">
            <div className="tab-content-item">
              <div className="profile-image">
                {!avatar && (
                  <img
                    className="user-image"
                    src="/static/avatar.png"
                    alt="user"
                  />
                )}
                {avatar && (
                  <img className="user-image" src={`${avatar}`} alt="user" />
                )}
              </div>
              <div className="user-rec-details">
                <div className="rec-card-content-con">
                  <span style={{ marginLeft: "50px" }}>
                    Con <span className="caption">{title}</span>
                    {/* <Popup
                      trigger={
                        <span className="more-icon">
                          <More color="transparent" />
                        </span>
                      }
                      content={
                        <strong>
                          <p>
                            <Link
                              as={`/option-con?id=${id}`}
                              href={`/option-con?id=${id}`}
                            >
                              <a>See Update History</a>
                            </Link>
                          </p>
                          <p
                            onClick={() =>
                              this.props.handleUpdate(
                                true,
                                title,
                                description,
                                id
                              )
                            }
                          >
                            <a style={{ cursor: "pointer" }}>Update Con</a>
                          </p>
                        </strong>
                      }
                      hideOnScroll
                      position="bottom right"
                      on="click"
                    /> */}
                  </span>
                </div>
                <p className="text">{description}</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .tabcontent {
              display: block;
              padding: 6px 0px;
              // border: 1px dotted #ccc;
              border-top: none;
            }

            .tab-content-holder {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              // overflow-wrap: break-word;
              padding: 0;
              margin: auto;
              //   border: 1px solid blue;
              width: 100%;
              box-sizing: border-box;
            }

            .tab-content-item {
              display: flex;
              //   border: 1px solid green;
              width: 100%;
              overflow: hidden;
              word-break: break-word;
            }

            .tab-text {
              overflow-wrap: break-word;
              box-sizing: border-box;
              white-space: normal;
              margin-bottom: 4px;
              max-width: 200px;
              height: auto;
              overflow-x: hidden;
              padding: 2px;
              text-align: center;
              border-radius: 4px;
            }

            .profile-image {
              border-radius: 60px;
              border: 1px solid #595959;
              width: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;
              overflow: hidden;
            }
            .user-image {
              max-width: 100%;
              padding: 2px;
            }
            .user-rec-details {
              position: relative;
              // top: -50px;
              //   border: 1px solid yellow;
              width: 100%;
              margin-bottom: 10px;
              box-sizing: border-box;
              word-break: normal;
            }

            .caption {
              font-weight: 600;
              color: #0d0d0d;
              line-height: 24px;
              text-transform: none;
              font-size: 1em;
              position: relative;
              left: 5px;
              word-break: normal;
              //   margin-left: 50px;
              //   border: 1px dashed green;
            }
            .text {
              font-size: 18px;
              font-weight: 500;
              color: #595959;
              word-break: break-word;
              position: relative;
              left: 52px;
            }
            .more-icon {
              // background: #eee;
              border: 0;
              cursor: pointer;
              border-radius: 35px;
              outline: 0;
              padding: 0;
              height: 25px;
              width: 25px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              margin-left: 94%;
              margin-top: -20px;
            }
            .rec-card-content-con,
            .rec-card-content-pro,
            .rec-card-content-experience {
              font-weight: bold;
              margin-right: 15px;
              margin-bottom: 10px;
              letter-spacing: 0.4px;
              font-size: 14px;
              text-transform: uppercase;
            }
            .rec-card-content-con {
              color: #cb1a4a;
            }
            .rec-card-content-pro {
              color: #1d9127;
              box-sizing: border-box;
              word-break: break-word;
            }
          `}
        </style>
      </>
    );
  }
}
