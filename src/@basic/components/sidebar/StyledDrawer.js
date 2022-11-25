// material-ui
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import config from '../../../config';
const DRAWER_SMALL_WIDTH = config.drawerSmallWidth;
const DRAWER_WIDTH = config.drawerWidth;

const openedMixin = (theme, moveDown) => ({
    width: DRAWER_SMALL_WIDTH,
    borderRight: 'none',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden',
    boxShadow: 'none',
    backgroundColor: theme.palette.background.paper,
    height: `calc(100% - ${moveDown}px)`,
    top: moveDown
});

const closedMixin = (theme, moveDown) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: theme.palette.background.paper,
    overflowX: 'hidden',
    width: DRAWER_WIDTH,
    borderRight: 'none',
    // boxShadow: theme.customShadows.z1,
    height: `calc(100% - ${moveDown}px)`,
    top: moveDown
});

/**
* Mini drawer style
*
* */
const StyledDrawer = styled(Drawer)(({ theme, open, moveDown = 0 }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme, moveDown)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme, moveDown)
    })
}));

export default StyledDrawer
