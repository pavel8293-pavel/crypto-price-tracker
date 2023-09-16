import { IconButton as MaterialIconButton, SvgIcon } from "@material-ui/core";
import { ButtonStyle } from "../../../interfaces";

interface IconButtonProps extends ButtonStyle {
    id?: string;
    icon: typeof SvgIcon;
    noShadow?: boolean;
}

export default function IconButton({
    id,
    icon,
    variant,
    noShadow,
    size,
    className,
    onClick,
    ...rest
}: IconButtonProps): JSX.Element {
    const Icon = icon;
    const onHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClick?.();
    };
    return (
        <MaterialIconButton
            id={id}
            onClick={onHandleClick}
            className={className}
            size={size === "s" ? "small" : "medium"}
            disableRipple
            {...rest}
        >
            <Icon />
        </MaterialIconButton>
    );
}
