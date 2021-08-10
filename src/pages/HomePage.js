import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Story from "../components/Story/Story";
import ReceiversCarousel from "../components/ReceiversCarousel/ReceiversCarousel";

import receiver from "../data";
import CarouselMainPage from "../components/CarouselMainPage/CarouselMainPage";
import Carousel2 from "../components/CarouselMainPage/Carousel2";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Carousel2 />
      <Introduction />
      <br />
      <center>
        <ReceiversCarousel items={receiver} />
      </center>
      <Story />
      <center>
        <ReceiversCarousel items={receiver} />
      </center>
      <Footer />
    </div>
  );
};

export default HomePage;
