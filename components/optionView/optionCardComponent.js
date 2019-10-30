import React from "react";
import { Header, Table } from "semantic-ui-react";
function OptionCardie(props) {
  let customStyle = {
    width: "850px",
    borderRadius: "15px",
    overflow: "hidden",
    backgroundColor: "#fdfdfd",
    marginBottom: "36px",
    padding: "18px",
    boxShadow: "0 4px 16px 0 rgba(0, 0, 0, .05)",
    border: "1px solid #e6e8eb"
  };

  return (
    <React.Fragment>
      <div className="option-considered-container">
        {props.optionConsidered} Options Considered
      </div>
      <Table celled padded style={customStyle}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Rating</Table.HeaderCell>
            <Table.HeaderCell>Option</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Size</Table.HeaderCell>
            <Table.HeaderCell>Os</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.data.map((item, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>
                  <Header as="h2">
                    {item.rating}
                    {/*<Rating icon="star" defaultRating={0} maxRating={4} /> */}
                  </Header>
                </Table.Cell>
                <Table.Cell>{item.option}</Table.Cell>
                <Table.Cell>-</Table.Cell>
                <Table.Cell>
                  - <br />
                </Table.Cell>
                <Table.Cell>-</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
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
              font-size: 1.2em;
              font-weight: bold;
              position: relative;
              top: -8px;
              text-transform: uppercase;
              left: 250px;
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

export default OptionCardie;
