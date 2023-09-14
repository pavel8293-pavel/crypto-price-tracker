import { makeStyles } from "@material-ui/core";

export const useAllCoinsStyles = makeStyles(theme => ({
    cardsContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    },
}));
