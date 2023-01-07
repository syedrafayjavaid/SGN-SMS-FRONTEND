import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';


// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
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
import LoginAs from './LoginAs';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { environment } from 'config';

import PersonIcon from '@mui/icons-material/Person';
import Person3Icon from '@mui/icons-material/Person3';
import Person4Icon from '@mui/icons-material/Person4';


// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';


// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {

    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [type, setType] = React.useState('teacher');
    const navigate = useNavigate()
    const [checked, setChecked] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const login = (data) => {

        axios.post(`${environment.base_url}/api/v1/${type}/login`, data)
            .then((res) => {
                console.log("The login response has", res.data.data);
                if (res.data.token) {
                    const user = res.data.data;
                    window.sessionStorage.setItem("token", res.data.token)
                    window.sessionStorage.setItem("login", true)
                    window.sessionStorage.setItem("teacherId", user.teacherId)
                    window.sessionStorage.setItem("email", user.email)
                    window.sessionStorage.setItem("name", user.firstName)
                    navigate("/", { replace: true });
                }
            }).catch((error) => {
                alert(error.response.data.error)
            })

    }

    return (
        <>
            <Formik
                initialValues={{
                    email: 'shibliglobalnetwork@gmail.com',
                    password: 'password',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(true);
                        login(values)
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">Email Address</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter email address"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-login">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="-password-login"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
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
                                        placeholder="Enter password"
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: -1 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={(event) => setChecked(event.target.checked)}
                                                name="checked"
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label={<Typography variant="h6">Keep me sign in</Typography>}
                                    />
                                    <Link variant="h6" component={RouterLink} to="" color="text.primary">
                                        Forgot Password?
                                    </Link>
                                </Stack>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
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
                                        Login
                                    </Button>
                                </AnimateButton>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider>
                                    <Typography variant="caption"> Login As</Typography>
                                </Divider>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack
                                    direction="row"
                                    spacing={matchDownSM ? 1 : 2}
                                    justifyContent={matchDownSM ? 'space-around' : 'space-between'}
                                    sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }}
                                >
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        fullWidth={!matchDownSM}
                                        startIcon={<PersonIcon />}
                                        onClick={() => setType('students')}
                                    >
                                        {"Student"}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        fullWidth={!matchDownSM}
                                        startIcon={<Person3Icon />}
                                        onClick={() => setType('teachers')}
                                    >
                                        {'Teacher'}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        fullWidth={!matchDownSM}
                                        startIcon={< Person4Icon />}
                                        onClick={() => setType('parents')}
                                    >
                                        {'Parent'}
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthLogin;
