
export default function Tooltip(theme) {
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: "1rem",
                    backgroundColor: theme.palette.primary.main
                },
                arrow: {
                    color: theme.palette.primary.main,
                    fontSize: "1rem"
                },


            }
        }
    }

}
    



