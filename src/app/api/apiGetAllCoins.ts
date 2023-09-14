import { httpGet } from "./apiHandlers";
import { NormalizedCoinEntity } from "../interfaces";

export const API_GET_ALL_COINS = "/all/coinlist";

export const apiGetAllCoins = async (): Promise<ApiGetAllCoinsResponse> => {
    const result = await httpGet<ApiGetAllCoinsResponse>(API_GET_ALL_COINS);
    return result.data;
};

interface ApiGetAllCoinsResponse {
    Response: string;
    Message: string;
    Data: NormalizedCoinEntity;
}
