import { makeStyles } from "@material-ui/core";
import { applicationPalettes } from "../../constants";

export const useCardStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "200px",
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        boxSizing: "border-box",
        border: `3px solid ${applicationPalettes.green[200]}`,
    },
    image: {
        height: "100px",
    },
    labelContainer: {
        width: "100%",
        textAlign: "center",
    },
    label: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
    },
}));
