// ==============================|| THEME CONFIG  ||============================== //

import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import {
    AppstoreOutlined
} from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGear } from "@fortawesome/free-solid-svg-icons";
const config = {
    defaultPath: '/dashboard/default',
    fontFamily: "'Nunito', sans-serif;",
    i18n: 'en',
    miniDrawer: false,
    drawerSmallWidth: 80,
    drawerWidth: 260,
    drawerHeight: 60,
    container: true,
    presetColor: 'default',
    themeDirection: 'ltr',
    paletteOptions: {
        mode: 'light',
        grey: "#293f4e",
        primary: "#2fcc85",
        secondary: null,
        info: null,
        succes: null,
        error: "#a90f12",
        success: null,
    },
    navigation: [
        {
            "title": 'dashboard',
            "path": '/home',
            "Icon": ({ fontSize, color }) => { return (<AppstoreOutlined style={{ fontSize: fontSize, color: color }} />) },
            "roles": "Advisor;Reporting",
            "description": "Manage and monitor your applications and users"
        },
        {
            "title": 'organisation',
            "path": '/organisation',
            "Icon": ({ fontSize, color }) => { return (<FontAwesomeIcon color={color} style={{ fontSize: fontSize }} icon={faBriefcase}></FontAwesomeIcon>) },
            "roles": "Advisor;Reporting",
            "description": "Manage your ogranisations"

        },
        {
            "title": 'settings',
            "path": '/settings',
            "Icon": ({ fontSize, color }) => { return (<FontAwesomeIcon color={color} style={{ fontSize: fontSize }} icon={faGear}></FontAwesomeIcon>) },
            "roles": "Advisor;Reporting",
            "description": "Manage your personal applications settings and user profile"

        }
    ]
};

export default config;
export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';
