import useBasicLayoutStyles, { usePaperClasses } from "./styles";
import { Paper, Typography } from "@material-ui/core";

interface BasicLayoutProps {
    title: string;
    children: React.ReactNode;
    actions: React.ReactNode;
}

export const BasicLayout = ({ title, children, actions }: BasicLayoutProps) => {
    const styles = useBasicLayoutStyles();
    const paperClasses = usePaperClasses();
    return (
        <div className={styles.root}>
            <div className={styles.titleContainer}>
                <Typography variant="h3" className={styles.title}>
                    {title}
                </Typography>
                {actions}
            </div>
            <Paper classes={paperClasses}>{children}</Paper>
        </div>
    );
};
