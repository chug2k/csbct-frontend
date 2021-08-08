import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userData = { "email": email, "password": password};
    const history = useHistory();
    localStorage.setItem("isLoggedIn", false)
    console.log(userData)

    const handleEmail= (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("isLoggedIn", true);
        history.push("/")
    }

    return (
        <form  className="formSignUp" noValidate autoComplete="off" onSubmit={handleSubmit}>
       <h1>WELCOME BACK!</h1>
      <TextField placeholder="Input your email" id="outlined-basic" className="text-field" label="Username" type="email" variant="outlined" onChange={handleEmail}/> < br/>
      <TextField placeholder="Input your password" id="outlined-basic" className="text-field" label="Password" type="password" variant="outlined" onChange={handlePassword}/> <br />

      <span>
      <Button variant="contained" color="primary" className="submit" type="submit">
         Submit
      </Button>
      <p>Don't have account? <a href="/signup">Sign up now</a></p>
      </span>
      </form>
    )
};


export default LogInPage;