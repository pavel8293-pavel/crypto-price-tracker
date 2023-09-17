import { DEFAULT_CURRENCY } from "../constants";
import { httpGet } from "./apiHandlers";

const API_GET_ALL_COINS = "coins/markets";

export interface ApiGetAllItemsResponse {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
    price_change_percentage_24h: number;
}

export const apiGetAllItems = async (): Promise<ApiGetAllItemsResponse[]> => {
    const result = await httpGet<ApiGetAllItemsResponse[]>(API_GET_ALL_COINS, {
        vs_currency: DEFAULT_CURRENCY,
        per_page: 50,
        order: "market_cap_desc",
        page: 1,
    });
    return result.data;
};
