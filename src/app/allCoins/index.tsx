import { useEffect, useMemo, useState } from "react";
import { useStoreContext } from "../StoreProvider";
import { BasicLayout } from "../components/basicLayout";
import { localization } from "../localization";
import TrackSelectedCoinsButton from "./TrackSelectedCoinsButton";
import CoinCard from "./card";
import { useAllCoinsStyles } from "./styles";
import clsx from "clsx";
import ResetAllButton from "../components/resetAllButton";
import { FullscreenLoader } from "../components/fullscreenLoader";

const AllCoins = () => {
    const [isLoading, setIsLoading] = useState(false);
    const styles = useAllCoinsStyles();
    const { allCoins, allCoinsKeys, getAllCoins } = useStoreContext();

    useEffect(() => {
        async function fetchAllCoins() {
            setIsLoading(true);
            await getAllCoins();
            setIsLoading(false);
        }

        fetchAllCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const content = useMemo(() => {
        if (!allCoins) {
            return null;
        }

        return allCoinsKeys?.map(coinKey => {
            return <CoinCard {...allCoins[coinKey]} key={allCoins[coinKey].id} />;
        });
    }, [allCoins, allCoinsKeys]);

    const actions = useMemo(() => {
        return (
            <div className={clsx(styles.container, styles.buttons)}>
                <TrackSelectedCoinsButton />
                <ResetAllButton />
            </div>
        );
    }, [styles.buttons, styles.container]);

    if (isLoading) {
        <FullscreenLoader />;
    }

    return (
        <BasicLayout title={localization.allCoinsTitle} actions={actions}>
            <div className={styles.container}>{content}</div>
        </BasicLayout>
    );
};

export default AllCoins;
