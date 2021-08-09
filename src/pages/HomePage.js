import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Story from "../components/Story/Story";
import ReceiversCarousel from "../components/ReceiversCarousel/ReceiversCarousel";
import FloatingChatWidget from "../components/FloatingChatWidget/FloatingChatWidget";

import receiver from "../data";

import { Chat } from "stream-chat-react";
import { StreamChat } from "stream-chat";
const chatClient = StreamChat.getInstance("nqvxpztnqfd8");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2ludGVyLWxlYWYtNCJ9.YCJTAKML_1brk4lMjokqVXqdt-ujFOeYKRUlX20MZGQ";
chatClient.connectUser(
  {
    id: "winter-leaf-4",
    name: "winter-leaf-4",
    image:
      "https://getstream.io/random_png/?id=winter-leaf-4&name=winter-leaf-4",
  },
  userToken
);

const HomePage = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <ReceiversCarousel items={receiver} />
      <Chat client={chatClient} theme={`messaging light`}>
        <FloatingChatWidget />
      </Chat>

      <Story />
      <Footer />
    </div>
  );
};

export default HomePage;
