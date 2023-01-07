import React from 'react';
import { connect } from 'react-redux';
import GroupCallButton from '../GroupCallButton/GroupCallButton';
import { callStates, setLocalCameraEnabled, setLocalMicrophoneEnabled } from '../../../../store/actions/callActions';
import * as webRTCGroupCallHandler from '../../../../utils/webRTC/webRTCGroupCallHandler';
import GroupCallRoom from '../GroupCallRoom/GroupCallRoom';
import LocalVideoViewGroup from '../LocalVideoView/LocalVideoView';

import { Grid, Typography } from '@mui/material';

const GroupCall = (props) => {
  // eslint-disable-next-line
  const { callState, localStream, groupCallActive, groupCallStreams } = props;

  const createRoom = () => {
    webRTCGroupCallHandler.createNewGroupCall();
  };

  const leaveRoom = () => {
    webRTCGroupCallHandler.leaveGroupCall();
  };

  return (
    <>

      <Grid container>
        <LocalVideoViewGroup localStream={localStream} />
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          {!groupCallActive && localStream && callState !== callStates.CALL_IN_PROGRESS &&
            <GroupCallButton onClickHandler={createRoom} label='Create room' />}
        </Grid>
      </Grid>

      {groupCallActive && <GroupCallRoom {...props} />}
      {groupCallActive && <GroupCallButton onClickHandler={leaveRoom} label='Leave room' />}
    </>
  );
};

const mapStoreStateToProps = ({ call }) => ({
  ...call
});

const mapActionsToProps = (dispatch) => {
  return {
    setCameraEnabled: enabled => dispatch(setLocalCameraEnabled(enabled)),
    setMicrophoneEnabled: enabled => dispatch(setLocalMicrophoneEnabled(enabled))
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(GroupCall);
