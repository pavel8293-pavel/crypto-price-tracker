import { makeStyles } from "@material-ui/core";
import { applicationPalettes } from "../../constants";

export const useCardWithChartStyles = makeStyles(theme => ({
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: theme.spacing(1),
        padding: theme.spacing(1),
        borderRadius: theme.spacing(1),
        backgroundColor: applicationPalettes.green[1],
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            alignItems: "center",
            gap: theme.spacing(4),
        },
    },
    avatarContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(1),
    },
    valuePairsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(min-content, max-content))",
        columnGap: theme.spacing(2),
        rowGap: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: "repeat(1, minmax(auto, 1fr))",
            rowGap: theme.spacing(1),
        },
    },
    image: {
        height: theme.spacing(15),
        width: theme.spacing(15),
    },
    chip: {
        width: "100%",
        fontWeight: 600,
        borderRadius: theme.spacing(0.5),
        height: theme.spacing(3),
    },
}));
