import React, { Component } from "react";
import Irecommend2 from "./IRecommend2";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import Link from "next/link";
import {
  GetAQuestionFromQuestions,
  GetNextQuestion
} from "../../apiRequests/apiRequests";
import RemoveSpacesAddHyphen from "../../lib/removeSpaces";

class HelpRecommendCard extends Component {
  state = {
    data: this.props.topics.data.slice(0, 1)
  };

  componentDidMount() {
    if(this.question){
     // this.props.holdQuestion(this.question.innerHTML.replace("?", ""));
      GetAQuestionFromQuestions()
        .then(result => {
          this.setState({
            data: result.data
          });
          this.props.holdQuestion(this.state.data[0].question.replace("?", ""));
          this.props.holdId(this.state.data[0]._id);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  handleNextQuestion = () => {
    if(this.question){
    const question =    this.state.data[0].question.replace("?", "")
    GetNextQuestion(question)
      .then(result => {
        this.setState({
          data: result.data
        });
      })
      .then(() => {
        this.props.holdQuestion(this.state.data[0].question.replace("?", ""));
        this.props.holdId(this.state.data[0]._id);
      })
      .catch(err => console.log(err));
    }
  };

  render() {
    const { data } = this.state;
    return (
    <div>
      { data.length !=0
        ?  <div className="card-list-item">
        {/*<button className="card-list-answer-skip">Next</button> */}
        <h5 className="card-list-answer-subtitle">
          <span>What is your take on this question?</span>
          <button className="button-skip" onClick={this.handleNextQuestion}>
            Skip
          </button>
        </h5>

        {data.map(item => {
          const newQuestionString = RemoveSpacesAddHyphen(item.question);
          return (
            <span key={item._id} className="card-list-answer-title">
              <Link href={`/topic/${newQuestionString}`}>
                <a href="#" ref={e => (this.question = e)} id={item}>
                  {item.question}?
                </a>
              </Link>
            </span>
          );
        })}

        <div className="card-list-seperator" />
        <div className="card-list-footer center">
          <div className="help-recommend-holder">
            <span className="help-recommend-call-to-action">
              <OverlayTrigger
                key={"top"}
                placement={"top"}
                overlay={
                  <Tooltip>
                    Recommend or add the options you think are the best
                  </Tooltip>
                }
              >
                <span>
                  <Irecommend2 
                    showIrecommendCard={this.props.showIrecommendCard}
                  />
                </span>
              </OverlayTrigger>
            </span>
          </div>
        </div>
        <style jsx>
          {`
            .card-list-answer-subtitle {
              line-height: 4px;
              margin-top: 18px;
              color: #4e4376 !important;
              font-family: Cabin;
              font-weight: 600;
              font-size: 16px;
            }

            .help-recommend-holder {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .button-skip {
              position: relative;
              top: -15px;
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.4px;
              float: right;
              height: 36px;
              background-color: #e6e8eb;
              border-radius: 9px;
              color: #8d959c;
              outline: 0;
              border: 0;
              padding: 0 18px;
              white-space: nowrap;
              cursor: pointer;
            }

            .help-recommend-call-to-action {
              padding: 5px;
              justify-content: center;
              display: flex;
              text-align: center;
              cursor: pointer;
              color: #fff;
            }

            .card-list-answer-title a {
              text-decoration: none;
              font-family: Cabin;
              font-size: inherit;
              color: #000 !important;
              line-height: 1.2;
              text-align: center;
            }

            .card-list-answer-title {
              margin: auto;
              font-size: 21px;
              font-weight: 600;
              line-height: 14px;
              display: flex;
              align-items: center;
              min-height: 102px;
              position: relative;
              margin: 0;
              padding: 6px 0;
              width: 100%;
              text-align: center;
              justify-content: center;
            }

            .card-list-item {
              overflow: hidden;
              background: #fdfdfd;
              margin-bottom: 5px;
              padding: 18px;
              border: 1px solid #e6e8eb;
              border-radius: 2px;
              max-height: 300px;
              min-height: 200px;
              border-radius: 1px;
            }

            @media (max-width: 767px) {
              .card-list-answer-title {
                font-size: 18px;
                line-height: 30px;
              }

              .card-list-item {
                margin: 0 0 30px;
                padding: 12px;
              }
            }
          `}
        </style>
      </div>
        : null
      }
    </div>
    )
     
    
  }
}

export default HelpRecommendCard;
