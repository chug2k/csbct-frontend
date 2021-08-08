import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import RequestForm from "./RequestForm";


const NavBar = () => {
  const [open, setOpen] = useState(false);
 
  const history = useHistory();



  const HandleClickOpen = () => {
    console.log( typeof localStorage.getItem("isLoggedIn"))
    if (localStorage.getItem("isLoggedIn") === "true") {
      console.log("if")
    setOpen(true);
    } else {
      console.log("else")
      alert('Please log in to use this function.');
      history.push("/login")
    }
  };



    return (
      <>
        <AppBar position="static">
        <Toolbar>
         
           <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>

            <IconButton dge="start" color="inherit" aria-label="home" href="/">
            <HomeIcon />
          </IconButton>
          
          
          <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
          <Typography variant="h6" >
            News
          </Typography>
          <div>
          <Button variant="outlined" color="danger" onClick={HandleClickOpen}>
           Make a request
          </Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/signup">Sign up</Button>
          </div>
          </div>
        </Toolbar>
      </AppBar>

       <RequestForm open={open} setOpen={setOpen}/>
      
      </>
    )
}


export default NavBar