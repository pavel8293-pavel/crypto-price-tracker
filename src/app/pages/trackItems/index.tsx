import { useEffect, useMemo, useState } from "react";
import { BasicLayout } from "../../components/basicLayout";
import { localization } from "../../localization";
import GoToAllCoinsButton from "./goToAllCoinsButton";
import { useTrackCoinsStyles } from "./styles";
import { clsx } from "clsx";
import Cards from "./cardsContent";
import { useStoreContext } from "../../StoreProvider";
import { FullscreenLoader } from "../../components/fullscreenLoader";

const TrackItems = () => {
    const styles = useTrackCoinsStyles();

    const [isLoading, setIsLoading] = useState(false);

    const { getAllItems, getItemsHistory } = useStoreContext();

    useEffect(() => {
        async function fetchItemsData() {
            setIsLoading(true);

            await getAllItems();
            await getItemsHistory();

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
            <Cards />
        </BasicLayout>
    );
};

export default TrackItems;
