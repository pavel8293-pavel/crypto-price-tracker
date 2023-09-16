import { Theme, makeStyles } from "@material-ui/core";
import { TxtColor, applicationPalettes } from "../../constants";
import { ApplicationColorPalette, ButtonSize } from "../../interfaces";

export interface StylesProps {
    palette: ApplicationColorPalette;
    variant: "outlined" | "contained";
    size: ButtonSize;
}

export const useStyles = makeStyles<Theme, StylesProps>(theme => ({
    root: {
        borderRadius: buttonBorderRadius,
        padding: buttonPaddings,
        height: buttonHeight,
        width: buttonWidth,
        minWidth: buttonMinWidth,
        maxWidth: buttonMaxWidth,
        backgroundColor: props =>
            props.variant === "contained" ? applicationPalettes[props.palette][500] : "transparent",

        border: props => `1px solid ${applicationPalettes[props.palette][200]}`,
        textTransform: "none",

        [theme.breakpoints.down("xs")]: {
            minWidth: "100%",
        },
    },
    contained: {
        backgroundColor: props => applicationPalettes[props.palette][200],
        color: TxtColor.Txt3,
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
            border: props => `3px solid ${applicationPalettes[props.palette][1]}`,
            boxShadow: "none",
        },
    },

    outlined: {
        backgroundColor: "transparent",
        "@media (hover: hover)": {
            "&:hover": {
                backgroundColor: props => applicationPalettes[props.palette][200],
                boxShadow: "none",
                color: TxtColor.Txt3,
            },
        },
        "&:active": {
            backgroundColor: props => applicationPalettes[props.palette][500],
            boxShadow: "none",
            color: TxtColor.Txt3,
        },
        "&.Mui-disabled": {
            backgroundColor: props => applicationPalettes[props.palette][50],
            border: props => `3px solid ${applicationPalettes[props.palette][1]}`,
            boxShadow: "none",
        },
    },
}));

interface ButtonStyleProps {
    height: string;
    width: string;
    minWidth: string;
    borderRadius: string;
    padding: string;
}

const buttonsStyles: { [key in ButtonSize]: ButtonStyleProps } = {
    l: { height: "3.5rem", width: "22.5rem", minWidth: "unset", borderRadius: "0.5rem", padding: "1rem 0" },
    m: { height: "3rem", width: "auto", minWidth: "11rem", borderRadius: "0.5rem", padding: "0.75rem 1.5rem" },
    s: { height: "auto", width: "6.5rem", minWidth: "auto", borderRadius: "0.375rem", padding: "0rem 1rem" },
};

export function buttonHeight(props: StylesProps): string {
    return buttonStyle(props, "height");
}

export function buttonWidth(props: StylesProps): string {
    return buttonStyle(props, "width");
}

export function buttonMinWidth(props: StylesProps): string {
    return buttonStyle(props, "minWidth");
}

export function buttonMaxWidth(): string {
    return "22.5rem";
}

export function buttonBorderRadius(props: StylesProps): string {
    return buttonStyle(props, "borderRadius");
}

export function buttonPaddings(props: StylesProps): string {
    return buttonStyle(props, "padding");
}

function buttonStyle(props: StylesProps, style: keyof ButtonStyleProps) {
    return buttonsStyles[props.size || "m"][style];
}
