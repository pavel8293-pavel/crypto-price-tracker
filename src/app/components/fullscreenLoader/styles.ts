import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useFullscreenLoaderStyles = makeStyles<Theme>({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },
});

export default useFullscreenLoaderStyles;
