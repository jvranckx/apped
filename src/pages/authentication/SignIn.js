import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import SignInForm from './forms/SignInForm';
import b2cauth from 'react-azure-adb2c';
b2cauth.initialize({
    instance: 'https://login.microsoftonline.com/tfp/',
    tenant: 'appeddev.onmicrosoft.com',
    signInPolicy: 'B2C_1_dev_auth',
    clientId: '866dbc18-4ece-4221-98be-606b107f9e1c',
    cacheLocation: 'sessionStorage',
    scopes: ["https://appeddev.onmicrosoft.com/866dbc18-4ece-4221-98be-606b107f9e1c/Organisation.Read"],
    redirectUri: 'http://localhost:3000/dashboard',
    postLogoutRedirectUri: "http://localhost:3000/landingpage",

});
// project import

// ================================|| LOGIN ||================================ //

const SignIn = () => {
    return (

        <Grid container spacing={3} sx={{ maxWidth: "400px" }}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Sign in</Typography>
                    {/* <Typography component={Link} to="/auth/signup" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                    Don&apos;t have an account?
                </Typography> */}
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">Follow the instructions on the new window</Typography>

                {/* <SignInForm /> */}
            </Grid>
        </Grid>

    )
}

export default SignIn;
