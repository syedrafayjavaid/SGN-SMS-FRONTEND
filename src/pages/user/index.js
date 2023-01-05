
import React from 'react'
import { useNavigate } from "react-router-dom";
import UserTypes from './UserTypes.js';

// material-ui
import {
    Grid,
    Typography, Button
} from '@mui/material';


const UserDefault = ({ bgcolor, title, data, dark, main }) => {
    const navigate = useNavigate();

    const navigation = (url) => {
        navigate(url);
    }


    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}  >
                <UserTypes title="Total Admins" count="1" showIcon={true} color="primary" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={() => navigation('/users/parents')}>
                <UserTypes title="Total Parents" count="12" showIcon={true} color="warning" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={() => navigation('/users/students')}>
                <UserTypes title="Total Students" count="50" showIcon={true} color="success" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} onClick={() => navigation('/users/teachers')}>
                <UserTypes title="Total Teachers" count="15" showIcon={true} color="secondary" />
            </Grid>


        </Grid>
    );
};

export default UserDefault;
