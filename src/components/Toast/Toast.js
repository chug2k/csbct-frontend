import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function ToastSoS() {
  const toastState = useSelector((state) => state.toast);
  console.log("check", toastState);
  return toastState.loading ? (
    <Spinner animation="border" variant="primary" />
  ) : toastState.state.mode === "" ? (
    <div>
      {/* <center>
        <div className="bg-danger ">
          <div className="bg-danger  ">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-white">
              Donation is have to fill in!
            </strong>
          </div>
          <div className="text-white">Please input again</div>
        </div>
      </center> */}
    </div>
  ) : toastState.state.amount ? (
    <div>
      <center>
        <div className="bg-success ">
          <div className="bg-success  ">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-white">
              Thank you so much for you donation! {toastState.state.name}!
            </strong>
          </div>
          <div className="text-white">
            Your contribution certificate will be sent to your mail box
          </div>
        </div>
      </center>
    </div>
  ) : (
    <div>
      {/* <center>
        <div className="bg-danger ">
          <div className="bg-danger  ">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-white">
              Donation is have to fill in!
            </strong>
          </div>
          <div className="text-white">Please input again</div>
        </div>
      </center> */}
    </div>
  );
}

export default ToastSoS;
