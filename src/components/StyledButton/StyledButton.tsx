import React from "react";
import { Button } from "react-bootstrap";
import "./StyledButton.css";

interface StyledButtonProps {
  text: string;
  onClick?: () => void;
  size?: "sm" | "m" | "lg";
}

const StyledButton: React.FC<StyledButtonProps> = ({
  text,
  onClick,
  size = "m",
}) => {
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";

  return (
    <Button className={`btn-custom ${sizeClass}`} onClick={onClick}>
      {text}
    </Button>
  );
};

export default StyledButton;
