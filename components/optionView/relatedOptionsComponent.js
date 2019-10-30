import React from "react";
import Link from "next/link";
import {
  GET_RELATED_TOPICS_URL,
  GET_SPECIFIC_TOPIC
} from "../../apiRequests/apiRequests";
import Axios from "axios";
import { FlatternArray } from "../../lib/flattenArray";

class RelatedOptions extends React.Component {
  state = {
    options: [],
    relatedTopics: [],
    tags: []
  };

  componentDidMount() {
    this.getSpecificTopicData(this.props.OptionDetails.question);
    this.getRelatedQuestions(this.props.OptionDetails.question);
  }

  getSpecificTopicData = question => {
    GET_SPECIFIC_TOPIC(question)
      .then(axiosResponse => {
        const _tag = axiosResponse.data.data.tagie;
        const _ta = _tag.map(item => {
          return item.tag;
        });

        this.setState({
          options: axiosResponse.data.data.data,
          tags: FlatternArray(_ta)
        });
      })
      .catch(err => this.setState({ err }));
  };

  getRelatedQuestions = question => {
    Axios.get(GET_RELATED_TOPICS_URL(question))
      .then(result => {
        this.setState({
          relatedTopics: result.data.data
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  render() {
    const { options, relatedTopics, tags } = this.state;
    const { OptionDetails } = this.props;

    const OptionConsidered = options.filter(item => {
      return item.option.indexOf(OptionDetails.option) != -1;
    });
    const Compared = options.filter(item => {
      return item.option !== OptionDetails.option;
    });

    return (
      <React.Fragment>
        <div style={{ marginTop: "15px" }}>
          <div className="related-question" style={{ marginBottom: "30px" }}>
            Tags
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", marginBottom: "4px" }}
          >
            {tags.map(item => {
              return (
                <span className="profile-image" key={item}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: "27px" }}>
          <div className="related-question" style={{ marginBottom: "30px" }}>
            Commonly Compared
          </div>
          {OptionConsidered.map(item => {
            const bgImage = item.mediaUrl
              ? item.mediaUrl[0]
              : "/static/wor.jpg";
            return (
              <div
                style={{
                  // border: "1px solid green",
                  marginTop: "10px",
                  marginBottom: "6px",
                  padding: "6px",
                  width: "100%",
                  cursor: "pointer"
                }}
                key={item.option}
              >
                <Link href={`/option/${item.option}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start"
                    }}
                  >
                    <div
                      className="option-image"
                      style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className="option-title">
                      <div
                        style={{
                          marginTop: "8px",
                          marginBottom: "5px",
                          color: "#444"
                        }}
                      >
                        {item.option}
                      </div>
                      <div className="option-rec-stat">
                        {item.like} Recommendations
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

          <div style={{ textAlign: "center", marginTop: "6px" }}>
            <span className="vs">
              <span
                style={{ position: "relative", top: "8px", fontWeight: 500 }}
              >
                vs
              </span>
            </span>
          </div>
          {Compared.map(item => {
            const bgImage = item.mediaUrl
              ? item.mediaUrl[0]
              : "/static/wor.jpg";
            return (
              <div
                style={{
                  // border: "1px solid green",
                  marginTop: "10px",
                  marginBottom: "6px",
                  padding: "6px",
                  width: "100%",
                  cursor: "pointer"
                }}
                key={item._id}
              >
                <Link href={`/option/${item.option}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start"
                    }}
                  >
                    <div
                      className="option-image"
                      style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className="option-title">
                      <div
                        style={{
                          marginTop: "8px",
                          marginBottom: "5px",
                          color: "#444"
                        }}
                      >
                        {item.option}
                      </div>
                      <div className="option-rec-stat">
                        {item.like} Recommendations
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <style jsx>
          {`
            .option-image {
              border: 1px solid #8d959c;
              width: 50px;
              height: 50px;
              border-radius: 5px;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              margin-right: 10px;
            }
            .vs {
              border: 1px solid #e6e8eb;
              border-radius: 35px;
              color: #58647b;
              display: inline-block;
              background: #f3f4f5;
              height: 36px;
              width: 36px;
            }
            .related-question {
              font-size: 1.2em;
              font-family: inherit;
              font-weight: 470;
              position: relative;
              font-weight: bold;
              text-transform: Capitalize;
            }

            .option-title {
              font-weight: 600;
              line-height: 16px;
              font-size: 1.2em;
            }

            .option-rec-stat {
              color: #8d959c;
              font-size: 13px;
              font-weight: 400;

              letter-spacing: 0.8px;
            }

            .related-question-list {
              padding-bottom: 8px;
              padding-top: 8px;
            }

            .related-question-list > a {
              overflow-wrap: break-word;
              font-size: 1.1em;
              font-family: inherit;
              font-weight: 600;
              margin-top: 10px;
              margin-bottom: 10px;
              color: rgb(91, 56, 141);
              box-sizing: border-box;
              position: relative;
              word-spacing: 2.5px;
            }

            .profile-image {
              text-transform: uppercase;
              font-size: 13px;
              font-weight: 400;
              text-transform: uppercase;
              letter-spacing: 0.4px;
              padding-right: 20px;
              margin-top: 10px;
              margin-bottom: 10px;
              color: #58647b;
            }
            .user-image {
              width: 100%;
              padding: 2px;
            }

            .details {
              padding: 3px 10px;
              margin-right: 8px;
              // border: 1px solid green;
              display: flex;
              justify-content: flex-start;
              margin-bottom: 20px;
            }
            .option-considered {
              font-size: 28px;
              position: relative;
              margin-right: 16px;
              top: 2px;
              text-align: center;
              flex-shrink: 0;
              // width: 40%;
              color: #8d959c;
              // border: 1px solid blue;
            }
            .option-considered-text {
              font-size: 0.9em;
              // border: 1px solid orange;
              // width: 60%;
              color: #8d959c;
              display: block;
              // margin-right: 15px;
              // padding-right: 13px;
              font-weight: 400;
              letter-spacing: 0.4px;
              text-transform: uppercase;
              // border: 1px solid blue;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default RelatedOptions;
