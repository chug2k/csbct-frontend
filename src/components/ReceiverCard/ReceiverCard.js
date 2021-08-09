import React from "react";
import "./ReceiverCard.css";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setChatChannelInfo } from "../../redux/actions/chat";

const ReceiverCard = ({
  imgURL,
  name,
  location,
  need,
  requestingFor,
  details,
}) => {
  const dispatch = useDispatch();

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
        <Button
          onClick={() =>
            dispatch(
              setChatChannelInfo(`test-${name.split(" ")[0]}`, name, imgURL)
            )
          }
        >
          Start a Conversation
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ReceiverCard;
