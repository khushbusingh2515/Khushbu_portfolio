import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Col xs={4} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SiVisualstudiocode size={50} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SiPostman size={50} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SiSlack size={50} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <SiVercel size={50} />
      </Col>
    </Row>
  );
}

export default Toolstack;
