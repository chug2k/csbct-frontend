import React from "react";
import { TextField, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import {Alert, AlertTitle} from '@material-ui/lab/';
import {Favorite, FavoriteBorder} from '@material-ui/icons';
import "./signUp.styles.css";
import Input from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { useState } from "react";


const SignUpPage = () => {
   const [phone, setPhone] = useState('')
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const data = {
       "name": name,
       "email": email,
       "password": password,
       "phone": phone,
   };
   const [checked, setChecked] = useState(false)
   const [alert, setAlert] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [otp, setOtp] = useState('');
   const [success, setSuccess] = useState(false)

   const handleName = (e) => {
       setName(e.target.value)
   }

   const handleEmail = (e) => {
       setEmail(e.target.value)
   }

   const handlePassword = (e) => {
       setPassword(e.target.value)
   }

   const handleCheck = (e) => {
       if (e.target.checked) {
           setChecked(true)
       }
   }

   const handleSubmit = (e) => {
       e.preventDefault();
       if(!name || !email || !email.includes("@") || !password || !phone || phone.length !== 12 || checked === false) {
         setAlert(true)
       } else {
        setAlert(false);
        setIsSubmitted(true)
       }
   }

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


   console.log("user data", data)
    return (
        <>
       
        <Alert severity="error" style={{display: alert ? "block" : "none"}}>
           <AlertTitle>Error</AlertTitle> {isSubmitted ? "This field is required." : "Please fill down the valid content in all below fields and check our Temrs & Conditions."}
            — <strong>Check again!</strong>
        </Alert>

        <Alert severity="success" style={{display: success ? "block": "none"}}>
        <AlertTitle>Success</AlertTitle>
        Your account has been created successfully — <strong><a href="/login">You may log in right here.</a></strong>
      </Alert>

    { isSubmitted ? (
         <form  className="formSignUp" noValidate autoComplete="off" onSubmit={handleSubmitOTP}>
       <div>
           <TextField id="standard-basic" label="SMS OTP" type="number" onChange={handleOtp}/>
           <Button variant="contained">Resend</Button>
        </div> <br />

       <span>
       <Button variant="contained" color="primary" className="submit" type="submit">
         Submit
      </Button>
      </span>
       </form>
    ) : (
       <form  className="formSignUp" noValidate autoComplete="off" onSubmit={handleSubmit}>
       <h1>SIGN UP FOR FREE</h1>
      <TextField placeholder="Input your name" id="outlined-basic" className="text-field" label="Username" type="text" variant="outlined" onChange={handleName}/> < br/>
      <TextField placeholder="Input your email" id="outlined-basic" className="text-field" label="Email" type="email" variant="outlined" onChange={handleEmail}/> < br/>
      <TextField placeholder="Input your password" id="outlined-basic" className="text-field" label="Password" type="password" variant="outlined" onChange={handlePassword} /> < br/>
      
      <div style={{alignSelf:"flex-start"}}>Phone number</div>
      <Input
      defaultCountry="VN"
      international
      value={phone}
      onChange={setPhone} 
      /> <p style={{fontSize:"small"}}>A valid phone number starts with Vietnam national code "+84" and must contain 11 digits (including national code).</p>
      
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" onClick={handleCheck}/>}
        label="I agree with the Term and Conditions."
      /> <br />
      <span>
      <Button variant="contained" color="primary" className="submit" type="submit">
         Submit
      </Button>
      </span>
      <p>Already have account? <a href="/login">Log in now</a></p>
    </form>
    )}
    
    </>
    )
}

export default SignUpPage;