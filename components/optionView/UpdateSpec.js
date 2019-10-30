import React, { Component } from "react";
import { AddOptionSpec, GetOptionSpecs } from "../../apiRequests/apiRequests";
import CustomStyle from "./style";

class AddSpec extends Component {
  state = {
    spec: this.props.test,
    value: this.props.detail
  };

  componentDidMount() {
    GetOptionSpecs();
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  doMagic = () => {
    const { spec, value } = this.state;
    const o = {};
    o.spec = spec;
    o.value = value;
    o.id = parseFloat(this.input.id);
    o.option = this.props.option;
    o.optionId = this.props.optionId;

    this.props.tempArr(o);
  };

  render() {
    const { value, spec } = this.state;
    const { index, detail } = this.props;
    return (
      <div key={index} style={CustomStyle.div}>
        <input
          className={"input-text"}
          name="spec"
          value={spec}
          type="text"
          onChange={this.onChange}
          placeholder="Add Spec"
        />
        <input
          className={"second-input-text"}
          placeholder="Value"
          type="text"
          name="value"
          value={value}
          id={index}
          ref={e => (this.input = e)}
          onBlur={this.doMagic}
          onChange={this.onChange}
        />
        <span
          className="span-tag"
          style={CustomStyle.span}
          onClick={() => this.props.removeItem(index)}
        >
          &times;
        </span>

        <style jsx>
          {`
            .card-list-item {
              overflow: hidden;
              background-color: #fdfdfd;
              margin-bottom: 10px;
              padding: 18px;
              border: 1px solid #e6e8eb;
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
              box-sizing: border-box;
              // border-radius: 15px;
            }

            .view-more-item {
              font-size: 14px;
              font-weight: 600;
              text-transform: uppercase !important;
              letter-spacing: 0.4px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              position: relative;
              left: 42%;
              cursor: pointer;
              background-color: rgb(91, 56, 141);
              border-radius: 9px;
              padding: 3px 12px 3px 18px;
              transition: background-color 0.15s;
            }

            input[type="text"] {
              font-size: 14px;
              font-weight: 400;
              line-height: 18px;
              border: 1px solid #d9d9d9;
              outline: none;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              border-radius: 4px;
              display: block;
              font-family: inherit;
              line-height: 24px;
              padding: 0 12px;
              // width: 100%;
              margin-top: 12px;
            }

            .input-text {
              height: 50px;
              width: 30%;
              margin-right: 10px;
            }
            .second-input-text {
              height: 50px;
              width: 60%;
            }
            .span-tag:hover {
              background: rgb(91, 56, 141);
              color: #fff;
            }

            .overlay {
              height: 100%;
              width: 0;
              position: fixed;
              z-index: 6000;
              top: 0;
              left: 0;
              background-color: rgb(0, 0, 0);
              background-color: rgba(0, 0, 0, 0.5);
              overflow-x: hidden;
              transition: 0.5s;
            }
            .showOverlay {
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
          `}
        </style>
      </div>
    );
  }
}

const dummy = [
  {
    spec: "Default Desktop Environment",
    detail: "Any",
    id: 1
  },
  {
    spec: "Package Manager",
    detail: "Yarn/Npm",
    id: 2
  },
  {
    spec: "Main Usage",
    detail: "Desktop",
    id: 3
  },
  {
    spec: "Last Official Release",
    detail: "10-06-2019",
    id: 4
  }
];

export class UpdateSpecComponent extends Component {
  state = {
    arr: this.props.specs,
    spec: "",
    value: ""
  };

  // componentDidMount() {
  //   GetOptionSpecs()
  //     .then(result => {
  //       this.setState({
  //         arr: result.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  inputSpec = spec => {
    this.setState({
      spec
    });
  };

  inputValue = value => {
    this.setState({
      value
    });
  };

  tempArr = obj => {
    const { arr } = this.state;

    let i = arr.findIndex(o => o.spec === obj.spec);

    if (arr[i]) {
      arr[i] = obj;
    } else {
      arr.push(obj);
    }

    console.log(arr);

    this.setState({
      tempArr: arr
    });
    // const temp = [];

    // temp.push(obj);
    // this.setState({
    //   tempArr: temp
    // });
  };

  handleAddSpec = () => {
    const obj = { spec: "", detail: "", id: Math.random(10) };
    this.setState(previousState => ({
      arr: [...previousState.arr, obj]
    }));
  };

  handleRemoveItem = index => {
    this.setState(previousState => {
      const temp = [...previousState.arr];

      const arr = temp.filter(item => {
        return item.spec !== index;
      });

      return {
        arr
      };
    });
  };

  showUpdate = visible => {
    this.setState({
      showUpdateModal: visible
    });
  };

  handleSave = () => {
    const { tempArr } = this.state;
    const newArr = [...tempArr];
    const cleaned = newArr.filter(item => item.spec !== "");

    AddOptionSpec(cleaned)
      .then(result => {
        this.setState({
          specAdded: true
        });
      })
      .catch(err => {
        this.setState({
          err
        });
        //console.log(err);
      });
  };

  render() {
    const { arr, specAdded } = this.state;
    const { specs } = this.props;
    return (
      <div className={"card-list-item"} style={{ borderRadius: "0px" }}>
        {arr.map((item, index) => {
          return (
            <div key={item._id}>
              <AddSpec
                inputSpec={this.inputSpec}
                inputValue={this.inputValue}
                index={item.spec}
                removeItem={this.handleRemoveItem}
                test={item.spec}
                tempArr={this.tempArr}
                detail={item.value}
                option={this.props.option}
                optionId={this.props.optionId}
              />
            </div>
          );
        })}
        <div style={CustomStyle.AddNewRow} onClick={this.handleAddSpec}>
          Add Row
        </div>
        <br />
        <div style={CustomStyle.divider} />

        <div style={CustomStyle.CallToAction}>
          <div
            style={{
              cursor: "pointer",
              color: "rgb(91, 56, 141)",
              fontSize: "16px"
            }}
            onClick={() => this.props.CloseUpdateModal(false)}
          >
            Cancel
          </div>
          {arr.length === 0 && (
            <div style={CustomStyle.Update} onClick={this.handleSave}>
              Save
            </div>
          )}
          {arr.length > 0 && !specAdded && (
            <div style={CustomStyle.Update} onClick={this.handleSave}>
              Update
            </div>
          )}

          {arr.length > 0 && specAdded && (
            <div style={CustomStyle.Update}>Contribution Added</div>
          )}
        </div>
      </div>
    );
  }
}
