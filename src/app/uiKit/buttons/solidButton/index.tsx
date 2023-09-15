import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { ButtonStyle } from "../../../interfaces";

export default function SolidButton({
    id,
    label,
    palette = "primary",
    startIcon,
    onClick,
    disabled = false
}: ButtonStyle): JSX.Element {
    const classes = useStyles({ palette });

    return (
        <Button
            id={id}
            onClick={onClick}
            startIcon={startIcon}
            variant="contained"
            focusRipple={false}
            disabled={disabled}
            classes={{ ...classes }}
            disableElevation
        >
            <Typography>{label}</Typography>
        </Button>
    );
}
