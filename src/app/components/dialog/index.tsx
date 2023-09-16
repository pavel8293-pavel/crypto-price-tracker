import { useMemo } from "react";

import { DialogContent, DialogTitle, Dialog as MaterialDialog, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import IconButton from "../../uiKit/buttons/iconButton";
import { useBackdropStyles, useDialogStyles, useDialogTitleStyles, useDialogContentStyles, useTitleStyles } from "./styles";

export interface DialogProps {
    children?: React.ReactNode;
    isOpened: boolean;
    dialogTitle?: React.ReactNode;
    handleClose?: () => void;
    hideBackdrop?: boolean;
}

export default function Dialog({
    children,
    dialogTitle,
    handleClose,
    isOpened = false,
    hideBackdrop = false,
}: DialogProps): JSX.Element {
    const backdropStyles = useBackdropStyles();
    const dialogStyles = useDialogStyles();
    const dialogTitleStyles = useDialogTitleStyles();
    const dialogContentStyles = useDialogContentStyles();
    const titleStyles = useTitleStyles();

    const content = useMemo(() => {
        if (!isOpened) {
            return null;
        }

        return <DialogContent classes={{ ...dialogContentStyles }}>{children}</DialogContent>;
    }, [children, dialogContentStyles, isOpened]);

    return (
        <MaterialDialog
            onClose={handleClose}
            open={isOpened}
            classes={{
                paper: dialogStyles.paper,
                scrollPaper: dialogStyles.scrollPaper,
                paperScrollPaper: dialogStyles.paperScrollPaper,
            }}
            BackdropProps={{ className: backdropStyles.backdrop }}
            hideBackdrop={hideBackdrop}
        >
            <DialogTitle classes={{ ...dialogTitleStyles }} disableTypography>
                <Typography variant="h4" className={titleStyles.text}>
                    {dialogTitle}
                </Typography>
                <IconButton
                    data-testid="popup-close-button"
                    className={titleStyles.closeButton}
                    onClick={handleClose}
                    icon={Close}
                    noShadow
                />
            </DialogTitle>
            <div>{content}</div>
        </MaterialDialog>
    );
}
