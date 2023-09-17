import { useEffect, useMemo, useState } from "react";
import { BasicLayout } from "../../components/basicLayout";
import { localization } from "../../localization";
import GoToAllCoinsButton from "./goToAllCoinsButton";
import { useTrackCoinsStyles } from "./styles";
import { clsx } from "clsx";
import Cards from "./cardsContent";
import { useStoreContext } from "../../StoreProvider";
import { FullscreenLoader } from "../../components/fullscreenLoader";
import { ItemHistoryModel } from "../../interfaces";

const TrackItems = () => {
    const styles = useTrackCoinsStyles();

    const [itemHistories, setItemHistories] = useState<ItemHistoryModel | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const { allItems, getAllItems, getItemHistory, selectedItems } = useStoreContext();

    useEffect(() => {
        async function fetchItemsData() {
            setIsLoading(true);

            const histories = {} as ItemHistoryModel;

            await getAllItems();
            await Promise.all(
                selectedItems.map(async item => {
                    const history = await getItemHistory(item);
                    if (history) {
                        histories[item] = history;
                    }
                })
            );
            setItemHistories(histories);

            setIsLoading(false);
        }

        fetchItemsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const actions = useMemo(() => {
        return (
            <div className={clsx(styles.container, styles.buttons)}>
                <GoToAllCoinsButton />
            </div>
        );
    }, [styles.buttons, styles.container]);

    if (isLoading) {
        <FullscreenLoader />;
    }

    return (
        <BasicLayout title={localization.trackItemsTitle} actions={actions}>
            <Cards items={allItems} itemHistories={itemHistories} />
        </BasicLayout>
    );
};

export default TrackItems;
