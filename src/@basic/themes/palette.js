// material-ui
import { alpha, createTheme } from '@mui/material/styles';

// third-party
import { generate, presetPalettes } from '@ant-design/colors';


// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (paletteOptions) => {
    const colors = presetPalettes;

    const primaryColor = paletteOptions.primary ? generate(paletteOptions.primary) : colors.blue
    const greyColor = paletteOptions.grey ? generate(paletteOptions.grey) : colors.grey
    const errorColor = paletteOptions.error ? generate(paletteOptions.error) : colors.red
    const warningColor = paletteOptions.warning ? generate(paletteOptions.warning) : colors.gold
    const infoColor = paletteOptions.info ? generate(paletteOptions.info) : colors.cyan
    const successColor = paletteOptions.success ? generate(paletteOptions.success) : colors.green
    return createTheme({
        palette: {
            mode: paletteOptions.mode,
            common: {
                black: '#000',
                white: '#fff'
            },
            primary: {
                lighter: primaryColor[0],
                100: primaryColor[1],
                200: primaryColor[2],
                light: primaryColor[3],
                400: primaryColor[4],
                main: primaryColor[5],
                dark: primaryColor[6],
                700: primaryColor[7],
                darker: primaryColor[8],
                900: primaryColor[9],
                contrastText: '#fff'

            },
            secondary: {
                lighter: greyColor[0],
                100: greyColor[1],
                200: greyColor[2],
                light: greyColor[3],
                400: greyColor[4],
                main: greyColor[5],
                600: greyColor[6],
                dark: greyColor[7],
                800: greyColor[8],
                darker: greyColor[9],
                contrastText: greyColor[0]
            },
            error: {
                lighter: errorColor[0],
                light: errorColor[2],
                main: errorColor[4],
                dark: errorColor[7],
                darker: errorColor[9],
                contrastText: '#fff'
            },
            warning: {
                lighter: warningColor[0],
                light: warningColor[3],
                main: warningColor[5],
                dark: warningColor[7],
                darker: warningColor[9],
                contrastText: greyColor[0]
            },
            info: {
                lighter: infoColor[0],
                light: infoColor[3],
                main: infoColor[5],
                dark: infoColor[7],
                darker: infoColor[9],
                contrastText: '#fff'

            },
            success: {
                lighter: successColor[0],
                light: successColor[3],
                main: successColor[5],
                dark: successColor[7],
                darker: successColor[9],
                contrastText: '#fff'

            },
            grey: {
                0: greyColor[0],
                100: greyColor[1],
                200: greyColor[2],
                300: greyColor[3],
                400: greyColor[4],
                500: greyColor[5],
                600: greyColor[6],
                700: greyColor[7],
                800: greyColor[8],
                900: greyColor[9],
            },
            text: {
                primary: greyColor[6],
                secondary: greyColor[4],
                disabled: greyColor[3]
            },
            action: {
                disabled: greyColor[2]
            },
            divider: greyColor[1],
            background: {
                paper: '#fff',
                default: alpha(greyColor[5], 0.05)
            }
        }
    });
};

export default Palette;
