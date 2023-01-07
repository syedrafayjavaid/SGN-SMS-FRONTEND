import React from 'react';
import './CallingDialog.css';
import { hangUp } from '../../../../utils/webRTC/webRTCHandler';
import { MdCallEnd } from 'react-icons/md';

import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
  IconButton
} from '@mui/material'

import AddIcCallIcon from '@mui/icons-material/AddIcCall';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const CallingDialog = () => {

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleHangUpButtonPressed = () => {
    hangUp();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      maxWidth={'xs'}
      fullWidth
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle style={{ background: "#0277bd", fontSize: "18px", color: "white" }} >{"Connecting..."}</DialogTitle>
      <DialogContent style={{ justifyContent: "center", display: 'flex', background: "#0277bd" }}>
        <Button variant="contained" onClick={handleHangUpButtonPressed} color="error" style={{ borderRadius: "100px", height: "60px", width: "60px" }} >
          <AddIcCallIcon />
        </Button>
        <DialogContentText style={{ fontSize: "16px", color: "#0277bd" }} >
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default CallingDialog;
