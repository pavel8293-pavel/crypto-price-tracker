import { useState, useEffect } from "react";
import { apiGetAllCoins } from "../api/apiGetAllCoins";
import { UseStore, UpdatedNormalizedCoinEntity } from "../interfaces";
import { transformCoinData } from "../helpers";
import { useCoinStorage } from "./useCoinStorage";


export const useStore = (): UseStore => {
    const [allCoins, setAllCoins] = useState<UpdatedNormalizedCoinEntity | undefined>(undefined);
    const [allCoinsKeys, setAllCoinsKeys] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { selectedCoins, removeItem, setItem, checkIfCoinSelected, removeItems } = useCoinStorage();

    useEffect(() => {
        async function getAllCurrencies() {
            setIsLoading(true);
            const coins = await apiGetAllCoins();
            const { transformedCoins, coinsKeys } = transformCoinData(coins.Data);
            setAllCoins(transformedCoins);
            setAllCoinsKeys(coinsKeys);
            setIsLoading(false);
        }

        getAllCurrencies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { allCoins, allCoinsKeys, isLoading, selectedCoins, removeItem, setItem, checkIfCoinSelected, removeItems };
};
