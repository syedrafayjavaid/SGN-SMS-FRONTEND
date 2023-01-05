import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// Material icons
import PersonIcon from '@mui/icons-material/Person';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const UserTypes = ({ color, title, count, percentage, showIcon }) => (
    <MainCard contentSX={{ p: 2.25 }}>
        <Stack spacing={0.5}>
            <Typography variant="h6" color="textSecondary">
                {title}
            </Typography>
            <Grid container alignItems="center">
                <Grid item>
                    <Typography variant="h4" color="inherit">
                        {count}
                    </Typography>
                </Grid>

                <Grid item>
                    <Chip
                        variant="combined"
                        color={color}
                        icon={
                            <>
                                {<PersonIcon style={{ fontSize: '0.75rem', color: 'inherit' }} />}

                            </>
                        }
                        label={`${count}`}
                        sx={{ ml: 1.25, pl: 1 }}
                        size="small"
                    />
                </Grid>

            </Grid>
        </Stack>
        {/* <Box sx={{ pt: 2.25 }}>
            <Typography variant="caption" color="textSecondary">
                You made an extra{' '}
                <Typography component="span" variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
                    {extra}
                </Typography>{' '}
                this year
            </Typography>
        </Box> */}
    </MainCard>
);

UserTypes.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.string,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    showIcon: PropTypes.bool,
    extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

UserTypes.defaultProps = {
    color: 'primary'
};

export default UserTypes;
