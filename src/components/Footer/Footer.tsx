import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="custom-footer mt-4">
    <Container>
      <Row className="text-center">
        <Col>
          <p>
            &copy; {new Date().getFullYear()} Food Facts and Friends. All rights
            reserved.
          </p>
          <p>Scottish Charity No SC047203</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
