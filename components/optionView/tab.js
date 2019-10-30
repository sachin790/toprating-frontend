import React, { Fragment } from "react";
import { More, CardDownArrow, CardUpArrow } from "../Icons";
import { Popup } from "semantic-ui-react";
class CustomTab extends React.Component {
  state = {
    experiences: [],
    pros: [],
    cons: [],
    showUpIcon: false,
    maxItem: 2,
    all: true,
    pro: false, //show pros false
    con: false, //show cons false
    experience: false //show experiences false
  };

  handleShowMore = () => {
    this.setState({
      maxItem: 10,
      showUpIcon: true
    });
  };

  /**show only 1 item */
  handleShowLess = () => {
    this.setState({
      maxItem: 2,
      showUpIcon: false
    });
  };
  showAll = () => {
    this.setState(previousState => ({
      all: true,
      pro: false,
      con: false,
      experience: false
    }));
  };

  showExperiences = () => {
    this.setState(previousState => ({
      experience: true,
      pro: false,
      con: false,
      all: false
    }));
  };

  showPros = () => {
    this.setState(previousState => ({
      pro: !previousState.pro,
      con: false,
      all: false,
      experience: false
    }));
  };

  showCons = () => {
    this.setState(previousState => ({
      con: true,
      pro: false,
      all: false,
      experience: false
    }));
  };

  render() {
    const { all, experience, pro, con, showUpIcon, maxItem } = this.state;
    const { pros, cons, experiences } = this.props;

    let holder = [];
    holder.push(pros, cons, experiences);

    const flattenArray = arr => {
      return [].concat(...arr);
    };

    let flattenedArray = flattenArray(holder);

    return (
      <Fragment>
        <div className="tab">
          <button className={`tablinks`} onClick={this.showAll}>
            <span className={all ? "activeAll" : ""}>
              All {pros.length + cons.length + experiences.length}
            </span>
          </button>
          <button className={"tablinks"} onClick={this.showExperiences}>
            <span className={experience ? "activeAll" : ""}>
              Experiences {experiences ? experiences.length : 0}
            </span>
          </button>
          <button className={"tablinks"} onClick={this.showPros}>
            <span className={pro ? "activeAll" : ""}>
              Pros {pros ? pros.length : 0}
            </span>
          </button>
          <button className={"tablinks"} onClick={this.showCons}>
            <span className={con ? "activeAll" : ""}>
              Cons {cons ? cons.length : 0}
            </span>
          </button>
        </div>

        {all && (
          <div className="tabcontent">
            <div className="tab-content-holder">
              {flattenedArray ? (
                <Fragment>
                  {flattenedArray.slice(0, maxItem).map((item, i) => {
                    return (
                      <div className="tab-content-item" key={i}>
                        <div className="profile-image">
                          <img
                            className="user-image"
                            src="/static/avatar.png"
                            alt="user"
                          />
                        </div>
                        <div className="user-rec-details">
                          <div className="rec-card-content-experience">All</div>
                          <div className="caption">It was good</div>
                          <p className="text">{item}</p>
                        </div>
                      </div>
                    );
                  })}
                </Fragment>
              ) : (
                ""
              )}
            </div>
            {!showUpIcon && (
              <span className="view-more-item" onClick={this.handleShowMore}>
                See All
                <CardDownArrow width={24} height={24} />
              </span>
            )}
            {showUpIcon && (
              <span className="view-more-item" onClick={this.handleShowLess}>
                Hide
                <CardUpArrow width={24} height={24} />
              </span>
            )}
          </div>
        )}

        {experience && (
          <div className="tabcontent">
            <div className="tab-content-holder">
              {experiences ? (
                <Fragment>
                  {experiences.slice(0, maxItem).map((item, i) => {
                    return (
                      <div className="tab-content-item" key={i}>
                        <div className="profile-image">
                          <img
                            className="user-image"
                            src="/static/avatar.png"
                            alt="user"
                          />
                        </div>
                        <div className="user-rec-details">
                          <div className="rec-card-content-experience">
                            <span>
                              Experience
                              <Popup
                                trigger={
                                  <span className="more-icon">
                                    <More color="transparent" />
                                  </span>
                                }
                                content={
                                  <strong>
                                    {/* <p>
                                      <a>Add Pros and Cons</a>
                                    </p> */}
                                    <p>
                                      <a>See Update History</a>
                                    </p>
                                    <p>
                                      <a style={{ cursor: "pointer" }}>
                                        Update Experience
                                      </a>
                                    </p>

                                    {/* <p>
                                      <a
                                        style={{
                                          color: "#E91E63",
                                          cursor: "pointer"
                                        }}
                                      >
                                        Mark Option as Spam
                                      </a>
                                    </p> */}
                                  </strong>
                                }
                                hideOnScroll
                                position="bottom right"
                                on="click"
                              />
                            </span>
                          </div>
                          <div className="caption">It was good</div>
                          <p className="text">{item}</p>
                        </div>
                      </div>
                    );
                  })}
                </Fragment>
              ) : (
                ""
              )}
            </div>
            {!showUpIcon && (
              <span className="view-more-item" onClick={this.handleShowMore}>
                See All
                <CardDownArrow width={24} height={24} />
              </span>
            )}
            {showUpIcon && (
              <span className="view-more-item" onClick={this.handleShowLess}>
                Hide
                <CardUpArrow width={24} height={24} />
              </span>
            )}
          </div>
        )}

        {pro && (
          <div className="tabcontent">
            <div className="tab-content-holder">
              {pros ? (
                <Fragment>
                  {pros.slice(0, maxItem).map((item, i) => {
                    return (
                      <div className="tab-content-item" key={i}>
                        <div className="profile-image">
                          <img
                            className="user-image"
                            src="/static/avatar.png"
                            alt="user"
                          />
                        </div>
                        <div className="user-rec-details">
                          <div className="rec-card-content-pro">
                            <span>
                              Pro
                              <Popup
                                trigger={
                                  <span className="more-icon">
                                    <More color="transparent" />
                                  </span>
                                }
                                content={
                                  <strong>
                                    {/* <p>
                                      <a>Add Pros and Cons</a>
                                    </p> */}
                                    <p>
                                      <a>See Update History</a>
                                    </p>
                                    <p>
                                      <a style={{ cursor: "pointer" }}>
                                        Update Pro
                                      </a>
                                    </p>

                                    {/* <p>
                                      <a
                                        style={{
                                          color: "#E91E63",
                                          cursor: "pointer"
                                        }}
                                      >
                                        Mark Option as Spam
                                      </a>
                                    </p> */}
                                  </strong>
                                }
                                hideOnScroll
                                position="bottom right"
                                on="click"
                              />
                            </span>
                          </div>
                          <div className="caption">It was good</div>
                          <p className="text">{item}</p>
                        </div>
                      </div>
                    );
                  })}
                </Fragment>
              ) : (
                ""
              )}
            </div>

            {!showUpIcon && (
              <span className="view-more-item" onClick={this.handleShowMore}>
                See All
                <CardDownArrow width={24} height={24} />
              </span>
            )}
            {showUpIcon && (
              <span className="view-more-item" onClick={this.handleShowLess}>
                Hide
                <CardUpArrow width={24} height={24} />
              </span>
            )}
          </div>
        )}

        {con && (
          <div className="tabcontent">
            <div className="tab-content-holder">
              {cons ? (
                <Fragment>
                  {cons.slice(0, maxItem).map((item, i) => {
                    return (
                      <div className="tab-content-item" key={i}>
                        <div className="profile-image">
                          <img
                            className="user-image"
                            src="/static/avatar.png"
                            alt="user"
                          />
                        </div>
                        <div className="user-rec-details">
                          <div className="rec-card-content-con">
                            <span>
                              Con
                              <Popup
                                trigger={
                                  <span className="more-icon">
                                    <More color="transparent" />
                                  </span>
                                }
                                content={
                                  <strong>
                                    {/* <p>
                                      <a>Add Pros and Cons</a>
                                    </p> */}
                                    <p>
                                      <a>See Update History</a>
                                    </p>
                                    <p>
                                      <a style={{ cursor: "pointer" }}>
                                        Update Con
                                      </a>
                                    </p>

                                    {/* <p>
                                      <a
                                        style={{
                                          color: "#E91E63",
                                          cursor: "pointer"
                                        }}
                                      >
                                        Mark Option as Spam
                                      </a>
                                    </p> */}
                                  </strong>
                                }
                                hideOnScroll
                                position="bottom right"
                                on="click"
                              />
                            </span>
                          </div>
                          <div className="caption">It was good</div>
                          <p className="text">{item}</p>
                        </div>
                      </div>
                    );
                  })}
                </Fragment>
              ) : (
                ""
              )}
            </div>
            {!showUpIcon && (
              <span className="view-more-item" onClick={this.handleShowMore}>
                See All
                <CardDownArrow width={24} height={24} />
              </span>
            )}
            {showUpIcon && (
              <span className="view-more-item" onClick={this.handleShowLess}>
                Hide
                <CardUpArrow width={24} height={24} />
              </span>
            )}
          </div>
        )}

        <style jsx>
          {`
            /* Style the tab */
            .tab {
              overflow: hidden;
              // border-bottom: 1px dotted #ccc;
              margin-top: 8px;
              font-family: Cabin;
            }

            h3 {
              position: relative;
              left: 15px;
              font-family: Cabin !important;
              font-weight: 600;
              color: rgb(91, 56, 141);
            }
            .tablinks {
              color: #000;
              text-transform: uppercase;
              white-space: nowrap;
              // border: 1px solid red;
              font-family: inherit;
            }
            .tab-p {
              text-align: center;
              padding: 10px;
              height: auto;
            }

            /* Style for the tab-content-holder */

            .tab-content-holder {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              // overflow-wrap: break-word;
              padding: 0;
              margin: auto;
              // border: 1px solid blue;
              width: 100%;
              box-sizing: border-box;
            }

            .tab-content-item {
              display: block;
              // border: 1px solid green;
              width: 50%;
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

            .rec-card-content-con,
            .rec-card-content-pro,
            .rec-card-content-experience {
              font-weight: bold;
              margin-right: 15px;
              text-transform: uppercase;
            }
            .rec-card-content-con {
              color: #fc0d0d;
            }
            .rec-card-content-pro {
              color: rgb(9, 247, 9);
            }
            .rec-card-content-experience {
              color: #1b9ad1;
            }

            /* Style the buttons inside the tab */
            .tab button {
              background-color: inherit;
              float: left;
              border: none;
              outline: none;
              cursor: pointer;
              padding: 14px 16px;
              transition: 0.3s;
              font-size: 0.9em;
              font-family: Cabin;
            }

            /* Change background color of buttons on hover */
            .tab button:hover {
              background-color: #ddd;
            }
            .activeAll {
              font-weight: 600;
              border-bottom: 1px solid #000;
            }
            .activeExperience {
              color: #000;
              font-weight: 600;
            }
            .activePro {
              color: #000;
              font-weight: 600;
            }
            .activeCon {
              color: #000;

              font-weight: 600;
            }

            .active {
              background-color: #ccc !important;
              color: rgb(96, 56, 141);
              font-weight: 600;
            }

            /* Style the tab content */
            .tabcontent {
              display: block;
              padding: 6px 12px;
              // border: 1px dotted #ccc;
              border-top: none;
            }

            .profile-image {
              border-radius: 50px;
              width: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 50px;
            }
            .user-image {
              width: 100%;
              padding: 2px;
            }
            .user-rec-details {
              position: relative;
              left: 15%;
              top: -50px;
              // border: 1px solid yellow;
              width: 85%;
              box-sizing: border-box;
              word-break: normal;
            }

            .caption {
              font-weight: 600;
              color: #0d0d0d;
              line-height: 24px;
              font-size: 1.3em;
            }
            .text {
              font-size: 18px;
              font-weight: 500;
              color: #595959;
              word-break: break-word;
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
            .view-more-item {
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.4px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              position: relative;
              left: 42%;
              cursor: pointer;
              background-color: #1b9ad1;
              border-radius: 9px;
              padding: 3px 12px 3px 18px;
              transition: background-color 0.15s;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
export default CustomTab;
