import { Container, Row, Col, Image } from "react-bootstrap";
import "./ImageGallery.css";
import useFadeIn from "../../hooks/useFadeInOnScroll";

interface SupportersGalleryProps {
  logos: { default: string }[];
}

function SupportersGallery({ logos }: SupportersGalleryProps) {
  useFadeIn(".logo-item");

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        {logos.map((logo, index) => (
          <Col
            key={index}
            xs={6}
            md={4}
            lg={4}
            className="mb-4 logo-item text-center"
          >
            <Image
              src={logo.default}
              alt={`Supporter Logo ${index + 1}`}
              fluid
              className="logo-img"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SupportersGallery;
