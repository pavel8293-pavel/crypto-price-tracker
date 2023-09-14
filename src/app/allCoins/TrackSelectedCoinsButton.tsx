import { useCallback } from "react";
import { useHistory } from "react-router";
import SolidButton from "../uiKit/buttons/solidButton";
import { localization } from "../localization";
import routeNames from "../routes/routeNames";
import { useStoreContext } from "../StoreProvider";

const TrackSelectedCoinsButton = () => {
    const { push } = useHistory();
    const { selectedCoins } = useStoreContext();
    const onClick = useCallback(() => push(routeNames.TRACK_CURRENCIES), [push]);

    return (
        <SolidButton
            label={localization.trackSelectedCoinsButton(selectedCoins.length)}
            onClick={onClick}
            palette="yellow"
            disabled={!selectedCoins.length}
        />
    );
};

export default TrackSelectedCoinsButton;
