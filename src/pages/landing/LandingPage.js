import PropTypes from 'prop-types';

// material-ui
import { Box, useTheme, Zoom } from '@mui/material';
import Logo from '../../@basic/components/logo/Logo';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Background from '../authentication/Background';
import { Typography } from '@mui/material';

const LandingPage = () => {
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
                    <Typography variant="h2" color="secondary" sx={{ letterSpacing: "3px", lineHeight: "50%", marginBottom: 1 }} fontFamily={"'Luckiest Guy', cursive"}>Welcome to   </Typography>

                    <Logo color={theme.palette.grey[500]} size={100} />
                </Box>
            </Background>
        </Box >
    );
}
LandingPage.propTypes = {
    children: PropTypes.node
};

export default LandingPage;
