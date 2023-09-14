import { Divider, Typography } from "@material-ui/core";
import { UpdatedCoinEntity } from "../../interfaces";
import { useCardWithCurrenciesStyles } from "./styles";
import { useMemo } from "react";
import CoinInfo from "../../components/coinInfo";
import { Card } from "../../components/card";

type CardProps = Omit<UpdatedCoinEntity, "id" | "url" | "coinName" | "description"> & {
    currencies?: { [key: string]: number };
};

const CardWithCurrencies = ({ currencies, ...props }: CardProps) => {
    const styles = useCardWithCurrenciesStyles();

    const pricesContent = useMemo(() => {
        const currenciesKeys = currencies ? Object.keys(currencies) : [];
        if (!currenciesKeys.length) {
            return null;
        }
        return currenciesKeys.map(currency => {
            return <Typography>{`${currency}: ${currencies?.[currency]}`}</Typography>;
        });
    }, [currencies]);

    return (
        <Card>
            <CoinInfo {...props} />
            <Divider className={styles.divider} />
            <div className={styles.currencyContainer}>{pricesContent}</div>
        </Card>
    );
};

export default CardWithCurrencies;
