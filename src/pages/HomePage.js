import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Story from "../components/Story/Story";
import ReceiversCarousel from "../components/ReceiversCarousel/ReceiversCarousel";

import receiver from "../data";
import CarouselMainPage from "../components/CarouselMainPage/CarouselMainPage";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CarouselMainPage />
      {/* <Introduction /> */}
      <ReceiversCarousel items={receiver} />
      {/* <Story /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
