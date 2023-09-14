import { httpGet } from "./apiHandlers";
import { NormalizedCurrencyEntity } from "../interfaces";

export const API_GET_ALL_CURRENCIES = "/all/coinlist";

export const apiGetAllCurrencies = async (): Promise<ApiGetAllCurrenciesResponse> => {
    const result = await httpGet<ApiGetAllCurrenciesResponse>(API_GET_ALL_CURRENCIES);
    return result.data;
};

interface ApiGetAllCurrenciesResponse {
    Response: string;
    Message: string;
    Data: NormalizedCurrencyEntity;
}
