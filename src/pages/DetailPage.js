import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getDonationRequest } from "../redux/DonationRequest/DonationRequestAction";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getDonationRequest(id)), []);
  const { media, need, amount_remaining, receiver, details, createdAt } =
    useSelector((state) => state.requestDetail.donationRequest);

  return (
    <div>
      <Container>
        {/* First header */}
        <Row>
          <Col md={8}>
            <Row>
              <Col>
                <h1>{receiver && receiver.name} </h1>
                <p> {details} </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={media}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col>{(amount_remaining / need) * 100}% remaining</Col>
            </Row>
            <Row>
              <Col>{need}</Col>
              <Col>{amount_remaining}</Col>
            </Row>
            <Row>
              <Col>
                <Link to={`/donate/${id}`}>
                  <Button>Make a Donation</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DetailPage;
