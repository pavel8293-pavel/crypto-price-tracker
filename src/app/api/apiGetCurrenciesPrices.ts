import { httpGet } from "./apiHandlers";

export const API_CURRENCIES_PRICE = "/pricemulti";

export const apiGetCurrenciesPrices = async ({
    currenciesToCompare,
    priceCurrencies,
}: {
    currenciesToCompare: string[];
    priceCurrencies: string[];
}): Promise<ApiGetCurrenciesPricesResponse> => {
    const result = await httpGet<ApiGetCurrenciesPricesResponse>(API_CURRENCIES_PRICE, {
        fsyms: currenciesToCompare.join(),
        tsyms: priceCurrencies.join(),
    });
    return result.data;
};

interface ApiGetCurrenciesPricesResponse {
    [key: string]: {
        [key: string]: number;
    };
}
