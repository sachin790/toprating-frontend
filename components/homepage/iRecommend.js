import React, { Component } from "react";
import IrecommendCard from "./IrecommendCard";
class IRecommend extends Component {
  state = {
    irecommendCard: false
  };

  handleShowIrecommend = () => {
    this.setState(previousState => ({
      irecommendCard: !previousState.irecommendCard
    }));
  };

  render() {
    const { irecommendCard } = this.state;
    const { showIrecommendCard } = this.props;

    return (
      <>
        <div className="i-rec-container" onClick={showIrecommendCard}>
          <span className="i-rec-content">I REC...</span>
          <span className={"i-rec-icon-container"}>
            <svg style={{ width: "23px", height: "23px" }} viewBox="0 0 24 24">
              <path
                fill="#fdfdfd"
                d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M7,10L12,15L17,10H7Z"
              />
            </svg>
            {/* <FontAwesomeIcon icon={faCaretDown} className="icon " /> */}
          </span>
        </div>

        <style jsx>
          {`
            .i-rec-container {
              cursor: pointer;
              background: rgb(91, 56, 141);
              border-radius: 22px;
              box-sizing: border-box;
              display: flex;

              align-items: center;
              justify-content: center;
            }

            .i-rec-content {
              padding-left: 10px;
              font-size: 0.5em;
              font-weight: 600;
              text-align: center;
              color: #fff;
            }

            .i-rec-icon-container {
              position: relative;
              top: 3px;
              padding-left: 0px;
            }
            @media (min-width: 768px) {
              .i-rec-container {
                cursor: pointer;
                background: rgb(91, 56, 141);
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .i-rec-content {
                padding-left: 15px;
                padding-right: 0px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: 0.5px;
                font-family: "Cabin";
              }

              .i-rec-icon-container {
                position: relative;
                top: 3px;
                padding-left: 12px;
              }
            }

            @media (max-width: 480px) {
              .i-rec-container {
                cursor: pointer;
                background: rgb(91, 56, 141);
                width: 70px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .i-rec-content {
                font-size: 0.5em;
              }
            }
          `}
        </style>
      </>
    );
  }
}

export default IRecommend;
