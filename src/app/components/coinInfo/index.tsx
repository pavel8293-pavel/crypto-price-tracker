import { Typography } from "@material-ui/core";
import { CRYPTO_COMPARE_IMAGES_URI } from "../../constants";
import { UpdatedCoinEntity } from "../../interfaces";
import { useCoinInfoStyles } from "./styles";

type CardProps = Omit<UpdatedCoinEntity, "id" | "url" | "coinName" | "description" | "name">;

const CoinInfo = ({ imageUrl, fullName }: CardProps) => {
    const styles = useCoinInfoStyles();

    const imagePath = imageUrl ? `${CRYPTO_COMPARE_IMAGES_URI}${imageUrl}`: "";

    return (
        <>
            <div className={styles.labelContainer}>
                <Typography className={styles.label}>{fullName}</Typography>
            </div>
            <div>
                <img src={imagePath} alt={imagePath} className={styles.image} />
            </div>
        </>
    );
};

export default CoinInfo;
