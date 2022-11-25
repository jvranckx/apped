import PropTypes from 'prop-types';

// material-ui
import { Box, useTheme, Zoom } from '@mui/material';
import Background from './Background';
import Card from './Card';
import Logo from '../../@basic/components/logo/Logo';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Wrapper = () => {
    const [animationEnd, setAnimationEnd] = useState(false)
    const theme = useTheme()
    return (
        < Box sx={{ minHeight: '100vh' }
        }>
            <Background >
                <Box
                    sx={{
                        width: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: '100vh'
                        , position: "absolute"
                    }}
                >
                    <Logo color={theme.palette.grey[500]} size={100} onAnimationEnd={() => setAnimationEnd(true)} />
                    <Box sx={{ height: animationEnd ? "80vh" : "0px", transition: animationEnd ? "height 0.5s ease-out" : null }}>
                        <Zoom in={animationEnd}>
                            <Box sx={{ maxHeight: "80vh", marginTop: 2, maxWidth: "80vw", overflowY: "auto", transition: "all 1s ease-out" }}>
                                <Outlet />
                            </Box>
                        </Zoom>
                    </Box>
                </Box>
            </Background>
        </Box >
    );
}
Wrapper.propTypes = {
    children: PropTypes.node
};

export default Wrapper;
