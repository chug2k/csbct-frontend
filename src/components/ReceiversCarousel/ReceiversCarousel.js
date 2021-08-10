import React from "react";
import Card from "../ReceiverCard/ReceiverCard";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

const ReceiversCarousel = ({ items }) => {
  return (
    <Container>
      <h2 style={{ color: "grey" }}>Featured Projects</h2>
      <br></br>
      <Row xs={12} md={3} lg={4}>
        {items.map((i) => (
          <Card {...i} />
        ))}
      </Row>
    </Container>
  );
};

export default ReceiversCarousel;
