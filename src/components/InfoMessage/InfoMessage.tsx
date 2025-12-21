import React from "react";
import "./InfoMessage.css";

interface CommunityHubMessageProps {
  text: string;
}

const InfoMessage: React.FC<CommunityHubMessageProps> = ({ text }) => (
  <p className="hubMessageText">{text}</p>
);

export default InfoMessage;
