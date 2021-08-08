import React from "react";
import "./ReceiverCard.css";
import { Card } from "react-bootstrap";

const ReceiverCard = ({
  imgURL,
  name,
  location,
  need,
  requestingFor,
  details,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={imgURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{need}</Card.Subtitle>
        <Card.Text>
          <p>Location: {location}</p>
          <p>Requesting for: {requestingFor}</p>
          <p className="small">Details: {details}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReceiverCard;
