import { makeStyles } from "@material-ui/core";
import { TxtColor } from "../../../constants";

export const useCardsStyles = makeStyles(theme => ({
    cards: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min-content, 892px))",
        gridGap: theme.spacing(3),
        justifyContent: "center",
        margin: theme.spacing(3),
    },
    card: {
        backgroundColor: TxtColor.Txt3,
        padding: theme.spacing(3),
        borderRadius: theme.spacing(2),
    },
}));
