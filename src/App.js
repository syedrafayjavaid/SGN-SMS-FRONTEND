// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { useEffect } from 'react';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {

    useEffect(() => {
        connectWithWebSocket();
    }, []);
    return (
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    );

};

export default App;
