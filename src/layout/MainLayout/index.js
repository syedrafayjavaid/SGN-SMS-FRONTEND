import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from 'menu-items';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

// types
import { openDrawer } from 'store/reducers/menu';


// New imports
import jwtDecode from 'jwt-decode';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

    let validToken = true;
    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
    const dispatch = useDispatch();

    const { drawerOpen } = useSelector((state) => state.menu);

    // drawer toggler
    const [open, setOpen] = useState(drawerOpen);
    const handleDrawerToggle = () => {
        setOpen(!open);
        dispatch(openDrawer({ drawerOpen: !open }));
    };

    // set media wise responsive drawer
    useEffect(() => {
        setOpen(!matchDownLG);
        dispatch(openDrawer({ drawerOpen: !matchDownLG }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLG]);

    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerOpen]);

    const validate = () => {

    }

    // checking the token is valid or not
    if (window.sessionStorage.getItem('token')) {
        const jwtToken = window.sessionStorage.getItem('token');
        let decodedToken = jwtDecode(jwtToken);
        let currentDate = new Date();

        // JWT exp is in seconds
        if (decodedToken.exp * 1000 > currentDate.getTime()) {
            validToken = true;
        } else {
            validToken = false;
        }
    }
    else {
        validToken = false;
    }



    return (
        validToken ?
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Header open={open} handleDrawerToggle={handleDrawerToggle} />
                <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
                <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                    <Toolbar />
                    <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
                    <Outlet />
                </Box>
            </Box>
            : <Navigate to="/login" />
    );
};

export default MainLayout;
