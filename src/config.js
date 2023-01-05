// ==============================|| THEME AND ENV CONFIG||============================== //
const env = 'local'
const config = {
    defaultPath: '/dashboard/default',
    fontFamily: `'Public Sans', sans-serif`,
    i18n: 'en',
    miniDrawer: false,
    container: true,
    mode: 'dark',
    presetColor: 'default',
    themeDirection: 'ltr',
};

let configEnv = {

    // ENV 
    local: {
        base_url: 'http://localhost:3005'
    },
    prod: {
        base_url: 'some url'
    },
    office: {
        base_url: 'some url'
    }
}



export const drawerWidth = 260;
export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

// ENV
if (env === 'local') configEnv = configEnv.local;
if (env === 'prod') configEnv = configEnv.prod;
if (env === 'office') configEnv = configEnv.office;

export const environment = configEnv;
export default config;
