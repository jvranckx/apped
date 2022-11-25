import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography, useTheme } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { NavLink as RouterLink } from 'react-router-dom';

function SidebarItem({ item, minimized }) {
    const { pathname } = useLocation();

    const active = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

    const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
        ...theme.typography.subtitle2,
        position: 'relative',
        textTransform: 'capitalize',
        fontWeight: "bold",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding: 4,
        borderRadius: 100,
        color: theme.palette.grey[300],

    }));

    //-------------- State ----------------
    const isActiveRoot = active(item.path);
    const { title, path, Icon, info, children } = item;
    const [open, setOpen] = useState(isActiveRoot);
    //-------------- Hooks ----------------
    const theme = useTheme();

    //-------------- Handler ----------------
    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    //-------------- Styles ----------------
    const ListItemIconStyle = styled(ListItemIcon)(({ theme }) => ({
        // width: 8,
        // height: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isActiveRoot ? theme.palette.success.main : theme.palette.grey[600],

    }));
    const activeRootStyle = {
        color: theme.palette.primary.main,
        fontWeight: 'fontWeightMedium',
    };
    const activeSubStyle = {
        color: 'primary.main',
        fontWeight: 'fontWeightMedium',
    };

    const RenderTooltip = () => {
        return (<Box sx={{ width: "200px", height: "150px" }}><List sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "100%" }}>
            <ListItem key={item.title} disablePadding sx={{ display: "flex", justifyContent: "space-evenly" }} >
                {Icon && <Icon fontSize={"2rem"} color={theme.palette.background.paper} />}
            </ListItem>

            <ListItem key={item.title} disablePadding sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography sx={{ textAlign: "end" }} textAlign="center" variant="h6">{item.title}</Typography>

                <Typography sx={{ textAlign: "center" }} textAlign="center" variant="caption">{item.description}</Typography>
            </ListItem>

        </List ></Box >)
    }

    //-------------- Render ----------------
    if (children) {
        return (
            <>
                {minimized ? <Tooltip sx={{ padding: 0 }} title={<RenderTooltip />} arrow placement="right">
                    <Box> <ListItemStyle
                        onClick={handleOpen}
                        sx={{
                            ...(isActiveRoot && activeRootStyle),
                        }}
                    >
                        <ListItemIconStyle>{Icon && <Icon fontSize={minimized ? "1.25rem" : "1rem"} />}</ListItemIconStyle>
                    </ListItemStyle></Box></Tooltip > :
                    <ListItemStyle
                        onClick={handleOpen}
                        sx={{
                            ...(isActiveRoot && activeRootStyle),
                        }}
                    >
                        <ListItemIconStyle>{Icon && <Icon fontSize={minimized ? "1.25rem" : "1rem"} />}</ListItemIconStyle>

                        {!minimized && <Box style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: "100%",
                            overflowX: "hidden"
                        }}><ListItemText disableTypography primary={title} />
                            {info && info}
                            {open ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faChevronDown} />}</Box>}
                    </ListItemStyle>
                }
                {
                    !minimized && <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {children.map((item) => {
                                const { title, path } = item;
                                const isActiveSub = active(path);
                                return (
                                    <ListItemStyle
                                        key={title}
                                        component={RouterLink}
                                        to={path}
                                        sx={{
                                            ...(isActiveSub && activeSubStyle),
                                        }}
                                    >
                                        <ListItemIconStyle>
                                            <Box
                                                component="span"
                                                sx={{
                                                    width: 4,
                                                    height: 4,
                                                    display: 'flex',
                                                    borderRadius: '50%',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    bgcolor: isActiveSub ? 'success.main' : 'text.disabled',
                                                    transition: (theme) => theme.transitions.create('transform'),
                                                    ...(isActiveSub && {
                                                        transform: 'scale(2)',
                                                    }),
                                                }}
                                            />
                                        </ListItemIconStyle>
                                        <ListItemText disableTypography primary={title} />
                                    </ListItemStyle>
                                );
                            })}
                        </List>
                    </Collapse>
                }
            </>
        );
    }
    return (
        <ListItemStyle
            component={RouterLink}
            to={path}
            sx={{
                ...(isActiveRoot && activeRootStyle),
                marginY: 1,
                paddingX: 1.5,
                paddingY: 1.5,
                width: "100%",
                height: "3rem",
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen
                }),
                backgroundColor: isActiveRoot ? theme.palette.primary["100"] : null
            }}
        >
            {minimized ? <Tooltip PopperProps={{
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [0, 15],
                        },
                    },
                ],
            }} sx={{ padding: 0 }} title={<RenderTooltip />} arrow placement="right">
                <Box style={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "left",
                    width: "100%",
                    overflowX: "hidden",
                }}>
                    <ListItemIconStyle>{Icon && <Icon fontSize={"1.2rem"} color={isActiveRoot ? theme.palette.primary.main : theme.palette.grey["0"]} />}</ListItemIconStyle>
                    {!minimized && <ListItemText disableTypography primary={<Typography variant="h6" color={theme.palette.grey["500"]} fontWeight={750}>{title}</Typography>} sx={{
                        paddingLeft: 2
                    }} />}
                </Box>
            </Tooltip> :
                <Box style={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "left",
                    width: "100%",
                    overflowX: "hidden",
                }}>
                    <ListItemIconStyle>{Icon && <Icon fontSize={"1.2rem"} color={isActiveRoot ? theme.palette.primary.main : theme.palette.grey["0"]} />}</ListItemIconStyle>
                    {!minimized && <ListItemText disableTypography primary={<Typography variant="h6" color={theme.palette.grey["500"]} fontWeight={750}>{title}</Typography>} sx={{
                        paddingLeft: 2
                    }} />}
                </Box>
            }
        </ListItemStyle>
    );
}

export default SidebarItem