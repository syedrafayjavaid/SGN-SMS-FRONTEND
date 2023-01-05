import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import AdmissionTable from './AdmissionTable';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { environment } from 'config';



// Head cell for the user table
const headCells = [
    {
        id: 'name',
        align: 'left',
        disablePadding: false,
        label: 'Name'
    },
    {
        id: 'maxAdmissions',
        align: 'right',
        disablePadding: false,
        label: 'Max Admissions'
    },
    {
        id: 'minAdmissions',
        align: 'right',
        disablePadding: false,
        label: 'Min Admissions'
    },
    {
        id: 'courseFees',
        align: 'right',
        disablePadding: false,
        label: 'Course Fee'
    },
    {
        id: 'detail',
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


const Admissions = () => {

    const [data, setData] = useState();

    // Functions
    const navigate = useNavigate();



    // load all admissions
    const getAdmissions = () => {
        axios.get(`${environment.base_url}/api/v1/admissions`)
            .then(res => {
                setData(res.data.data);
            }).catch(error => {
                console.log("Erros has occured", error);
            })
    }



    const deleteAdmission = (id) => {
        console.log("Delete adm is getting called", id);
        axios.delete(`${environment.base_url}/api/v1/admissions/${id}`)
            .then(res => {
                getAdmissions();
            }).catch(error => {
                console.log("Erros has occured", error.response.data.error);
            })

    }





    useEffect(() => {
        getAdmissions()

    }, [])
    return (
        <>
            <Fab color="primary" aria-label="add" onClick={() => navigate('/admissions/create')} style={{ right: "2vw", bottom: "12vh", position: "fixed" }}>
                <AddIcon />
            </Fab>
            <MainCard title="Admissions Section">
                <AdmissionTable headCell={headCells} data={data} deleteAdmission={deleteAdmission} />
            </MainCard>
        </>

    )
}

export default Admissions;