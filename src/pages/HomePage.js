import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Story from "../components/Story/Story";

import Card from "../components/Card/Card";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Card />
      <Story />
      <Footer />
    </div>
  );
};

export default HomePage;
