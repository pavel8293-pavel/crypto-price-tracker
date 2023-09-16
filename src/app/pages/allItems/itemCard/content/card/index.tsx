import { ItemEntity } from "../../../../../interfaces";
import Button from "../../../../../uiKit/buttons/button";
import { localization } from "../../../../../localization";
import { memo, useCallback } from "react";
import { useStoreContext } from "../../../../../StoreProvider";
import { Typography, Avatar } from "@material-ui/core";
import { formatCurrency, formatPercentNumber } from "../../../../../helpers";
import Chip from "../../../../../uiKit/chip";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useCardContentStyles } from "./styles";

const CardContent = ({ image, currentPrice, priceChangePercentage24h, symbol }: ItemEntity) => {
    const styles = useCardContentStyles();
    const { checkIfItemSelected, removeItem, setItem } = useStoreContext();

    const isPositiveChange = priceChangePercentage24h >= 0;
    const isCardSelected = checkIfItemSelected(symbol);

    const chipPalette = isPositiveChange ? "green" : "red";
    const buttonPalette = isCardSelected ? "primary" : "green";

    const formattedPrice = formatCurrency(currentPrice);
    const formattedPercentage = formatPercentNumber(priceChangePercentage24h);

    const label = isCardSelected ? localization.unselectButton : localization.selectButton;

    const onClick = useCallback(() => {
        if (isCardSelected) {
            return removeItem(symbol);
        }
        return setItem(symbol);
    }, [isCardSelected, symbol, removeItem, setItem]);

    return (
        <div className={styles.root}>
            <div className={styles.avatarContainer}>
                <Typography className={styles.label}>{symbol.toUpperCase()}</Typography>
                <Avatar src={image} alt={image} className={styles.image} variant="circular" />
            </div>
            <div className={styles.infoContainer}>
                <Chip text={formattedPercentage} palette={chipPalette} className={styles.chip} />
                <Chip text={formattedPrice} palette={chipPalette} className={styles.chip} />
                <Button
                    onClick={onClick}
                    endIcon={<ArrowRightAltIcon />}
                    label={label}
                    palette={buttonPalette}
                    size="s"
                />
            </div>
        </div>
    );
};

export default memo(CardContent);
