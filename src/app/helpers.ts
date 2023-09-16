import { ApiGetAllItemsResponse } from "./api/apiGetAllItems";
import { DEFAULT_CURRENCY, EN_LANG } from "./constants";
import { CoinEntity } from "./interfaces";

export const transformItems = (coins: ApiGetAllItemsResponse[]): CoinEntity[] => {
    return coins.map(coin => ({
        currentPrice: coin.current_price,
        highestPrice: coin.high_24h,
        lowestPrice: coin.low_24h,
        priceChangePercentage: coin.price_change_percentage_24h,
        ...coin,
    }));
};

export const formatCurrency = (value: number, currency = DEFAULT_CURRENCY): string =>
    new Intl.NumberFormat(EN_LANG, {
        style: "currency",
        currency: currency,
        currencyDisplay: "narrowSymbol",
    }).format(value);

export const formatPercentNumber = (number: number) => {
    const formatter = new Intl.NumberFormat(EN_LANG, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 5,
    });

    return formatter.format(number);
};
