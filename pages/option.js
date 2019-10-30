import React, { Component, Fragment } from "react";
import Router from "next/router";
import Layout from "../layouts/Layout";
import Axios from "axios";
import Link from "next/link";
import API_URL from "../config/config";
import io from "socket.io-client";
import OptionViewLandingPage from "../components/optionView/optionViewLandingPage";
import RelatedOptions from "../components/optionView/relatedOptionsComponent";
import OptionMainCard from "../components/optionView/OptionMainCard";
import OptionCon from "../components/optionView/optionCardCon";
import OptionPro from "../components/optionView/optionProComponent";
import { Popup } from "semantic-ui-react";
import { Button, Modal } from "react-bootstrap";

import {
  _GET_TOPICS,
  GET_RELATED_TOPICS_URL,
  GET_SPECIFIC_TOPIC_URL,
  GET_OPTION_DETAILS,
  FETCH_OPTION_Con,
  FETCH_OPTION_PRO,
  FETCH_OPTION_REC,
  UpdatePro,
  UpdateCon,
  SaveConHistory,
  SaveProHistory,
  GetOptionSpecs
} from "../apiRequests/apiRequests";

// import UpdateOptionModal from "../components/updateOptionModal";
import Signin from "./signin";
import Signup from "./signup";
import AlternativeOptions from "../components/optionView/alternativeOptions";
import OptionSpecs from "../components/optionView/OptionSpecs";
import { UpdateSpecComponent } from "../components/optionView/UpdateSpec";

export default class extends Component {
  static async getInitialProps({ query: { option } }) {
    const response = await Axios(_GET_TOPICS);
    // const relatedTopicResponse = await Axios(GET_RELATED_TOPICS_URL(option));
    const optionResponse = await GET_OPTION_DETAILS(option);
    const OptionSpecsResponse = await GetOptionSpecs(option);

    return {
      option,
      data: response.data,
      OptionSpecs: OptionSpecsResponse.data,
      // relatedTopic: relatedTopicResponse.data,
      OptionDetails: optionResponse.data
    };
  }

  state = {
    data: this.props.data.data,
    //relatedTopics: this.props.relatedTopic.data,
    user: {},
    UserClickedLogin: false,
    UserClickedSignup: false,
    show: false, //Update pro popup,
    updateCon: false,
    conDescription: "",
    conTitle: "",
    proDescription: "",
    proTitle: "",
    HighlightOverview: true,
    HighlightPro: false,
    HighlightCon: false,
    ShowUpdateModal: false,
    pro: [],
    con: []
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("user_details"))) {
      const user = JSON.parse(localStorage.getItem("user_details"));
      this.setState({
        user
      });
    }

    this.fetchOptionCon(this.props.option);
    this.fetchOptionPro(this.props.option);
    this.fetchOptionRecommendation(this.props.option);
  }

  fetchOptionPro = option => {
    FETCH_OPTION_PRO(option)
      .then(result => {
        this.setState({
          pro: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchOptionCon = option => {
    FETCH_OPTION_Con(option)
      .then(result => {
        this.setState({
          con: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchOptionRecommendation = option => {
    FETCH_OPTION_REC(option)
      .then(result => {
        this.setState({
          recs: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDivCloseSignIn = e => {
    if (e.target === this.div) {
      this.setState(previousState => ({
        UserClickedLogin: !previousState.UserClickedLogin
      }));
    }
  };

  handleDivCloseSignUp = e => {
    if (e.target === this.div) {
      this.setState(previousState => ({
        UserClickedSignup: !previousState.UserClickedSignup
      }));
    }
  };

  openLoginOverlay = () => {
    //alert("click");
    this.setState({
      UserClickedSignup: false,
      UserClickedLogin: !this.state.UserClickedLogin
    });
  };

  openSignupOverlay = () => {
    this.setState({
      UserClickedLogin: false,
      UserClickedSignup: !this.state.UserClickedSignup
    });
  };

  closeSignupOverlay = () => {
    this.setState({
      UserClickedSignup: !this.state.UserClickedSignup
    });
  };

  closeLoginOverlay = () => {
    this.setState({
      UserClickedLogin: !this.state.UserClickedLogin
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (visible, caption, pro, id) => {
    // alert(id);
    this.setState({
      show: visible,
      proTitle: caption,
      proDescription: pro,
      proId: id
    });
  };

  handleUpdateCon = (visible, caption, con, id) => {
    this.setState({
      updateCon: visible,
      conTitle: caption,
      conDescription: con,
      conId: id
    });
  };

  onOptionUpdateChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleUpdatePro = () => {
    const { user, proTitle, proDescription, proId } = this.state;
    const { option, OptionDetails } = this.props;

    if (!user._id) {
      alert("Login to carry out this action");
      return;
    }

    if (proTitle === "" || proDescription === "") {
      alert("It can't be empty");
      return;
    }

    let data = {
      option,
      username: user.username,
      optionId: OptionDetails._id,
      title: proTitle,
      description: proDescription,
      userId: user._id,
      question: OptionDetails.question,
      proId
    };

    UpdatePro(
      proId,
      user._id,
      proTitle.replace("%", " percent"),
      proDescription.replace("%", " percent"),
      option,
      OptionDetails._id,
      OptionDetails.question
    )
      .then(result => {
        alert("updated");
        this.setState({ show: false });
        SaveProHistory(data)
          .then(() => console.log("saved"))
          .catch(err => console.log(err.response));
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleConUpdate = () => {
    const { user, conTitle, conDescription, conId } = this.state;
    const { option, OptionDetails } = this.props;

    if (!user._id) {
      alert("Login to carry out this action");
      return;
    }

    if (conTitle === "" || conDescription === "") {
      alert("It can't be empty");
      return;
    }

    let data = {
      option,
      username: user.username,
      optionId: OptionDetails._id,
      title: conTitle,
      description: conDescription,
      userId: user._id,
      question: OptionDetails.question,
      conId
    };

    UpdateCon(
      conId,
      user._id,
      conTitle.replace("%", " percent"),
      conDescription.replace("%", " percent"),
      option,
      OptionDetails._id,
      OptionDetails.question
    )
      .then(result => {
        alert("updated");
        this.setState({ updateCon: false });
        SaveConHistory(data)
          .then(result => console.log(result))
          .catch(err => console.log(err.response));
      })
      .catch(err => {
        console.log(err);
      });
  };

  HandleHighlight = (first, second, third) => {
    this.setState({
      HighlightOverview: first,
      HighlightPro: second,
      HighlightCon: third
    });
  };

  ShowUpdate = visible => {
    this.setState({
      ShowUpdateModal: visible
    });
  };

  render() {
    const {
      UserClickedLogin,
      UserClickedSignup,
      updateCon,
      pro,
      show,
      con,
      HighlightCon,
      HighlightOverview,
      HighlightPro,
      proDescription,
      proTitle,
      conDescription,
      conTitle,
      ShowUpdateModal,
      recs
    } = this.state;

    return (
      <Fragment>
        <Layout
          {...this.state}
          openSignup={this.openSignupOverlay}
          openLogin={this.openLoginOverlay}
          topicview={true}
          title={this.props.option}
        />
        <OptionViewLandingPage {...this.props} />
        <div className={"view-container"}>
          <div className="option-actions">
            <ul className="actions-ul">
              <li onClick={() => this.HandleHighlight(true, false, false)}>
                <a
                  className={HighlightOverview ? "active-list" : ""}
                  href="#section-1"
                >
                  OVERVIEW
                </a>
              </li>
              <li onClick={() => this.HandleHighlight(false, true, false)}>
                <a
                  className={HighlightPro ? "active-list" : ""}
                  href="#section-2"
                >
                  PROS
                </a>
              </li>
              <li onClick={() => this.HandleHighlight(false, false, true)}>
                <a
                  className={HighlightCon ? "active-list" : ""}
                  href="#section-3"
                >
                  CONS
                </a>
              </li>
            </ul>
          </div>

          <div id="section-1" className="option-container">
            <OptionMainCard {...this.props} />
            <div className="option-rec-section">
              <div style={{ marginBottom: "80px" }}>
                {
                  <OptionSpecs
                    spec={this.props.OptionSpecs}
                    OpenUpdateModal={this.ShowUpdate}
                  />
                }
              </div>
              <div style={{ marginBottom: "60px" }} id="section-2">
                {pro.length > 0 && (
                  <div
                    style={{
                      marginBottom: "20px",
                      fontWeight: 600,
                      letterSpacing: "0.6px",
                      fontSize: "18px"
                    }}
                  >
                    PROS
                  </div>
                )}

                {pro && (
                  <>
                    {pro.map(item => {
                      return (
                        <OptionPro
                          title={item.title}
                          description={item.description}
                          key={item._id}
                          id={item._id}
                          userId={item.userId}
                          handleUpdate={this.handleShow}
                        />
                      );
                    })}
                  </>
                )}
              </div>

              <div
                id="section-3"
                style={{
                  marginTop: "40px"
                }}
              >
                {con.length > 0 && (
                  <div
                    style={{
                      marginBottom: "20px",
                      fontWeight: 600,
                      letterSpacing: "0.6px",
                      fontSize: "18px"
                    }}
                  >
                    CONS
                  </div>
                )}

                {con && (
                  <>
                    {con.map(item => {
                      return (
                        <OptionCon
                          title={item.title}
                          description={item.description}
                          key={item._id}
                          id={item._id}
                          userId={item.userId}
                          handleUpdate={this.handleUpdateCon}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="related-questions">
            {<RelatedOptions {...this.props} />}
          </div>
        </div>

        <AlternativeOptions {...this.props} />
        <div
          className={UserClickedSignup ? "overlayShow" : "overlay"}
          onClick={e => this.handleDivCloseSignUp(e)}
          ref={el => (this.div = el)}
        >
          <span className="close-icon" onClick={this.closeSignupOverlay}>
            &times;
          </span>
          {UserClickedSignup && <Signup openLogin={this.openLoginOverlay} />}
        </div>

        {/** For Signin is here */}
        <div
          className={
            UserClickedLogin ? "overlayShow showSignin-container" : "overlay"
          }
          onClick={e => this.handleDivCloseSignIn(e)}
          ref={el => (this.div = el)}
        >
          <span className="close-icon" onClick={this.closeLoginOverlay}>
            &times;
          </span>

          {UserClickedLogin && <Signin openSignup={this.openSignupOverlay} />}
        </div>
        {/* End of Signin */}

        {/* Update Pro is here*/}

        {/** For Signin is here */}
        <div
          className={ShowUpdateModal ? "overlayShow" : "overlay"}
          // onClick={e => this.handleDivCloseSignIn(e)}
          // ref={el => (this.div = el)}
        >
          <div
            style={{
              marginTop: "15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <div className="Update-spec-container">
              {ShowUpdateModal && (
                <UpdateSpecComponent
                  specs={this.props.OptionSpecs}
                  CloseUpdateModal={this.ShowUpdate}
                  optionId={this.props.OptionDetails._id}
                  option={this.props.OptionDetails.option}
                />
              )}
            </div>
          </div>
        </div>

        <>
          <Modal
            style={{ marginTop: "70px" }}
            show={show}
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Pro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="update-option-form">
                <div>
                  <input
                    type="text"
                    className="update-option"
                    onChange={e => this.onOptionUpdateChange(e)}
                    name="proTitle"
                    value={proTitle}
                    style={{ width: "100px !important" }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="update-option"
                    value={proDescription}
                    name="proDescription"
                    onChange={e => this.onOptionUpdateChange(e)}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleUpdatePro}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        {/* Update Pro is here*/}

        <>
          <Modal
            style={{ marginTop: "70px" }}
            show={updateCon}
            onHide={() => this.handleUpdateCon(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Con</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="update-option-form">
                <div>
                  <input
                    type="text"
                    className="update-option"
                    onChange={e => this.onOptionUpdateChange(e)}
                    name="conTitle"
                    value={conTitle}
                    style={{ width: "100px !important" }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="update-option"
                    value={conDescription}
                    name="conDescription"
                    onChange={e => this.onOptionUpdateChange(e)}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => this.handleUpdateCon(false)}
              >
                Close
              </Button>
              <Button variant="primary" onClick={() => this.handleConUpdate()}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        <style jsx>
          {`
            .view-container {
              display: flex;
              position: relative;
              width: 100%;
              justify-content: space-between;
              // border: 1px solid green;
              padding-right: 60px;
              padding-left: 60px;
              padding-top: 35px;
              padding-bottom: 10px;
              background: #fff;
            }

            .update-option {
              width: 300px;
              border: 1px solid grey;
              border-radius: 3px;
              padding: 10px;
              outline: 0;
              font-family: inherit;
              font-weight: 600;
            }
            .update-option-form {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }

            .update-option-form div {
              padding: 6px;
            }

            .actions-ul li {
              padding: 10px 10px;
              list-style-type: none;
              cursor: pointer;
              font-weight: 400;
            }
            .option-rec-section {
              margin-top: 60px;
              margin-bottom: 50px;
            }
            #pro > div {
              font-weight: 700;
              font-size: 20px;
              margin-bottom: 40px;
            }
            #con > div {
              font-weight: 700;
              font-size: 20px;
              margin-bottom: 40px;
            }

            .active-list {
              color: rgb(91, 56, 141) !important;
              font-weight: 600;
              letter-spacing: 0.6px;
            }
            .actions-ul li a:hover {
              color: rgb(91, 56, 141);
            }
            .actions-ul li:hover {
              color: rgb(91, 56, 141);
            }
            .related-questions {
              // border: 1px solid red;
              width: 20%;
            }
            .option-actions {
              // border: 1px solid orange;
              width: 20%;
            }
            li a {
              color: #58647b;
              letter-spacing: 0.4px;
              text-transform: uppercase;
            }

            .option-container {
              border-right: 1px dashed #e6e8eb;
              margin-bottom: 10px;
              width: 50%;
              padding-right: 20px;
            }

            .close-icon {
              position: absolute;
              top: 25px;
              left: 90%;
              font-size: 80px !important;
              color: rgb(91, 56, 141);
              background: #e6ecf0;
              cursor: pointer;
              z-index: 2000;
            }

            .overlay {
              height: 100%;
              width: 0;
              position: fixed;
              z-index: 6000;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.05);
              overflow-x: hidden;
              // transition: 0.5s;
            }
            .overlayShow {
              height: 100%;
              width: 100%;
              position: fixed;
              z-index: 5000;
              top: 0;
              left: 0;
              background-color: #fdfdfd;
              overflow-x: hidden;
              overflow-y: visible;
              // transition: 0.5s;
            }

            .overlayShowie {
              height: 100%;
              width: 100%;
              position: fixed;
              z-index: 5000;
              top: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.07);
              overflow-x: hidden;

              // transition: 0.5s;
            }

            .related-items-card {
              position: absolute;
              left: 920px;
              top: 580px;
            }
            @media screen and (max-width: 768px) {
              .considered-option-card {
                display: none;
              }
              .related-questions {
                display: none;
              }

              .view-container {
                width: 100%;
                margin-top: 1px;
              }
              .option-actions {
                // border: 1px solid orange;
                width: 20%;
                display: none;
              }
              .option-container {
                border-right: none;
                margin-bottom: 10px;
                width: 100%;
                padding-right: 0;
              }
            }
            @media screen and (min-width: 768px) {
              .Update-spec-container {
                min-width: 600px;
                max-width: 100%;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}
