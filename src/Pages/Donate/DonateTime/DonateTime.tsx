import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardItem from "../../../components/CardItem/CardItem";
import StyledButton from "../../../components/StyledButton/StyledButton";
import { volunteeringMethods } from "./volunteeringMethods";

const DonateTime: React.FC = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col md={10}>
        <Card className="shadow-lg p-4">
          <Card.Body>
            <Card.Title className="text-center">
              <h2 className="heading heading-2">Donate Time</h2>
            </Card.Title>
            <Card.Text className="text-center">
              Volunteering your time helps us make a real difference. Your
              skills and efforts are invaluable to our cause.
            </Card.Text>

            <Row className="mt-3">
              {volunteeringMethods.map((method, idx) => (
                <Col key={idx} md={6} className="d-flex mb-3 mb-md-0">
                  <CardItem {...method} />
                </Col>
              ))}
            </Row>

            <Row className="mt-3 justify-content-center">
              <Col xs="auto" className="mb-3 mb-md-0">
                <StyledButton
                  text="Opening Hours"
                  onClick={() => (window.location.href = "/opening-hours")}
                />
              </Col>
              <Col xs="auto">
                <StyledButton
                  text="Contact Us"
                  onClick={() => (window.location.href = "/contact")}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default DonateTime;
