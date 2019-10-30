import React, { Component } from "react";

class IRecommend2 extends Component {
  state = {
    irecommendCard: false
  };

  handleShowIrecommend = () => {
    this.setState(previousState => ({
      irecommendCard: !previousState.irecommendCard
    }));
  };

  render() {
    const { showIrecommendCard } = this.props;

    return (
      <>
        <div className="i-rec-container" onClick={showIrecommendCard}>
          <span className="i-rec-content">I RECOMMEND...</span>
          <span className={"i-rec-icon-container"}>
            <svg style={{ width: "33px", height: "33px" }} viewBox="0 0 24 24">
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
              margin-left: 9px;
              font-size: 0.6em;
              font-weight: 600;
            }

            .i-rec-icon-container {
              position: relative;
              top: 3px;
              padding-left: 3px;
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
                padding-left: 10px;
                padding-right: 4px;
                font-size: 12px;
                font-weight: 600;
              }

              .i-rec-icon-container {
                position: relative;
                top: 3px;
                // padding-left: 10px;
              }
            }

            // @media (max-width: 480px) {
            //   .i-rec-container {
            //     cursor: pointer;
            //     background: rgb(91, 56, 141);
            //     width: 70px;
            //     box-sizing: border-box;
            //     display: flex;
            //     align-items: center;
            //     justify-content: center;
            //   }

            //   .i-rec-content {
            //     font-size: 0.5em;
            //   }
            // }
          `}
        </style>
      </>
    );
  }
}

export default IRecommend2;
