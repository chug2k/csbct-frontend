import React from "react";
import ReceiverBankAccount from "../../components/ReceiverBankAccount/ReceiverBAnkAccount";
import ToastSoS from "../../components/Toast/Toast";
import Header from "../../components/Header/Header";
import Imgupload from "../../components/Imgupload/Imgupload";

function BankTransfer() {
  return (
    <div>
      <Header />
      <ToastSoS />
      <ReceiverBankAccount />
    </div>
  );
}

export default BankTransfer;
