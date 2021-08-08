import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Dialog, TextField, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import "./styles.css"


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [ money, setMoney] = useState(null);
  const [ moneyVND, setMoneyVND] = useState(null)
  const [ other, setOther] = useState('');
  const request = {
    "money": money,
    "others": other,
    "userId": '',
  }

  let VND = Intl.NumberFormat("en-VN", {
    style: "currency",
    currency: "VND",
});
  const handleClickOpen = () => {
    console.log(localStorage.getItem("isLoggedIn"))
    if (localStorage.getItem("isLoggedIn") === true) {
    setOpen(true);
    } else {
      alert('Please log in to use this function.');
      window.location.replace("/login")
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const handleMoneyInput = (e) => {
    setMoneyVND(VND.format(e.target.value));
    setMoney(e.target.value)
  }

    // const handleRequest = (e) => {
    //   e.preventDefault();
    //   if (localStorage.getItem("isLoggedIn") === true) {
    //      window.location.replace("/request")
    //   } else {
    //     alert('Please log in to use this function.')
    //     window.location.replace("/login")
    //   }
    // }

  

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
          
          
          <div className="NavBar">
          <Typography variant="h6" >
            News
          </Typography>
          <div>
          <Button variant="outlined" color="danger" onClick={handleClickOpen}>
           Make a request
          </Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/signup">Sign up</Button>
          </div>
          </div>
        </Toolbar>
      </AppBar>


      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">What do you request for?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please help us understand your needs better through the below information. We will send help as soon as possible.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="money"
            label="How much money do you need? *"
            type="number"
            fullWidth
            onChange={handleMoneyInput}
          /> {moneyVND}

          {/* <TextField
            autoFocus
            margin="dense"
            id="other"
            label="Do you need something else? *"
            type="text"
            fullWidth
            onChange={handleOtherInput}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
}


export default NavBar