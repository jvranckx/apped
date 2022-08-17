import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import Wrapper from './Wrapper';
import PasswordForm from './forms/PasswordForm';

// ================================|| REGISTER ||================================ //

const Password = () => (
    <Wrapper>
        <Grid container spacing={3} sx={{ maxWidth: "500px", height: "100%" }}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Forgot password</Typography>
                    <Typography component={Link} to="/signin" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Return to Sign In
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <PasswordForm />
            </Grid>
        </Grid>
    </Wrapper>
);

export default Password;
