// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
    const disabledStyle = {
        '&.Mui-disabled': {
            backgroundColor: theme.palette.grey[200]
        }
    };

    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true

            },
            styleOverrides: {
                root: {
                    borderRadius: 50,

                },
                contained: {
                    ...disabledStyle
                },
                outlined: {
                    borderWidth: "1px",
                    ...disabledStyle,
                    borderColor: "#bdbdbd"
                }
            }
        }
    };
}
