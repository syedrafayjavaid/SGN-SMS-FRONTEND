
// material
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { makeStyles } from '@mui/styles';
import { Card } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'
import axios from 'axios'
import moment from 'moment'
import user from "./user.png"



const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    display: 'flex',
}))

const CardHeader = styled('div')(() => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))
const Input = styled('input')({
    display: 'none',
})

const UserDetail = () => {

    const useStyles = makeStyles((theme) => ({
        conatiner: {
            marginTop: 10,
        },
        title: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#3f51b5',
            color: '#fff',
            padding: 20,
        },
        btn: {
            marginTop: 10,
            marginBottom: 20,
        },
    }))
    const FlexBox = styled(Box)(() => ({
        display: 'flex',
        alignItems: 'center',
    }))

    const JustifyBox = styled(FlexBox)(() => ({
        justifyContent: 'center',
    }))

    const IMG = styled('img')(() => ({
        width: '100%',
        height: '100%',
    }))

    const ContentBox = styled(JustifyBox)(() => ({
        padding: '32px',
        background: 'rgba(0, 0, 0, 0.01)',
    }))

    // const parent jsx 
    const ParentView = () => {
        return (
            <Card elevation={3} sx={{ pt: '20px', mb: 10, margin: '50px' }}>
                <CardHeader>
                    <Title>   PARENT DETAIL</Title>
                </CardHeader>
                <hr></hr>
                <Grid container>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <ContentBox>
                            <IMG
                                src={user}
                                alt=""
                            />
                        </ContentBox>
                    </Grid>
                    <Grid
                        item
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        style={{ padding: '1rem 3rem' }}
                    >
                        <h3>{data?.firstName + " " + data.lastName}</h3>

                        <br></br>

                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Email: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.email ? data.email : notAvailable
                                        }
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Cnic Number: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.cnic ? data.cnic : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>

                        <hr></hr>

                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Gender : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.gender ? data.gender
                                            : notAvailable
                                        }
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Phone: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.phone ? data.phone
                                            : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Last Modified: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.modifiedOn === undefined
                                            ? moment(
                                                data.modifiedOn
                                            ).format('LL')
                                            : moment(
                                                data.modifiedOn
                                            ).format('LL')}
                                    </b>
                                </span>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Created Date: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {moment(
                                            data.product?.createdAt
                                        ).format('LL')}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>State: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.state ? data.state : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Country: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.country ? data.country : notAvailable}
                                    </b>
                                </span>
                            </Grid>

                        </Grid>
                        <hr></hr>
                        <Grid container>

                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>City : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.city ? data.city : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Phone: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.phone ? data.phone : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>

                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Students : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.student.length > 0 ? data.student[0].firstName : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <Box>
                            <h4>Address: </h4>
                            {data.address ? data.address : notAvailable}
                        </Box>

                        <br></br>
                    </Grid>
                </Grid>
            </Card>

        )
    }

    // const parent jsx 
    const StudentView = () => {
        return (
            <Card elevation={3} sx={{ pt: '20px', mb: 10, margin: '50px' }}>
                <CardHeader>
                    <Title>   STUDENT DETAIL</Title>
                </CardHeader>
                <hr></hr>
                <Grid container>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <ContentBox>
                            <IMG
                                src={user}
                                alt=""
                            />
                        </ContentBox>
                    </Grid>
                    <Grid
                        item
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        style={{ padding: '1rem 3rem' }}
                    >
                        <h3>{data?.firstName + " " + data.lastName}</h3>

                        <br></br>

                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Email: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.email ? data.email : notAvailable
                                        }
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Roll Number : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.rollNumber ? data.rollNumber : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>

                        <hr></hr>

                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Gender : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.gender ? data.gender
                                            : notAvailable
                                        }
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Phone: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.phone ? data.phone
                                            : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Last Modified: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.modifiedOn === undefined
                                            ? moment(
                                                data.modifiedOn
                                            ).format('LL')
                                            : moment(
                                                data.modifiedOn
                                            ).format('LL')}
                                    </b>
                                </span>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Created Date: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {moment(
                                            data.product?.createdAt
                                        ).format('LL')}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Family Business: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.familyBusiness ? data.familyBusiness : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Family Income: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.familyIncome ? data.familyIncome : notAvailable}
                                    </b>
                                </span>
                            </Grid>

                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Guardian Name: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.guardianName ? data.guardianName : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Guardian Cnic: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.guardianCnic ? data.guardianCnic : notAvailable}
                                    </b>
                                </span>
                            </Grid>


                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Guardian Relation: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.guardianRelation ? data.guardianRelation : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Guardian Cnic: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.guardianCnic ? data.guardianCnic : notAvailable}
                                    </b>
                                </span>
                            </Grid>


                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>State: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.state ? data.state : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Country: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.country ? data.country : notAvailable}
                                    </b>
                                </span>
                            </Grid>

                        </Grid>
                        <hr></hr>
                        <Grid container>

                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>City : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.city ? data.city : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Phone: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.phone ? data.phone : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>

                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Parent : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.parent?.length > 0 ? data.parent[0].firstName : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Created By : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.createdBy ? data.createdBy : notAvailable}
                                    </b>
                                </span>

                            </Grid>
                        </Grid>
                        <Box>
                            <h4>Address: </h4>
                            {data.address ? data.address : notAvailable}
                        </Box>

                        <br></br>
                    </Grid>
                </Grid>
            </Card>

        )
    }

    // const teacher jsx 
    const TeacherView = () => {
        return (
            <Card elevation={3} sx={{ pt: '20px', mb: 10, margin: '50px' }}>
                <CardHeader>
                    <Title>   TEACHER DETAIL</Title>
                </CardHeader>
                <hr></hr>
                <Grid container>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <ContentBox>
                            <IMG
                                src={user}
                                alt=""
                            />
                        </ContentBox>
                    </Grid>
                    <Grid
                        item
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        style={{ padding: '1rem 3rem' }}
                    >
                        <h3>{data?.firstName + " " + data.lastName}</h3>

                        <br></br>

                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Email: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.email ? data.email : notAvailable
                                        }
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Cnic Number: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.cnic ? data.cnic : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>

                        <hr></hr>

                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Gender : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.gender ? data.gender
                                            : notAvailable
                                        }
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Phone: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.phone ? data.phone
                                            : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Last Modified: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.modifiedOn === undefined
                                            ? moment(
                                                data.modifiedOn
                                            ).format('LL')
                                            : moment(
                                                data.modifiedOn
                                            ).format('LL')}
                                    </b>
                                </span>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Created Date: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.modifiedOn === undefined
                                            ? moment(
                                                data.createdOn
                                            ).format('LL')
                                            : moment(
                                                data.createdOn
                                            ).format('LL')}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>State: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.data ? data.data : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Country: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.country ? data.country : notAvailable}
                                    </b>
                                </span>
                            </Grid>

                        </Grid>
                        <hr></hr>
                        <Grid container>

                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>City : </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.city ? data.city : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Teacher Id: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.teacherId ? data.teacherId : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Phone: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {data.phone ? data.phone : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <Box>
                            <h4>Address: </h4>
                            {data.address ? data.address : notAvailable}
                        </Box>

                        <br></br>
                    </Grid>
                </Grid>
            </Card>

        )
    }


    const { state } = useLocation()

    let { data, type } = state;

    // Switching ui on baises of type
    if (type === 'student') {
        type = <StudentView />;
    }
    else if (type === 'parent') {
        type = <ParentView />;
    }
    else {
        type = <TeacherView />;
    }




    useEffect(() => {
    }, [])


    const notAvailable = 'N/A'




    return (
        <>
            {type}
        </>
    )
}





export default UserDetail