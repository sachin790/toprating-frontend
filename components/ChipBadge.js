import React from "react";
import { MDBBadge, MDBIcon, MDBContainer } from "mdbreact";

const BadgePage = props => {
  return (
    <MDBContainer>
      <MDBBadge color="red">
    <MDBIcon icon="user" />
  </MDBBadge>
    </MDBContainer>
  );
};

export default BadgePage;