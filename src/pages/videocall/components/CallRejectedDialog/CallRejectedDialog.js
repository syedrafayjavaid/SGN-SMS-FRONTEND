import React, { useEffect } from 'react';

import './CallRejectedDialog.css';

const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {
  useEffect(() => {
    setTimeout(() => {
      hideCallRejectedDialog({
        rejected: false,
        reason: ''
      });
    }, [4000]);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='call_rejected_dialog'>
      <span style={{ color: "white" }}>
        {reason}
      </span>
    </div>
  );
};

export default CallRejectedDialog;
