import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Person3Icon from '@mui/icons-material/Person3';
import Person4Icon from '@mui/icons-material/Person4';


// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const LoginAs = (props) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [type, setType] = useState('admin');

    // sending the login type to the callback function 
    props.loginType(type);

    return (
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
    );
};

export default LoginAs;
