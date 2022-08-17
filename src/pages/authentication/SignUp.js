import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import SignUpForm from './forms/SignUpForm';
import Wrapper from './Wrapper';

// ================================|| REGISTER ||================================ //

const SignUp = () => (
    <Wrapper>
        <Grid container spacing={3} sx={{ maxWidth: "400px", height: "100%" }}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Sign up</Typography>
                    <Typography component={Link} to="/signin" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Already have an account?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <SignUpForm />
            </Grid>
        </Grid>
    </Wrapper>
);

export default SignUp;
