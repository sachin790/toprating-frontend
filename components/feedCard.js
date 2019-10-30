import React, { Fragment } from "react";
import { Card, Feed } from "semantic-ui-react";

const FeedCard = ({
  questionActivity,
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
            zIndex: 1,
            borderRadius: borderR
          }}
        >
          <Card.Content style={{ border: 0 }}>
            <Card.Header className={"card-header"}>{title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              {questionActivity.map(activity => {
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
                      <Feed.Summary>
                        {activity.user} <a>added</a> a question{" "}
                        <a>{activity.question}?</a>.
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
            color: #4e4376 !important;
            background: transparent;
            font-family: Cabin;
            border-bottom: none;
          }

          // @media (max-width: 900px) {
          //   .new-question-added {
          //     display: none;
          //   }
          // }

          // @media only screen and (min-width: 900px) and (max-width: 1025px) {
          //   .new-question-added {
          //     left: 50vw;
          //   }
          // }
          // @media only screen and (min-width: 1025px) and (max-width: 1281px) {
          //   /* big landscape tablets, laptops, and desktops */
          //   .new-question-added {
          //     left: 50vw;
          //   }
          //   .topRating {
          //     width: 80px !important;
          //   }
          // }
        `}
      </style>
    </Fragment>
  );
};

export default FeedCard;
