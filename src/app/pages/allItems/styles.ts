import { makeStyles } from "@material-ui/core";

export const useAllItemsStyles = makeStyles(theme => ({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 212px)",
        gridGap: theme.spacing(2),
        justifyContent: "center",
        margin: theme.spacing(3),

        [theme.breakpoints.down("xs")]: {
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(auto-fill, 100%)",
        },
    },
    buttons: {
        display: "flex",
        gap: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));
