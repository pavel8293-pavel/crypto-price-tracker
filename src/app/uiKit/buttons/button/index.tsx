import { Button as MaterialButton, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { ButtonStyle } from "../../../interfaces";

export default function Button({
    id,
    label,
    palette = "primary",
    startIcon,
    endIcon,
    variant = "contained",
    onClick,
    size = "m",
    disabled = false,
}: ButtonStyle): JSX.Element {
    const classes = useStyles({ palette, variant, size });

    const onHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClick?.();
    };

    return (
        <MaterialButton
            id={id}
            onClick={onHandleClick}
            startIcon={startIcon}
            endIcon={endIcon}
            variant={variant}
            focusRipple={false}
            disabled={disabled}
            classes={{ ...classes }}
            disableElevation
        >
            <Typography>{label}</Typography>
        </MaterialButton>
    );
}
