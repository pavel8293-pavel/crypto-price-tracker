import { useMemo } from "react";
import CardWithChart from "../../../components/cardWithChart";
import { useCardsStyles } from "./styles";
import { useStoreContext } from "../../../StoreProvider";

const Cards = () => {
    const styles = useCardsStyles();
    const { selectedItems, itemsHistory, allItems } = useStoreContext();

    const content = useMemo(() => {
        if (!itemsHistory) {
            return null;
        }

        return selectedItems.map(selected => {
            const item = allItems.find(item => selected === item.id);
            if (!item || !itemsHistory?.[selected]) {
                return null;
            }
            return (
                <div className={styles.card}>
                    <CardWithChart itemHistory={itemsHistory[selected]} {...item} canSelect={false} />
                </div>
            );
        });
    }, [itemsHistory, selectedItems, allItems, styles.card]);

    return <div className={styles.cards}>{content}</div>;
};

export default Cards;
