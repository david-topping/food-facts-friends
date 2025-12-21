import { Card } from "react-bootstrap";
import StyledButton from "../StyledButton/StyledButton";

interface CardItemProps {
  title: string;
  subtitle?: string | JSX.Element;
  description: string | JSX.Element;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  subtitle,
  buttonText,
  onButtonClick,
}) => (
  <Card className="border-muted text-center p-3 w-100 h-100 d-flex flex-column">
    <Card.Body className="d-flex flex-column justify-content-between">
      <Card.Title className="heading heading-4">{title}</Card.Title>

      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <Card.Text className="mt-2">{description}</Card.Text>
      </div>

      {buttonText && onButtonClick && (
        <StyledButton text={buttonText} onClick={onButtonClick} />
      )}

      {subtitle && (
        <Card.Subtitle className="mt-2 text-muted">{subtitle}</Card.Subtitle>
      )}
    </Card.Body>
  </Card>
);

export default CardItem;
