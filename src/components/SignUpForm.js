import React, { useState } from "react";
import { TextField, FormControlLabel, Checkbox, Button} from "@material-ui/core";
import {Favorite, FavoriteBorder} from '@material-ui/icons';
import Input from 'react-phone-number-input';


const SignUpForm = ({setIsSubmitted, setAlert}) => {
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

    console.log("user data", data)

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


    return (
        <form  className="formSignUp" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <h1 style={{color:"#ff4c68", marginBottom:"2rem"}}>SIGN UP FOR FREE</h1>
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
       <Button variant="contained" color="primary" className="submit" type="submit" style={{backgroundColor:"#ff4c68"}}>
          Submit
       </Button>
       </span>
       <p>Already have account? <a href="/login">Log in now</a></p>
     </form>
    )
};
export default SignUpForm