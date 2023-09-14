import { useCallback } from "react";
import { useStoreContext } from "../../StoreProvider";
import { localization } from "../../localization";
import SolidButton from "../../uiKit/buttons/solidButton";

const ResetAllButton = () => {
    const { removeItems, selectedCoins } = useStoreContext();
    const onClick = useCallback(() => removeItems(), [removeItems]);

    return (
        <SolidButton
            label={localization.resetButton}
            onClick={onClick}
            palette="primary"
            disabled={!selectedCoins.length}
        />
    );
};

export default ResetAllButton;
