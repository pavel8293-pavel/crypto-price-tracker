import { makeStyles, Theme } from "@material-ui/core";
import { applicationPalettes, TxtColor } from "../../constants";

const useBasicLayoutStyles = makeStyles<Theme>(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: theme.spacing(3),
        boxSizing: "border-box",
    },
    title: {
        "&.MuiTypography-h2": {
            fontWeight: 500,
            color: TxtColor.Txt1,
        },
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            marginBottom: theme.spacing(2),
        },
    },
}));

export default useBasicLayoutStyles;

export const usePaperClasses = makeStyles<Theme>(theme => ({
    root: {
        width: " 100%",
        height: "100%",
        overflow: "auto",
        "&.MuiPaper-root": {
            background: applicationPalettes.green[1],
        },
        "&.MuiPaper-rounded": {
            borderRadius: theme.spacing(2),
        },
    },
}));
