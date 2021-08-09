import { SET_CHAT_CHANNEL_INFO, TOGGLE_CHAT_OPEN } from "../constants/chat";

export const setChatChannelInfo = (channelId, name, avatarThumbnail) => {
  return {
    type: SET_CHAT_CHANNEL_INFO,
    payload: { channelId, name, avatarThumbnail },
  };
};
export const toggleChatOpen = (isOpen) => {
  return {
    type: TOGGLE_CHAT_OPEN,
    payload: isOpen,
  };
};
