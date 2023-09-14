import React from "react";

import { CircularProgress } from "@material-ui/core";
import useFullscreenLoaderStyles from "./styles";

export const FullscreenLoader: React.FC = () => {
    const styles = useFullscreenLoaderStyles();

    return (
        <div className={styles.root} data-testid="fullscreen-loader">
            <CircularProgress />
        </div>
    );
};
