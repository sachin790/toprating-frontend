import React, { Component, Fragment } from "react";
import { CardUpArrow, CardDownArrow } from "../Icons";
const dummy = [
  {
    spec: "Default Desktop Environment",
    detail: "Any"
  },
  {
    spec: "Package Manager",
    detail: "Yarn/Npm"
  },
  {
    spec: "Main Usage",
    detail: "Desktop"
  },
  {
    spec: "Last Official Release",
    detail: "10-06-2019"
  }
];
export default class OptionSpecs extends Component {
  state = {
    showUpIcon: false,
    maxItem: 2
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

  render() {
    const { maxItem, showUpIcon } = this.state;
    const { spec } = this.props;
    return (
      <Fragment>
        <div className="option-spec-container">
          <div className="option-spec-header">
            <span
              style={{
                // marginBottom: "20px",
                fontWeight: 600,
                letterSpacing: "0.6px",
                fontSize: "18px",
                display: "inline-block",
                textTransform: "uppercase"
              }}
            >
              Specs
            </span>
            <span
              className="update"
              onClick={() => this.props.OpenUpdateModal(true)}
            >
              {spec.length === 0 && "Add Spec"}
              {spec.length > 0 && "Update"}
            </span>
          </div>

          <div
            className={
              showUpIcon
                ? "option-spec-content showOverflow"
                : "option-spec-content"
            }
          >
            {spec.slice(0, maxItem).map(item => {
              return (
                <div style={{ marginBottom: "20px" }}>
                  <span className="spec-title">{item.spec}</span>
                  <span className="spec-description">{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>

        {!showUpIcon && spec.length >= 5 && (
          <span className="view-more-item" onClick={this.handleShowMore}>
            See All Specs
            <CardDownArrow width={24} height={24} color={"#fff"} />
          </span>
        )}
        {showUpIcon && (
          <span className="view-more-item" onClick={this.handleShowLess}>
            Hide Specs
            <CardUpArrow width={24} height={24} color={"#fff"} />
          </span>
        )}

        <div className={"fix"} />

        <style jsx>
          {`
            option-spec-container {
              display: flex;
              box-sizing: border-box;
              width: 100%;
            }

            .fix {
              margin-bottom: 30px;
            }

            .option-spec-header {
              width: 100%;
              margin-bottom: 35px;
            }

            .update {
              float: right;
              display: inline-block;
              font-size: 15px;
              color: rgb(91, 56, 141);
              font-weight: 600;
              letter-spacing: 0.7px;
              cursor: pointer;
            }

            .option-spec-content {
              // border: 1px solid blue;
              width: 100%;
              font-size: 16px;
              letter-spacing: 0.6px;
              font-weight: 500;
              word-break: normal;
              min-height: 100px;
              max-height: 150px;
              overflow: hidden;
            }

            .showOverflow {
              overflow: visible;
              max-height: 400px;
            }

            .spec-title {
              font-size: 16px;
              letter-spacing: 0.6px;
              font-weight: 600;
              color: #595959;
              text-transform: captitalize;
            }

            .spec-description {
              float: right;
              font-size: 16px;
              font-weight: 400;
              color: #595959;
              letter-spacing: 0.6px;
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
              background-color: rgb(91, 56, 141);
              border-radius: 8px;
              padding: 3px 12px 3px 18px;
              transition: background-color 0.15s;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
