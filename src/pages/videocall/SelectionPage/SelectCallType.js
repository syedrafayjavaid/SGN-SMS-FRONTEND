import React, { useEffect, useState } from 'react';
import logo from '../../resources/logo.png';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';
import DirectCall from '../components/DirectCall/DirectCall';
import { connect } from 'react-redux';
import { Button } from '@mui/material'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AnimateButton from 'components/@extended/AnimateButton';

import './SelectionPage.css';

const SelectCallType = ({ username, callState }) => {

    const navigate = useNavigate();

    const directCall = () => {
        navigate('/videocall/directCall')
    }

    const groupCall = () => {

        navigate('/videocall/groupCall')
    }


    return (
        <div className='login-page_container background_main_color'>
            <div className='login-page_login_box background_secondary_color'>
                <div className='login-page_logo_container'>
                    <img className='login-page_logo_image' src={logo} alt='VideoTalker' />
                </div>
                {/* <UsernameInput username={username} setUsername={setUsername} /> */}
                <AnimateButton onClick={directCall} >
                    <Button variant="contained" onClick={directCall} style={{ backgroundColor: "black" }} startIcon={<VideoCallIcon />} fullwidth >
                        Direct call
                    </Button>
                </AnimateButton>
                <AnimateButton onClick={groupCall} >
                    <Button variant="contained" onClick={groupCall} style={{ backgroundColor: "black" }} startIcon={<VideoCallIcon />} fullwidth >
                        Group call
                    </Button>
                </AnimateButton>
            </div>
        </div>


    );
};

const mapStateToProps = ({ call, dashboard }) => ({
    ...call,
    ...dashboard
});

export default connect(mapStateToProps)(SelectCallType);
