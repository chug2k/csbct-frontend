import React from "react";
import ReceiverCard from "../ReceiverCard/ReceiverCard";
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
            <ReceiverCard {...i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ReceiversCarousel;
