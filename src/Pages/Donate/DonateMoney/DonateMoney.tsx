import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardItem from "../../../components/CardItem/CardItem";
import StyledButton from "../../../components/StyledButton/StyledButton";
import { donationMethods } from "./donationMethods";

// (bad practice will update)
import FFFDonationForm from "../../../assets/pdfs/donation_form.pdf";
import GiftAidDeclaration from "../../../assets/pdfs/gift_aid_declaration.pdf";

const DonateMoney: React.FC = () => (
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col md={10}>
        <Card className="shadow-lg p-4">
          <Card.Body>
            <Card.Title className="text-center">
              <h2 className="heading heading-2">Financial Donation</h2>
            </Card.Title>
            <Card.Text className="text-center">
              We rely on voluntary income to keep our Community Hub operating.
              Every donation helps us continue supporting people in crisis.
            </Card.Text>

            <Row className="mt-3">
              {donationMethods.map((method, idx) => (
                <Col key={idx} md={6} className="d-flex mb-3 mb-md-0">
                  <CardItem {...method} />
                </Col>
              ))}
            </Row>

            <Row className="mt-3 justify-content-center">
              <Col xs="auto" className="mb-3 mb-md-0">
                <StyledButton
                  text="FFF Donation Form"
                  onClick={() => window.open(FFFDonationForm)}
                />
              </Col>
              <Col xs="auto">
                <StyledButton
                  text="Gift Aid Declaration"
                  onClick={() => window.open(GiftAidDeclaration)}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default DonateMoney;
