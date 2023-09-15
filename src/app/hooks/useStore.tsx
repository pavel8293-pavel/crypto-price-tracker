import { useState } from "react";
import { apiGetAllCoins } from "../api/apiGetAllCoins";
import { UseStore, UpdatedNormalizedCoinEntity, CoinPriceModel } from "../interfaces";
import { transformCoinData } from "../helpers";
import { useCoinStorage } from "./useCoinStorage";
import { apiGetCoinPrices } from "../api/apiGetCoinPrices";
import { ISO_CURRENCIES } from "../constants";

export const useStore = (): UseStore => {
    const [allCoins, setAllCoins] = useState<UpdatedNormalizedCoinEntity | undefined>(undefined);
    const [allCoinsKeys, setAllCoinsKeys] = useState<string[]>([]);

    const [coinPrices, setCoinPrices] = useState<CoinPriceModel | undefined>(undefined);

    const { selectedCoins, removeItem, setItem, checkIfCoinSelected, removeItems } = useCoinStorage();

    async function getCoinPrices() {
        const prices = await apiGetCoinPrices({ coinsToCompare: selectedCoins, priceCurrencies: ISO_CURRENCIES });
        setCoinPrices(prices);
    }

    async function getAllCoins() {
        const coins = await apiGetAllCoins();
        const { transformedCoins, coinsKeys } = transformCoinData(coins.Data);
        setAllCoins(transformedCoins);
        setAllCoinsKeys(coinsKeys);
    }

    return {
        allCoins,
        allCoinsKeys,
        getAllCoins,
        selectedCoins,
        removeItem,
        setItem,
        checkIfCoinSelected,
        removeItems,
        getCoinPrices,
        coinPrices,
    };
};
