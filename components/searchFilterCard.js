import React, { Fragment } from "react";
import Link from "next/link";

const SearchFilterCard = ({ data }) => {
  return (
    <div className="search-filter-card">
      {data.slice(0, 4).map(item => {
        return (
          <Fragment key={item._id}>
            <div key={item._id} className="search-filter-image">
              {item.optionImage[0] ? (
                <img src={item.optionImage[0]} alt="item" />
              ) : (
                <img src={"/static/image.png"} alt="item" />
              )}
            </div>
            <div className="search-filter-text">
              <Link href={`/topic/${item.question}`}>
                <a>{item.question}</a>
              </Link>
            </div>
          </Fragment>
        );
      })}

      <div className="search-filter-callToAction">
        <hr />

        <div style={{ textAlign: "center" }}>
          Can't find what you are looking for?
        </div>
        <Link href="/ask">
          <button>Add Question</button>
        </Link>
      </div>
      <style jsx>
        {`
          .search-filter-card {
            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: justify-all;
            background-color: #f2f2f2;
            width: 40.8vw;
            height: 370px;
            margin-top: 1px;
            margin-left: 22px;
            z-index: 2000 !important;
            position: fixed;
            y-overflow: scroll;
          }

          a {
            text-decoration: none;
            font-family: Cabin;
            color: rgb(96, 51, 141);
          }

          .search-filter-card .search-filter-image img {
            position: relative;
            width: 60px;
            height: auto;
            padding: 10px;
          }

          .search-filter-card .search-filter-text {
            position: relative;
            top: -28px;
            left: 05vw;
          }

          .search-filter-callToAction {
            box-sizing: border-box;
          }

          .search-filter-callToAction button {
            text-decoration: none;
            cursor: pointer;
            background: rgb(96, 51, 141);
            padding: 10px;
            z-index: 2000;
            text-align: center;
            font-family: verdana;
            text-transform: uppercase;
            font-size: 10px;
            font-weight: bold;
            color: #f2f2f2;
            outline: 0;
            border: 0;
            border-radius: 6px;
            width: 120px;
            height: auto;
            position: absolute;
            left: 32.5vh;
            margin-top: 5px;
            -webkit-box-shadow: 0px 0px 8px 2px #bf237166;
            -moz-box-shadow: 0px 0px 8px 2px #bf237166;
            box-shadow: 0px 0px 8px 2px #bf237166;
            transition: 1s;
          }

          @media screen and (max-width: 600px) {
            .search-filter-card {
              min-width: 80vw;
              margin-left: -20px;
              margin-top: 5px;
            }
            .search-filter-card .search-filter-text {
              position: relative;
              left: 06vw;
              padding: 0px 30px;
            }
            .search-filter-card .search-filter-image img {
              position: relative;
              width: 60px;
              height: auto;
              padding: 10px;
              margin-right: 3px;
            }

            .search-filter-callToAction button {
              left: 24vw;
              margin-top: 5px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SearchFilterCard;
