import React from "react";
import "./ReceiverCard.css";
import { Card, CardGroup, Col, Row } from "react-bootstrap";


const ReceiverCard = ({
  imgURL,
  name,
  location,
  need,
  requestingFor,
  details,
}) => {
  return (
    <>
      <CardGroup>
        <Row className="card-space">
          <Col xs={12} md={3} lg={4}>
            <Card
              style={{
                width: "16rem",
              }}
            >
              <Card.Img
                variant="top"
                src={imgURL}
                style={{
                  width: "16rem",
                  height: "45vh",
                  backgroundPosition: "center",
                }}
              />
              <Card.Body>
                <Card.Title>Requesting for {requestingFor}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {need} VND
                </Card.Subtitle>
                <Card.Text>
                  <div>
                    <p>Location: {location}</p>
                    <p>{name}</p>
                    <a href="" style={{ color: "grey" }}>
                      Read more
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </>
  );
};

export default ReceiverCard;
