import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Story from "../components/Story/Story";
import ReceiversCarousel from "../components/ReceiversCarousel/ReceiversCarousel";

import receiver from "../data";
import CarouselMainPage from "../components/CarouselMainPage/CarouselMainPage";
import Carousel2 from "../components/CarouselMainPage/Carousel2";

import { getDonationRequests } from "../redux/DonationRequests/DonationRequestsAction";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getDonationRequests()), []);
  const donationRequests = useSelector(
    (state) => state.requests.donationRequests
  );
  console.log("donat", donationRequests);
  return (
    <div>
      {/* <Carousel2 /> */}
      <Introduction />
      <br />
      <center>
        <ReceiversCarousel items={donationRequests || []} />
      </center>
      <Story />
      <center>
        <ReceiversCarousel items={donationRequests || []} />
      </center>
      <Footer />
    </div>
  );
};

export default HomePage;
