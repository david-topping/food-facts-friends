import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StyledButton from "../StyledButton/StyledButton";

interface InfoCardProps {
  iconClass: string;
  title: string;
  description: string;
  link: string;
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { iconClass, title, description, link } = props;
  return (
    <Card
      className="text-center h-100 position-relative"
      style={{ width: "18rem" }}
    >
      <div
        className="position-relative d-flex justify-content-center align-items-center"
        style={{ height: "150px" }}
      >
        <i
          className={`bi ${iconClass} text-dark`}
          style={{ fontSize: "6rem", opacity: 0.8 }}
        ></i>
      </div>
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title className="heading heading-3">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link}>
          <StyledButton size="sm" text="Learn More" />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
