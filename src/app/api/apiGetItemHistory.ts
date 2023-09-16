import { DEFAULT_CURRENCY } from "../constants";
import { httpGet } from "./apiHandlers";

const getApiHistory = (id: string) => `coins/${id}/market_chart`;

export interface ApiGetItemHistoryResponse {
    prices: [number, number][];
}

export const apiGetItemHistory = async ({
    id,
    days,
}: {
    id: string;
    days: number;
}): Promise<ApiGetItemHistoryResponse> => {
    const result = await httpGet<ApiGetItemHistoryResponse>(getApiHistory(id), {
        vs_currency: DEFAULT_CURRENCY,
        days: days,
        interval: "daily",
    });
    return result.data;
};
