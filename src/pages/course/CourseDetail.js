// material
import { Grid } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { makeStyles } from '@mui/styles';
import { Card } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'
import moment from 'moment'
import couse from "./course.jpg"



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



    const { state } = useLocation()
    const notAvailable = 'N/A'




    return (
        <>
            <Card elevation={3} sx={{ pt: '20px', mb: 10, margin: '50px' }}>
                <CardHeader>
                    <Title>   COURSE DETAIL</Title>
                </CardHeader>
                <hr></hr>
                <Grid container>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <ContentBox>
                            <IMG
                                src={couse}
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
                        <h3>{state?.name}</h3>

                        <br></br>

                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Code: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {state.code ? state.code : notAvailable
                                        }
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Fee: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {state.fees ? state.fees : notAvailable}
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
                                        {state.modifiedOn === undefined
                                            ? moment(
                                                state.modifiedOn
                                            ).format('LL')
                                            : moment(
                                                state.modifiedOn
                                            ).format('LL')}
                                    </b>
                                </span>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Created Date: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {moment(
                                            state.product?.createdAt
                                        ).format('LL')}
                                    </b>
                                </span>
                            </Grid>
                        </Grid>
                        <hr></hr>
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Created By: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {state.createdBy ? state.createdBy : notAvailable}
                                    </b>
                                </span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <span>Modified By: </span>
                                <span style={{ color: 'green' }}>
                                    <b>
                                        {state.modifiedBy ? state.modifiedBy : notAvailable}
                                    </b>
                                </span>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Card>
        </>
    )
}





export default UserDetail