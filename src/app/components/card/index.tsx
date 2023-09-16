import { useCardStyles } from "./styles";
import { ButtonBase, Paper } from "@material-ui/core";

interface BasicLayoutProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const Card = ({ onClick, children }: BasicLayoutProps) => {
    const styles = useCardStyles();

    const onCard = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClick?.();
    };

    const content = <Paper className={styles.root}>{children}</Paper>;

    return <>{onClick ? <ButtonBase onClick={onCard}>{content}</ButtonBase> : { content }}</>;
};
