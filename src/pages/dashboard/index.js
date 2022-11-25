import PropTypes from 'prop-types';

// material-ui
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../@basic/components/sidebar/Sidebar';
import config from '../../config';
import { selectSidebarMinimized } from '../../@basic/redux/ui/selectors';
import { connect } from 'react-redux';
const DRAWER_SMALL_WIDTH = config.drawerSmallWidth;
const DRAWER_WIDTH = config.drawerWidth;
const Dashboard = ({ minimized }) => {
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
    
    return (
        < Box sx={{ minHeight: '100vh', position: "relative", width: "100%", display: "flex", overflow: "hidden" }}>
            {/* <NavBar onOpenSidebar={() => setOpen(true)} /> */}
            {lgUp && <Sidebar items={config.navigation}></Sidebar>}
            <Box sx={{
                overflow: "auto",
                minWidth: (minimized ? DRAWER_SMALL_WIDTH : DRAWER_WIDTH) + "px", transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen
                }),
            }}>
                <Outlet />
            </Box>
        </Box >
    );
}
Dashboard.propTypes = {
    children: PropTypes.node
};



const mapStateToProps = state => ({
    minimized: selectSidebarMinimized(state),
});

export default connect(mapStateToProps, null)(Dashboard)