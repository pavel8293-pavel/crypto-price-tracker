import { useCardStyles } from "./styles";
import { Paper } from "@material-ui/core";

interface BasicLayoutProps {
    children: React.ReactNode;
}

export const Card = ({ children }: BasicLayoutProps) => {
    const styles = useCardStyles();
    return <Paper className={styles.root}>{children}</Paper>;
};
