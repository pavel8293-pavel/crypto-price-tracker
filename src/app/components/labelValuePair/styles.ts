import { makeStyles } from "@material-ui/core/styles";
import { TxtColor } from "../../constants";

export const useLabelValuePairStyles = makeStyles({
    label: {
        color: TxtColor.Txt2,
    },
    value: {
        maxWidth: 630,
    },
    disabled: {
        color: TxtColor.Txt2,
    },
});
