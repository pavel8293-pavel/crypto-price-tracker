import { makeStyles } from "@material-ui/core";
import { TxtColor, applicationPalettes } from "../../constants";

export const useBackdropStyles = makeStyles(() => ({
    backdrop: {
        backgroundColor: applicationPalettes.primary[800],
        opacity: "0.4 !important",
    },
}));

export const useDialogStyles = makeStyles(theme => ({
    paper: {
        flex: "1 1 auto",
        maxWidth: "720px",
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(1),
            marginTop: theme.spacing(5),
        },
    },
    scrollPaper: {
        alignItems: "flex-start",
        position: "relative",
    },
    paperScrollPaper: {
        paddingBottom: theme.spacing(4),
        maxHeight: "calc(100% - 72px)",
        [theme.breakpoints.down("sm")]: {
            maxHeight: "calc(100vh - 32px)",
        },
    },
}));

export const useDialogTitleStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(3, 3, 2, 4),
        position: "sticky",
        top: 0,
        background: TxtColor.Txt3,
        zIndex: 1,
    },
}));

export const useDialogContentStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(0, 2, 0, 2),
        },
        [theme.breakpoints.down("sm")]: {
            maxHeight: "none",
        },
        maxHeight: "calc(100vh - 300px)",
        flex: "1 0 auto",
        wordBreak: "break-word",
        padding: theme.spacing(0, 3, 0, 4),
        "&:first-child": {
            paddingTop: 0,
        },
    },
}));

export const useTitleStyles = makeStyles(theme => ({
    text: {
        marginRight: theme.spacing(5),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(2),
        top: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            top: theme.spacing(1.5),
        },
    },
}));
