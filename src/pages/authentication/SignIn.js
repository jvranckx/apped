import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import SignInForm from './forms/SignInForm';

// project import

// ================================|| LOGIN ||================================ //

const SignIn = () => (
    <Grid container spacing={3} sx={{ maxWidth: "400px" }}>
        <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                <Typography variant="h3">Sign in</Typography>
                <Typography component={Link} to="/auth/signup" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                    Don&apos;t have an account?
                </Typography>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <SignInForm />
        </Grid>
    </Grid>
);

export default SignIn;
