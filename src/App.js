// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { useEffect } from 'react';

const App = () => {
    return (
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    );

};

export default App;
