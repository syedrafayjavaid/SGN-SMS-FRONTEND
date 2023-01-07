import React, { useEffect, useState } from 'react';
import * as webRTCHandler from '../../../utils/webRTC/webRTCHandler';
import * as webRTCGroupHandler from '../../../utils/webRTC/webRTCGroupCallHandler';
import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import GroupCallRoomsList from '../components/GroupCallRoomsList/GroupCallRoomsList';
import GroupCall from '../components/GroupCall/GroupCall';


const GroupVideoCall = () => {
    useEffect(() => {
        webRTCHandler.getLocalStream();
        webRTCGroupHandler.connectWithMyPeer();
    }, []);

    return (
        <MainCard title="Group Video Calling">
            <Grid container spacing={2}>
                <GroupCall />
            </Grid>
            <br></br>
            <br></br>
            <Grid container spacing={1}>
                <h2>
                    Active Groups
                </h2>

            </Grid>
            <Grid container >
                <GroupCallRoomsList />
            </Grid>
        </MainCard>

    )
}

export default GroupVideoCall