import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import MainCard from 'components/MainCard';


// material-ui
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
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

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const CreateCourse = () => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
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

    // Register User
    const createCourse = (data) => {
        axios.post(`${environment.base_url}/api/v1/courses`, data)
            .then(res => {
                navigate('/courses')
            }).catch(error => {
                if (error.response.data.errorCode === 11000)
                    alert('Course with similar code already exists')
            })

    };




    useEffect(() => {

    }, []);

    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <MainCard>

                    <Formik
                        initialValues={{
                            name: '',
                            code: '',
                            fees: '',
                            createdBy: 'admin'
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().max(255).required('Course Name is required'),
                            code: Yup.string().max(255).required('Course code is required'),
                            fees: Yup.string().max(255).required('Fee is required'),
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                setStatus({ success: false });
                                setSubmitting(false);
                                createCourse(values);
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
                                            <InputLabel htmlFor="name">Cousre Name*</InputLabel>
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
                                    <Grid item xs={12} md={12}>

                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="code">Course Code*</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.code && errors.code)}
                                                id="code"
                                                type="code"
                                                value={values.code}
                                                name="code"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="1032"
                                                inputProps={{}}
                                            />
                                            {touched.code && errors.code && (
                                                <FormHelperText error id="helper-text-code">
                                                    {errors.code}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={12}>

                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="fees">Fee*</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.fees && errors.fees)}
                                                id="fees"
                                                type="number"
                                                value={values.fees}
                                                name="fees"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="10000"
                                                inputProps={{}}
                                            />
                                            {touched.fees && errors.fees && (
                                                <FormHelperText error id="helper-text-fees">
                                                    {errors.fees}
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
                                                Create Course
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

export default CreateCourse;
