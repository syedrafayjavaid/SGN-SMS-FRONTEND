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


// Head cell for the user table
const headCells = [
    {
        id: 'RollNo',
        align: 'left',
        disablePadding: false,
        label: 'Roll No'
    },
    {
        id: ' FullName',
        align: 'left',
        disablePadding: true,
        label: 'Full Name'
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



const Students = () => {



    const [data, setData] = useState();

    // Functions
    const navigate = useNavigate();

    const getStudents = () => {
        axios.get('http://localhost:3005/api/v1/students')
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data);
            }).catch(error => {
                console.log("Erros has occured", error);
            })
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:3005/api/v1/students/${id}`)
            .then(res => {
                getStudents()

            }).catch(error => {
                console.log("Erros has occured", error.response.data.error);
            })

    }


    useEffect(() => {

        getStudents()

    }, [])


    return (
        <>
            <Fab color="primary" aria-label="add" onClick={() => navigate('register')} style={{ right: "2vw", bottom: "12vh", position: "fixed" }}>
                <AddIcon />
            </Fab>
            <MainCard title="Students Section">
                <UsersTable headCell={headCells} data={data} deleteUser={deleteUser} type='student' />
            </MainCard>
        </>
    )
}

export default Students