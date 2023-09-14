import { makeStyles, Theme } from "@material-ui/core";
import { applicationPalettes, TxtColor } from "../../constants";

const useBasicLayoutStyles = makeStyles<Theme>(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: theme.spacing(2),
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
    }
}));

export default useBasicLayoutStyles;

export const usePaperStyles = makeStyles<Theme>(theme => ({
    root: {
        width: " 100%",
        height: "100%",
        overflow: "overlay",
        "&.MuiPaper-root": {
            background: applicationPalettes.yellow[50],
        },
        "&.MuiPaper-rounded": {
            borderRadius: theme.spacing(1),
        },
    },
}));