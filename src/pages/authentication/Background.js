import PropTypes from 'prop-types';
import { Box, useTheme } from '@mui/material';
import Logo from '../../@basic/components/logo/Logo';

const Background = ({ children }) => {

    const theme = useTheme()
    return (
        <Box sx={{
            minHeight: '100vh', maxHeight: "100vh", background: theme.palette.grey[50], overflow: "hidden", position: "relative"
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
