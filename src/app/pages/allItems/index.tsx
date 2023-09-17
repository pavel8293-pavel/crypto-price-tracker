import { useEffect, useMemo, useState } from "react";
import { useStoreContext } from "../../StoreProvider";
import { BasicLayout } from "../../components/basicLayout";
import { localization } from "../../localization";
import TrackSelectedItemsButton from "./trackSelectedItemsButton";
import ItemCard from "./itemCard";
import { useAllItemsStyles } from "./styles";
import { Typography } from "@material-ui/core";
import ResetAllButton from "../../components/resetAllButton";
import { FullscreenLoader } from "../../components/fullscreenLoader";

const AllItems = () => {
    const styles = useAllItemsStyles();

    const [isLoading, setIsLoading] = useState(false);

    const { allItems, getAllItems } = useStoreContext();

    useEffect(() => {
        async function fetchAllItems() {
            setIsLoading(true);
            await getAllItems();
            setIsLoading(false);
        }

        fetchAllItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const content = useMemo(() => {
        if (!allItems.length) {
            return <Typography variant="h5" className={styles.emptyScreen}>{localization.thereIsNoItemsMessage}</Typography>;
        }

        return (
            <div className={styles.container}>
                {allItems.map(coin => {
                    return <ItemCard {...coin} key={coin.id} />;
                })}
            </div>
        );
    }, [allItems, styles.container, styles.emptyScreen]);

    const actions = useMemo(() => {
        return (
            <div className={styles.buttons}>
                <TrackSelectedItemsButton />
                <ResetAllButton />
            </div>
        );
    }, [styles.buttons]);

    if (isLoading) {
        <FullscreenLoader />;
    }

    return (
        <BasicLayout title={localization.allItemsTitle} actions={actions}>
            {content}
        </BasicLayout>
    );
};

export default AllItems;
