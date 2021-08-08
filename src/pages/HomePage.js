import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Story from "../components/Story/Story";
import ReceiversCarousel from "../components/ReceiversCarousel/ReceiversCarousel";

import receiver from "../data";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <ReceiversCarousel items={receiver} />
      <Story />
      <Footer />
    </div>
  );
};

export default HomePage;
