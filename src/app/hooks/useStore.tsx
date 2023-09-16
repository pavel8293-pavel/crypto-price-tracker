import { useState } from "react";
import { apiGetAllItems } from "../api/apiGetAllItems";
import { UseStore, CoinPriceModel, CoinEntity } from "../interfaces";
import { useStorage } from "./useStorage";
import { apiGetCoinPrices } from "../api/apiGetCoinPrices";
import { ISO_CURRENCIES } from "../constants";
import { transformItems } from "../helpers";

export const useStore = (): UseStore => {
    const [allItems, setAllItems] = useState<CoinEntity[]>([]);
    const [itemPrices, setItemPrices] = useState<CoinPriceModel | undefined>(undefined);

    const { selectedItems, removeItem, setItem, checkIfItemSelected, removeItems } = useStorage();

    async function getCoinPrices() {
        const prices = await apiGetCoinPrices({ itemsToCompare: selectedItems, priceCurrencies: ISO_CURRENCIES });
        setItemPrices(prices);
    }

    async function getAllItems() {
        const items = await apiGetAllItems();
        const transformedItems = transformItems(items);
        setAllItems(transformedItems);
        // setAllItems([
        //     {
        //         currentPrice: 100.0554343,
        //         highestPrice: 110.12234546,
        //         lowestPrice: 90.123467,
        //         priceChangePercentage: 100.0554343 / 110.12234546,
        //         id: "1",
        //         symbol: "BTC",
        //         name: "Bitcoin",
        //         image: "",
        //     },
        // ]);
    }

    return {
        allItems,
        getAllItems,
        selectedItems,
        removeItem,
        setItem,
        checkIfItemSelected,
        removeItems,
        getCoinPrices,
        itemPrices,
    };
};
