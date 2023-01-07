// ==============================|| THEME AND ENV CONFIG||============================== //
const env = 'prod'
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
        base_url: 'http://52.87.88.244:3005'
    },
    office: {
        base_url: ''
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
