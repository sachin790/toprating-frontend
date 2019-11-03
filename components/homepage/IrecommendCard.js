import React, { Component } from "react";
import {
  GET_SPECIFIC_QUESTION_OPTIONS,
  GET_ALL_OPTIONS
} from "../../apiRequests/apiRequests";
import Link from "next/link";

class IrecommendCard extends Component {
  state = {
    clear: false,
    search: "",
    store: []
  };

  componentDidMount() {
    console.log("++++++++++++");
    console.log(this.props.question);
    console.log("++++++++++++++");
    //Do something here
    this.getOptions(this.props.question);
    this.getAllOptions();
  }

  getAllOptions = () => {
    GET_ALL_OPTIONS()
      .then(axiosResponse => {
        this.setState({
          allOptions: axiosResponse.data,
          store: axiosResponse.data
        });
      })
      .catch(err => {
        this.setState({
          err: err.response
        });
        // console.log(err);
      });
  };

  getOptions = question => {
    GET_SPECIFIC_QUESTION_OPTIONS(question)
      .then(options => {
        if (options && options.data) {
          this.setState({
            options: options.data
          });
        }
      })
      .catch(err => {
        this.setState({
          err: err.response
        });
        // console.log(err);
      });
  };

  onSearch = ({ target: { value, name } }) => {
    let filterData = this.state.allOptions.filter(item => {
      return item.option.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    this.setState(
      {
        [name]: value,
        allOptions: filterData
      },
      () => {
        if (value !== "") {
          this.setState({
            clear: true
          });
        } else {
          this.setState({
            clear: false,
            allOptions: this.state.store
          });
        }
      }
    );
  };

  onClear = () => {
    this.setState({
      search: "",
      clear: false
    });
  };

  render() {
    const { clear, search, options, allOptions } = this.state;

    const _options = options ? options : [];
    const _allOptions = allOptions ? allOptions : [];

    return (
      <div className="i-recommend-card">
        <div className="i-recommend-card-header">
          <span>I Recommend</span>
          <span>
            <span
              className={"close-popup-iconie"}
              onClick={() => this.props.closeIRecommendCard()}
              style={{ position: "relative", top: "-2px", fontSize: "18px" }}
            >
              &times;
            </span>
          </span>
        </div>
        <div className="i-recommend-search-container">
          <input
            className="i-recommend-search"
            placeholder={"Search for a product"}
            type="text"
            value={search}
            name={"search"}
            ref={input => (this.search = input)}
            onChange={e => this.onSearch(e)}
          />
          {clear && (
            <span onClick={this.onClear} className={"clear"}>
              clear
            </span>
          )}
        </div>

        <div className="fix">
          <div className="i-recommend-search-container">
            <div className="select-an-option">
              Selec a product from this Question
            </div>

            {_options.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    const user = JSON.parse(
                      localStorage.getItem("user_details")
                    );

                    if (!user) {
                      this.props.closeIRecommendCard();
                      this.props.login();
                      return;
                    } else {
                      this.props.handleShowIrecommend(
                        item.option,
                        item.like,
                        this.props.question
                      );
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <span className="option-image">
                    {item.mediaUrl[0] ? (
                      <img
                        className="option-pic"
                        width={40}
                        height={40}
                        src={item.mediaUrl[0]}
                        alt="image"
                      />
                    ) : (
                      <img
                        className="option-pic"
                        width={40}
                        height={40}
                        src="/static/image.png"
                        alt="image"
                      />
                    )}
                  </span>
                  <span style={{ fontSize: "13px" }}>
                    <span style={{ position: "relative", top: "-05px" }}>
                      {item.option ? item.option : "loading..."}
                    </span>
                    <span className="option-text">
                      {item.like ? item.like : 0} Recommendations
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          {
            //Choose an Option from toprating
          }

          {/* <div className="i-recommend-search-container">
            <div className="select-an-option">
              Select a product from top rating
            </div>

            {_allOptions.slice(0, 3).map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    const user = JSON.parse(
                      localStorage.getItem("user_details")
                    );

                    if (!user) {
                      this.props.closeIRecommendCard();
                      this.props.login();
                      
                      return;
                    } else {
                      this.props.handleShowIrecommend(
                        item.option,
                        item.like,
                        this.props.question
                      );
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <span className="option-image">
                    <img
                      className="option-pic"
                      width={40}
                      height={40}
                      src="/static/image.png"
                      alt="image"
                    />
                  </span>
                  <span style={{ fontSize: "13px" }}>
                    <span style={{ position: "relative", top: "-05px" }}>
                      {item.option ? item.option : "loading..."}
                    </span>
                    <span className="option-text">
                      {item.like ? item.like : 0} Recommendations
                    </span>
                  </span>
                </div>
              );
            })}
          </div> */}
        </div>

        <div className="i-recommend-card-divider" />

        <div className="i-recommend-card-add">
          <em>Option not found?</em>
          <Link href={`/addoption/${this.props.questionId}`}>
            <button className="button">Add Option</button>
          </Link>
        </div>
        <style jsx>
          {`
            .i-recommend-card {
              display: flex;
              flex-direction: column;
              max-height: 620px;
              min-height: 520px;
              width: 100%;
              background: #fafafa;
              border-radius: 8px;
              font-size: 18px;
              overflow-x: hidden;
              overflow-y: auto;
            }

            .fix {
              overflow-y: auto;
              overflow-x: hidden;
            }
            .i-recommend-card-header {
              background: #fdfdfd;
              width: 100%;
              display: flex;
              justify-content: space-between;
              padding: 20px;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
              font-weight: 600;
              text-transform: capitalize;
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
              // border: 1px solid green;
            }

            .i-recommend-search-container {
              margin-left: 20px;
              margin-top: 15px;
              box-sizing: border-box;
            }

            .select-an-option {
              text-transform: Uppercase;
              font-size: 15px;
              color: #8d959c;
            }

            .i-recommend-search {
              border-top: 0;
              border-left: 0;
              border-right: 0;
              outline: 0;
              width: 95%;
              background: transparent;
            }

            ::placeholder {
              font-size: 14px;
            }

            .clear {
              position: relative;
              flex-shrink: 0;
              flex-grow: 0;
              left: 85%;
              top: -25px;
              font-size: 14px;
              cursor: pointer;
              color: #8d959c;
            }
            .clear:hover {
              color: rgb(91, 56, 141);
            }

            .option-pic {
              margin-top: 5px;
              border-radius: 5px;
              margin-right: 5px;
              border: 1px solid #ecebeb;
              overflow: hidden;
            }

            .option-text {
              position: relative;
              left: 46px;
              top: -25px;
              display: block;
            }

            .i-recommend-card-divider {
              border-top: 1px solid rgb(91, 56, 141);
            }
            .i-recommend-card-add {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 10px;
              margin-bottom: 10px;
              // border: 1px solid red;
            }

            .button {
              font-size: 0.8em;
              font-weight: 500;
              border-radius: 3px !important;
              background: rgb(96, 51, 151);
              color: #fdfdfd;
              text-align: center !important;
              outline: 0;
              padding: 5px;
              cursor: pointer;
              margin-left: 3px;
              border: 1px solid rgb(96, 51, 141);
            }

            .close-popup-iconie {
              // top: 0;
              cursor: pointer;
              position: absolute;
              // left : 66%;
              height: 30px;
              width: 30px;
              color: rgb(91, 56, 141);
              border-radius: 50px;
              background: #e6ecf0;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            em {
              font-size: 15px;
              margin-right: 2px;
            }

            .button:hover {
              background-color: #e6ecf0;
              color: rgb(96, 51, 141);
              border: 1px solid rgb(96, 51, 141);
              transition: 1s;
            }

            @media (min-width: 768px) {
              .i-recommend-card {
                max-width: 400px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default IrecommendCard;
