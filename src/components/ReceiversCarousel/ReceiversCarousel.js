import React from "react";
import "./ReceiverCarousel.css";
import Card from "../ReceiverCard/ReceiverCard";
import SwiperCore, { Navigation } from "swiper";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

const ReceiversCarousel = ({ items }) => {
  return (
    <Container>
      <Swiper spaceBetween={-550} slidesPerView={3} navigation>
        {items.map((i) => (
          <SwiperSlide>
            <Card {...i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ReceiversCarousel;
