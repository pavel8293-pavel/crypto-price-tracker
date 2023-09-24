import { useCallback } from "react";
import { useHistory } from "react-router";
import SolidButton from "../../../uiKit/buttons/button";
import { localization } from "../../../localization";
import routeNames from "../../../routes/routeNames";

const GoToAllItemsButton = () => {
    const { push } = useHistory();
    const onClick = useCallback(() => push(routeNames.ALL_ITEMS), [push]);

    return <SolidButton label={localization.goToAllItemsButton} onClick={onClick} palette="green" />;
};

export default GoToAllItemsButton;
