import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import MainCard from 'components/MainCard';


// material-ui
import {

    Button,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack,
    Select,
    Autocomplete,
    TextField,
    MenuItem
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { environment } from 'config';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

const AdmissionEdit = () => {
    const { state } = useLocation();
    const [term, setTerm] = useState(state?.term);
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState(state.course?.[0]);
    const [courseError, setCourseError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();



    // Get all teachers
    const getCourses = () => {
        axios.get(`${environment.base_url}/api/v1/courses`)
            .then(res => {
                setCourses(res.data.data);
            }).catch(error => {
                console.log("Erros has occured", error);
            })
    }


    // Register User
    const editAdmission = (data) => {

        console.log("The admissions id coming ", state._id);
        axios.put(`${environment.base_url}/api/v1/admissions/${state._id}`, data)
            .then(res => {
                navigate('/admissions')
            }).catch(error => {
                if (error.response.data.errorCode === 11000)
                    alert('Course with similar code already exists')
            })

    };


    // validation check
    const validator = (data) => {

        if (course === null) {
            setCourseError(true);
        }
        else if (data.maxAdmissions < data.minAdmissions) {
            alert("Minimum admissions should be less than max admissions")
        }
        else if (new Date(data.startDate) > new Date(data.endDate)) {
            alert("Start date can not be greater than end date")
        }
        else {
            return true;
        }
    }






    useEffect(() => {
        getCourses();
    }, []);

    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <MainCard>
                    <Formik
                        initialValues={{

                            name: state.name,
                            startDate: state.startDate,
                            endDate: state.endDate,
                            maxAdmissions: state.maxAdmissions,
                            minAdmissions: state.minAdmissions,
                            minAge: state.minAge,
                            academicYear: state.academicYear,
                            createdBy: state.createdBy
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().max(255).required('Name is required'),
                            startDate: Yup.string().max(255).required('Start Date is required'),
                            endDate: Yup.string().max(255).required('End Date is required'),
                            minAge: Yup.number().max(255).required('Minimum age is required'),
                            maxAdmissions: Yup.number().min(1, "should be atleast 1").required('Maximum admissions is required'),
                            minAdmissions: Yup.number().min(1, "Should be atleast 1").required("Minimum admissions is required"),
                            academicYear: Yup.number().min(2022, "Minimum year should be 2022 ").required('Academic year is required'),
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                setStatus({ success: false });
                                setSubmitting(false);
                                if (validator(values)) {
                                    values.courseId = course._id;
                                    values.term = term;
                                    editAdmission(values);
                                }
                            } catch (err) {
                                console.error(err);
                                setStatus({ success: false });
                                setErrors({ submit: err.message });
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6} md={6}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="name">Name*</InputLabel>
                                            <OutlinedInput
                                                id="name"
                                                type="name"
                                                value={values.name}
                                                name="name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="English 200"
                                                fullWidth
                                                error={Boolean(touched.name && errors.name)}
                                            />
                                            {touched.name && errors.name && (
                                                <FormHelperText error id="helper-text-name">
                                                    {errors.name}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={6} md={6}>

                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="startDate">Start date*</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.startDate && errors.startDate)}
                                                id="startDate"
                                                type="date"
                                                value={values.startDate}
                                                name="startDate"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="12-12-2022"
                                                inputProps={{}}
                                            />
                                            {touched.startDate && errors.startDate && (
                                                <FormHelperText error id="helper-text-startDate">
                                                    {errors.startDate}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6} md={6}>

                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="endDate">End date*</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.endDate && errors.endDate)}
                                                id="endDate"
                                                type="date"
                                                value={values.fees}
                                                name="endDate"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="12-12-2022"
                                                inputProps={{}}
                                            />
                                            {touched.endDate && errors.endDate && (
                                                <FormHelperText error id="helper-text-endDate">
                                                    {errors.endDate}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6} md={6}>

                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="term">Term*</InputLabel>
                                            <Select
                                                id="term"
                                                value={term}
                                                onBlur={handleBlur}
                                                onChange={(e) => setTerm(e.target.value)}
                                            >
                                                <MenuItem value="fall">Fall</MenuItem>
                                                <MenuItem value="spring">Spring</MenuItem>
                                            </Select>


                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={12}>

                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="course">Course *</InputLabel>
                                            <Autocomplete
                                                size="small"
                                                disablePortal
                                                id="courses"
                                                options={courses}
                                                isOptionEqualToValue={(option, value) =>
                                                    option._id === value._id
                                                }
                                                getOptionLabel={(option) => option?.name + "/" + option?.code}
                                                renderInput={(params) => {
                                                    return (
                                                        <TextField
                                                            error={courseError}
                                                            {...params}
                                                            // label="Instructor"
                                                            helperText={
                                                                courseError &&
                                                                'Field Required'
                                                            }
                                                        />
                                                    )
                                                }}
                                                value={course}
                                                onChange={(_event, value) => {
                                                    setCourse(value)
                                                    setCourseError(false)
                                                }
                                                }
                                            />
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={6} md={6}>

                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="minAdmissions">Min admissions*</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.minAdmissions && errors.minAdmissions)}
                                                id="minAdmissions"
                                                type="number"
                                                value={values.minAdmissions}
                                                name="minAdmissions"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="12"
                                                inputProps={{}}
                                            />
                                            {touched.minAdmissions && errors.minAdmissions && (
                                                <FormHelperText error id="helper-text-minAdmissions">
                                                    {errors.minAdmissions}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={6} md={6}>

                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="maxAdmissions">Max admissions*</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.maxAdmissions && errors.maxAdmissions)}
                                                id="maxAdmissions"
                                                type="number"
                                                value={values.maxAdmissions}
                                                name="maxAdmissions"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="12"
                                                inputProps={{}}
                                            />
                                            {touched.maxAdmissions && errors.maxAdmissions && (
                                                <FormHelperText error id="helper-text-maxAdmissions">
                                                    {errors.maxAdmissions}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>


                                    <Grid item xs={6} md={6}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="Minimum age">Minimum age*</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.minAge && errors.minAge)}
                                                id="minAge"
                                                type="number"
                                                value={values.minAge}
                                                name="minAge"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="12"
                                                inputProps={{}}
                                            />
                                            {touched.minAge && errors.minAge && (
                                                <FormHelperText error id="helper-text-minAge">
                                                    {errors.minAge}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>


                                    <Grid item xs={6} md={6}>

                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="academicYear">Academic year*</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.academicYear && errors.academicYear)}
                                                id="academicYear"
                                                type="number"
                                                min={2023}
                                                max={9999}
                                                value={values.academicYear}
                                                name="academicYear"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="2018"
                                                inputProps={{}}
                                            />
                                            {touched.academicYear && errors.academicYear && (
                                                <FormHelperText error id="helper-text-academicYear">
                                                    {errors.academicYear}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>

                                    {errors.submit && (
                                        <Grid item xs={12}>
                                            <FormHelperText error>{errors.submit}</FormHelperText>
                                        </Grid>
                                    )}

                                    <Grid item xs={12} md={12} sm={12}>
                                        <AnimateButton>
                                            <Button
                                                disableElevation
                                                disabled={isSubmitting}
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Edit Admission
                                            </Button>
                                        </AnimateButton>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </MainCard>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid >

    );
};

export default AdmissionEdit;
