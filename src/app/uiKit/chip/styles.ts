import { Theme, makeStyles } from "@material-ui/core";
import { ApplicationColorPalette, Color } from "../../interfaces";
import { applicationPalettes } from "../../constants";

export interface ChipStylesProps {
    palette: ApplicationColorPalette;
    textColorVariant: keyof Color;
    backgroundVariant: keyof Color;
}

export const useChipStyles = makeStyles<Theme, ChipStylesProps>(theme => ({
    root: {
        background: props => applicationPalettes[props.palette][props.backgroundVariant],
        borderRadius: "4px",
        padding: theme.spacing(0, 1),
        height: "32px",
    },
    label: {
        padding: 0,
    },
    sizeSmall: {
        height: "24px",
    },
}));

export const useChipLabelStyles = makeStyles<Theme, ChipStylesProps>(() => ({
    root: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        padding: 0,
        color: (props: ChipStylesProps) => applicationPalettes[props.palette][props.textColorVariant],
    },
}));
