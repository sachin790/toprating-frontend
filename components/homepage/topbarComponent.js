import React, { Component } from "react";
import { DayIcon, MonthIcon, WeekIcon, AllIcon } from "../Icons";
export default class TopBar extends Component {
  state = {
    day: false,
    week: false,
    month: false,
    all: true
  };

  handleDay = () => {
    this.setState(
      {
        day: true,
        week: false,
        month: false,
        all: false
      },
      () => {
        this.props.sort("day");
      }
    );
  };

  handleMonth = () => {
    this.setState(
      {
        day: false,
        week: false,
        month: true,
        all: false
      },
      () => {
        this.props.sort("month");
      }
    );
  };

  handleWeek = () => {
    this.setState(
      {
        day: false,
        week: true,
        month: false,
        all: false
      },
      () => {
        this.props.sort("week");
      }
    );
  };

  handleAll = () => {
    this.setState(
      {
        day: false,
        week: false,
        month: false,
        all: true
      },
      () => {
        this.props.sort("all");
      }
    );
  };

  render() {
    const { week, day, month, all } = this.state;
    return (
      <div className="homepage-top-bar">
        <div
          onClick={this.handleDay}
          className={day ? "tab-holder active" : "tab-holder"}
        >
          <a className={day ? "a-active" : "a-inactive"}>
            <DayIcon color={day ? "rgb(91, 56, 141) " : "rgb(117,86,113)"} />
            <span className="icon-text">Day</span>
          </a>
        </div>

        <div
          onClick={this.handleWeek}
          className={week ? "tab-holder active" : "tab-holder"}
        >
          <a className={week ? "a-active" : "a-inactive"}>
            <WeekIcon color={week ? "rgb(91, 56, 141) " : "rgb(117,86,113)"} />
            <span className="icon-text">Week</span>
          </a>
        </div>
        <div
          onClick={this.handleMonth}
          className={month ? "tab-holder active" : "tab-holder"}
        >
          <a className={month ? "a-active" : "a-inactive"}>
            <MonthIcon
              color={month ? "rgb(91, 56, 141) " : "rgb(117,86,113)"}
            />
            <span className="icon-text">Month</span>
          </a>
        </div>
        <div
          onClick={this.handleAll}
          className={all ? "tab-holder active" : "tab-holder"}
        >
          <a className={all ? "a-active" : "a-inactive"}>
            <AllIcon color={all ? "rgb(91, 56, 141) " : "rgb(117,86,113)"} />
            <span className="icon-text">All Time</span>
          </a>
        </div>
        <style jsx>
          {`
            .homepage-top-bar {
              display: flex;
              width: 100%;
              background: #e6e8eb;
              justify-content: space-between;
              height: 50px;
              border-radius: 15px;
            }
            .tab-holder {
              display: flex;
              border-top: 1px solid #e6e8eb;
              border-left: 1px solid #e6e8eb;
              border-right: 1px solid #e6e8eb;
              flex-basis: 200px;
              background-color: #f4f6f8;
              justify-content: center;
              align-items: center;

              cursor: pointer;
            }

            .a-inactive {
              font-weight: 400;
              color: rgb(117, 86, 113) !important;
              font-family: "Cabin";
              font-size: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .a-active {
              color: rgb(91, 56, 141) !important;
              font-family: "Cabin";
              font-size: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .active {
              background: #fdfdfd;
            }
            .icon-text {
              position: relative;
              // top: -5px;
            }
          `}
        </style>
      </div>
    );
  }
}
