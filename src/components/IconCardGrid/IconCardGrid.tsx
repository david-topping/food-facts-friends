import { Container, Row, Col } from "react-bootstrap";
import IconCard from "../IconCard/IconCard";

interface CardGridProps {
  donationOptions: {
    iconClass: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const CardGrid: React.FC<CardGridProps> = ({ donationOptions }) => (
  <Container className="my-5">
    <Row>
      {donationOptions.map((option, idx) => (
        <Col key={idx} md={3} className="d-flex justify-content-center mb-4">
          <IconCard {...option} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default CardGrid;
