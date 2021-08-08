import React from "react";
import Card from "../ReceiverCard/ReceiverCard";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

const ReceiversCarousel = ({ items }) => {
  return (
    <Container>
      <Swiper spaceBetween={50} slidesPerView={4} navigation>
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
