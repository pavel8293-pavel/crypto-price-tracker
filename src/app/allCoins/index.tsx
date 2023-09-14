import { useMemo } from "react";
import { useStoreContext } from "../StoreProvider";
import { BasicLayout } from "../components/basicLayout";
import { localization } from "../localization";
import TrackSelectedCoinsButton from "./TrackSelectedCoinsButton";
import Card from "../components/card";
import { useAllCoinsStyles } from "./styles";
import ResetAllButton from "./ResetButton";
import clsx from "clsx";

const AllCoins = () => {
    const styles = useAllCoinsStyles();
    const { allCoins, allCoinsKeys } = useStoreContext();

    const content = useMemo(() => {
        if (!allCoins) {
            return null;
        }

        return allCoinsKeys?.map(coinKey => {
            return <Card {...allCoins[coinKey]} key={allCoins[coinKey].id} />;
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

    return (
        <BasicLayout title={localization.allCoinsTitle} actions={actions}>
            <div className={styles.container}>{content}</div>
        </BasicLayout>
    );
};

export default AllCoins;
