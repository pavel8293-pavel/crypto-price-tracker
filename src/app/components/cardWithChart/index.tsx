import { ItemEntity, ItemHistory } from "../../interfaces";
import Button from "../../uiKit/buttons/button";
import { localization } from "../../localization";
import { useCallback, useMemo } from "react";
import { useStoreContext } from "../../StoreProvider";
import { Typography, Avatar } from "@material-ui/core";
import { formatCurrency, formatPercentNumber } from "../../helpers";
import Chip from "../../uiKit/chip";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import LabelValuePair from "../../components/labelValuePair";
import { useCardWithChartStyles } from "./styles";
import HistoryChart from "../../components/historyChart";

const CardWithChart = ({
    image,
    lowestPrice,
    highestPrice,
    symbol,
    currentPrice,
    priceChangePercentage24h,
    itemHistory
}: ItemEntity & {itemHistory: ItemHistory}) => {
    const styles = useCardWithChartStyles();

    const { checkIfItemSelected, removeItem, setItem } = useStoreContext();

    const isPositiveChange = priceChangePercentage24h >= 0;
    const isCardSelected = checkIfItemSelected(symbol);

    const chipPalette = isPositiveChange ? "green" : "red";
    const buttonPalette = isCardSelected ? "primary" : "green";

    const formattedCurrentPrice = formatCurrency(currentPrice);
    const formattedHighestPrice = formatCurrency(highestPrice);
    const formattedLowestPrice = formatCurrency(lowestPrice);
    const formattedPercentage = formatPercentNumber(priceChangePercentage24h);

    const label = isCardSelected ? localization.unselectButton : localization.selectButton;

    const valuePairsContent = useMemo(() => {
        const valuePairs = [
            {
                label: localization.currentPriceLabel,
                value: <Chip text={formattedCurrentPrice} palette={chipPalette} className={styles.chip} />,
            },
            {
                label: localization.changePercentageLabel,
                value: <Chip text={formattedPercentage} palette={chipPalette} className={styles.chip} />,
            },
            {
                label: localization.highestPriceLabel,
                value: <Chip text={formattedHighestPrice} palette={"green"} className={styles.chip} />,
            },
            {
                label: localization.lowestPriceLabel,
                value: <Chip text={formattedLowestPrice} palette={"red"} className={styles.chip} />,
            },
        ];
        return valuePairs.map(pair => <LabelValuePair key={pair.label} {...pair} />);
    }, [
        chipPalette,
        formattedCurrentPrice,
        formattedHighestPrice,
        formattedLowestPrice,
        formattedPercentage,
        styles.chip,
    ]);

    const onClick = useCallback(() => {
        if (isCardSelected) {
            return removeItem(symbol);
        }
        return setItem(symbol);
    }, [isCardSelected, symbol, removeItem, setItem]);

    return (
        <div>
            <div className={styles.infoContainer}>
                <div className={styles.avatarContainer}>
                    <Avatar src={image} alt={image} variant="circular" className={styles.image} />
                    <Typography>{symbol.toUpperCase()}</Typography>
                </div>
                <div className={styles.valuePairsContainer}>{valuePairsContent}</div>
                <Button
                    endIcon={<ArrowRightAltIcon />}
                    label={label}
                    palette={buttonPalette}
                    size="m"
                    onClick={onClick}
                />
            </div>
            <HistoryChart chartData={itemHistory} />
        </div>
    );
};

export default CardWithChart;
