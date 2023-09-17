import { useMemo } from "react";
import CardWithChart from "../../../components/cardWithChart";
import { ItemEntity, ItemHistoryModel } from "../../../interfaces";
import { isEmpty } from "lodash";
import { useCardsStyles } from "./styles";
import { useStoreContext } from "../../../StoreProvider";

interface CardsProps {
    items: ItemEntity[];
    itemHistories: ItemHistoryModel | undefined;
}

const Cards = ({ items, itemHistories }: CardsProps) => {
    const styles = useCardsStyles();
    const { selectedItems } = useStoreContext();

    const content = useMemo(() => {
        if (isEmpty(itemHistories)) {
            return null;
        }

        return selectedItems.map(selected => {
            const item = items.find(item => selected === item.id);
            if (!item || !itemHistories?.[selected]) {
                return null;
            }
            return (
                <div className={styles.card}>
                    <CardWithChart itemHistory={itemHistories[selected]} {...item} canSelect={false} />
                </div>
            );
        });
    }, [itemHistories, selectedItems, items, styles.card]);

    return <div className={styles.cards}>{content}</div>;
};

export default Cards;
