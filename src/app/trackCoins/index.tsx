import { useEffect, useMemo } from "react";
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

const TrackCoins = () => {
    const styles = useTrackCoinsStyles();
    const { selectedCoins, getCoinPrices, coinPrices, allCoins, isLoading } = useStoreContext();

    const content = useMemo(() => {
        if (!allCoins) {
            return null;
        }

        return selectedCoins?.map((coin, index) => (
            <CardWithCurrencies
                currencies={coinPrices?.[coin]}
                imageUrl={allCoins[coin]?.imageUrl}
                name={allCoins[coin]?.name}
                fullName={allCoins[coin]?.fullName}
                key={`${allCoins[coin]?.fullName}${index}`}
            />
        ));
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
        <BasicLayout title={localization.trackCoinsTitle} actions={actions}>
            <div className={styles.container}>{content}</div>
            {coinPrices && (
                <div>
                    <Chart coinNames={selectedCoins} coinPrices={coinPrices} />
                </div>
            )}
        </BasicLayout>
    );
};

export default TrackCoins;
