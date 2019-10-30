import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class UpdateImage extends Component {
  state = {
    show: false,
    link: ""
  };

  //   componentDidMount() {
  //     //Using the id get images
  //   }
  handleUpdateImage = () => {
    //Parameters here
    console.log("Yea, I hit here");
  };

  handleShowModal = visible => {
    this.setState({
      show: visible
    });
  };

  onInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { show, link } = this.state;
    return (
      <div>
        {/* Update Con is here*/}
        <>
          <Modal
            style={{ marginTop: "70px" }}
            show={show}
            onHide={() => this.handleShowModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Update Con Hello!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="update-option-form">
                <div>
                  <input
                    type="link"
                    className="update-option"
                    onChange={e => this.onInputChange(e)}
                    name="link"
                    value={link}
                    style={{ width: "100px !important" }}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => this.handleShowModal(false)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => this.handleUpdateImage()}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}
