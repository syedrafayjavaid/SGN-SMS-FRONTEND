import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import CoursesTable from './CoursesTable';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { environment } from 'config';



// Head cell for the user table
const headCells = [
    {
        id: 'Code',
        align: 'left',
        disablePadding: false,
        label: 'Code'
    },
    {
        id: 'Name',
        align: 'left',
        disablePadding: true,
        label: 'Name'
    },
    {
        id: 'Fee',
        align: 'right',
        disablePadding: false,
        label: 'Fee'
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


const Courses = () => {

    const [data, setData] = useState();

    // Functions
    const navigate = useNavigate();

    const getCourses = () => {
        axios.get(`${environment.base_url}/api/v1/courses`)
            .then(res => {
                setData(res.data.data);
            }).catch(error => {
                console.log("Erros has occured", error);
            })
    }

    const deleteCourse = (id) => {
        console.log("Delete couse is getting ccalled", id);
        axios.delete(`${environment.base_url}/api/v1/courses/${id}`)
            .then(res => {
                getCourses();
            }).catch(error => {
                console.log("Erros has occured", error.response.data.error);
            })

    }




    useEffect(() => {

        getCourses()

    }, [])
    return (
        <>
            <Fab color="primary" aria-label="add" onClick={() => navigate('/courses/create')} style={{ right: "2vw", bottom: "12vh", position: "fixed" }}>
                <AddIcon />
            </Fab>
            <MainCard title="Courses Section">
                <CoursesTable headCell={headCells} data={data} deleteCourse={deleteCourse} />
            </MainCard>
        </>

    )
}

export default Courses