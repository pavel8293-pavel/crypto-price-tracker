import { useMemo } from "react";
import { useStoreContext } from "../StoreProvider";
import { BasicLayout } from "../components/basicLayout";
import { localization } from "../localization";
import TrackSelectedCoinsButton from "./TrackSelectedCoinsButton";
import Card from "../components/card";
import { useAllCoinsStyles } from "./styles";

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

    return (
        <BasicLayout title={localization.allCoinsTitle} actions={<TrackSelectedCoinsButton />}>
            <div className={styles.cardsContainer}>{content}</div>
        </BasicLayout>
    );
};

export default AllCoins;
