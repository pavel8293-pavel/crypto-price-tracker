import { ItemEntity } from "../../../../../interfaces";
import { memo } from "react";
import { Typography, Avatar } from "@material-ui/core";
import { formatCurrency, formatPercentNumber } from "../../../../../helpers";
import Chip from "../../../../../uiKit/chip";
import { useCardContentStyles } from "./styles";
import SelectItemButton from "../../../../../components/selectItemButton";

const CardContent = ({ image, currentPrice, priceChangePercentage24h, id, symbol }: ItemEntity) => {
    const styles = useCardContentStyles();

    const isPositiveChange = priceChangePercentage24h >= 0;

    const chipPalette = isPositiveChange ? "green" : "red";

    const formattedPrice = formatCurrency(currentPrice);
    const formattedPercentage = formatPercentNumber(priceChangePercentage24h);


    return (
        <div className={styles.root}>
            <div className={styles.avatarContainer}>
                <Typography className={styles.label}>{symbol.toUpperCase()}</Typography>
                <Avatar src={image} alt={image} className={styles.image} variant="circular" />
            </div>
            <div className={styles.infoContainer}>
                <Chip text={formattedPercentage} palette={chipPalette} className={styles.chip} />
                <Chip text={formattedPrice} palette={chipPalette} className={styles.chip} />
                <SelectItemButton id={id} />
            </div>
        </div>
    );
};

export default memo(CardContent);
