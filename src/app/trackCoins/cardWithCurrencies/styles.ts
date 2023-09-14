import { makeStyles } from "@material-ui/core";

export const useCardWithCurrenciesStyles = makeStyles(theme => ({
    currencyContainer: {
        display: "flex",
        flexDirection: "column",
    },
    divider: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));
