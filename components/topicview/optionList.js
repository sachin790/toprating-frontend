import React, { Component, Fragment } from "react";
import Link from "next/link";
import API_URL from "../../config/config";
import io from "socket.io-client";

import CustomTab from "./tab";
import { Popup, Placeholder, Card } from "semantic-ui-react";
import { AddIcon, More, Thumb_up, Thumb_down, InsertLink } from "../Icons";
import { Button, Modal } from "react-bootstrap";

import {
  _GET_TOPICS,
  GET_RELATED_TOPICS_URL,
  GET_SPECIFIC_TOPIC_URL,
  AddUserReactionToOption,
  GetUserReactionToLikeOption,
  GetUserReactionToDisLikeOption,
  MarkOptionAsSpam,
  UpdateOption,
  SaveUpdateHistory,
  GetQuestionUpdatedAt,
  GetQuestionNumOfRecs,
  UpdateCon,
  UpdatePro,
  SaveConHistory,
  SaveProHistory,
  AddOptionImage

} from "../../apiRequests/apiRequests";

import Signin from "../../pages/signin";
import Signup from "../../pages/signup";
import TopicViewPopupModal from "../modal/topicviewPopupModal";

const socket = io(API_URL);

const imageArr = [
  "/static/thishouse.png",
  "/static/avatar.png",
  "/static/thishouse.png"
];
export default class OptionList extends Component {
  state = {
    inc: 0, //inc stands for increase
    dec: 0, //dec stands for decrease
    experience: "",
    showClass: false,
    clickedOptionDetails: {},
    user_data: {},
    type: "",
    data: this.props.data,
    ioResponseLike: false,
    ioResponseDisLike: false,
    UserLoggedIn: true,
    showSignInOverlay: false,
    UserClickedLogin: false,
    UserClickedSignup: false,
    rxn: null,
    showUpdateModal: false,
    show: false,
    updatedOption: "",
    updatedOptionLink: "",
    proTitle: "",
    conTitle: "",
    proDescription: "",
    conDescription: "",
    updateCon: false,
    updatePro: false,
    question: "",
    option: "",
    optionId: "",
    updateImage: false,
    imageLink: "",
    mediaArr: null,
    LikeColor : {},
    DisLikeColor : {},
    LikeNumber : this.props.LikeNumber,
    DisLikeNumber : this.props.DisLikeNumber,
    user_id : this.props.user_id
  };

async componentWillMount(){
 
  console.log(this.state.user_id.then(async res=>{
    const LikeColor =  await GetUserReactionToLikeOption(res,this.state.data);
    const DisLikeColor = await GetUserReactionToDisLikeOption(res,this.state.data);
    this.setState({
      LikeColor : LikeColor.data,
      DisLikeColor : DisLikeColor.data
    })
  
  }));
 

}

  componentDidMount() {
    this.getSocketResponse();
   

  }


  getSocketResponse = () => {
    socket.on("rec_added", data => {
      if (data.type === "like") {
        this.setState({
          ioResponseLike: true,
          _like: data.like
        });
        return;
      }

      if (data.type === "dislike") {
        this.setState({
          ioResponseDisLike: true,
          _dislike: data.dislike
        });
        return;
      }
    });
  };

  handleDivClose = e => {
    if (e.target === this.div) {
      this.setState(previousState => ({
        showSignInOverlay: !previousState.showSignInOverlay
      }));
    }
  };

  openLoginOverlay = () => {
    this.setState({
      UserClickedSignup: false,
      UserLoggedIn: false,
      showSignInOverlay: true
    });
  };

  openSignupOverlay = () => {
    this.setState({
      UserClickedSignup: !this.state.UserClickedSignup,
      UserLoggedIn: true,
      showSignInOverlay: false
    });
  };

  openBtn = () => {
    this.setState({
      showClass: true
    });
  };

  closeBtn = () => {
    this.setState({
      showClass: false
    });
  };

  closeModal = e => {
    if (e.target === this.recCard) {
      this.setState({ showClass: false });
    }
  };

  handleDislike = () => {
    let user = JSON.parse(localStorage.getItem("user_details"));
    if (!user) {
      alert("Not registered");
      return;
    }
    this.setState({
      type: "dislike"
    });
  };

  handlelike = (data) =>{
       let color = this.state.LikeColor;
       let colo = this.state.DisLikeColor;
       let LikeNumber = this.state.LikeNumber;
       let DisLikeNumber = this.state.DisLikeNumber;
         if(color[data.option]=="grey" && colo[data.option] =="grey"){
          color[data.option] = "blue";
          LikeNumber[data.option] = LikeNumber[data.option] +1;
          colo[data.option] = "grey";
         }
        else if(color[data.option]=="grey" && colo[data.option] =="blue"){
          color[data.option] = "blue";
          LikeNumber[data.option] = LikeNumber[data.option] +1;
          DisLikeNumber[data.option] = DisLikeNumber[data.option] -1;
          colo[data.option] = "grey";
         }
         else{
          LikeNumber[data.option] = LikeNumber[data.option] -1;
          color[data.option] = "grey";
         }
          this.setState({
            LikeColor: color,
            DisLikeColor : colo,
            LikeNumber : LikeNumber,
            DisLikeNumber : DisLikeNumber
          });
      const _user = JSON.parse(localStorage.getItem("user_details"));
      const rxn = {
        userId: _user._id,
        option : data.option,
        type: true
      };
      AddUserReactionToOption(rxn)
        .then(res => {
      
        }
            
        )
        .catch(err =>{
          console.log(err);
          console.log(err.response.data);
        });
   
  }


//  getLikeButtonColor= option =>  {
//   // const _user = JSON.parse(localStorage.getItem("user_details"));
//   // return  GetUserReactionToLikeOption("5dada7908a5390365411a11f",option)
//   //   .then(res => {
//   //     console.log(res.data)
//   //    return "green";
//   //   }
        
//   //   )
//   //   .catch(err =>{
//   //     console.log(err);
//   //     console.log(err.response.data);
//   //   });
//     return "yellow";
//   }

  handleDislike = (data) =>{
    let color = this.state.DisLikeColor;
    let colo = this.state.LikeColor
    let LikeNumber = this.state.LikeNumber;
    let DisLikeNumber = this.state.DisLikeNumber;
          if(color[data.option]=="grey" && colo[data.option] =="grey"){
           color[data.option] = "blue";
           colo[data.option] = "grey"
           DisLikeNumber[data.option] = DisLikeNumber[data.option] +1;
          }
         else if(color[data.option]=="grey" && colo[data.option] =="blue"){
            color[data.option] = "blue";
            colo[data.option] = "grey"
            DisLikeNumber[data.option] = DisLikeNumber[data.option] +1;
            LikeNumber[data.option] = LikeNumber[data.option] -1;
           }
          else{
           color[data.option] = "grey";
           DisLikeNumber[data.option] = DisLikeNumber[data.option] -1;
          }
           this.setState({
             DisLikeColor: color,
             LikeColor : colo,
             DisLikeNumber : DisLikeNumber,
             LikeNumber:LikeNumber
           });
      const _user = JSON.parse(localStorage.getItem("user_details"));
      const rxn = {
        userId: _user._id,
        option : data.option,
        type: false
      };
      AddUserReactionToOption(rxn)
        .then(res => {
        
        }
            
        )
        .catch(err =>{
          console.log(err);
          console.log(err.response.data);
        });
   
  }


  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSpam = option => {
    let user = JSON.parse(localStorage.getItem("user_details"));
    if (!user) {
      alert("Sign in to carry out this action");
      return;
    }

    let _data = {
      option,
      isSpam: true,
      userIdWhoMarkedAsSpam: user._id
    };
    //Mark option as spam
    MarkOptionAsSpam(_data)
      .then(response => {
        alert("Option Marked as Spam");
      })
      .catch(error => console.log(error));
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  onOptionUpdateChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSaveUpdatedOption = () => {
    let user = JSON.parse(localStorage.getItem("user_details"));
    const { updatedOption, updatedOptionLink, optionId } = this.state;

    if (!user) {
      alert("Login to carry out this action");
      return;
    }
    if (updatedOption === "" || updatedOptionLink === "" || !optionId) {
      alert("no way");
      console.log("no way");
      return;
    }
    let _saveUpdateHistory = {
      option: updatedOption,
      optionId: optionId,
      username: user.username,
      userId: user._id
    };

    UpdateOption(optionId, user._id, updatedOption, updatedOptionLink)
      .then(result => {
        alert("Option Updated");
        this.setState({ show: false });
        SaveUpdateHistory(_saveUpdateHistory)
          .then(() => console.log("saved"))
          .catch(err => console.log(err.response));
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleUpdatePro = (visible, caption, pro, id, question, option, optionId) => {
    this.setState({
      updatePro: visible,
      proTitle: caption,
      proDescription: pro,
      proId: id,
      question,
      option,
      optionId
    });
  };

  handleUpdateCon = (visible, caption, con, id, question, option, optionId) => {
    this.setState({
      updateCon: visible,
      conTitle: caption,
      conDescription: con,
      conId: id,
      question,
      option,
      optionId
    });
  };

  handleProUpdate = () => {
    let user = JSON.parse(localStorage.getItem("user_details"));
    const {
      proTitle,
      proDescription,
      proId,
      option,
      optionId,
      question
    } = this.state;

    if (!user) {
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
      optionId,
      title: proTitle,
      description: proDescription,
      userId: user._id,
      question,
      proId
    };

    UpdatePro(
      proId,
      user._id,
      proTitle.replace("%", " percent"),
      proDescription.replace("%", " percent"),
      option,
      optionId,
      question
    )
      .then(result => {
        alert("updated");
        this.setState({ updatePro: false });
        SaveProHistory(data)
          .then(() => console.log("saved"))
          .catch(err => console.log(err.response));
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleConUpdate = () => {
    let user = JSON.parse(localStorage.getItem("user_details"));
    const {
      conTitle,
      option,
      question,
      optionId,
      conDescription,
      conId
    } = this.state;

    if (!user) {
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
      optionId,
      title: conTitle,
      description: conDescription,
      userId: user._id,
      question,
      conId
    };

    UpdateCon(
      conId,
      user._id,
      conTitle.replace("%", " percent"),
      conDescription.replace("%", " percent"),
      option,
      optionId,
      question
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

  // showUpdateImageModal = () => {
  //   this.setState({
  //     updateImage: true
  //   });
  // };

  handleUpdateImage = () => {
    //Parameters here
    const { newImage, optionId } = this.state;
    AddOptionImage(optionId, newImage)
      .then(axiosResponse => {
        this.setState({
          optionImageAdded: true
        });
      })
      .catch(err => {
        this.setState({
          err: err
        });
      });
  };

  //Add image url to image array

  addImageUrlToImageArray = ({ target: { value, name } }) => {
    this.setState({
      newImage: value
    });
  };

  handleShowModal = (visible, mediaArr, optionId) => {
    this.setState({
      updateImage: visible,
      mediaArr,
      optionId
    });
  };

  render() {
    const {
      showClass,
      clickedOptionDetails,
      ioResponseLike,
      ioResponseDisLike,
      UserLoggedIn,
      showSignInOverlay,
      _disliked,
      _liked,
      UserClickedSignup,
      rxn,
      show,
      optionItems,
      proDescription,
      proTitle,
      conDescription,
      conTitle,
      updateCon,
      updatePro,
      link,
      mediaArr,
      newImage,
      optionImageAdded
    } = this.state;

    const profileImageUrl = this.props.user.image
      ? this.props.user.image
      : "/static/wor.jpg";

    const Likecolor = rxn ? "blue" : "grey";
    const disLikeColor = _disliked ? "blue" : "grey";

    return (
      <Fragment>
        {this.props.data.map(item => {
          let like = ioResponseLike ? this.state._like : item.like;
          let dislike = ioResponseDisLike ? this.state._dislike : item.dislike;

          if (item.mediaUrl.length < 2) {
            return (
              <div className="card-list" key={item._id}>
                <div>
                  <h2 className="option-name">
                    {
                      <span
                        className={"score-card"}
                        style={{ marginRight: "15px", marginLeft: "10px" }}
                      >
                        <span className="score">{this.state.LikeNumber[item.option]-this.state.DisLikeNumber[item.option]}</span>
                      </span>
                    }
                    <Link prefetch href={`/option/${item.option}`}>
                      <span className="option-name-question">
                        {item.option}
                      </span>
                    </Link>
                    <span className="more-icon">
                      <Popup
                        trigger={
                          <button className="more-icon-button">
                            <More color="transparent" />
                          </button>
                        }
                        on="click"
                        content={
                          <strong>
                            <p>
                              <a
                                onClick={() => {
                                  if (
                                    !JSON.parse(
                                      localStorage.getItem("user_details")
                                    )
                                  ) {
                                    this.setState({
                                      UserLoggedIn: false,
                                      showSignInOverlay: true
                                    });
                                    return;
                                  }

                                  let _unique = {
                                    option: item.option,
                                    question: item.question,
                                    optionImage: item.optionImage
                                    ///OptionID and QuestionId may be added
                                  };
                                  this.setState({
                                    clickedOptionDetails: _unique,
                                    showClass: true
                                  });
                                }}
                              >
                                Add Pros and Cons
                              </a>
                            </p>
                            <p>
                              <Link href={`/updatehistory/${item.option}`}>
                                <a>See Update History</a>
                              </Link>
                            </p>
                            <p>
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  this.setState({
                                    show: true,
                                    updatedOption: item.option,
                                    updatedOptionLink: item.link,
                                    optionId: item._id
                                  });
                                }}
                              >
                                Update Option
                              </a>
                            </p>
                            {/* <p>
                              <Link href="#">
                                <a>Update Specs</a>
                              </Link>
                            </p> */}
                            <p>
                              <a
                                style={{ color: "#E91E63", cursor: "pointer" }}
                                onClick={() => this.handleSpam(item.option)}
                              >
                                Mark Option as Spam
                              </a>
                            </p>
                          </strong>
                        }
                        hideOnScroll
                        position="bottom right"
                      />
                    </span>
                  </h2>
                </div>

                <div className="carousel" style={{ marginBottom: "10px" }} />
                <div className="little-card">
                  {item.mediaUrl.slice(0, 3).map((item, index) => {
                    return (
                      <div className="twoo" key={index}>
                        <img src={item} className="option-image" />
                      </div>
                    );
                  })}
                  <div
                    className="twoo add-media"
                    onClick={() =>
                      this.handleShowModal(true, item.mediaUrl, item._id)
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: " center",
                        flexDirection: "column"
                      }}
                    >
                      <span>
                        <AddIcon color="#58647b" />
                      </span>
                      <span>Add Image or Video</span>
                    </div>
                  </div>
                </div>
                <div className="fix" />
                <CustomTab
                  experiences={item.experiences}
                  userAvatar={item.userImage}
                  pros={item.pros}
                  cons={item.cons}
                  id={item._id}
                  option={item.option}
                  question={item.question}
                  UpdateCon={this.handleUpdateCon}
                  UpdatePro={this.handleUpdatePro}
                />

                <div className="rec-btn">
                  <div>
                    <button className="get-it-btn">
                      <span className="thumb-icon">
                        <InsertLink color={"#fff"} />
                      </span>
                      <Link href={`http://${item.link}`}>
                        <a className="btn-content get-it" target={"_blank"}>
                          {item.price && ` $ ${item.price}`}
                          {!item.price && " GET IT HERE"}
                        </a>
                      </Link>
                    </button>
                  </div>

                  <span className={"rec-holder"}>
                    <button
                      className="like-btn"
                      onClick={() => {
                        if (!JSON.parse(localStorage.getItem("user_details"))) {
                          this.setState({
                            UserLoggedIn: false,
                            showSignInOverlay: true
                          });
                          return;
                        }

                        let _unique = {
                          option: item.option,
                          question: item.question,
                          optionImage: item.mediaUrl,
                          optionId: item._id

                          ///OptionID and QuestionId may be added
                        };
                        // this.setState(
                        //   {
                        //     clickedOptionDetails: _unique,
                        //     type: "like",
                        //     showClass: true
                        //   },
                        //   () => {
                        //     this.setState(previousState => ({
                        //       inc: previousState.inc + 1
                        //     }));
                        //   }
                        // );

                        {this.handlelike(_unique)};
                      }}
                    >
                      <span className="thumb-icon lik">
                        <Thumb_up color={this.state.LikeColor[item.option]} />
                      </span>
                      <span
                        className={
                          like
                            ? "btn-content btn-content-active"
                            : "btn-content"
                        }
                      >
                        <span className="recommend-text num">{this.state.LikeNumber[item.option]}</span>
                      </span>
                    </button>

                    <button
                      className="dislike-btn"
                      onClick={() => {
                        if (!JSON.parse(localStorage.getItem("user_details"))) {
                          this.setState({
                            UserLoggedIn: false,
                            showSignInOverlay: true
                          });
                          return;
                        }

                        if (JSON.parse(localStorage.getItem("user_details"))) {
                          let _unique = {
                            option: item.option,
                            question: item.question,
                            optionImage: item.mediaUrl,
                            optionId: item._id
                            ///OptionID and QuestionId may be added
                          };

                          // this.setState(
                          //   {
                          //     clickedOptionDetails: _unique,
                          //     type: "dislike",
                          //     showClass: true
                          //   },
                          //   () => {
                          //     this.setState(previousState => ({
                          //       dec: previousState.dec + 1
                          //     }));
                          //   }
                          // );

                          {this.handleDislike(_unique)};

                          return;
                        }
                      }}
                    >
                      <span className="thumb-icon dis">
                        <Thumb_down color={this.state.DisLikeColor[item.option]} />
                      </span>
                      <span
                        className={
                          _disliked
                            ? "btn-content btn-content-active"
                            : "btn-content"
                        }
                      >
                       <span className="recommend-text num">{this.state.DisLikeNumber[item.option]}</span>
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div className="card-list" key={item._id}>
              <div className="card-list-top-header">
                <h2 className="option-name">
                  {
                    <span
                      className={"score-card"}
                      style={{ marginRight: "3px" }}
                    >
                      <span className="score">{item.rating}</span>
                    </span>
                  }
                  <Link
                    prefetch
                    as={`/option/${item.option}`}
                    href={`/option/${item.option}`}
                  >
                    <span className="option-name-question">{item.option}</span>
                  </Link>
                  <span className="more-icon">
                    <Popup
                      trigger={
                        <button className="more-icon-button">
                          <More color="transparent" />
                        </button>
                      }
                      on="click"
                      content={
                        <strong>
                          <p>
                            <a
                              onClick={() => {
                                if (
                                  !JSON.parse(
                                    localStorage.getItem("user_details")
                                  )
                                ) {
                                  this.setState({
                                    UserLoggedIn: false,
                                    showSignInOverlay: true
                                  });
                                  return;
                                }

                                let _unique = {
                                  option: item.option,
                                  question: item.question,
                                  optionImage: item.optionImage
                                  ///OptionID and QuestionId may be added
                                };
                                this.setState({
                                  clickedOptionDetails: _unique,
                                  showClass: true
                                });
                              }}
                            >
                              Add Pros and Cons
                            </a>
                          </p>
                          <p>
                            <Link  href={`/updatehistory/${item.option}`}>
                              <a>See Update History</a>
                            </Link>
                          </p>
                          <p>
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                this.setState({
                                  show: true,
                                  updatedOption: item.option,
                                  updatedOptionLink: item.link,
                                  optionId: item._id
                                });
                              }}
                            >
                              Update Option
                            </a>
                          </p>
                          {/* <p>
                            <Link href="#">
                              <a>Update Specs</a>
                            </Link>
                          </p> */}
                          <p>
                            <a
                              style={{ color: "#E91E63", cursor: "pointer" }}
                              onClick={() => this.handleSpam(item.option)}
                            >
                              Mark Option as Spam
                            </a>
                          </p>
                        </strong>
                      }
                      hideOnScroll
                      position="bottom right"
                    />
                  </span>
                </h2>
              </div>

              <div className="carousel" style={{ marginBottom: "10px" }} />
              <div className="little-card">
                {item.mediaUrl.slice(0, 2).map((item, index) => {
                  return (
                    <div className="twoo" key={index}>
                      <img src={item} className="option-image" />
                    </div>
                  );
                })}
              </div>
              <div className="fix" />
              <CustomTab
                experiences={item.experiences}
                userAvatar={item.userImage}
                pros={item.pros}
                cons={item.cons}
                id={item._id}
                option={item.option}
                question={item.question}
                UpdateCon={this.handleUpdateCon}
                UpdatePro={this.handleUpdatePro}
              />

              <div className="rec-btn">
                <div>
                  <button className="get-it-btn">
                    <span className="thumb-icon">
                      <InsertLink color={"#fff"} />
                    </span>
                    <Link href={`http://${item.link}`}>
                      <a className="btn-content get-it" target={"_blank"}>
                        {item.price && ` $ ${item.price}`}
                        {!item.price && " GET IT HERE"}
                      </a>
                    </Link>
                  </button>
                </div>

                <span className={"rec-holder"}>
                  <button
                    className="like-btn"
                    onClick={() => {
                      if (!JSON.parse(localStorage.getItem("user_details"))) {
                        this.setState({
                          UserLoggedIn: false,
                          showSignInOverlay: true
                        });
                        return;
                      }
                      let _unique = {
                        option: item.option,
                        question: item.question,
                        optionImage: item.mediaUrl,
                        optionId: item._id

                        ///OptionID and QuestionId may be added
                      };
                      // this.setState(
                      //   {
                      //     clickedOptionDetails: _unique,
                      //     type: "like",
                      //     showClass: true
                      //   },
                      //   () => {
                      //     this.setState(previousState => ({
                      //       inc: previousState.inc + 1
                      //     }));
                      //   }
                      // );
                      {this.handlelike(_unique)};
                    }}
                  >
                    <span className="thumb-icon lik">
                    <Thumb_up color={this.state.LikeColor[item.option]} />
                    </span>
                    <span
                      className={
                        like ? "btn-content btn-content-active" : "btn-content"
                      }
                    >
                     <span className="recommend-text num">{this.state.LikeNumber[item.option]}</span>
                    </span>
                  </button>

                  <button
                    className="dislike-btn"
                    onClick={() => {
                      if (!JSON.parse(localStorage.getItem("user_details"))) {
                        this.setState({
                          UserLoggedIn: false,
                          showSignInOverlay: true
                        });
                        return;
                      }

                      if (JSON.parse(localStorage.getItem("user_details"))) {
                        let _unique = {
                          option: item.option,
                          question: item.question,
                          optionImage: item.mediaUrl,
                          optionId: item._id
                          ///OptionID and QuestionId may be added
                        };

                        // this.setState(
                        //   {
                        //     clickedOptionDetails: _unique,
                        //     type: "dislike",
                        //     showClass: true
                        //   },
                        //   () => {
                        //     this.setState(previousState => ({
                        //       dec: previousState.dec + 1
                        //     }));
                        //   }
                        // );
                         {this.handleDislike(_unique)};

                        return;
                      }
                    }}
                  >
                    <span className="thumb-icon dis">
                    <Thumb_down color={this.state.DisLikeColor[item.option]} />
                    </span>
                    <span
                      className={
                        _disliked
                          ? "btn-content btn-content-active"
                          : "btn-content"
                      }
                    >
                      <span className="recommend-text num">{this.state.DisLikeNumber[item.option]}</span>
                    </span>
                  </button>
                </span>
              </div>
            </div>
          );
        })}

        {/** For Signin is here */}
        <div
          className={
            showSignInOverlay ? "overlayShow showSignin-container" : "overlay"
          }
          onClick={e => this.handleDivClose(e)}
          ref={el => (this.div = el)}
        >
          {
            <em
              className="close"
              onClick={() => {
                this.setState({
                  showSignInOverlay: false,
                  UserLoggedIn: false
                });
              }}
            >
              &times;
            </em>
          }

          {!UserLoggedIn && <Signin openSignup={this.openSignupOverlay} />}
        </div>
        {/* End of Signin */}

        {/** For Signup is here */}
        <div
          className={
            UserClickedSignup ? "overlayShow showSignin-container" : "overlay"
          }
          onClick={e => this.handleDivClose(e)}
          ref={el => (this.div = el)}
        >
          {
            <em
              className="close"
              onClick={() => {
                this.setState({
                  UserClickedSignup: false
                });
              }}
            >
              &times;
            </em>
          }

          {UserClickedSignup && <Signup openLogin={this.openLoginOverlay} />}
        </div>
        {/* End of Signup */}

        <div
          onClick={e => this.closeModal(e)}
          className={showClass ? "overlayShowie" : "overlay"}
          ref={el => (this.recCard = el)}
        >
          <section className="add-rec-popup-section">
            <TopicViewPopupModal
              profileImage={profileImageUrl}
              option={clickedOptionDetails.option}
              closeBtn={this.closeBtn}
              question={clickedOptionDetails.question}
              optionImage={clickedOptionDetails.optionImage}
              optionId={clickedOptionDetails.optionId}
              type={this.state.type}
              socketId={socket.id}
            />
          </section>

          <div
            style={{
              top: "4%",
              fontSize: "60px",
              cursor: "pointer",
              position: "absolute"
            }}
            className={"topicview-close-icon"}
            onClick={this.closeBtn}
          >
            &times;
          </div>
        </div>

        <>
          <Modal
            style={{ marginTop: "70px" }}
            show={show}
            onHide={this.handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Option</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="update-option-form">
                <div>
                  <input
                    type="text"
                    className="update-option"
                    onChange={this.onOptionUpdateChange}
                    name="updatedOption"
                    value={this.state.updatedOption}
                    style={{ width: "100px !important" }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="update-option"
                    value={this.state.updatedOptionLink}
                    name="updatedOptionLink"
                    onChange={this.onOptionUpdateChange}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button
                style={{ backgroundColor: "rgb(91, 56, 141)", border: 0 }}
                onClick={() => this.handleSaveUpdatedOption()}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        {/* Update Pro is here*/}

        <>
          <Modal
            style={{ marginTop: "70px" }}
            show={updatePro}
            onHide={() => this.handleUpdatePro(false)}
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
              <Button
                variant="secondary"
                onClick={() => this.handleUpdatePro(false)}
              >
                Close
              </Button>
              <Button
                style={{ backgroundColor: "rgb(91, 56, 141)", border: 0 }}
                onClick={this.handleProUpdate}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        {/* Update Con is here*/}
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
              <Button
                style={{ backgroundColor: "rgb(91, 56, 141)", border: 0 }}
                onClick={() => this.handleConUpdate()}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        {/** Update Image */}

        <>
          <Modal
            style={{ marginTop: "70px" }}
            show={this.state.updateImage}
            onHide={() => this.handleShowModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="update-option-form">
                <div>
                  <input
                    type="url"
                    className="update-option"
                    onChange={e => this.onOptionUpdateChange(e)}
                    onKeyUp={e => this.addImageUrlToImageArray(e)}
                    // onBlur={}
                    name="imageLink"
                    value={this.state.imageLink}
                    style={{ width: "100px !important" }}
                  />
                </div>

                <div>
                  <div className="image-container">
                    {mediaArr && (
                      <>
                        {mediaArr.slice(0, 4).map((item, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() =>
                                this.setState({
                                  imageLink: item
                                })
                              }
                            >
                              <img src={item} className="im" />
                            </div>
                          );
                        })}
                      </>
                    )}

                    {newImage ? (
                      <div>
                        <img src={newImage} className="im" />
                      </div>
                    ) : (
                      <Placeholder style={{ height: "50px", width: "50px" }}>
                        <Placeholder.Image square />
                      </Placeholder>
                    )}
                  </div>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => this.handleShowModal(false)}
              >
                Close
              </Button>
              <Button
                // variant="primary"
                style={{ backgroundColor: "rgb(91, 56, 141)", border: 0 }}
                onClick={() => this.handleUpdateImage()}
                disabled={optionImageAdded}
              >
                {optionImageAdded ? "Saved" : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        <style jsx>
          {`
            .image-container {
              display: flex;
            }

            .image-container div {
              width: 50px;
              height: 50px;
              border: 1px solid grey;
              padding: 5px;
              border-radius: 4px;
              margin-right: 6px;
            }
            .im {
              max-width: 100%;
              vertical-align: middle;
            }

            .card-list {
              overflow: hidden;
              background-color: #fdfdfd;
              margin-bottom: 36px;
              padding: 18px;
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
              border: 1px solid #e6e8eb;
              border-radius: 15px;
              min-width: 850px;
              min-height: 300px;
              box-sizing: border-box;
              font-family: Cabin;
              // border: 1px solid red;
            }

            .fix {
              margin-bottom: 30px;
            }

            .topicview-close-icon {
              left: 91%;
              color: rgb(91, 56, 141);
              background: #e6ecf0;
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

            .add-rec-popup-section {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .update-option-form div {
              padding: 6px;
            }

            .score-card {
              cursor: pointer;
              // background: #000;
              background-image: linear-gradient(135deg, #737373, #171717);
              color: #fff;
              text-align: center;
              width: 30px;
              height: 30px;
              display: inline-block;
              border-radius: 2px;
              // transform: skewX(-22deg);
              // transform-origin: top left;
            }
            .score {
              position: relative;
              top: 4px;
            }

            .showSignin-container {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .close {
              font-size: 56px;
              position: relative;
              margin-top: -550px;
              left: 50%;
              color: rgb(91, 56, 141);
              cursor: pointer;
              // background: #e6ecf0;
            }

            a {
              color: #222;
            }
            .more-icon-button {
              background: #eee;
              border: 0;
              cursor: pointer;
              border-radius: 35px;
              outline: 0;
              height: 35px;
              width: 35px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .option-name {
              display: inline-block;
              width: 100%;
            }
            .option-name-question:hover {
              color: rgb(96, 56, 141);
              cursor: pointer;
            }
            .option-name-question {
              font-size: 24px;
              position: relative;
              top: 7px;
              text-transform: Capitalize;
              letter-spacing: 0.4px;
            }

            .option-image {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
            }

            .little-card {
              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              // border: 1px solid red;
              justify-content: flex-start;
              // padding-left: 5px;
              // padding-right: 5px;
            }

            .little-card .two {
              padding: 5px;
              background: #fdfdfd;
              height: 180px;
              width: 33.33%;
              border: 1px solid transparent;
              border-radius: 9px;
              box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.07);
              text-align: center;
              margin-top: 15px;
              margin-right: 6px;
              // margin-left: 9px;
              box-sizing: border-box;
            }

            .little-card .twoo {
              padding: 5px;
              background: #fdfdfd;
              height: 180px;
              width: 50%;
              border: 1px solid transparent;
              border-radius: 9px;
              box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.07);
              text-align: center;
              margin-top: 15px;
              margin-right: 6px;
              // margin-left: 9px;
              box-sizing: border-box;
            }

            .add-media {
              display: flex;
              justify-content: center;
              color: #58647b;
              background-color: #f7f7f7 !important;
              align-items: center;
            }

            .hideonMoblie {
              display: block;
            }

            @media screen and (max-width: 768px) {
              .hideonMoblie {
                display: none;
              }
            }

            .little-card .twoo:hover {
              background: linear-gradient(to left, #fafafa, #eee);
              cursor: pointer;
            }

            .none {
              cursor: not-allowed !important;
              color: #c3c3c3 !important;
            }
            .my-experience {
              display: block;
              padding-bottom: 10px;
              padding-top: 10px;
            }

            .thumb-icon {
              position: relative;
              top: 2px;
              // right: 1px;
            }

            .btn-content {
              position: relative;
              top: -05px;
              margin-right: 3px;
              color: grey;
            }
            .btn-content.get-it {
              color: #fff !important;
            }

            .dis {
              top: 3px;
            }

            h2 {
              font-size: 1.2em;
              font-family: inherit;
            }

            .option {
              position: relative;
              top: -110px;
              left: 100px;
              font-family: Cabin;
            }

            .action-button {
              font-size: 1.2em;
              font-weight: 600;
              padding: 10px;
              font-family: inherit;
              border-radius: 2px;
              border: 0;
              margin-bottom: 10px;
            }

            .cancel {
              margin-left: 200px;
            }

            .submit {
              margin-left: 10px;
            }

            .add {
              position: relative;
              left: -47px;
              top: 20px;
              font-size: 0.95em;
              font-weight: 600;
              font-family: inherit;
              cursor: pointer;
            }

            .form-rec-holder {
              margin-bottom: 30px;
            }

            .textarea-1 {
              width: 40vw;
              height: 60px;
              border-radius: 5px;
              outline: 0;
              padding: 10px;
              resize: none;
              font-family: inherit;
              font-weight: 700;
            }

            .textarea-2 {
              width: 40vw;
              height: 60px;
              outline: 0;
              padding: 10px;
              resize: none;
              border: 1px solid #e6e8eb;
              border-bottom-left-radius: 5px;
              border-bottom-right-radius: 5px;
              font-family: inherit;
              font-weight: 700;
            }

            ::placeholder {
              font-size: 0.9em;
              font-family: Cabin;
              font-weight: 600;
            }

            .pro-input-text {
              width: 40vw;
              height: 100%;
              border-top-right-radius: 5px;
              border-top-left-radius: 5px;
              border: 1px solid #e6e8eb;
              padding: 10px;
              outline: 0;
              font-family: inherit;
              font-weight: 700;
            }

            .form-holder {
              padding-left: 10%;
              padding-top: 2px;
            }

            .get-it-btn {
              font-family: Cabin;
              font-weight: 600;
              font-size: 1em;
              letter-spacing: 0.3px;
              height: 40px;
              outline: 0;
              border: 2px solid #4a4a4a;
              cursor: pointer !important;
              background: #4a4a4a;
              border-radius: 9px;
            }

            .more-icon {
              position: relative;
              float: right;
              display: inline-block;

              // left: 92.5%;
              cursor: pointer;
              // border: 1px solid red;
            }

            .rec-btn {
              display: flex;
              box-sizing: border-box;
              // border: 1px solid red;
              margin-top: 5px;
              justify-content: space-between;
            }

            // .rec-btn .get-it-btn {
            //   position: relative;

            // }

            .rec-btn .rec-holder {
              box-sizing: border-box;
              display: flex;
              justify-content: space-between;
            }

            .recommend-text.num {
              position: relative;
              top: -2px;
              left: 2px;
            }
            .recommend-text.numie {
              position: relative;
              top: -4px;
              left: 5px;
            }

            @media only screen and (max-width: 360px) {
              .rec-btn .rec-holder {
                // top: 10px;
                position: relative;
                // left: 22.5%;
              }

              // .more-icon {
              //   left: 80%;
              // }
            }

            @media only screen and (min-width: 360px) and (max-width: 470px) {
              .rec-btn .rec-holder {
                top: 10px;
                position: relative;
              }
              // .recommend-text {
              //   display: none;
              // }

              // .more-icon {
              //   left: 85%;
              // }

              .close {
                font-size: 56px;
                position: relative;
                margin-top: -500px;
                left: 80%;
              }
            }

            .like-btn {
              font-size: 1.2em;
              font-family: Cabin;
              font-weight: 600;
              letter-spacing: 0.3px;
              border-top-left-radius: 9px;
              border-bottom-left-radius: 9px;
              outline: 0;
              padding: 0;
              border: 0;
              height: 40px;
              cursor: pointer !important;
              background: #fff;
              text-align: center;
              margin-right: 5px;
            }

            .dislike-btn {
              font-size: 1.2em;
              font-family: Cabin;
              font-weight: 600;
              letter-spacing: 0.3px;
              border-top-right-radius: 9px;
              border-bottom-right-radius: 9px;
              height: 40px;
              outline: 0;
              border: 0;

              cursor: pointer !important;
              color: grey;
              background: #fff;
              padding-left: 8px;
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
              transition: 0.5s;
            }

            .overlayShowie {
              height: 100%;
              width: 100%;
              position: fixed;
              z-index: 5000;
              top: 0;
              left: 0;
              background-color: rgb(0, 0, 0);
              background-color: rgba(0, 0, 0, 0.5);
              overflow-x: hidden;

              transition: 0.5s;
            }

            .user-chip {
              background-image: url(${profileImageUrl});
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

            .user-rec-img {
              width: 100%;
              height: 200px;
            }

            .user-rec-card {
              position: relative;
              width: 50%;
              min-height: 550px;

              left: 25%;
              background-color: #fafafa;
              box-sizing: border-box;
              border-radius: 10px;
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
              margin-bottom: 10px;
            }

            @media (min-width: 768px) {
              .topicview-close-icon {
                left: 80%;
              }
            }

            // @media (max-width: 767px) {
            //   .card-list {
            //     width: 70vw;
            //     min-width: 200px;
            //     min-height: 300px;
            //   }
            // }

            @media screen and (min-width: 320px) and (max-width: 509px) {
              .card-list {
                min-width: 0px;
                width: 93vw;
                min-height: 300px;
                margin-left: 0;
              }
            }

            @media (min-width: 509px) and (max-width: 600px) {
              .card-list {
                min-width: 0px;
                width: 94vw;
                min-height: 300px;
                margin-left: 0;
              }
            }

            @media (min-width: 600px) and (max-width: 900px) {
              .card-list {
                min-width: 0px;
                width: 94vw;
                min-height: 300px;
                margin-left: 0;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}
