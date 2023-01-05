import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ClassesTable from './ClassesTable';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { environment } from 'config';



// Head cell for the user table
const headCells = [
    {
        id: 'Name',
        align: 'left',
        disablePadding: false,
        label: 'Name'
    },
    {
        id: 'Course',
        align: 'left',
        disablePadding: true,
        label: ' Course'
    },
    {
        id: 'Instructor',
        align: 'right',
        disablePadding: false,
        label: 'Instructor'
    },
    {
        id: 'Last Modified',
        align: 'right',
        disablePadding: false,
        label: 'Last Modified'
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


const Classes = () => {

    const [data, setData] = useState();

    // Functions
    const navigate = useNavigate();

    const getClasses = () => {
        axios.get(`${environment.base_url}/api/v1/classes`)
            .then(res => {
                setData(res.data.data);
            }).catch(error => {
                console.log("Erros has occured", error);
            })
    }

    const deleteClass = (id) => {
        console.log("Delete class is getting called", id);
        axios.delete(`${environment.base_url}/api/v1/classes/${id}`)
            .then(res => {
                getClasses();
            }).catch(error => {
                console.log("Erros has occured", error.response.data.error);
            })

    }




    useEffect(() => {

        getClasses()

    }, [])
    return (
        <>
            <Fab color="primary" aria-label="add" onClick={() => navigate('/classes/create')} style={{ right: "2vw", bottom: "12vh", position: "fixed" }}>
                <AddIcon />
            </Fab>
            <MainCard title="Classes Section">
                <ClassesTable headCell={headCells} data={data} deleteClass={deleteClass} />
            </MainCard>
        </>

    )
}

export default Classes