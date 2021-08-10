import React from "react";
import "./ReceiverCard.css";
import { Card, CardGroup, Col, ProgressBar, Row } from "react-bootstrap";

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
        <Row className="card-space ">
          <Col xs={12} md={3} lg={4}>
            <Card
              style={{
                width: "16rem",
                marginBottom: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={imgURL}
                style={{
                  width: "100%",
                  height: "10rem",
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
              <ProgressBar variant="success" now={40} />
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </>
  );
};

export default ReceiverCard;
