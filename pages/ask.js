import React, { Fragment } from "react";
import Axios from "axios";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import {
  Add,
  NewAddTopic,
  checkIfTagExist,
  _GET_TOPICS
} from "../apiRequests/apiRequests";
import Layout from "../layouts/Layout";
import { withRouter } from "next/router";
import API_URL from "../config/config";
import io from "socket.io-client";
import Signin from "./signin";
import Signup from "./signup";
import SuccessSnackbar from "../components/snackbar/SuccessSnackbar";
import ErrorSnackbar from "../components/snackbar/ErrorSnackbar";
const socket = io(API_URL);
var cyrillicToTranslitJs = require("cyrillic-to-translit-js");

class Ask extends React.Component {
  static async getInitialProps() {
    const res = await Axios(_GET_TOPICS);
    return {
      data: res.data
    };
  }

  state = {
    chipData: [],
    tag: [],
    tagie: "",
    question: "What are the ",
    ask: false,
    data: this.props.data.data,
    checkTagArray: [],
    UserClickedLogin: false,
    UserClickedSignup: false
  };

  handleDivClose = e => {
    if (e.target === this.div) {
      this.setState(previousState => ({ showClass: !previousState }));
    }
  };

  openLoginOverlay = () => {
    //alert("click");
    this.setState({
      UserClickedLogin: !this.state.UserClickedLogin,
      UserClickedSignup: false
    });
  };

  openSignupOverlay = () => {
    this.setState({
      UserClickedSignup: !this.state.UserClickedSignup,
      UserClickedLogin: false
    });
  };

  closeLoginOverlay = () => {
    this.setState({
      UserClickedLogin: !this.state.UserClickedLogin
    });
  };

  closeSignupOverlay = () => {
    this.setState({
      UserClickedSignup: !this.state.UserClickedSignup
    });
  };

  handleDelete = data => () => {
    this.setState(state => {
      const tag = [...state.tag];
      const chipToDelete = tag.indexOf(data);
      tag.splice(chipToDelete, 1);
      return { tag };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("user_token");
    const user_data = JSON.parse(localStorage.getItem("user_details"));

    if (!token) {
      alert("Kindly Sign up to add a question");
      return;
    }

    let { tag, question } = this.state;

    NewAddTopic(cyrillicToTranslitJs().transform(question), tag, user_data._id, socket.id)
      .then(result => {
        this.setState({
          tag: [],
          question: "What are the ",
          showSnackbar: true,
          message: "Question Added"
        });

        //Synchronous
        setTimeout(() => {
          this.setState({
            showSnackbar: false
          });
        }, 4000);
      window.location = "/";
       
      })
      .catch(error => {
        this.setState({
          showErrorSnackbar: true,
          message: error.response.data || "Operation Unsuccessful "
        });

        //Synchronous
        setTimeout(() => {
          this.setState({
            showErrorSnackbar: false
          });
        }, 4000);
        // console.log(error.response);
      });
  };

  addNewTag = e => {
    //if user is unable to find tag in list
    this.setState(previousState => ({
      tag: [...previousState.tag, this.state.tagie],
      tagie: "",
      ask: false
    }));
  };

  add = value => {
    this.setState(previousState => ({
      tag: [...previousState.tag, value],
      tagie: "",
      ask: false
    }));
    //console.log(this.state.tag)
  };

  showButton = ({ target: { name, value } }) => {
    let hold = this.state.data.map(item => {
      return item.tag;
    });
    //This funtion flattens the array
    const flattenArray = arr => {
      return [].concat(...arr);
    };

    let flattenedArray = flattenArray(hold);
    const checkTagArray = flattenedArray.filter(item => {
      return item.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    // console.log(checkTagArray)
    if (value === "") {
      this.setState({
        ask: false,
        [name]: ""
      });
    } else {
      this.setState({
        checkTagArray,
        ask: true,
        [name]: value
      });
    }
  };

  handleQuestionInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      tagie,
      ask,
      question,
      checkTagArray,
      UserClickedLogin,
      UserClickedSignup,
      showSnackbar,
      showErrorSnackbar,
      message
    } = this.state;

    const CustomStrongElement = (value, i) => {
      return (
        <strong
          style={{ display: "block" }}
          key={i}
          value={value}
          onClick={() => {
            this.add(value);
          }}
        >
          {value}
        </strong>
      );
    };

    return (
      <Layout
        openSignup={this.openSignupOverlay}
        openLogin={this.openLoginOverlay}
        {...this.state}
      >
        <div className="cont">
          <h1>Ask your question, get the best recommendation</h1>
          <form>
            <div>
              <textarea
                name="question"
                placeholder="Ask your question here"
                value={question}
                onChange={e => this.handleQuestionInput(e)}
                autoFocus
              />
            </div>
            <div>
              <input
                type="text"
                name="tagie"
                value={tagie}
                onChange={e => this.showButton(e)}
                placeholder="Add Tags"
              />
            </div>
            <div className="add-button-class">
              <button
                className={"add-question-btn"}
                onClick={this.handleSubmit}
                disabled={!question}
              >
                Add Question
              </button>
            </div>
          </form>
          {ask ? (
            <div className="show-tag">
              {checkTagArray.map((item, i) => {
                return (
                  <Fragment key={i}>{CustomStrongElement(item, i)}</Fragment>
                );
              })}
              <em>
                Tag not found?
                <a className={"but"} onClick={this.addNewTag}>
                  Add Tag
                </a>
              </em>
            </div>
          ) : (
            ""
          )}

          <Paper
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              padding: "2px",
              borderRadius: "3px",
              marginTop: "10px"
            }}
          >
            {this.state.tag.map((data, index) => {
              let icon = null;
              return (
                <Chip
                  key={index}
                  icon={icon}
                  label={data}
                  onDelete={this.handleDelete(data)}
                />
              );
            })}
          </Paper>

          <div
            className={UserClickedSignup ? "overlayShowie" : "overlay"}
            onClick={e => this.handleDivClose(e)}
            ref={el => (this.div = el)}
          >
            <span className="close-icon" onClick={this.closeSignupOverlay}>
              <span>&times;</span>
            </span>
            {UserClickedSignup && <Signup openLogin={this.openLoginOverlay} />}
          </div>
          {/** For Signin is here */}
          <div
            className={UserClickedLogin ? "overlayShowie" : "overlay"}
            onClick={e => this.handleDivClose(e)}
            ref={el => (this.div = el)}
          >
            <span className={"close-icon"} onClick={this.closeLoginOverlay}>
              <span>&times;</span>
            </span>

            {UserClickedLogin && <Signin openSignup={this.openSignupOverlay} />}
          </div>
          {/* End of Signin */}

          {showSnackbar && <SuccessSnackbar message={message} />}
          {showErrorSnackbar && <ErrorSnackbar message={message} />}

          <style jsx>
            {`
              .add-button-class {
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .show-tag {
                text-align: center;
                box-sizing: border-box;
                padding: 5px;
                margin-top: 10px;
              }
              em {
                font-weight: 100;
                font-family: inherit;
                display: block;
              }
              .but {
                outline: none;
                cursor: pointer;
                font-weight: 600;
                font-family: inherit;
                color: rgb(96, 51, 141) !important;
                margin-left: 3px;
                padding: 0.1em;
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
                transition: 0.5s;
              }

              .overlayShowie {
                height: 100%;
                width: 100%;
                position: fixed;
                z-index: 5000;
                top: 0;
                left: 0;
                background-color: #fff;
                overflow-x: hidden;
                transition: 0.5s;
              }
              .close-icon {
                position: absolute;
                top: 20px;
                left: 90%;
                min-height: 20px;
                max-height: 100px;
                padding: 9px;
                background: #e6ecf0;
                font-size: 55px !important;
                color: rgb(91, 56, 141);
                cursor: pointer;
                z-index: 2000;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .close-icon > span {
                position: relative;
                top: -2px;
              }

              .cont {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                box-sizing: border-box;
                position: relative;
                top: 70px;
                box-sizing: border-box;
              }

              input[type="text"] {
                width: 30vw;
                height: 40px;
                border: 2px solid rgb(96, 51, 141);
                border-radius: 5px;
                outline: 0;
                padding: 10px;
                margin: 10px 0;
                font-size: Cabin;
                font-weight: 600;
              }

              textarea {
                width: 30vw;
                min-height: 18px;
                height: 40px;
                border: 2px solid rgb(96, 51, 141);
                border-radius: 5px;
                outline: 0;
                padding: 10px;
                resize: none;
                font-family: Cabin;
                font-weight: 600;
              }

              .add-question-btn {
                position: relative;
                width: 120px;
                padding: 10px;
                border: 1px solid rgb(96, 51, 141);
                outline: none;
                cursor: pointer;
                border-radius: 4px;
                background: rgb(96, 51, 141);
                font-weight: 100;
                font-family: inherit;
                color: #fff;
              }

              .add-question-btn:hover {
                background-color: #e6ecf0;
                color: rgb(96, 51, 141);
                border: 1px solid rgb(96, 51, 141);
                transition: 1s;
              }

              .add-question-btn:disabled {
                cursor: not-allowed;
                background: #e6e8eb;
                color: #8d959c;
              }

              ::placeholder {
                font-weight: bold;
                font-size: 1em;
                font-family: inherit;
              }

              h1 {
                font-size: 1.3em;
                text-align: center;
                word-spacing: 0.3px;
                font-family: inherit;
              }

              @media screen and (max-width: 600px) {
                input[type="text"] {
                  width: 250px;
                }

                textarea {
                  width: 250px;
                }
                .add-question-btn {
                  margin-top: 5px;
                }
              }
            `}
          </style>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Ask);
