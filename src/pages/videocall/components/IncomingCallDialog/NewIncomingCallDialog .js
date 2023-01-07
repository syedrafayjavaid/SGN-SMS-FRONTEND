import React from 'react';
import { acceptIncomingCallRequest, rejectIncomingCallRequest } from '../../../../utils/webRTC/webRTCHandler';

import './NewIncomingCallDialog.css';

// Mui imports
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const NewIncomingCallDialog = ({ callerUsername }) => {

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAcceptButtonPressed = () => {
    acceptIncomingCallRequest();

  };

  const handleRejectButtonPressed = () => {
    rejectIncomingCallRequest();

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
      <DialogTitle style={{ background: "#0277bd", fontSize: "18px", color: "white" }} >{"New Incoming Call"}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontSize: "16px", color: "#0277bd" }} >
          <br></br>
          Caller:  {callerUsername}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className="direct_call_dialog_accept_button" variant="contained" onClick={handleAcceptButtonPressed} startIcon={<AddIcCallIcon />} >Accept</Button>
        <Button className='direct_call_dialog_reject_button' variant="contained" onClick={handleRejectButtonPressed} startIcon={<PhoneDisabledIcon />}>Reject</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewIncomingCallDialog;
