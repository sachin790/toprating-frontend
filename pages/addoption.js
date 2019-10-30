import Header from "../components/Header";
import React, { Fragment } from "react";
import {
  AddOption,
  AddNewOption,
  GET_SPECIFIC_QUESTION,
  _GET_TOPICS
} from "../apiRequests/apiRequests";
import Axios from "axios";
import Signin from "./signin";
import Signup from "./signup";
import { Placeholder, Card, Image } from "semantic-ui-react";
import SuccessSnackbar from "../components/snackbar/SuccessSnackbar";
import ErrorSnackbar from "../components/snackbar/ErrorSnackbar";

class Option extends React.Component {
  static async getInitialProps({ query: { id } }) {
    const response = await Axios(_GET_TOPICS);
    return {
      id,
      topics: response.data
    };
  }

  state = {
    question: "",
    link: "",
    added: false,
    price: "",
    description: "",
    data: this.props.topics.data,
    UserClickedLogin: false,
    UserClickedSignup: false,
    addMoreItems: false,
    addMediaLink: false,
    mediaLink: "",
    mediaUrl: [],
    imgLink: false,
    placeholder: true
  };

  componentDidMount() {
    this.getSpecificQuestion(this.props.id);
  }

  getSpecificQuestion = id => {
    GET_SPECIFIC_QUESTION(id)
      .then(result => {
        this.setState({
          question: result.data.question
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      option,
      link,
      mediaLink,
      mediaUrl,
      price,
      description
    } = this.state;

    const id = this.props.id;
    const OptionImageArray = [...mediaUrl, mediaLink];

    let _price = price.replace("$", "");

    AddNewOption(id, option, link, OptionImageArray, _price, description)
      .then(result => {
        this.setState({
          added: true,
          showSnackbar: true,
          message: "Question Added"
        });
        //Synchronous
        setTimeout(() => {
          this.setState({
            showSnackbar: false
          });
        }, 4000);
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

  showButton = e => {
    this.setState({
      [e.target.name]: e.target.value,
      added: false
    });
  };

  addMediaUrl = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
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

  addMoreItems = () => {
    this.setState({
      addMoreItems: true
    });
  };

  addMediaLink = () => {
    this.setState({
      addMediaLink: true
    });
  };

  closeMediaLink = () => {
    this.setState(previousState => ({
      addMediaLink: !previousState.addMediaLink
      // imgLink: false
    }));
  };

  closeAddMoreItems = () => {
    this.setState({
      addMoreItems: false,
      description: ""
    });
  };

  saveDescription = () => {
    this.setState({
      addMoreItems: false
    });
  };

  saveMediaLink = () => {
    this.setState({
      addMediaLink: false
      // imgLink: false
      // placeholder : false
    });
  };

  onBlurMediaLink = () => {
    this.setState({
      imgLink: true
    });
  };

  render() {
    const {
      link,
      option,
      added,
      price,
      question,
      UserClickedLogin,
      UserClickedSignup,
      addMoreItems,
      description,
      addMediaLink,
      mediaLink,
      imgLink,
      showSnackbar,
      showErrorSnackbar,
      message
    } = this.state;
    return (
      <Fragment>
        {
          <Header
            openSignup={this.openSignupOverlay}
            openLogin={this.openLoginOverlay}
            {...this.state}
          />
        }
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          {question ? (
            <h2>{`Add Option to "${question}?"`}</h2>
          ) : (
            <h2>loading...</h2>
          )}

          <form>
            <div>
              <textarea
                id="textarea"
                name="option"
                placeholder="Option title"
                value={option}
                onChange={this.showButton}
                autoFocus
              />
              <div className="add-items" onClick={this.addMoreItems}>
                Add Description
              </div>
            </div>
            <div>
              <input
                type="text"
                name="link"
                onChange={this.showButton}
                value={link}
                placeholder="Get it here url "
              />
              <div className="add-items" onClick={this.addMediaLink}>
                Add Media
              </div>
            </div>
            <div>
              <input
                type="text"
                name="price"
                onChange={this.showButton}
                value={price}
                placeholder="Option price e.g $1.20"
              />
            </div>
            <button
              onClick={this.handleSubmit}
              disabled={(!option && "disabled ") || added}
            >
              {added ? "Option Added" : "Add Option"}
            </button>
          </form>

          {/** For Signup here */}
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

          {addMoreItems && (
            <div className={"add-items-container"}>
              <textarea
                id="add-description"
                name="description"
                placeholder="Add Description"
                value={description}
                onChange={this.showButton}
                autoFocus
              />
              <div id="add-description-actions">
                <span onClick={this.closeAddMoreItems} id={"add-actions"}>
                  Cancel
                </span>
                <span onClick={this.saveDescription} id={"add-actions-2"}>
                  Save
                </span>
              </div>
            </div>
          )}

          {addMediaLink && (
            <div className={"add-items-container"}>
              <input
                id="add-media-link"
                name="mediaLink"
                placeholder="Add Image link and click save"
                value={mediaLink}
                onChange={this.addMediaUrl}
                onBlur={this.onBlurMediaLink}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "4px"
                }}
              >
                {imgLink && (
                  <Card>
                    <Card.Content>
                      <Image src={mediaLink} alt="image" />
                    </Card.Content>
                  </Card>
                )}

                {!imgLink && (
                  <Card>
                    <Card.Content>
                      <Placeholder style={{ height: "150px" }}>
                        <Placeholder.Image square />
                      </Placeholder>
                    </Card.Content>
                  </Card>
                )}
              </div>

              <div id="add-description-actions">
                <span onClick={this.closeMediaLink} id={"add-actions"}>
                  Cancel
                </span>
                <span onClick={this.saveMediaLink} id={"add-actions"}>
                  Save
                </span>
              </div>
            </div>
          )}
          {showSnackbar && <SuccessSnackbar message={message} />}
          {showErrorSnackbar && <ErrorSnackbar message={message} />}
          <style jsx>
            {`
              .container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                box-sizing: border-box;
              }

              input[type="text"] {
                width: 450px;
                height: 40px;
                border: 2px solid rgb(96, 51, 141);
                border-radius: 5px;
                margin: 14px;
                outline: 0;
                padding: 10px;
                font-weight: 600;
                font-family: inherit;
              }

              #textarea {
                width: 450px;
                height: 40px;
                border: 2px solid rgb(96, 51, 141);
                border-radius: 5px;
                margin: 14px;
                outline: 0;
                padding: 10px;
                resize: none;
                font-weight: 600;
                font-family: inherit;
              }

              #add-description {
                width: 450px;
                height: 90px;
                border-radius: 5px;
                margin: 14px;
                outline: 0;
                padding: 10px;
                resize: none;
                font-weight: 600;
                font-family: inherit;
              }

              #add-description-actions {
                display: flex;
                justify-content: space-evenly;
              }

              #add-actions {
                cursor: pointer;
                font-weight: 600;
                text-transform: uppercase;
              }
              #add-actions:hover {
                color: rgb(91, 56, 141);
              }
              #add-actions-2 {
                cursor: pointer;
                font-weight: 600;
                text-transform: uppercase;
              }
              #add-actions-2:hover {
                color: rgb(91, 56, 141);
              }

              #add-media-link {
                width: 450px;
                height: 40px;
                border: 0;
                border-radius: 5px;
                margin: 14px;
                outline: 0;
                padding: 10px;
                font-weight: 600;
                font-family: inherit;
              }

              h2 {
                font-size: 1.2em;
                font-weight: 600;
                font-family: inherit;
              }

              .add-items-container {
                padding: 20px;
                border-radius: 2px;
                min-width: 200px;
                position: relative;
                top: -250px;
                background: #fafafa;
                z-index: 2000;
              }

              div .add-items {
                display: flex;
                justify-content: flex-end;
                margin-right: 16px;
                font-weight: 600;
                cursor: pointer;
                font-size: 0.85em;
                text-transform: uppercase;
              }
              div .add-items:hover {
                color: rgb(91, 56, 141);
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
              button {
                display: relative;
                margin-left: 190px;
                width: 120px;
                padding: 10px;
                border: 1px solid rgb(96, 51, 141);
                outline: none;
                cursor: pointer;
                border-radius: 4px;
                background: rgb(96, 51, 141);
                font-weight: 100;
                font-family: verdana;
                color: #fff;
              }

              button:hover {
                background-color: #e6ecf0;
                color: rgb(96, 51, 141);
                border: 2px solid rgb(96, 51, 141);
              }

              button:disabled {
                cursor: not-allowed;
                background: #e6e8eb;
                color: #8d959c;
              }

              @media screen and (max-width: 600px) {
                input[type="text"] {
                  width: 350px;
                  height: 40px;
                  border: 2px solid rgb(96, 51, 141);
                  border-radius: 5px;
                  margin: 14px;
                  outline: 0;
                  padding: 10px;
                }

                h2 {
                  font-size: 2.5vw;
                }

                #textarea {
                  width: 350px;
                  height: 40px;
                  border: 2px solid rgb(96, 51, 141);
                  border-radius: 5px;
                  margin: 14px;
                  outline: 0;
                  padding: 10px;
                  resize: none;
                  font-weight: 600;
                  font-family: inherit;
                }

                textarea {
                  width: 350px;
                  height: 40px;
                  border: 2px solid rgb(96, 51, 141);
                  border-radius: 5px;
                  margin: 14px;
                  outline: 0;
                  padding: 10px;
                  resize: none;
                }

                button {
                  margin-left: 130px;
                }
              }

              @media screen and (max-width: 360px) {
                input[type="text"] {
                  width: 300px;
                  margin-left: 24px;
                }

                #textarea {
                  width: 300px;
                  height: 40px;
                  border: 2px solid rgb(96, 51, 141);
                  border-radius: 5px;
                  margin: 14px;
                  outline: 0;
                  padding: 10px;
                  resize: none;
                  font-weight: 600;
                  font-family: inherit;
                }

                textarea {
                  width: 300px;
                  margin-left: 24px;
                }

                h2 {
                  font-size: 4vw;
                }

                button {
                  margin-left: 115px;
                }
              }
            `}
          </style>
        </div>
      </Fragment>
    );
  }
}

export default Option;
