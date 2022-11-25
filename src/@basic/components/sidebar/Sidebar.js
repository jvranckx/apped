import { ArrowRightOutlined } from "@ant-design/icons";
import { faAngleLeft, faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, FormControlLabel, Grid, IconButton, List, Stack, Switch, Typography, useTheme, alpha } from "@mui/material";
import { Box } from "@mui/system";
import { connect } from "react-redux";
import { setSidebarMinimized } from "../../redux/ui/actions";
import { selectSidebarMinimized } from "../../redux/ui/selectors";
import Logo from "../logo/Logo";
import Scrollbar from "../scrollbar/Scrollbar";
import SidebarItem from "./SidebarItem";
import StyledDrawer from "./StyledDrawer";
import config from '../../../config';
import Auth from "../../../auth";


const DRAWER_SMALL_WIDTH = config.drawerSmallWidth;
const DRAWER_WIDTH = config.drawerWidth;
function Sidebar({ minimized, setMinimized, items = [] }) {
    const theme = useTheme()
    const auth = new Auth();
    return (

        <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300, position: "relative" }} aria-label="mailbox folders">
            <StyledDrawer variant="permanent" open={minimized} >
                <Grid container direction="column" sx={{ width: "100%", height: "100%" }}>
                    <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {/* <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}> */}
                        <Logo color={theme.palette.grey[500]} short={minimized} size={40} animate={true} sx={{ mt: 2 }}></Logo>
                        {/* <IconButton onClick={() => setMinimized(!minimized)} sx={{ borderRadius: "100%", mt: 2 }}><FontAwesomeIcon color={theme.palette.grey[100]} icon={faBars} /></IconButton> */}
                        {/* </Box> */}
                    </Grid>
                    <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {/* <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}> */}
                        {/* <IconButton onClick={() => setMinimized(!minimized)} sx={{ borderRadius: "100%", mt: 2 }}><FontAwesomeIcon color={theme.palette.grey[100]} icon={faBars} /></IconButton> */}
                        {/* </Box> */}
                    </Grid>
                    <Grid item xs={8} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }} >
                            <Scrollbar
                                sx={{
                                    height: 1,
                                    width: "100%",
                                    '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column', justifyContent: "start" }
                                }}
                            >
                                <List disablePadding sx={{ margin: 2 }}>
                                    {items.map((item) => (
                                        <SidebarItem key={item.title} item={item} minimized={minimized} />
                                    ))}
                                </List>
                            </Scrollbar>
                        </Box>
                    </Grid>

                    <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                        <Box sx={{ display: "flex", width: "100%", justifyContent: minimized ? "center" : "left" }}>
                            {/* <Box>
                                <FormControlLabel
                                    value="top"
                                    control={<Switch label="Minimize" defaultChecked onChange={(e) => setMinimized(e.target.checked)} />
                                    }
                                    sx={{ fontColor: theme.palette.grey[100] }}
                                    label={minimized ? <Typography variant="subtitle2">&nbsp;</Typography> : <Typography variant="h6" color={theme.palette.grey["500"]} fontWeight={750}>Minimize</Typography>}
                                    labelPlacement="top"
                                />
                            </Box> */}

                            <Box sx={{ display: "flex", pl: minimized ? 0 : 4 }}>
                                <Box >
                                    <Avatar src={"https://picsum.photos/id/1025/200/200"}></Avatar>
                                </Box>
                                {!minimized && <Box sx={{ flex: 1, pl: 2 }} >
                                    <Typography variant="h6">{auth.currentUser().given_name + " " + auth.currentUser().family_name}</Typography>
                                    <Typography variant="subtitle1" color={theme.palette.grey[200]} lineHeight={1}>{auth.currentUser().roles}</Typography>

                                </Box>}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </StyledDrawer>

            <IconButton onClick={(e) => setMinimized(!minimized)} size="small" sx={{
                position: "absolute", top: 10, zIndex: 1400, marginLeft: (minimized ? DRAWER_SMALL_WIDTH : DRAWER_WIDTH) - 15 + "px", backgroundColor: alpha(theme.palette.grey[500], 0.2), borderRadius: "100%", transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen
                }),
            }}>
                {minimized ? <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> : <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>}
            </IconButton>
        </Box >


    )
}
const mapDispatchToProps = dispatch => {
    return {
        setMinimized: (state) => dispatch(setSidebarMinimized(state))
    }
}

const mapStateToProps = state => ({
    minimized: selectSidebarMinimized(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)