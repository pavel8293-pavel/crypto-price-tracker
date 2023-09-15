import { useCallback } from "react";
import { useHistory } from "react-router";
import SolidButton from "../uiKit/buttons/solidButton";
import { localization } from "../localization";
import routeNames from "../routes/routeNames";

const GoToAllCoinsButton = () => {
    const { push } = useHistory();
    const onClick = useCallback(() => push(routeNames.ALL_CURRENCIES), [push]);

    return <SolidButton label={localization.goToAllCoinsButton} onClick={onClick} palette="yellow" />;
};

export default GoToAllCoinsButton;
