import React from "react";
import { Header, Table, Popup } from "semantic-ui-react";
import { ViewMore, InfoCircle } from "../Icons";

const ScoreCard = {
  display: "inline-block",
  height: "40px",
  width: "40px",
  borderRadius: "4px",
  backgroundImage: "linear-gradient(135deg,#737373,#171717)"
};

const Score = {
  position: "relative",
  top: "5px",
  padding: "0px 8px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  color: "#fff",
  fontSize: "16px"
};

const customStyle = {
  width: "850px",
  borderRadius: "15px",
  overflow: "hidden",
  backgroundColor: "#fdfdfd",
  marginBottom: "36px",
  padding: "18px",
  boxShadow: "0 4px 16px 0 rgba(0, 0, 0, .05)",
  border: "1px solid #e6e8eb",
  color: "#4d4d4d",
  fontSize: "16px"
};

const TableHeadCustomStyle = {
  textTransform: "uppercase"
};

const TableOption = {
  cursor: "pointer"
};

const ViewMoreStyle = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const InfoCircleStyle = {
  position: "relative",
  top: "5px",
  marginLeft: " 4px",
  cursor: "pointer"
};

class OptionCardie extends React.Component {
  state = {
    InfoCircleColor: false
  };

  handleChangeCircleInfoColor = bool => {
    this.setState({
      InfoCircleColor: bool
    });
  };

  render() {
    const { InfoCircleColor } = this.state;
    const { optionConsidered, data } = this.props;
    return (
      <React.Fragment>
        <div className="option-considered-container">
          <span>{optionConsidered} Options Considered</span>
          <span
            style={InfoCircleStyle}
            onMouseEnter={() => {
              this.handleChangeCircleInfoColor(true);
            }}
            onMouseLeave={() => {
              this.handleChangeCircleInfoColor(false);
            }}
          >
            <Popup
              trigger={
                <span>
                  <InfoCircle
                    color={InfoCircleColor ? "rgb(91, 56, 141)" : "#000"}
                  />
                </span>
              }
              content={`These ${optionConsidered} options are being considered by the community.
                     Please vote for the option you think should be highly recommended.`}
              position="bottom center"
              style={{ backgroundColor: "#444", color: " #fff" }}
            />
          </span>
        </div>
        {/* <Table celled padded style={customStyle}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={TableHeadCustomStyle}>
                Rating
              </Table.HeaderCell>
              <Table.HeaderCell style={TableHeadCustomStyle}>
                Option
              </Table.HeaderCell>
              <Table.HeaderCell style={TableHeadCustomStyle}>
                Price
              </Table.HeaderCell>
              <Table.HeaderCell style={TableHeadCustomStyle}>
                Size
              </Table.HeaderCell>
              <Table.HeaderCell style={TableHeadCustomStyle}>Os</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {data.map((item, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>
                    <Header as="h2">
                      <span style={ScoreCard}>
                        <span style={Score}>{item.rating}</span>
                      </span>
                    </Header>
                  </Table.Cell>
                  <Table.Cell style={TableOption}>{item.option}</Table.Cell>
                  <Table.Cell>-</Table.Cell>
                  <Table.Cell>
                    - <br />
                  </Table.Cell>
                  <Table.Cell>-</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table> */}

        <style jsx>
          {`
    
            .option-considered-card {
              width: 750px !important,
              border-radius: 15px,
              overflow: hidden,
              background-color: #fdfdfd,
              margin-bottom: 36px,
              padding: 18px,
              box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .05),
              border: 1px solid #e6e8eb
            }
              .option-considered-container {
                font-size: 20px;
                font-weight: 700;
                line-height: 27px;
                position: relative;
                text-transform: uppercase;
                letter-spacing : 0.4px;
              }
    
              @media screen and (max-width: 768px) {
                .option-considered-container {
                  display: none;
                }
              }
            `}
        </style>
      </React.Fragment>
    );
  }
}

export default OptionCardie;
