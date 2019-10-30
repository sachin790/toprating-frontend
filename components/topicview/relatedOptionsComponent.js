import React from "react";
import Link from "next/link";
import RecFeedCard from "./recFeed";
function RelatedOptions({ relatedTopics, recommendations }) {
  return (
    <React.Fragment>
      <div className="related-question">Related Questions</div>
      <div className="related-question-list">
        {relatedTopics.map(related_topic => {
          return (
            <div key={related_topic._id} style={{ marginBottom: "10px" }}>
              <Link
                prefetch
                href={`/topic/${related_topic.question}`}
                key={related_topic._id}
              >
                <a className="related-topic-question">
                  {related_topic.question}?
                </a>
              </Link>
            </div>
          );
        })}

        <div style={{ marginTop: "45px" }}>
          <RecFeedCard
            title="Activity"
            bg="transparent"
            borderR={0}
            recommendations={recommendations}
          />
        </div>
      </div>

      <style jsx>
        {`
          .related-question {
            font-size: 18px;
            font-family: inherit;
            font-weight: 470;
            position: relative;
            letter-spacing: 0.7px;
            top: 40px;
            left: 20px;
            font-weight: bold;
            text-transform: capitalize;
          }

          .card-header {
            color: #000;
            background: transparent;
            font-family: Cabin;
            border-bottom: none;
            position: relative;
            left: -20px;
          }
          .related-topic-question {
            letter-spacing: 0.6px;
            line-height: 18px;
          }

          .related-question-list div {
            overflow-wrap: break-word;
            width: 400px;
            font-size: 0.95em;
            font-family: inherit;
            font-weight: 600;
            margin-top: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
            position: relative;
            top: 40px;
            left: 20px;
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default RelatedOptions;
