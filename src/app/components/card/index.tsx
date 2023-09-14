import { Paper, Typography } from "@material-ui/core";
import { CRYPTO_COMPARE_IMAGES_URI } from "../../constants";
import { UpdatedCoinEntity } from "../../interfaces";
import { useCardStyles } from "./styles";
import SolidButton from "../buttons/solidButton";
import { localization } from "../../localization";
import { useCallback } from "react";
import { useStoreContext } from "../../StoreProvider";

type CardProps = Omit<UpdatedCoinEntity, "id" | "url" | "coinName" | "description">;

const Card = ({ imageUrl, name, fullName }: CardProps) => {
    const { checkIfCoinSelected, removeItem, setItem } = useStoreContext();
    const styles = useCardStyles();

    const imagePath = `${CRYPTO_COMPARE_IMAGES_URI}${imageUrl}`;
    const isCardSelected = checkIfCoinSelected(name);
    const label = isCardSelected ? localization.unselectButton : localization.selectButton;
    const palette = isCardSelected ? "primary" : "yellow";

    const onClick = useCallback(() => {
        if (isCardSelected) {
            return removeItem(name);
        }
        return setItem(name);
    }, [isCardSelected, name, removeItem, setItem]);

    return (
        <Paper className={styles.root}>
            <div className={styles.labelContainer}>
                <Typography className={styles.label}>{fullName}</Typography>
            </div>
            <div>
                <img src={imagePath} alt={imagePath} className={styles.image} />
            </div>
            <SolidButton label={label} palette={palette} onClick={onClick} />
        </Paper>
    );
};

export default Card;
