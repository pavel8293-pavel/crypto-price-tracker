import { makeStyles } from "@material-ui/core";

export const useTrackCoinsStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",

        [theme.breakpoints.down("xs")]: {
            justifyContent: "space-around",
        },
    },
    buttons: {
        marginBottom: theme.spacing(1),
    },
}));
