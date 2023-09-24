import { ApiGetAllItemsResponse } from "./api/apiGetAllItems";
import { ApiGetItemHistoryResponse } from "./api/apiGetItemHistory";
import { DATE_FORMAT, DEFAULT_CURRENCY, EN_LANG } from "./constants";
import { ItemEntity, ItemHistory } from "./interfaces";
import { format } from "date-fns";

export const transformItems = (items: ApiGetAllItemsResponse[]): ItemEntity[] => {
    return items.map(item => ({
        id: item.id,
        symbol: item.symbol,
        name: item.name,
        image: item.image,
        currentPrice: item.current_price,
        highestPrice: item.high_24h,
        lowestPrice: item.low_24h,
        priceChangePercentage24h: item.price_change_percentage_24h,
    }));
};

export const transformItemHistory = (data: ApiGetItemHistoryResponse): ItemHistory => {
    const history = {} as ItemHistory;
    data.prices.forEach(elem => {
        const [key, value] = elem;
        const formattedKey = formatDate(key);
        history[formattedKey] = value;
    });
    return history;
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

    return formatter.format(number / 100);
};

export function formatDate(date: Date | number | string, dateFormat = DATE_FORMAT): string {
    return format(new Date(date), dateFormat);
}
