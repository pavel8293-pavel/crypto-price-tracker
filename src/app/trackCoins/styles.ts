import { makeStyles } from "@material-ui/core";

export const useTrackCoinsStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",

        [theme.breakpoints.down("xs")]: {
            justifyContent: "space-around",
        },
    },
}));