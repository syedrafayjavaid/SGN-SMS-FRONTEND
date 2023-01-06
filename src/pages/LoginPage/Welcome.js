import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.png';
import UsernameInput from './components/Usernameinput';
import SubmitButton from './components/StartButton';
import { useNavigate } from 'react-router-dom';
import { registerNewUser } from '../../utils/wssConnection/wssConnection';
import { setUsername } from '../../store/actions/dashboardActions';

import './LoginPage.css';

const Welcome = ({ saveUsername }) => {
  const email = sessionStorage.getItem('email');
  const [username, setUsername] = useState(email);

  const navigate = useNavigate();

  const handleSubmitButtonPressed = () => {
    registerNewUser(username);
    saveUsername(username);
    navigate('/videocall');
  };

  return (
    <div className='login-page_container background_main_color'>
      <div className='login-page_login_box background_secondary_color'>
        <div className='login-page_logo_container'>
          <img className='login-page_logo_image' src={logo} alt='VideoTalker' />
        </div>
        <div className='login-page_title_container'>
          <h2>VIDEO CHAT</h2>
        </div>
        <UsernameInput username={username} setUsername={setUsername} />
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
      </div>
      <footer> <small>&#9400; Copyright 2021, shubham khatal</small> </footer>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(Welcome);
