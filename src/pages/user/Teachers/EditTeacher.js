import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
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

const EditTeacher = () => {

    const { state } = useLocation();
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
    const editUser = (data) => {

        axios.put(`${environment.base_url}/api/v1/teachers/${data._id}`, data)
            .then(res => {
                navigate('/users/teachers');
            }).catch(error => {
                if (error.response.data.errorCode === 11000)
                    alert('Parent with  similar email already exists')
            })

    };


    useEffect(() => {
        changePassword('');
    }, []);

    return (
        <MainCard>
            <Formik
                initialValues={
                    state
                }
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().max(255).required('First Name is required'),
                    lastName: Yup.string().max(255).required('Last Name is required'),
                    cnic: Yup.string().max(255).required('Cnic is required'),
                    address: Yup.string().max(255).required('Address is required'),
                    city: Yup.string().max(255).required('City is required'),
                    country: Yup.string().max(255).required('Country is required'),
                    state: Yup.string().max(255).required('State is required'),
                    gender: Yup.string().max(255).required('Gender is required'),
                    phone: Yup.string().max(255).required('Phone is required'),
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    hireDate: Yup.string().max(255).required('Hire date is required'),
                    birthDate: Yup.string().max(255).required('Birth date is required'),
                    language: Yup.string().max(255).required('Language is required'),
                    bloodGroup: Yup.string().max(255).required('Blood group is required'),
                    teacherId: Yup.string().max(255).required('Blood group is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        editUser(values);

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
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="firstName-signup">First Name*</InputLabel>
                                    <OutlinedInput
                                        id="firstName-login"
                                        type="firstName"
                                        value={values.firstName}
                                        name="firstName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="John"
                                        fullWidth
                                        error={Boolean(touched.firstName && errors.firstName)}
                                    />
                                    {touched.firstName && errors.firstName && (
                                        <FormHelperText error id="helper-text-firstName-signup">
                                            {errors.firstName}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>

                                <Stack spacing={1}>
                                    <InputLabel htmlFor="lastName-signup">Last Name*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.lastName && errors.lastName)}
                                        id="lastName-signup"
                                        type="language"
                                        value={values.lastName}
                                        name="lastName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        inputProps={{}}
                                    />
                                    {touched.lastName && errors.lastName && (
                                        <FormHelperText error id="helper-text-lastName-signup">
                                            {errors.lastName}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>

                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cnic-signup">Cnic*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.cnic && errors.cnic)}
                                        id="cnic-signup"
                                        type="cnic"
                                        value={values.cnic}
                                        name="cnic"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="3230349225847"
                                        inputProps={{}}
                                    />
                                    {touched.cnic && errors.cnic && (
                                        <FormHelperText error id="helper-text-cnic-signup">
                                            {errors.cnic}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="demo@company.com"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="teacherId-signup">Teacher Id*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.teacherId && errors.teacherId)}
                                        id="teacherId-login"
                                        type="email"
                                        value={values.teacherId}
                                        name="teacherId"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="1233423"
                                        inputProps={{}}
                                    />
                                    {touched.teacherId && errors.teacherId && (
                                        <FormHelperText error id="helper-text-teacherId-signup">
                                            {errors.teacherId}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">Address*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.address && errors.address)}
                                        id="address-login"
                                        type="address"
                                        value={values.address}
                                        name="address"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Sgn Gulberg office"
                                        inputProps={{}}
                                    />
                                    {touched.address && errors.address && (
                                        <FormHelperText error id="helper-text-address-signup">
                                            {errors.address}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="country-signup">County*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="country-login"
                                        type="country"
                                        value={values.country}
                                        name="country"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Pakistan"
                                        inputProps={{}}
                                    />
                                    {touched.country && errors.country && (
                                        <FormHelperText error id="helper-text-country-signup">
                                            {errors.country}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="state-signup">State*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.state && errors.state)}
                                        id="state-login"
                                        type="state"
                                        value={values.state}
                                        name="state"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Punjab"
                                        inputProps={{}}
                                    />
                                    {touched.state && errors.state && (
                                        <FormHelperText error id="helper-text-state-signup">
                                            {errors.state}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="city-signup">City*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.city && errors.city)}
                                        id="city-login"
                                        type="city"
                                        value={values.city}
                                        name="city"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Islamabad"
                                        inputProps={{}}
                                    />
                                    {touched.city && errors.city && (
                                        <FormHelperText error id="helper-text-city-signup">
                                            {errors.city}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="gender-signup">Gender*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.gender && errors.gender)}
                                        id="gender-login"
                                        type="gender"
                                        value={values.gender}
                                        name="gender"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Male"
                                        inputProps={{}}
                                    />
                                    {touched.gender && errors.gender && (
                                        <FormHelperText error id="helper-text-gender-signup">
                                            {errors.gender}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="phone-signup">Phone*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.phone && errors.phone)}
                                        id="phone-login"
                                        type="phone"
                                        value={values.phone}
                                        name="phone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="03321656505"
                                        inputProps={{}}
                                    />
                                    {touched.phone && errors.phone && (
                                        <FormHelperText error id="helper-text-city-signup">
                                            {errors.phone}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>



                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="birthDate-signup">Birth Date*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.birthDate && errors.birthDate)}
                                        id="birthDate-login"
                                        type="date"
                                        value={values.birthDate}
                                        name="birthDate"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="2022-12-12"
                                        inputProps={{}}
                                    />
                                    {touched.birthDate && errors.birthDate && (
                                        <FormHelperText error id="helper-text-birthDate-signup">
                                            {errors.birthDate}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="hireDate-signup">Hired Date*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.hireDate && errors.hireDate)}
                                        id="hireDate-login"
                                        type="date"
                                        value={values.hireDate}
                                        name="hireDate"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="2022-12-12"
                                        inputProps={{}}
                                    />
                                    {touched.hireDate && errors.hireDate && (
                                        <FormHelperText error id="helper-text-hireDate-signup">
                                            {errors.hireDate}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="language-signup">Language*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.language && errors.language)}
                                        id="language-login"
                                        type="language"
                                        value={values.language}
                                        name="language"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="English"
                                        inputProps={{}}
                                    />
                                    {touched.language && errors.language && (
                                        <FormHelperText error id="helper-text-language-signup">
                                            {errors.language}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="bloodGroup-signup">Blood Group*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.bloodGroup && errors.bloodGroup)}
                                        id="bloodGroup-login"
                                        type="bloodGroup"
                                        value={values.bloodGroup}
                                        name="bloodGroup"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="A+"
                                        inputProps={{}}
                                    />
                                    {touched.bloodGroup && errors.bloodGroup && (
                                        <FormHelperText error id="helper-text-bloodGroup-signup">
                                            {errors.bloodGroup}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-signup">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="password-signup"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            changePassword(e.target.value);
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="******"
                                        inputProps={{}}
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="helper-text-password-signup">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}

                            <Grid item xs={4} md={4} >
                            </Grid>
                            <Grid item xs={12} md={4} sm={12}>
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
                                        Edit Teacher
                                    </Button>
                                </AnimateButton>
                            </Grid>
                            <Grid item xs={4} md={4} >
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </MainCard>
    );
};

export default EditTeacher;
