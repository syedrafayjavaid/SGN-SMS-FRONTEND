import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import MainCard from 'components/MainCard';


// material-ui
import {
    Box,
    Button,
    Autocomplete,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Stack,
    Typography
} from '@mui/material';


// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { environment } from 'config';


// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const CreateClass = () => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(null);
    const [instructors, setInstructors] = useState([]);
    const [instructor, setInstructor] = useState(null);
    const [instructorError, setInstructorError] = useState(false);
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState(null);
    const [courseError, setCourseError] = useState(false);
    const [startDateTimePicker, setStartDateTimePicker] = useState('');
    const [startDateTimePickerError, setStartDateTimePickerError] = useState(false);
    const [endDateTimePicker, setEndDateTimePicker] = useState('');
    const [endDateTimePickerError, setEndDateTimePickerError] = useState(false);
    const [selectedProductError, setSelectedProductError] = useState(null)




    const navigate = useNavigate();
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };




    // Create class
    const createClass = () => {

        // gathering data to send
        const data = {};
        data.name = name;
        data.courseId = course._id;
        data.instructorId = instructor._id;
        data.startDateTime = startDateTimePicker;
        data.endDateTime = endDateTimePicker
        data.createdBy = "admin";


        console.log("the final data going", data);

        // Api call
        axios.post(`${environment.base_url}/api/v1/classes`, data)
            .then(res => {
                navigate('/classes')
            }).catch(error => {
                if (error.response.data.errorCode === 11000)
                    alert('Class already exists')
            })

    };


    // Get all teachers
    const getTeachers = () => {
        axios.get(`${environment.base_url}/api/v1/teachers`)
            .then(res => {
                setInstructors(res.data.data);
            }).catch(error => {
                console.log("Erros has occured", error);
            })
    }

    // Get all teachers
    const getCourses = () => {
        axios.get(`${environment.base_url}/api/v1/courses`)
            .then(res => {
                setCourses(res.data.data);
            }).catch(error => {
                console.log("Erros has occured", error);
            })
    }

    // validation check
    const validator = () => {

        console.log("validator is called");
        if (course === null || instructor === null || name === '' || startDateTimePicker === '' || endDateTimePicker === '') {
            if (course === null) {
                setCourseError(true);
            }
            if (instructor === null) {
                setInstructorError(true)
            }
            if (startDateTimePicker === '') {
                setStartDateTimePickerError(true)
            }
            if (endDateTimePicker === '') {
                setEndDateTimePickerError(true)
            }
            if (name === '') {
                setNameError(true)
            }
        }
        else {
            return true;
        }
    }

    useEffect(() => {
        getTeachers();
        getCourses();
    }, []);

    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <MainCard>

                    <Formik
                        initialValues={{

                        }}
                        validationSchema={Yup.object().shape({
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                setStatus({ success: true });
                                setSubmitting(false);
                                if (validator()) {
                                    createClass();
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
                                    <Grid item xs={12} md={12}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="name">Class Name*</InputLabel>
                                            <TextField
                                                id="name"
                                                type="name"
                                                value={name}
                                                name="name"
                                                onBlur={handleBlur}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                    setNameError(false)
                                                }}
                                                placeholder="English 200"
                                                fullWidth
                                                error={nameError}
                                                helperText={
                                                    nameError &&
                                                    'Field Required'
                                                }
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6} md={6}>

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
                                            <InputLabel htmlFor="course">Instructor *</InputLabel>
                                            <Autocomplete
                                                size="small"
                                                disablePortal
                                                id="instructors"
                                                options={instructors}
                                                isOptionEqualToValue={(option, value) =>
                                                    option._id === value._id
                                                }
                                                getOptionLabel={(option) => option?.firstName + ' ' + option?.lastName + '/' + option?.teacherId}
                                                renderInput={(params) => {
                                                    return (
                                                        <TextField
                                                            error={instructorError}
                                                            {...params}
                                                            // label="Instructor"
                                                            helperText={
                                                                instructorError &&
                                                                'Field Required'
                                                            }
                                                        />
                                                    )
                                                }}
                                                value={instructor}
                                                onChange={(_event, value) => {
                                                    setInstructor(value)
                                                    setInstructorError(false)
                                                }
                                                }
                                            />
                                        </Stack>

                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                label=" Start date & time"
                                                value={startDateTimePicker}
                                                onChange={(e) => {
                                                    setStartDateTimePicker(e)
                                                    setStartDateTimePickerError(false)
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        error={startDateTimePickerError}
                                                        helperText={startDateTimePickerError && 'Field Required'
                                                        }

                                                    />}
                                            />

                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                label="End date & time"
                                                value={endDateTimePicker}
                                                onChange={(e) => {
                                                    setEndDateTimePicker(e)
                                                    setEndDateTimePickerError(false)
                                                }}
                                                renderInput={(params) => <TextField
                                                    {...params}
                                                    error={endDateTimePickerError}
                                                    helperText={endDateTimePickerError && 'Field Required'
                                                    }

                                                />}
                                            />

                                        </LocalizationProvider>


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
                                                Create Class
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
        </Grid>

    );
};

export default CreateClass;
