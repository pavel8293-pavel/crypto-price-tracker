import { makeStyles } from "@material-ui/core";

export const useCoinInfoStyles = makeStyles(theme => ({
    labelContainer: {
        width: "100%",
        textAlign: "center",
    },
    label: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
    },
    image: {
        height: "100px",
    },
}));
