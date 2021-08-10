import { combineReducers } from "redux";
import DonationUserReducer from "../Giverdonations/DonationReducer";
import ToastReducer from "../Toast/ToastReducer";

export default combineReducers({
  toast: ToastReducer,
  donation: DonationUserReducer,

  // TODO: add reducers in here
});
