import { makeStyles } from "@material-ui/core";
import { applicationPalettes } from "../../constants";

export const useCardStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "200px",
        margin: theme.spacing(1.5, 2),
        padding: theme.spacing(1),
        boxSizing: "border-box",
        boxShadow: "none",
        border: `2px solid ${applicationPalettes.green[50]}`,
        borderRadius: theme.spacing(2),

        "&.MuiPaper-root:hover": {
            transform: "scale(1.05, 1.05)",
        },

        [theme.breakpoints.down("xs")]: {
            width: "150px",
            margin: theme.spacing(1),
        },
    },
}));
