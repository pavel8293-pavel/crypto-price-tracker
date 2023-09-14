import { Theme, makeStyles } from "@material-ui/core";
import { applicationPalettes } from "../../../constants";
import { ApplicationColorPalette } from "../../../interfaces";

export interface StylesProps {
    palette: ApplicationColorPalette;
}


export const useStyles = makeStyles<Theme, StylesProps>((theme) => ({
    root: {
        height: theme.spacing(6),
        width: "auto",
        minWidth: theme.spacing(20),
        borderRadius: theme.spacing(),
        border: props => `3px solid ${applicationPalettes[props.palette][200]}`,
        padding: theme.spacing(1.5, 3),
    },
    contained: {
        color: "white",
        backgroundColor: props => applicationPalettes[props.palette][500],
        "@media (hover: hover)": {
            "&:hover": {
                backgroundColor: props => applicationPalettes[props.palette][600],
                boxShadow: "none",
            },
        },
        "&:active": {
            backgroundColor: props => applicationPalettes[props.palette][800],
            boxShadow: "none",
        },
        "&.Mui-disabled": {
            backgroundColor: props => applicationPalettes[props.palette][50],
            border: props => `3px solid ${applicationPalettes[props.palette][2]}`,
            boxShadow: "none",
        },
    },
}));