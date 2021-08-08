import React, { useState } from "react";
import { Dialog, TextField, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";


const RequestForm = ({open, setOpen}) => {
    const [ money, setMoney] = useState(null);
    const [ moneyVND, setMoneyVND] = useState(null)
    const [ other, setOther] = useState('');
    
    const request = {
      "money": money,
      "others": other,
      "userId": '',
    }
console.log("request", request)
    let VND = Intl.NumberFormat("en-VN", {
        style: "currency",
        currency: "VND",
    });
    
  const handleClose = () => {
    setOpen(false);
  };
  

  const handleMoneyInput = (e) => {
    setMoneyVND(VND.format(e.target.value));
    setMoney(e.target.value)
  }

  const handleOtherInput = (e) => {
    setOther(e.target.value)
  }

    return (
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

          <TextField
            autoFocus
            margin="dense"
            id="other"
            label="Do you need something else?"
            type="text"
            fullWidth
            onChange={handleOtherInput}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
};

export default RequestForm;