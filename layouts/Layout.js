import React, { Fragment, Component } from "react";
import Header from "../components/Header";
import TopRating from "../utils/toprating";
//import Recommendation from "../components/Recommendation";
import HeaderButton from "../utils/headerButton";
import Link from "next/link";

export default class extends Component {
  state = {
    checkuser: null
  };
  componentDidMount() {
    this.setState({
      checkuser: JSON.parse(localStorage.getItem("user_details"))
    });
  }

  render() {
    const { indexPage } = this.props;

    const user = false;

    return (
      <Fragment>
        {<Header {...this.props} />}

        <div className="sidebar2">{/*<Recommendation />*/}</div>
        <br />
        <br />
        <br />

        {this.props.askie && (
          <div className="callToAction">
            <HeaderButton />
          </div>
        )}
        <MainBody>{this.props.children}</MainBody>

        {user && (
          <div className="sidebar">
            <TopRating />
          </div>
        )}

        <style jsx>
          {`
            .sidebar {
              left: 71.5%;
              position: relative;
              top: 85%;
            }
            .sidebar2 {
              display: inline-block;
              left: 02%;
              position: fixed;
            }
            .myClass {
              cursor: pointer;
            }

            .callToAction {
              position: fixed;
              top: 90%;
              left: 82%;
              z-index: 1000;
              display: none;
            }

            @media screen and (max-width: 600px) {
              .sidebar {
                display: none;
              }

              .callToAction {
                position: fixed;
                top: 90%;
                left: 78%;
                z-index: 1000;
                display: flex;
              }
            }
            @media screen and (width: 768px) {
              .callToAction {
                position: fixed;
                top: 43%;
                left: 60%;
                z-index: 1000;
                display: flex;
              }
            }

            @media screen and (width: 320px) {
              .callToAction {
                position: fixed;
                top: 90%;
                left: 75%;
                z-index: 1000;
                display: flex;
              }
            }

            @media screen and (width: 375px) {
              .callToAction {
                position: fixed;
                top: 76%;
                left: 75%;
                z-index: 1000;
                display: flex;
              }
            }

            @media screen and (width: 414px) {
              .callToAction {
                position: fixed;
                top: 70%;
                left: 75%;
                z-index: 1000;
                display: flex;
              }
            }

            @media screen and (width: 1024px) {
              .callToAction {
                position: fixed;
                top: 34%;
                left: 58%;
                z-index: 1000;
                display: flex;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export class MainBody extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
