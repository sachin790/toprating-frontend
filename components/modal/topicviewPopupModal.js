import React, { Component } from "react";
import {
  user_recommendation,
  AddUserReactionToOption,
  ADD_OPTION_CON,
  ADD_OPTION_PRO
} from "../../apiRequests/apiRequests";

class TopicViewPopupModal extends Component {
  state = {
    pro: [],
    con: [],
    addPro: "",
    addCon: "",
    experience: "",
    addMoreDetails: [],
    _addMoreDetails2: [],
    proDetails: "",
    conDetails: ""
  };

  componentDidMount() {
    //Get user Details
    const user = JSON.parse(localStorage.getItem("user_details"));

    if (user) {
      this.setState({
        user
      });
    } else {
      this.setState({
        user: {}
      });
    }
  }

  handleSubmit = () => {
    const _user = JSON.parse(localStorage.getItem("user_details"));
    const {
      pro,
      con,
      experience,
      addMoreDetails,
      _addMoreDetails2
    } = this.state;
    const { question, type, option, optionImage, socketId } = this.props;
    const _data = {
      pro,
      con,
      experience,
      addMoreDetails,
      _addMoreDetails2,
      username: _user.username, //displayname maybe used instead
      userId: _user._id,
      userImage: _user.image,
      option: option,
      optionImage,
      question,
      type,
      socketId
    };

    const _type = type === "like" ? true : false;
    const rxn = {
      userId: _user._id,
      option,
      type: _type
    };

    user_recommendation(_data)
      .then(result => console.log(result))
      .catch(error => console.log(error));

    AddUserReactionToOption(rxn)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  closeBtn = () => {
    this.setState({
      showClass: false
    });
  };

  handleAddCon = e => {
    e.preventDefault();
    const { user, addCon, conDetails } = this.state;
    const { option, optionId, question } = this.props;

    const con_data = {
      option,
      option_id: optionId,
      user_id: user._id,
      title: addCon,
      description: conDetails,
      question,
      userImage: user.image
      //UserImage may be added
    };

    ADD_OPTION_CON(con_data)
      .then(axiosResponse => {
        // console.log(axiosResponse);

        this.setState(previousState => ({
          con: [...previousState.con, addCon],
          _addMoreDetails2: [...previousState._addMoreDetails2, conDetails],
          addCon: "",
          conDetails: ""
        }));

        //remove in production

        alert("con added");
      })
      .catch(axiosResponseError => {
        console.log(axiosResponseError);
      });

    //this.setState(previousState => ({ inc: previousState.inc + 1 }));
  };

  _handleAddPro = e => {
    e.preventDefault();
    const { user, addPro, proDetails } = this.state;
    const { option, optionId, question } = this.props;

    const pro_data = {
      option,
      option_id: optionId,
      user_id: user._id,
      title: addPro,
      description: proDetails,
      question,
      userImage: user.image
    };

    ADD_OPTION_PRO(pro_data)
      .then(axiosResponse => {
        // console.log(axiosResponse);
        this.setState(previousState => ({
          pro: [...previousState.pro, addPro],
          addMoreDetails: [...previousState.addMoreDetails, proDetails],
          addPro: "",
          proDetails: ""
        }));

        //remove in production
        alert("pro added");
      })
      .catch(axiosResponseError => {
        console.log(axiosResponseError);
      });
  };

  render() {
    const { addCon, addPro, experience, conDetails, proDetails } = this.state;
    const { option, optionImage } = this.props;
    const profileImage = "/static/gravatar.png";
    return (
      <>
        <div className="user-rec-card" ref={el => (this.recCardie = el)}>
          <div>
            <div className="bg-image-theme">
              <img
                src={optionImage ? optionImage : "/static/wor.jpg"}
                alt="text"
                className="user-rec-img"
              />
            </div>
            <div className="user-chip" />
            <div className="option-theme">
              <span className={"rec-recommendation"}>My Recommendation</span>
              <span className="rec-option">{option ? option : ""}</span>
            </div>
          </div>
          <React.Fragment>
            <div className="form-holder">
              <div>
                <h2 className="my-experience">My Experience</h2>
                <textarea
                  value={experience}
                  onChange={e => this.handleInputChange(e)}
                  name="experience"
                  className="textarea-1"
                  placeholder="Kindly share your experience using this product. What are the options you considered, if any"
                />
              </div>
              <form className="form-rec-holder">
                <h2 className="my-experience">Reasons I recommend this</h2>
                <div>
                  <input
                    type="text"
                    className="pro-input-text"
                    placeholder={"Add pro caption here"}
                    name="addPro"
                    value={addPro}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <textarea
                    className="textarea-2"
                    placeholder="Add additional details"
                    value={proDetails}
                    name="proDetails"
                    onChange={e => this.handleInputChange(e)}
                  />

                  <span
                    className={addPro ? "add" : "add none"}
                    onClick={this._handleAddPro}
                  >
                    <a className="add-rec-text"> Add pro</a>
                  </span>
                </div>
              </form>

              <form className="form-rec-holder">
                <h2 className="my-experience">
                  Reasons I wouldn't recommend this
                </h2>
                <div>
                  <input
                    type="text"
                    placeholder={"Add con caption here"}
                    name="addCon"
                    className="pro-input-text"
                    value={addCon}
                    onChange={e => this.handleInputChange(e)}
                  />
                  <textarea
                    value={conDetails}
                    name="conDetails"
                    onChange={e => this.handleInputChange(e)}
                    className="textarea-2"
                    placeholder="Add additional details"
                  />
                  <span
                    className={addCon ? "add" : "add none"}
                    onClick={this.handleAddCon}
                  >
                    <a className="add-rec-text"> Add con</a>
                  </span>
                </div>
              </form>
              <span className="call-to-action-holder">
                <button
                  onClick={this.props.closeBtn}
                  className="action-button cancel"
                >
                  Cancel
                </button>
                <button
                  disabled={!experience}
                  onClick={this.handleSubmit}
                  className="action-button submit"
                >
                  Submit
                </button>
              </span>
            </div>
          </React.Fragment>
          <style jsx>
            {`
              .user-rec-card {
                position: relative;
                width: 100%;
                max-width: 640px;
                min-height: 550px;
                left: 0;
                top: 0;
                background-color: #fdfdfd;
                box-sizing: border-box;
                overflow: hidden;
                border-radius: 15px;
                box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
                margin-bottom: 10px;
              }

              .option-theme {
                margin-top: -105px;
                margin-left: 75px;
              }

              .rec-recommendation {
                display: block;
                position: relative;
                font-size: 20px !important;
                text-transform: capitalize;
                color: #fff;
                line-height: 1.2;
                letter-spacing: 0.2px;
              }

              .rec-option {
                font-size: 20px !important;
                color: #fff;
                text-transform: capitalize;
                position: relative;
                letter-spacing: 0.2px;
              }

              .option-theme > span {
                font-size: 1.13em;
                font-weight: 550;
              }
              .bg-image-theme {
                // background: rgba(0, 0, 0, 0.4);
                border: 1px solid grey;
                overflow: hidden;
                width: 100%;
                height: 250px;
                background-image: linear-gradient(
                  180deg,
                  rgba(28, 41, 62, 0.2) 0,
                  rgba(28, 41, 62, 0.3) 30%,
                  rgba(7, 15, 29, 0.9)
                );
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                // border: 1px solid blue;
                position: relative;
                justify-content: center;
                align-items: center;
                // opacity: 0.5;
              }

              .form-holder {
                padding-left: 40px;
                padding-right: 10px;
              }
              .my-experience {
                display: block;
                padding-bottom: 10px;
                padding-top: 10px;
                margin-top: 20px;
              }
              .call-to-action-holder {
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .textarea-1 {
                width: 95%;
                height: 60px;
                border-radius: 5px;
                outline: 0;
                padding: 10px;
                resize: none;
                font-family: inherit;
                font-weight: 500;
                border: 1px solid #e6e8eb;
              }

              .form-rec-holder {
                margin-bottom: 30px;
              }

              .pro-input-text {
                width: 95%;
                height: 100%;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
                border: 1px solid #e6e8eb;
                padding: 10px;
                outline: 0;
                font-family: inherit;
                font-weight: 500;
              }

              .textarea-2 {
                width: 95%;
                height: 60px;
                outline: 0;
                padding: 10px;
                resize: none;
                border: 1px solid #e6e8eb;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
                font-family: inherit;
                font-weight: 500;
              }

              .action-button {
                font-size: 1.2em;
                font-weight: 600;
                padding: 10px;
                font-family: inherit;
                border-radius: 2px;
                border: 0;
                margin-bottom: 15px;
              }
              .submit {
                background-color: rgb(91, 56, 141);
                color: #fff;
                cursor: pointer;
                margin-left: 10px;
                border: 1px solid transparent;
              }
              .cancel {
                background-color: #cb1a4a;
                color: #fff;
              }

              .submit:hover {
                color: rgb(91, 56, 141);
                background-color: transparent;
                border: 1px solid rgb(91, 56, 141);
              }

              .user-rec-img {
                width: 100%;
                justify-content: center;
                align-items: center;
                display: flex;
                width: 100%;
                height: 100%;
                vertical-align: middle;
              }

              .user-chip {
                background-image: url(${profileImage});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                width: 50px;
                height: 50px;
                border-radius: 50px;
                position: relative;
                top: -60px;
                left: 10px;
                z-index: 1;
              }

              .add {
                font-size: 0.95em;
                font-weight: 600;
                font-family: inherit;
                cursor: pointer;
                display: flex;
                justify-content: flex-end;
                position: relative;
                left: -30px;
              }
              .add-rec-text {
              }

              .none {
                cursor: not-allowed !important;
                color: #c3c3c3 !important;
              }
            `}
          </style>
        </div>
      </>
    );
  }
}

export default TopicViewPopupModal;
