import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Channel,
  MessageInput,
  MessageList,
  useChatContext,
  Window,
} from "stream-chat-react";

import { EmptyStateIndicator } from "./ChatComponents/CustomerEmptyStateIndicator/EmptyStateIndicator";
import { CustomerChannelHeader } from "./ChatComponents/CustomerChannelHeader/CustomerChannelHeader";
import { CustomerMessageInput } from "./ChatComponents/MessageInput/CustomerMessageInput";

import { CloseCustomerIcon, OpenCustomerIcon } from "./assets";
import { toggleChatOpen } from "../../redux/actions/chat";

import "./FloatingChatWidget.css";

const FloatingChatWidget = () => {
  const { client: customerClient } = useChatContext();
  const channelId = useSelector((state) => state.chat.channelId);
  const name = useSelector((state) => state.chat.name);
  const avatarThumbnail = useSelector((state) => state.chat.avatarThumbnail);
  const open = useSelector((state) => state.chat.open);
  const dispatch = useDispatch();

  const [chatChannel, setChatChannel] = useState(null);

  useEffect(() => {
    const getCustomerChannel = async () => {
      if (!channelId) {
        return;
      }
      const newChannel = customerClient.channel("messaging", channelId, {
        name: "Probably more stuff in here",
      });

      if (newChannel.state.messages.length) {
        newChannel.state.clearMessages();
      }
      if (chatChannel) {
        await chatChannel.stopWatching();
      }

      await newChannel.watch();
      setChatChannel(newChannel);
    };

    getCustomerChannel();
  }, [channelId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={`customer-wrapper ${open ? "wrapper--open" : ""}`}>
      {open && chatChannel && (
        <Channel
          channel={chatChannel}
          EmptyStateIndicator={(props) => (
            <EmptyStateIndicator {...props} channel={chatChannel} />
          )}
          Input={(props) => (
            <CustomerMessageInput
              {...props}
              open={open}
              setOpen={(isOpen) => dispatch(toggleChatOpen(isOpen))}
            />
          )}
        >
          <Window>
            <CustomerChannelHeader
              name={name}
              avatarThumbnail={avatarThumbnail}
            />
            {open && (
              <div style={{ background: "#005fff" }}>
                <MessageList />
              </div>
            )}
            <MessageInput focus />
          </Window>
        </Channel>
      )}
      <div
        className={`toggle-button ${open && "close-button"}`}
        onClick={() => dispatch(toggleChatOpen())}
      >
        {channelId ? open ? <CloseCustomerIcon /> : <OpenCustomerIcon /> : null}
      </div>
    </div>
  );
};

export default FloatingChatWidget;
