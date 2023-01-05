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

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const EditParent = () => {

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

        axios.put(`http://localhost:3005/api/v1/students/${data._id}`, data)
            .then(res => {
                navigate('/users/students');
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
                    rollNumber: Yup.string().max(255).required('Roll number is required'),
                    address: Yup.string().max(255).required('Address is required'),
                    city: Yup.string().max(255).required('City is required'),
                    country: Yup.string().max(255).required('Country is required'),
                    state: Yup.string().max(255).required('State is required'),
                    gender: Yup.string().max(255).required('Gender is required'),
                    phone: Yup.string().max(255).required('Phone is required'),
                    familyBusiness: Yup.string().max(255).required('Family business is required'),
                    familyIncome: Yup.string().max(255).required('Family income is required'),
                    birthDate: Yup.string().max(255).required('Birth date is required'),
                    guardianName: Yup.string().max(255).required('Guardian name is required'),
                    guardianCnic: Yup.string().max(255).required('Guardian cnic is required'),
                    guardianRelation: Yup.string().max(255).required('Guardian relation is required'),
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        editUser(values);
                        setStatus({ success: false });
                        setSubmitting(false);

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
                                        type="lastName"
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
                                    <InputLabel htmlFor="rollNumber-signup">Roll Number*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.rollNumber && errors.rollNumber)}
                                        id="rollNumber-signup"
                                        type="rollNumber"
                                        value={values.rollNumber}
                                        name="rollNumber"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="12121"
                                        inputProps={{}}
                                    />
                                    {touched.rollNumber && errors.rollNumber && (
                                        <FormHelperText error id="helper-text-rollNumber-signup">
                                            {errors.rollNumber}
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
                                    <InputLabel htmlFor="familyBusiness-signup">Family business*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.familyBusiness && errors.familyBusiness)}
                                        id="familyBusiness-login"
                                        type="familyBusiness"
                                        value={values.familyBusiness}
                                        name="familyBusiness"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="03321656505"
                                        inputProps={{}}
                                    />
                                    {touched.familyBusiness && errors.familyBusiness && (
                                        <FormHelperText error id="helper-text-familyBusiness-signup">
                                            {errors.familyBusiness}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="familyIncome-signup">Family Income*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.familyIncome && errors.familyIncome)}
                                        id="familyIncome-login"
                                        type="number"
                                        value={values.familyIncome}
                                        name="familyIncome"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="12121"
                                        inputProps={{}}
                                    />
                                    {touched.familyIncome && errors.familyIncome && (
                                        <FormHelperText error id="helper-text-familyIncome-signup">
                                            {errors.familyIncome}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="birthDate-signup">BirthDate*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.birthDate && errors.birthDate)}
                                        id="birthDate-login"
                                        type="date"
                                        value={values.birthDate}
                                        name="birthDate"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="12121"
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
                                    <InputLabel htmlFor="guardianName-signup">Guardian's Name*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.guardianName && errors.guardianName)}
                                        id="guardianName-signup"
                                        type="name"
                                        value={values.guardianName}
                                        name="guardianName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Rafay javaid"
                                        inputProps={{}}
                                    />
                                    {touched.guardianName && errors.guardianName && (
                                        <FormHelperText error id="helper-text-guardianName-signup">
                                            {errors.guardianName}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="guardianCnic-signup">Guardian's Cnic*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.guardianCnic && errors.guardianCnic)}
                                        id="guardianCnic-signup"
                                        type="name"
                                        value={values.guardianCnic}
                                        name="guardianCnic"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="32303-49225847"
                                        inputProps={{}}
                                    />
                                    {touched.guardianCnic && errors.guardianCnic && (
                                        <FormHelperText error id="helper-text-guardianCnic-signup">
                                            {errors.guardianCnic}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="guardianRelation-signup">Guardian's Relation*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.guardianRelation && errors.guardianRelation)}
                                        id="guardianRelation-signup"
                                        type="name"
                                        value={values.guardianRelation}
                                        name="guardianRelation"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Father"
                                        inputProps={{}}
                                    />
                                    {touched.guardianRelation && errors.guardianRelation && (
                                        <FormHelperText error id="helper-text-guardianRelation-signup">
                                            {errors.guardianRelation}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="phone-signup">Phone*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.phone && errors.phone)}
                                        id="phone-login"
                                        type="number"
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
                            <Grid item xs={4}>
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
                            <Grid item xs={4} md={4} >
                            </Grid>
                            <Grid item xs={12} md={4} sm={12}>
                                <br></br>
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
                                        Edit Student
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

export default EditParent;
