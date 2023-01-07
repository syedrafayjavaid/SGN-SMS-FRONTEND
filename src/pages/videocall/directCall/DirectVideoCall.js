import React, { useEffect, useState } from 'react';
import logo from '../../resources/logo.png';
import ActiveUsersList from '../components/ActiveUsersList/ActiveUsersList';
import * as webRTCHandler from '../../../utils/webRTC/webRTCHandler';
import * as webRTCGroupHandler from '../../../utils/webRTC/webRTCGroupCallHandler';
import DirectCall from '../components/DirectCall/DirectCall';
import { connect } from 'react-redux';
import DashboardInformation from '../components/Dashboardinformation/Dashboardinformation';
import { callStates } from '../../../store/actions/callActions';
import GroupCallRoomsList from '../components/GroupCallRoomsList/GroupCallRoomsList';
import GroupCall from '../components/GroupCall/GroupCall';
import './videocall.css';

import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

const DirectVideoCall = ({ username, callState }) => {

    useEffect(() => {
        webRTCHandler.getLocalStream();
        webRTCGroupHandler.connectWithMyPeer();
    }, []);

    return (

        <MainCard title="Direct Video Calling">
            <Grid container spacing={2}>
                <DirectCall />
            </Grid>
            <Grid container spacing={1}>
                <h2>
                    Active users List
                </h2>
                <ActiveUsersList />
            </Grid>
            <br></br>
            <br></br>
        </MainCard>
    );
};

const mapStateToProps = ({ call, dashboard }) => ({
    ...call,
    ...dashboard
});

export default connect(mapStateToProps)(DirectVideoCall);
