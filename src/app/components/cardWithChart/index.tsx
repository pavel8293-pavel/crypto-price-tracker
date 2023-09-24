import { ItemEntity, ItemHistory } from "../../interfaces";
import { localization } from "../../localization";
import { memo, useMemo } from "react";
import { Typography, Avatar } from "@material-ui/core";
import { formatCurrency, formatPercentNumber } from "../../helpers";
import Chip from "../../uiKit/chip";
import LabelValuePair from "../../components/labelValuePair";
import { useCardWithChartStyles } from "./styles";
import HistoryChart from "../../components/historyChart";
import SelectItemButton from "../selectItemButton";

interface CardProps extends ItemEntity {
    itemHistory: ItemHistory;
    canSelect?: boolean;
}

const CardWithChart = ({
    image,
    lowestPrice,
    highestPrice,
    symbol,
    currentPrice,
    priceChangePercentage24h,
    itemHistory,
    id,
    canSelect = true,
}: CardProps) => {
    const styles = useCardWithChartStyles();
    const isPositiveChange = priceChangePercentage24h >= 0;
    const chipPalette = isPositiveChange ? "green" : "red";

    const formattedCurrentPrice = formatCurrency(currentPrice);
    const formattedHighestPrice = formatCurrency(highestPrice);
    const formattedLowestPrice = formatCurrency(lowestPrice);
    const formattedPercentage = formatPercentNumber(priceChangePercentage24h);

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

    return (
        <div>
            <div className={styles.infoContainer}>
                <div className={styles.avatarContainer}>
                    <Avatar src={image} alt={image} variant="circular" className={styles.image} />
                    <Typography>{symbol.toUpperCase()}</Typography>
                </div>
                <div className={styles.valuePairsContainer}>{valuePairsContent}</div>
                {canSelect && <SelectItemButton id={id} size="m" />}
            </div>
            <HistoryChart chartData={itemHistory} />
        </div>
    );
};

export default memo(CardWithChart);
