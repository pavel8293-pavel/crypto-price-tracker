import { useEffect, useMemo } from "react";
import { useStoreContext } from "../StoreProvider";
import { BasicLayout } from "../components/basicLayout";
import { localization } from "../localization";
import GoToAllCoinsButton from "./GoToAllCoinsButton";
import CardWithCurrencies from "./cardWithCurrencies";
import { useTrackCoinsStyles } from "./styles";
import { GET_COIN_PRICES_INTERVAL_MIL_SEC } from "../constants";
import { FullscreenLoader } from "../components/fullscreenLoader";

const TrackCoins = () => {
    const styles = useTrackCoinsStyles();
    const { selectedCoins, getCoinPrices, coinPrices, allCoins, isLoading } = useStoreContext();

    const content = useMemo(() => {
        if (!allCoins) {
            return null;
        }

        return selectedCoins?.map(coin => {
            const { imageUrl, name, fullName, id } = allCoins[coin];
            return (
                <CardWithCurrencies
                    currencies={coinPrices?.[coin]}
                    imageUrl={imageUrl}
                    name={name}
                    fullName={fullName}
                    key={id}
                />
            );
        });
    }, [allCoins, coinPrices, selectedCoins]);

    useEffect(() => {
        const fetchData = async () => {
            await getCoinPrices();
        };

        fetchData();
        const interval = setInterval(async () => {
            await fetchData();
        }, GET_COIN_PRICES_INTERVAL_MIL_SEC);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        <FullscreenLoader />;
    }

    return (
        <BasicLayout title={localization.trackCoinsTitle} actions={<GoToAllCoinsButton />}>
            <div className={styles.container}>{content}</div>
        </BasicLayout>
    );
};

export default TrackCoins;
