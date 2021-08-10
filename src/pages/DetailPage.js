import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  let { id } = useParams();

  return (
    <div>
      <Header />
      <h1> For {id} </h1>
      <Footer />
    </div>
  );
};

export default DetailPage;
