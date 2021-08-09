import { SET_CHAT_CHANNEL_INFO, TOGGLE_CHAT_OPEN } from "../constants/chat";

const initialState = {
  channelId: "",
  avatarThumbnail: "",
  name: "",
  open: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CHAT_CHANNEL_INFO:
      return { ...state, ...action.payload, open: true };
    case TOGGLE_CHAT_OPEN:
      return { ...state, open: action.payload || !state.open };
    default:
      return state;
  }
}
