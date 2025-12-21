import { Container, Row, Col, Card } from "react-bootstrap";
import { AboutText } from "./AboutInfo";
import eventBanner from "../../assets/images/banners/event.jpg";
import Banner from "../../components/Banner/Banner";

function About() {
  return (
    <>
      <Banner imageSrc={eventBanner} altText="Community" />

      <Container className="mt-5">
        <Row className="text-center">
          {AboutText.services.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 shadow border-0">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="heading heading-3">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-muted d-flex flex-grow-1 justify-content-center">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-5 text-center">
          <Col md={10} className="mx-auto">
            <h2 className="heading heading-2">Our Impact</h2>
            <p className="lead">{AboutText.impact}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
