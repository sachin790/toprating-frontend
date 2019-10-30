import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Sidebar({
  showRec,
  showKarma,
  showQues,
  recHistory,
  karma,
  questionsAdded,
  handleShowItems
}) {
  const _num = recHistory ? recHistory.length : 0;
  const num_questions = questionsAdded ? questionsAdded.length : 0;
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-section">
          <a
            className={showRec ? "sidebar-link selected" : "sidebar-link "}
            href="#"
            onClick={() => handleShowItems(true, false, false)}
          >
            {`Recs (${_num})`}
          </a>
          <a
            className={showQues ? "sidebar-link selected" : "sidebar-link "}
            href="#"
            onClick={() => handleShowItems(false, true, false)}
          >
            {`Added (${num_questions})`}
          </a>
          <a
            className={showKarma ? "sidebar-link selected" : "sidebar-link "}
            href="#"
            onClick={() => handleShowItems(false, false, true)}
          >
            {`Coins (${karma})`}
          </a>
        </div>
      </div>
    </div>
  );
}

function NoRecs(props) {
  return (
    <div className="empty-state compact">
      <div className="empty-state-icon">
        <FontAwesomeIcon className="icon thumbtack-icon" icon={faThumbtack} />
      </div>
      <span>No pinned recommendations yet!</span>
    </div>
  );
}

{
  /** Rec Card here */
}

function Rec({ option, question, optionImage }) {
  // const { option, question, optionImage } = props;
  return (
    <>
      <Link href={`/topic/${question}`}>
        <div className="rec card-list-item image-list-item">
          <a className="rec-card-option-content">
            <div
              style={{
                backgroundImage: `url(${optionImage})`,
                backgroundRepeat: " no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              className="rec-image"
            >
              {/* <div className="rec-pin-link">
            <FontAwesomeIcon
              className="icon thumbtack-icon-sm"
              icon={faThumbtack}
            />
          </div> */}
            </div>
            <div className="rec-card-header">{option}</div>
          </a>
          <a className="rec-question-link" href="#">
            <div className="rec-card-subheader secondary-detailed-header">
              In The Question
            </div>
            <Link href={`/topic/${question}`}>
              <div className="rec-card-text">{question}?</div>
            </Link>
          </a>
        </div>
      </Link>
    </>
  );
}

function Rec2({ option, question, optionImage }) {
  // const { option, question, optionImage } = props;
  return (
    <>
      <Link prefetch href={`/topic/${question}`}>
        <div className="rec card-list-item image-list-item">
          <a className="rec-card-option-content">
            <div
              style={{
                backgroundImage: `url(${optionImage})`,
                backgroundRepeat: " no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              className="rec-image"
            >
              {/* <div className="rec-pin-link">
            <FontAwesomeIcon
              className="icon thumbtack-icon-sm"
              icon={faThumbtack}
            />
          </div> */}
            </div>
            {/* <div className="rec-card-header">{option}</div> */}
          </a>
          <a className="rec-question-link" href="#">
            <div className="rec-card-subheader secondary-detailed-header">
              You asked the Question
            </div>
            <Link prefetch href={`/topic/${question}`}>
              <div className="rec-card-text">{question}?</div>
            </Link>
          </a>
        </div>
      </Link>
    </>
  );
}

{
  /**
  End of Rec card
 */
}

{
  /**

  RecsView here
*/
}

function RecsView(props) {
  const { recHistory } = props;
  const _num = recHistory ? recHistory.length : 0;
  if (!recHistory) return <NoRecs />;
  return (
    <div className="profile-page-recs-view">
      <div className="pinned-recs card-list">
        <div className="profile-page-title card-list-section-label">
          {/* MY PINNED RECS (0) */}
        </div>
        <div className="view-section">{/*<NoRecs /> */}</div>
      </div>
      <div className="other-recs card-list">
        <div className="view-section">
          <div className="profile-page-title card-list-section-label">
            MY RECS ({`${_num}`})
          </div>

          {recHistory ? (
            <React.Fragment>
              {recHistory.map(item => {
                const optionImage = item.optionImage
                  ? item.optionImage
                  : "/static/image.png";
                return (
                  <Rec
                    key={item._id}
                    question={item.question}
                    option={item.option}
                    optionImage={optionImage}
                  />
                );
              })}
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

function RecsView2({ questionsAdded }) {
  const _num = questionsAdded ? questionsAdded.length : 0;
  if (!questionsAdded) return <NoRecs />;
  return (
    <div className="profile-page-recs-view">
      <div className="pinned-recs card-list">
        <div className="profile-page-title card-list-section-label">
          {/* MY PINNED RECS (0) */}
        </div>
        <div className="view-section">{/*<NoRecs /> */}</div>
      </div>
      <div className="other-recs card-list">
        <div className="view-section">
          <div className="profile-page-title card-list-section-label">
            Questions Added ({`${_num}`})
          </div>

          {questionsAdded ? (
            <React.Fragment>
              {questionsAdded.map(item => {
                const optionImage = "/static/image.png";
                return (
                  <Rec2
                    key={item._id}
                    question={item.question}
                    option={item.option}
                    optionImage={optionImage}
                  />
                );
              })}
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

function RecsView3({ recHistory, karma }) {
  // const _num = recHistory ? recHistory.length : 0;
  if (!recHistory) return <NoRecs />;
  return (
    <div className="profile-page-recs-view">
      <div className="pinned-recs card-list">
        <div className="profile-page-title card-list-section-label">
          {/* MY PINNED RECS (0) */}
        </div>
        <div className="view-section">{/*<NoRecs /> */}</div>
      </div>
      <div className="other-recs card-list">
        <div className="view-section">
          <div className="profile-page-title card-list-section-label">
            Coins ({`${karma}`})
          </div>

          {recHistory ? (
            <React.Fragment>
              {recHistory.map(item => {
                const optionImage = item.optionImage
                  ? item.optionImage
                  : "/static/image.png";
                return (
                  <Rec
                    key={item._id}
                    question={item.question}
                    option={item.option}
                    optionImage={optionImage}
                  />
                );
              })}
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

{
  /**
End of RecsView
*/
}

{
  /**

  KarmaItem here
*/
}
function KarmaItem(props) {
  return (
    <div className="activity-list-item">
      <h3 className="activity-list-question-title">
        <a href="#">
          {props.title ||
            "What is the best language to learn/practice data structures"}
          ?
        </a>
      </h3>
      <div className="karma-activity-body">
        <div className="karma-activity-event">
          <div>
            <div className="event">
              <div className="event-avatar">
                <FontAwesomeIcon
                  className="icon plus-circle-icon"
                  icon={faPlusCircle}
                />
              </div>

              <div className="Event-Content">
                <a rel="nofollow" href="#">
                  You added the <span>con </span>
                  <strong>Interpreted language</strong> to{" "}
                  <strong>Python</strong>.
                </a>
                <span className="event-time">{props.date || "a day ago"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="karma-activity-bonus-count hide-minimum">+10</div>
      </div>
    </div>
  );
}

{
  /**End of KarmaItem */
}

{
  /** KarmaView Here */
}
function KarmaView(props) {
  const { karma } = props;

  // if (!karma) return <div />;
  return (
    <div className="profile-page-karma-view">
      <div className="card-list contained">
        <div className="view-section">
          <div className="profile-page-title card-list-section-label">
            {"COINS"}
          </div>
          <div className="card-list-item activity-card-list">
            {/* {karma.map((item, index) => {
            return <KarmaItem {...props} />;
          })} */}

            <KarmaItem />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /**End of KarmaView here */
}

//function ActivityView(props) {}
export default class ProfilePageBody extends React.Component {
  state = {
    recHistory: this.props.recHistory,
    showRec: true,
    showQues: false,
    showKarma: false
  };

  handleShowItems = (rec, ques, karma) => {
    this.setState({
      showRec: rec,
      showQues: ques,
      showKarma: karma
    });
  };
  render() {
    const { recHistory, showRec, showKarma, showQues } = this.state;
    const { notUser } = this.props;

    return (
      <div className="profile-page-body">
        <div className="page-content profile-page-content">
          <Sidebar
            {...this.props}
            showKarma={showKarma}
            showRec={showRec}
            showQues={showQues}
            handleShowItems={this.handleShowItems}
          />
          <div className="profile-sections-wrapper">
            {showRec && <RecsView {...this.props} />}
            {showQues && <RecsView2 {...this.props} />}
            {showKarma && <RecsView3 {...this.props} />}

            {/* {notUser ? "" : <KarmaView {...this.props} />} */}
          </div>
        </div>
      </div>
    );
  }
}
