import { ItemEntity, ItemHistory } from "../../../../../interfaces";
import { useEffect, useState } from "react";
import { useStoreContext } from "../../../../../StoreProvider";
import { CircularProgress } from "@material-ui/core";
import CardWithChart from "../../../../../components/cardWithChart";
import { useDialogContentStyles } from "./styles";

const DialogContent = (item: ItemEntity) => {
    const styles = useDialogContentStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [itemHistory, setItemHistory] = useState<ItemHistory | undefined>();

    const { getItemHistory } = useStoreContext();

    useEffect(() => {
        async function fetchItemsHistory() {
            setIsLoading(true);
            const history = await getItemHistory(item.id);
            setItemHistory(history);
            setIsLoading(false);
        }

        fetchItemsHistory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loader}>
                <CircularProgress />
            </div>
        );
    }

    if (!itemHistory) {
        return null;
    }

    return <CardWithChart itemHistory={itemHistory} {...item} />;
};

export default DialogContent;
