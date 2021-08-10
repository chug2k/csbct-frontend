import {
  DONATION_FAIL,
  DONATION_REQUEST,
  DONATION_SUCCESS,
} from "./DonationType";
import api from "../../apiService";
import { toastFail, toastSuccess } from "../Toast/ToastAction";
export const donationRequest = () => {
  return {
    type: DONATION_REQUEST,
  };
};

export const donationSuccess = (userData) => {
  return {
    type: DONATION_SUCCESS,
    payload: userData,
  };
};
export const donationFail = () => {
  return {
    type: DONATION_FAIL,
    payload: Error,
  };
};

export const DonationAction = (state) => {
  console.log("chay toi action", state);
  return (dispatch) => {
    dispatch(donationRequest);
    const getDonationResponse = async () => {
      try {
        const res = await api.post(`/donations/donations`, {
          DonationRequest: state.DonationRequest,
          amount: state.amount,
          email: state.email,
          receipt_image_url:
            "https://cdn.chanhtuoi.com/uploads/2014/10/w400/chuyen-tien-noi-mang-vietcombank-mien-phi-web-mobile.jpg.webp",
          confirmed_by_receiver: true,
          name: state.name,
        });
        const data = await res.data;
        dispatch(donationSuccess(data));
        dispatch(
          toastSuccess({
            mode: "donation",
            name: state.name,
            amount: state.amount,
          })
        );
      } catch (Error) {
        const errorMge = Error.message;
        console.log("donation post", errorMge);
        dispatch(donationFail(errorMge));
        dispatch(toastFail(errorMge));
      }
    };
    getDonationResponse();
  };
};
