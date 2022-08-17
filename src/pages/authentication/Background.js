import PropTypes from 'prop-types';

// material-ui
import { Box, Grid, useTheme } from '@mui/material';

import { motion } from 'framer-motion';
import Logo from '../../@basic/components/logo/Logo';



const Background = ({ children }) => {
    const { innerWidth, innerHeight } = window;

    const theme = useTheme()
    return (
        <Box sx={{
            minHeight: '100vh', maxHeight: "100vh", background: theme.palette.grey[100], overflow: "hidden", position: "relative"
        }}>
            <Logo color={theme.palette.primary.dark} short size={500} animate={false} sx={{ position: "absolute", left: -100, transform: "rotate(35deg)", bottom: -50, opacity: 0.3 }} />

            <Logo color={theme.palette.primary.dark} short size={500} animate={false} sx={{ position: "absolute", right: -90, transform: "rotate(-140deg)", top: -50, opacity: 0.3 }} />

            {children}
        </Box >
    )
};

Background.propTypes = {
    children: PropTypes.node
};

export default Background;
