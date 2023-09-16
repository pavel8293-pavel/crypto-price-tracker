import { useState } from "react";
import { apiGetAllItems } from "../api/apiGetAllItems";
import { UseStore, CoinPriceModel, ItemEntity } from "../interfaces";
import { useStorage } from "./useStorage";
import { apiGetCoinPrices } from "../api/apiGetCoinPrices";
import { DEFAULT_HISTORY_DAYS, ISO_CURRENCIES } from "../constants";
import { transformItemHistory, transformItems } from "../helpers";
import { apiGetItemHistory } from "../api/apiGetItemHistory";

export const useStore = (): UseStore => {
    const [allItems, setAllItems] = useState<ItemEntity[]>([]);
    const [itemPrices, setItemPrices] = useState<CoinPriceModel | undefined>(undefined);

    const { selectedItems, removeItem, setItem, checkIfItemSelected, removeItems } = useStorage();

    async function getItemHistory(id: string, days = DEFAULT_HISTORY_DAYS) {
        const history = await apiGetItemHistory({ id, days });
        const transformedHistory = transformItemHistory(history);
        return transformedHistory;
    }

    async function getCoinPrices() {
        const prices = await apiGetCoinPrices({ itemsToCompare: selectedItems, priceCurrencies: ISO_CURRENCIES });
        setItemPrices(prices);
    }

    async function getAllItems() {
        const items = await apiGetAllItems();
        const transformedItems = transformItems(items);
        setAllItems(transformedItems);
    }

    return {
        allItems,
        getAllItems,
        getItemHistory,
        selectedItems,
        removeItem,
        setItem,
        checkIfItemSelected,
        removeItems,
        getCoinPrices,
        itemPrices,
    };
};
