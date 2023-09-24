import { makeStyles } from "@material-ui/core";
import { TxtColor } from "../../../../../constants";

export const useCardContentStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
        width: "100%",
    },
    label: {
        fontWeight: 600,
        color: TxtColor.Txt1,
    },
    image: {
        height: theme.spacing(8),
        width: theme.spacing(8),
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(1),
    },
    avatarContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    chip: {
        width: "100%",
        fontWeight: 600,
        borderRadius: theme.spacing(0.5),
        height: theme.spacing(3),
    },
}));
