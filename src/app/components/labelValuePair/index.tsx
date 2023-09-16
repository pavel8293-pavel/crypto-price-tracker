import React from "react";

import { Typography } from "@material-ui/core";
import clsx from "clsx";

import { LabelValuePairProps } from "../../interfaces";
import { useLabelValuePairStyles } from "./styles";

const LabelValuePair: React.FC<LabelValuePairProps> = ({
    value,
    labelClassName,
    typographyLabelVariant = "body2",
    typographyValueVariant = "body1",
    tooltip,
    disabled = false,
    ...props
}: LabelValuePairProps): JSX.Element => {
    const styles = useLabelValuePairStyles();
    return (
        <>
            <Typography
                variant={typographyLabelVariant}
                className={clsx(labelClassName, styles.label)}
            >
                {props.label}
            </Typography>

            <div className={styles.value}>
                {typeof value === "string" ? (
                    <Typography variant={typographyValueVariant}>
                        {value}
                    </Typography>
                ) : (
                    value
                )}
            </div>
        </>
    );
};

export default LabelValuePair;