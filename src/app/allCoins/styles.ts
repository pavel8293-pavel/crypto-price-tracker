import { makeStyles } from "@material-ui/core";

export const useAllCoinsStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttons: {
        gap: theme.spacing(2),
    },
}));
