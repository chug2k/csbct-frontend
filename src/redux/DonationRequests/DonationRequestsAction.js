import {
  FETCH_DRALL_START,
  FETCH_DRALL_FAIL,
  FETCH_DRALL_SUCCESS,
} from "./DonationRequestsType";

const getDonationRequests = () => async (dispatch) => {
  dispatch({ type: FETCH_DRALL_START, payload: null });
  try {
    const res = await fetch(`http://localhost:5000/donation_requests`);
    const json = await res.json();
    console.log(json);
    dispatch({
      type: FETCH_DRALL_SUCCESS,
      payload: json.data.requests,
    });
  } catch (error) {
    dispatch({ type: FETCH_DRALL_FAIL, payload: error });
  }
};

export { getDonationRequests };
