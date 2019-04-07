import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Subtotal(props) {
  return (
    <Row className="show-grid">
      <Col md={6}>Subtotal</Col>
      <Col md={6}>{`$${props.price}`}</Col>
    </Row>
  );
}
