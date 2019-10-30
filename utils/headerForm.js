import React, { Component, Fragment } from "react";
import SearchFilterCard from "../components/searchFilterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSearch,
  faBell,
  faCrown
} from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "../components/Icons";
class HeaderForm extends Component {
  state = {
    show: false,
    search: "", //show searchFilterCard,
    data: this.props.data,
    searchItem: []
  };

  onChange = (e, previousState) => {
    e.preventDefault();

    let filterData = this.state.data.filter(item => {
      return (
        item.question.toLowerCase().indexOf(this.search.value.toLowerCase()) !==
        -1
      );
    });
    let check = this.search.value;

    if (check !== "") {
      this.setState(
        {
          show: true
        },
        () => {
          this.setState({ searchItem: filterData });
        }
      );
    } else {
      this.setState({
        show: false
      });
    }
  };

  render() {
    const { show, searchItem } = this.state;

    return (
      <div className="header-form-container">
        <form>
          <div className="form-input-container">
            <a href="#" className="main-header-search-icon">
              <SearchIcon />
            </a>

            <input
              type="text"
              ref={input => (this.search = input)}
              onChange={e => this.onChange(e)}
              className="header-form-input"
              placeholder={"Search..."}
              autoComplete="off"
            />
          </div>
        </form>
        {show && (
          <SearchFilterCard
            data={searchItem}
            text={"Work in Progress is my shepherd"}
          />
        )}

        <style jsx>
          {`
            .form-input-container {
              box-sizing: border-box;
              display: inline-block;
            }
            .form-input-container .main-header-search-icon {
              position: relative;
              top: 5px;
              left: 94%;
              margin-left: 2px;
            }
            input[type="text"] {
              width: 40.8vw;
              height: 30px;
              padding: 1.2em;
              background-color: #eee;
              border: 0.8px solid transparent;
              border-radius: 2px;
              margin: 0;
              color: rgb(96, 51, 141);
              font-weight: 600;
              font-size: 16px;
              outline: 0;
              line-height: 10px;
              font-family: inherit;
              overflow: hidden;
              box-sizing: border-box;
            }

            .header-form-input:hover {
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
              transition: 1s;
            }

            input[type="search"]:focus {
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
              transition: 1s;
            }

            ::placeholder {
              /* Chrome, Firefox, Opera, Safari 10.1+ */
              color: rgb(96, 51, 141);
              font-weight: 600;
              opacity: 1; /* Firefox */
              padding: 0.1em;
              font-size: 0.9em;
            }

            :-ms-input-placeholder {
              /* Internet Explorer 10-11 */
              color: rgb(96, 51, 141);
            }

            ::-ms-input-placeholder {
              /* Microsoft Edge */
              color: rgb(96, 51, 141);
            }

            @media screen and (max-width: 600px) {
              input[type="text"] {
                width: 45vw;
                height: 30px;
                padding: 5px;
                border: 0;
                color: rgb(96, 51, 141);
                font-weight: 600;
                font-size: 16px;
                outline: 0;
                box-shadow: none !important;
                line-height: 24px;
                overflow: hidden;
                margin-top: 2px;
                border-radius: 2px;
              }

              ul {
                left: 0;
                padding: 0;
              }

              .form-input-container .main-header-search-icon {
                position: absolute;
                top: 7.5px;
                left: 82%;
              }

              :placeholder {
                color: #000;
                font-weight: 100;
                opacity: 1; /* Firefox */
                font-family: inherit !important;
                padding: 0 !important;
                font-size: 0.1rem;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default HeaderForm;
