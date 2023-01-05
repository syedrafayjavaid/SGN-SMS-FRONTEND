import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import UsersTable from '../UsersTable';
import { Button } from '../../../../node_modules/@mui/material/index';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



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


const Parents = () => {

    const [data, setData] = useState();

    // Functions
    const navigate = useNavigate();

    const getParents = () => {
        axios.get('http://localhost:3005/api/v1/parents')
            .then(res => {
                setData(res.data.data);
            }).catch(error => {
                console.log("Erros has occured", error);
            })
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:3005/api/v1/parents/${id}`)
            .then(res => {
            }).catch(error => {
                console.log("Erros has occured", error.response.data.error);
            })

    }




    useEffect(() => {

        getParents()

    }, [])
    return (
        <>
            <Fab color="primary" aria-label="add" onClick={() => navigate('register')} style={{ right: "2vw", bottom: "12vh", position: "fixed" }}>
                <AddIcon />
            </Fab>
            <MainCard title="Parents Section">
                <UsersTable headCell={headCells} data={data} deleteUser={deleteUser} type='parent' />
            </MainCard>
        </>

    )
}

export default Parents