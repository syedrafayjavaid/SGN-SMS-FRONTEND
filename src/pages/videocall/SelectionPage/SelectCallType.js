import React, { useEffect, useState } from 'react';
import logo from '../../resources/logo.png';
import { useNavigate, useLocation } from '../../../../node_modules/react-router-dom/dist/index';
import DirectCall from '../components/DirectCall/DirectCall';
import { connect } from 'react-redux';
import { Button } from '@mui/material'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AnimateButton from 'components/@extended/AnimateButton';
import { registerNewUser } from '../../../utils/wssConnection/wssConnection';
import { setUsername } from '../../../store/actions/dashboardActions';
import { connectWithWebSocket } from '../../../utils/wssConnection/wssConnection';


import './SelectionPage.css';

const SelectCallType = ({ saveUsername }) => {

    const navigate = useNavigate();
    const email = sessionStorage.getItem('email');
    const [userEmail, setUserEmail] = useState(email);

    const directCall = () => {
        setUsername(userEmail)
        saveUsername(userEmail);
        registerNewUser(userEmail);
        navigate('/videocall/directCall')
    }

    const groupCall = () => {
        setUsername(userEmail)
        saveUsername(userEmail);
        registerNewUser(userEmail);
        navigate('/videocall/groupCall')
    }

    useEffect(() => {
        connectWithWebSocket();
    }, []);

    return (
        <div className='login-page_container background_main_color'>
            <div className='login-page_login_box background_secondary_color'>
                <div className='login-page_logo_container'>
                    <img className='login-page_logo_image' src={logo} alt='VideoTalker' />
                </div>
                {/* <UsernameInput username={username} setUsername={setUsername} /> */}
                <AnimateButton onClick={directCall} >
                    <Button variant="contained" onClick={directCall} style={{ backgroundColor: "black" }} startIcon={<VideoCallIcon />} fullwidth="ture" >
                        Direct call
                    </Button>
                </AnimateButton>
                <AnimateButton onClick={groupCall} >
                    <Button variant="contained" onClick={groupCall} style={{ backgroundColor: "black" }} startIcon={<VideoCallIcon />} fullwidth="true" >
                        Group call
                    </Button>
                </AnimateButton>
            </div>
        </div>


    );
};

const mapActionsToProps = (dispatch) => {
    return {
        saveUsername: username => dispatch(setUsername(username))
    };
};
export default connect(null, mapActionsToProps)(SelectCallType);
