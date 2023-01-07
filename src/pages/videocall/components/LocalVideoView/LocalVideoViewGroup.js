import React, { useRef, useEffect } from 'react';
import { Card } from '@mui/material'

const styles = {
  videoContainer: {
    width: '200px',
    height: '200px',
    zIndex: '9',
    top: 120,
    position: 'relative',
  },
  videoElement: {
    width: '100%',
    height: '100%'
  }
};

const LocalVideoView = props => {
  const { localStream } = props;
  const localVideoRef = useRef();

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);

  return (
    <div style={styles.videoContainer} >
      <video style={styles.videoElement} ref={localVideoRef} autoPlay muted />
    </div>
  );
};

export default LocalVideoView;
