import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/LocalVideoView';
import RemoteVideoView from '../RemoteVideoView/RemoteVideoView';
// import CallRejectedDialog from '../CallRejectedDialog/CallRejectedDialog';
// import IncomingCallDialog from '../IncomingCallDialog/IncomingCallDialog';
// import CallingDialog from '../CallingDialog/CallingDialog';
import { callStates, setCallRejected, setLocalCameraEnabled, setLocalMicrophoneEnabled, setMessage } from '../../../../store/actions/callActions';
import ConversationButtons from '../ConversationButtons/ConversationButtons';
import Messenger from '../Messenger/Messenger';
import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

// new imports
import NewIncomingCallDialog from '../IncomingCallDialog/NewIncomingCallDialog ';
import CallingDialog from '../CallingDialog/NewCallingDialog';
import CallRejectedDialog from '../CallRejectedDialog/NewCallRejectedDialog';

import './DirectCallCss.css';


const DirectCall = (props) => {
  const {
    localStream,
    remoteStream,
    callState,
    callerUsername,
    callingDialogVisible,
    callRejected,
    hideCallRejectedDialog,
    setDirectCallMessage,
    message
  } = props;

  return (


    <Grid container style={{ borderRadius: "12px" }} >
      <Grid item xs={2}>

      </Grid>
      <Grid item xs={8} style={{ height: "500px" }}>
        <Grid className="container"  >
          <LocalVideoView localStream={localStream} />
          {remoteStream && callState === callStates.CALL_IN_PROGRESS && <RemoteVideoView remoteStream={remoteStream} />}
        </Grid>
      </Grid>

      <Grid item xs={2}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        {remoteStream && callState === callStates.CALL_IN_PROGRESS && <ConversationButtons {...props} />}

      </Grid>
      {callRejected.rejected && <CallRejectedDialog reason={callRejected.reason} hideCallRejectedDialog={hideCallRejectedDialog} />}
      {callState === callStates.CALL_REQUESTED && <NewIncomingCallDialog callerUsername={callerUsername} />}
      {callingDialogVisible && <CallingDialog />}

    </Grid>
  );
};

function mapStoreStateToProps({ call }) {
  return {
    ...call
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideCallRejectedDialog: (callRejectedDetails) => dispatch(setCallRejected(callRejectedDetails)),
    setCameraEnabled: (enabled) => dispatch(setLocalCameraEnabled(enabled)),
    setMicrophoneEnabled: (enabled) => dispatch(setLocalMicrophoneEnabled(enabled)),
    setDirectCallMessage: (received, content) => dispatch(setMessage(received, content))
  };
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);
