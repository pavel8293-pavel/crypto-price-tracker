import { makeStyles } from "@material-ui/core";

export const useAllItemsStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: theme.spacing(2),
        margin: theme.spacing(2),

        [theme.breakpoints.down("xs")]: {
            justifyContent: "space-around",
        },
    },
    buttons: {
        gap: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
}));
