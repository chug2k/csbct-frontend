import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToastSoS from "../../Components/Toast/Index";
import ReceiverBankAccount from "../../Components/ReceiverBankAccount/Index";
import NumberFormat from "react-number-format";

function BankTransfer() {
  return (
    <div>
      <ToastSoS />
      <ReceiverBankAccount />
    </div>
  );
}

export default BankTransfer;
