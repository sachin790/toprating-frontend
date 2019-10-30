import React, { Fragment } from "react";
import { Card, Feed } from "semantic-ui-react";

const RecFeedCard = ({
  recommendations,
  title = "Recent Activities",
  bg = "#fdfdfd",
  borderR = "15px"
}) => {
  return (
    <Fragment>
      <div className="new-question-added">
        <Card
          style={{
            width: "260px",
            background: bg,
            overflow: "hidden",
            boxShadow: "none",
            borderRadius: borderR
          }}
        >
          <Card.Content>
            <Card.Header style={{ border: "none" }} className={"card-header"}>
              {title}
            </Card.Header>
          </Card.Content>
          <Card.Content
            style={{
              border: "none",
              position: "relative",
              left: "-15px",
              zIndex: 1
            }}
          >
            <Feed style={{ border: "none" }}>
              {recommendations.map(activity => {
                const _date = new Date(activity.createdAt);
                const date = _date.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                });

                const _image = activity.user_image
                  ? activity.user_image
                  : "/static/avatar.png";
                return (
                  <Feed.Event key={activity._id}>
                    <Feed.Label image={_image} />
                    <Feed.Content>
                      <Feed.Date content={`${date}`} />
                      <Feed.Summary
                        style={{
                          letterSpacing: "0.4px",
                          fontSize: "16px"
                        }}
                      >
                        {activity.username + " "}
                        <a style={{ color: "rgb(0,0,0, 0.4)" }}>recommended </a>
                        <br />
                        <a>{activity.option}.</a>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                );
              })}
            </Feed>
          </Card.Content>
        </Card>
      </div>
      <style jsx global>
        {`
          .new-question-added {
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            overflow: hidden;
          }

          .card-header {
            font-size: 18px !important;
            font-family: Cabin !important;
            background: transparent;
            color: #000 !important;
            font-weight: 470;
            position: relative;
            letter-spacing: 0.1px;
            font-weight: 600;
            text-transform: capitalize;
            left: -30px;
          }
        `}
      </style>
    </Fragment>
  );
};

export default RecFeedCard;
