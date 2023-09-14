import { useCallback } from "react";
import SolidButton from "../components/buttons/solidButton";
import { localization } from "../localization";
import { useStoreContext } from "../StoreProvider";

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
