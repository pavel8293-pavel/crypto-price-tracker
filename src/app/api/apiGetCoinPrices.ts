import { CoinPriceModel } from "../interfaces";
import { httpGet } from "./apiHandlers";

export const API_COIN_PRICE = "/pricemulti";

type ApiGetCoinPricesResponse = CoinPriceModel;

export const apiGetCoinPrices = async ({
    coinsToCompare,
    priceCurrencies,
}: {
    coinsToCompare: string[];
    priceCurrencies: string[];
}): Promise<ApiGetCoinPricesResponse> => {
    const result = await httpGet<ApiGetCoinPricesResponse>(API_COIN_PRICE, {
        fsyms: coinsToCompare.join(),
        tsyms: priceCurrencies.join(),
    });
    return result.data;
};
