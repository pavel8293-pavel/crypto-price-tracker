import { UpdatedCoinEntity } from "../../interfaces";
import SolidButton from "../../uiKit/buttons/solidButton";
import { localization } from "../../localization";
import { memo, useCallback } from "react";
import { useStoreContext } from "../../StoreProvider";
import CoinInfo from "../../components/coinInfo";
import { Card } from "../../components/card";

type CardProps = Omit<UpdatedCoinEntity, "id" | "url" | "coinName" | "description">;

const CoinCard = ({ name, ...props }: CardProps) => {
    const { checkIfCoinSelected, removeItem, setItem } = useStoreContext();

    const isCardSelected = checkIfCoinSelected(name);
    const label = isCardSelected ? localization.unselectButton : localization.selectButton;
    const palette = isCardSelected ? "primary" : "yellow";

    const onClick = useCallback(() => {
        if (isCardSelected) {
            return removeItem(name);
        }
        return setItem(name);
    }, [isCardSelected, name, removeItem, setItem]);

    return (
        <Card>
            <CoinInfo {...props} />
            <SolidButton label={label} palette={palette} onClick={onClick} />
        </Card>
    );
};

export default memo(CoinCard);
