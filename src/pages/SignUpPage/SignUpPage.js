import React from "react";
import "./signUp.styles.css";
import 'react-phone-number-input/style.css'
import { useState } from "react";
import AlertError from "../../components/AlertError";
import AlertSuccess from "../../components/AlertSuccess";
import OTPForm from "../../components/OTPForm";
import SignUpForm from "../../components/SignUpForm";


const SignUpPage = () => {
  
   const [alert, setAlert] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [otp, setOtp] = useState('');
   const [success, setSuccess] = useState(false)


   const handleOtp = (e) => {
       setOtp(e.target.value)
   }

   const handleSubmitOTP = (e) => {
       e.preventDefault();
       if (otp) {
        setAlert(false);
        setSuccess(true)}
       else {
           setAlert(true);
           setSuccess(false);
       }
   }


    return (
        <>
       <AlertError alert={alert} isSubmitted={isSubmitted}/>
       <AlertSuccess success={success} />

    { isSubmitted ? (
        <OTPForm handleSubmitOTP={handleSubmitOTP} handleOtp={handleOtp} />
    ) : (
       <SignUpForm setIsSubmitted={setIsSubmitted} setAlert={setAlert}/>
    )}
    
    </>
    )
}

export default SignUpPage;