import React, { Component } from "react";
export default class Feed extends Component {
  state = {
    question: false,
    recommendations: true
  };

  render() {
    return (
      <React.Fragment>
        <div className="feed">
          <ul className="feed-card">
            <li>
              <Link href="#">
                <a>
                  <i className="fas fa-rss-square" />Feed
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a onClick={this.props.showQuesCard}>
                  <i className="fas fa-poll-h" />Recommendation
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="fas fa-question" />Question
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <style jsx>
          {`
            .feed {
              display: flex;
              flex-direction: column;
              justify-content: center;
              box-sizing: border-box;
              position: relative;
              left: 80px;
              top: -590px;
            }
            i {
              position: relative;
              padding-right: 5px;
              top: 1px;
            }
            li {
              list-style-type: none;
              margin-bottom: 10px;
              padding-right: 20px;
              cursor: pointer;
              overflow: hidden;
              box-sizing: border-box;
            }

            li a {
              font-size: 1.2em;
              font-family: inherit;
              font-weight: 600;
              text-spacing: 0.9px;
              color: #253858 !important;
              padding: 0px;
            }
            .active {
              background: #e9ebee;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
