import { BasicLayout } from "../components/basicLayout";
import { localization } from "../localization";
import GoToAllCoinsButton from "./GoToAllCoinsButton";

const TrackCoins = () => {
    return (
        <BasicLayout title={localization.trackCoinsTitle} actions={<GoToAllCoinsButton />}>
            AllCurrencies
        </BasicLayout>
    );
};

export default TrackCoins;
