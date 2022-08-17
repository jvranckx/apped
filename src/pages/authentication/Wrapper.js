import PropTypes from 'prop-types';

// material-ui
import { Box, Grid, Zoom } from '@mui/material';
import Background from './Background';
import Card from './Card';
import Logo from '../../@basic/components/logo/Logo';

// project import
// import AuthCard from './AuthCard';
// import Logo from 'components/Logo';
// import AuthFooter from 'components/cards/AuthFooter';

// assets
// import AuthBackground from 'assets/images/auth/AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const Wrapper = ({ children }) => (
    <Box sx={{ minHeight: '100vh' }}>
        <Background >

            <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{
                    minHeight: '100vh'
                    , position: "absolute"
                }}
            >
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <Logo size={100} />
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        item
                        xs={12}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Zoom in={true} out={true} style={{ transitionDelay: '500ms', transitionDuration: '500ms' }}>

                            <Grid item>
                                <Card sx={{ maxHeight: "80vh", marginTop: 2, maxWidth: "80vw", overflowY: "auto" }}>
                                    {children}
                                </Card>
                            </Grid>
                        </Zoom>

                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    {/* <AuthFooter /> */}
                </Grid>
            </Grid>        </Background>

    </Box >
);

Wrapper.propTypes = {
    children: PropTypes.node
};

export default Wrapper;
