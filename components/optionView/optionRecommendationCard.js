import React from "react";
import { Thumb_up, CardDownArrow, CardUpArrow } from "../Icons";
import { getUserKarmaAndDateJoined } from "../../apiRequests/apiRequests";
import timeDifference from "../../lib/dateConversion";
import { timeConverter } from "../../lib/dateConversion";
export default class OptionRecommendationCard extends React.Component {
  state = {
    maxItem: 1,
    pros: this.props.pro,
    cons: this.props.con,
    experience: this.props.experience,
    username: this.props.username,
    createdAt: this.props.createdAt,
    userImage: this.props.userImage
      ? this.props.userImage
      : "/static/avatar.png"
  };

  componentDidMount() {
    //Do something here
    this.UserKarmaAndDateJoined(this.props.userId);
  }

  UserKarmaAndDateJoined = id => {
    getUserKarmaAndDateJoined(id)
      .then(result => {
        this.setState({
          karma: result.data.karma,
          joined: result.data.joined
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  handleShowMore = () => {
    this.setState({
      maxItem: 10
    });
  };

  handleShowLess = () => {
    this.setState({
      maxItem: 1
    });
  };

  render() {
    const {
      maxItem,
      cons,
      pros,
      experience,
      username,
      userImage,
      createdAt,
      joined,
      karma
    } = this.state;

    const { numOfRecs } = this.props;
    const joinedDate = new Date(joined);
    const recDate = new Date(createdAt);
    const t = timeDifference(Date.now(), recDate);
    const j = timeConverter(Date.now(), joinedDate);

    return (
      <>
        <div className={"card-list-item"}>
          <div className="recommendation-top-section">
            <div className="avatar-container">
              <img className={"avatar-img"} src={userImage} alt={username} />
            </div>
            <div>{username}</div>
            {joined ? (
              <div>Contributor for {j}</div>
            ) : (
              <div>Contributor for 1 day</div>
            )}
          </div>

          <div className="contributor-section">
            <div>
              <div className="center">
                {numOfRecs ? numOfRecs : "loading..."}
              </div>
              <div className="center">Total Recs.</div>
            </div>

            <div>
              <div className="center">{karma ? karma : "loading..."}</div>
              <div className="center">Total Karma</div>
            </div>
          </div>

          <div className="recommendation-section">
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
              <div className="thumb_background">
                <span style={{ position: "relative", top: "2px" }}>
                  <Thumb_up color={"#fff"} height="12px" width="12px" />
                </span>
              </div>
              <span className="rec-period">Recommended {t}</span>
            </div>
            <div className="recommendation-section-experience">
              {experience}
            </div>
            <div className="pro-section">
              {pros.slice(0, maxItem).map(item => {
                return (
                  <div key={item}>
                    <span className="rec-card-content-pro">Pro</span>
                    <span className="text">{item}</span>
                  </div>
                );
              })}
            </div>

            <div className="con-section">
              {cons.slice(0, maxItem).map(item => {
                return (
                  <div key={item}>
                    <span className="rec-card-content-con">Con</span>
                    <span className="text">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="show-more">
            {maxItem === 1 && (
              <span
                style={{ position: "relative", top: "5px" }}
                onClick={this.handleShowMore}
              >
                <CardDownArrow color={"#000"} width={"20px"} height={"20px"} />
              </span>
            )}
            {maxItem === 10 && (
              <span
                style={{ position: "relative", top: "5px" }}
                onClick={this.handleShowLess}
              >
                <CardUpArrow color={"#000"} width={"20px"} height={"20px"} />
              </span>
            )}

            {/* <span>Show less</span> */}
          </div>
        </div>

        <style jsx>
          {`
            .card-list-item {
              overflow: hidden;
              background-color: #fff;
              margin-bottom: 0px;
              padding: 18px;
              border: 1px solid #e6e8eb;
              border-radius: 9px;
              margin-bottom: 12px;
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
            }
            .recommendation-top-section {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              // border-bottom: 1px solid red;
            }

            .contributor-section {
              display: flex;
              flex-direction: row;
              border-bottom: 1px dashed rgb(91, 56, 141);
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
              flex-grow: 0;
            }

            .contributor-section div {
              margin-top: 8px;
              margin-bottom: 4px;
              margin-left: 10px;
              margin-right: 10px;
            }
            .center {
              text-align: center;
              text-transform: uppercase;
              color: #8d959c;
            }

            .avatar-container {
              width: 50px;
              height: 50px;
              border: 2px solid #e6e8eb;
              border-radius: 49px;
              margin-bottom: 5px;
              overflow: hidden;
            }
            .avatar-img {
              width: 100%;
              height: auto;
            }
            .recommendation-section {
              // border: 1px solid red;
              margin-top: 4px;
            }
            .rec-period {
              margin-left: 14px;
              color: #8d959c;
              position: relative;
              top: 1px;
            }
            .recommendation-section-experience {
              padding: 5px 0px;
              word-break: normal;
              margin-bottom: 14px;
            }

            .rec-card-content-con,
            .rec-card-content-pro,
            .rec-card-content-experience {
              font-weight: bold;
              margin-right: 6px;
              margin-bottom: 20px;
              text-transform: uppercase;
            }
            .rec-card-content-con {
              color: #fc0d0d;
            }
            .rec-card-content-pro {
              color: rgb(9, 247, 9);
              box-sizing: border-box;
              word-break: break-word;
            }
            .text {
              // font-size: 18px;
              font-weight: 400;
              color: #595959;
              word-break: break-word;
            }

            .thumb_background {
              // border: 1px solid blue;
              background-color: #1b9ad1;
              display: inline-block;
              justify-content: center;
              align-items: center;
              text-align: center;
              height: 22px;
              width: 22px;
              border-radius: 18px;
            }

            .show-more {
              float: right;
              // background: #fdfdfd;
              width: 30px;
              height: 30px;
              justify-content: center;
              align-items: center;
              text-align: center;
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
              border-radius: 30px;
              cursor: pointer;
            }
          `}
        </style>
      </>
    );
  }
}
