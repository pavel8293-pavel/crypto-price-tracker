import Button from "../../uiKit/buttons/button";
import { localization } from "../../localization";
import { memo, useCallback } from "react";
import { useStoreContext } from "../../StoreProvider";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { ButtonSize } from "../../interfaces";
import { showErrorToast } from "../errorToast";
import { MAX_TRACK_ITEMS_COUNT } from "../../constants";

const SelectItemButton = ({ id, size = "s" }: { id: string; size?: ButtonSize }) => {
    const { checkIfItemSelected, removeItem, setItem, selectedItems } = useStoreContext();

    const isCardSelected = checkIfItemSelected(id);

    const buttonPalette = isCardSelected ? "primary" : "green";

    const label = isCardSelected ? localization.unselectButton : localization.selectButton;

    const onClick = useCallback(() => {
        if (isCardSelected) {
            return removeItem(id);
        }
        if (selectedItems.length < MAX_TRACK_ITEMS_COUNT) {
            return setItem(id);
        } else {
            showErrorToast(localization.maxTrackErrorCount(MAX_TRACK_ITEMS_COUNT));
        }
    }, [isCardSelected, selectedItems.length, removeItem, id, setItem]);

    return (
        <Button onClick={onClick} endIcon={<ArrowRightAltIcon />} label={label} palette={buttonPalette} size={size} />
    );
};

export default memo(SelectItemButton);
