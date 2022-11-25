import PropTypes from 'prop-types';

// material-ui
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Auth from '../../auth';



const Home = () => {
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
    const auth = new Auth()
    console.log(auth.getToken())

    return (
        < Box sx={{ minHeight: '100vh', position: "relative" }}>

        </Box >
    );
}
Home.propTypes = {
    children: PropTypes.node
};

export default Home;
