import {
  DONATION_FAIL,
  DONATION_REQUEST,
  DONATION_SUCCESS,
} from "./DonationType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

function DonationUserReducer(state = initialState, action) {
  switch (action.type) {
    case DONATION_REQUEST:
      return { ...state, loading: true };
    case DONATION_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case DONATION_FAIL:
      return {
        loading: false,
        user: [],
        error: action.error,
      };
    default:
      return state;
  }
}

export default DonationUserReducer;
