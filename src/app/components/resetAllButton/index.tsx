import { useStoreContext } from "../../StoreProvider";
import { localization } from "../../localization";
import SolidButton from "../../uiKit/button";

const ResetAllButton = () => {
    const { removeItems, selectedItems } = useStoreContext();
    const onClick = () => removeItems();

    return (
        <SolidButton
            label={localization.resetButton}
            onClick={onClick}
            palette="primary"
            disabled={!selectedItems.length}
        />
    );
};

export default ResetAllButton;
