import { makeStyles } from "@material-ui/core";

export const useCardStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "200px",
        padding: theme.spacing(1.5),
        boxSizing: "border-box",
        boxShadow: "none",
        borderRadius: theme.spacing(1),

        "&.MuiPaper-root:hover": {
            transform: "scale(1.05, 1.05)",
        },
    },
}));
