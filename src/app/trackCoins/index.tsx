import { useEffect, useMemo, useState } from "react";
import { useStoreContext } from "../StoreProvider";
import { BasicLayout } from "../components/basicLayout";
import { localization } from "../localization";
import GoToAllCoinsButton from "./GoToAllCoinsButton";
import CardWithCurrencies from "./cardWithCurrencies";
import { useTrackCoinsStyles } from "./styles";
import { GET_COIN_PRICES_INTERVAL_MIL_SEC } from "../constants";
import { FullscreenLoader } from "../components/fullscreenLoader";
import Chart from "./chart";
import { clsx } from "clsx";
import { Typography } from "@material-ui/core";

const TrackCoins = () => {
    const styles = useTrackCoinsStyles();
    const [isLoading, setIsLoading] = useState(false);
    const { selectedCoins, getCoinPrices, coinPrices, allCoins, getAllCoins } = useStoreContext();

    const content = useMemo(() => {
        if (!allCoins || !coinPrices) {
            return null;
        }

        return selectedCoins?.map(coin => {
            const { id } = allCoins?.[coin];
            return <CardWithCurrencies currencies={coinPrices?.[coin]} key={id} {...allCoins?.[coin]} />;
        });
    }, [allCoins, coinPrices, selectedCoins]);

    const actions = useMemo(() => {
        return (
            <div className={clsx(styles.container, styles.buttons)}>
                <GoToAllCoinsButton />
            </div>
        );
    }, [styles.buttons, styles.container]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const requests = [getCoinPrices()];

            if (!allCoins) {
                requests.push(getAllCoins());
            }

            await Promise.all(requests);
            setIsLoading(false);
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
        <BasicLayout title={localization.trackCoinsTitle} actions={actions}>
            <div className={styles.container}>{content}</div>
            {coinPrices && (
                <div className={styles.chart}>
                    <Typography variant="h5">{localization.chartTitle}</Typography>
                    <Chart coinNames={selectedCoins} coinPrices={coinPrices} />
                </div>
            )}
        </BasicLayout>
    );
};

export default TrackCoins;
