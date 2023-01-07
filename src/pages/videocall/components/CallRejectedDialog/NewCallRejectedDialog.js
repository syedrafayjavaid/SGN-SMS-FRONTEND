import React, { useEffect } from 'react';

import './CallRejectedDialog.css';

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


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {

  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      hideCallRejectedDialog({
        rejected: false,
        reason: '',
      })
      setOpen(false)
    }, [4000]);
    // eslint-disable-next-line
  }, []);

  return (


    <Dialog
      open={open}
      TransitionComponent={Transition}
      maxWidth={'xs'}
      fullWidth
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      {/* <DialogTitle style={{ background: "#0277bd", fontSize: "18px", color: "white" }} >{"Connecting..."}</DialogTitle> */}

      <DialogContent style={{ justifyContent: "center", display: 'flex', background: "#A93226 " }}>
        <DialogContentText style={{ fontSize: "16px", color: "white" }} >
          {reason}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default CallRejectedDialog;
