import { useHistory } from "react-router";
import Button from "../../../uiKit/buttons/button";
import { localization } from "../../../localization";
import routeNames from "../../../routes/routeNames";
import { useStoreContext } from "../../../StoreProvider";

const TrackSelectedItemsButton = () => {
    const { push } = useHistory();
    const { selectedItems } = useStoreContext();

    const onClick = () => push(routeNames.TRACK_ITEMS);

    return (
        <Button
            label={localization.trackSelectedItemsButton(selectedItems.length)}
            onClick={onClick}
            palette="green"
            disabled={!selectedItems.length}
        />
    );
};

export default TrackSelectedItemsButton;
