import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import UsersTable from '../UsersTable';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { environment } from 'config';


// Head cell for the user table
const headCells = [
    {
        id: 'Cnic',
        align: 'left',
        disablePadding: false,
        label: 'Cnic'
    },
    {
        id: 'Name',
        align: 'left',
        disablePadding: true,
        label: 'Name'
    },
    {
        id: 'Email',
        align: 'right',
        disablePadding: false,
        label: 'Email'
    },
    {
        id: 'Details',
        align: 'right',
        disablePadding: false,
        label: 'Detail'
    },
    {
        id: 'Edit',
        align: 'right',
        disablePadding: false,
        label: 'Edit'
    },
    {
        id: 'Delete',
        align: 'right',
        disablePadding: false,
        label: 'Delete'
    },
]

const Teachers = () => {

    const [data, setData] = useState();

    // Functions
    const navigate = useNavigate();

    const getTeachers = () => {
        axios.get(`${environment.base_url}/api/v1/teachers`)
            .then(res => {
                setData(res.data.data);
            }).catch(error => {
                console.log("Erros has occured", error);
            })
    }

    const deleteUser = (id) => {
        axios.delete(`${environment.base_url}/api/v1/teachers/${id}`)
            .then(res => {
            }).catch(error => {
                console.log("Erros has occured", error.response.data.error);
            })

    }




    useEffect(() => {

        getTeachers()

    }, [])
    return (
        <>
            <Fab color="primary" aria-label="add" onClick={() => navigate('register')} style={{ right: "2vw", bottom: "12vh", position: "fixed" }}>
                <AddIcon />
            </Fab>
            <MainCard title="Teachers Section">
                <UsersTable headCell={headCells} data={data} deleteUser={deleteUser} type='teacher' />
            </MainCard>
        </>

    )
}

export default Teachers