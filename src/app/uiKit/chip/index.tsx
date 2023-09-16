import React, { memo } from "react";

import { Chip as MaterialChip, Typography } from "@material-ui/core";

import { ChipProps } from "../../interfaces";
import { ChipStylesProps, useChipLabelStyles, useChipStyles } from "./styles";


const Chip: React.FC<ChipProps> = ({
    text,
    className,
    palette = "primary",
    textColorVariant = 500,
    backgroundVariant = 50,
    size = "small",
}: ChipProps) => {
    const styleProps: ChipStylesProps = {
        palette: palette,
        textColorVariant: textColorVariant,
        backgroundVariant: backgroundVariant,
    };
    const chipClasses = useChipStyles(styleProps);
    const labelClasses = useChipLabelStyles(styleProps);
    const typographyVariant = size === "medium" ? "body1" : "body2";


    return (
        <MaterialChip
            size={size}
            label={
                    <Typography classes={labelClasses} variant={typographyVariant}>
                        {text}
                    </Typography>
            }
            classes={chipClasses}
            className={className}
        />
    );
};

export default memo(Chip);
