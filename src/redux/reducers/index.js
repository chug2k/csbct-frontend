import { combineReducers } from "redux";
import ToastReducer from "../Toast/ToastReducer";
import DonationRequestReducer from "../DonationRequest/DonationRequestReducer";
import DonationRequestsReducer from "../DonationRequests/DonationRequestsReducer";

export default combineReducers({
  toast: ToastReducer,
  requestDetail: DonationRequestReducer,
  requests: DonationRequestsReducer,

  // TODO: add reducers in here
});
