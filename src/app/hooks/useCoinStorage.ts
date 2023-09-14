import { useState, useEffect } from "react";
import { UseCoinStorage } from "../interfaces";

const LOCAL_STORAGE_SELECTED_COINS = "localStorageSelectedCoins";

export const useCoinStorage = (): UseCoinStorage => {
    const [selectedCoins, setSelectedCoins] = useState<string[]>([]);

    const getItems = () => {
        return localStorage.getItem(LOCAL_STORAGE_SELECTED_COINS);
    };

    const setItems = (items: string[]) => {
        localStorage.setItem(LOCAL_STORAGE_SELECTED_COINS, JSON.stringify(items));
    };

    const setItem = (item: string) => {
        const updatedSelectedCoins = [...selectedCoins, item];
        setSelectedCoins(updatedSelectedCoins);
        setItems(updatedSelectedCoins);
    };

    const removeItem = (item: string) => {
        const updatedSelectedCoins = selectedCoins.filter(coin => coin !== item);
        setSelectedCoins(updatedSelectedCoins);
        setItems(updatedSelectedCoins);
    };

    const checkIfCoinSelected = (item: string) => {
        return selectedCoins.includes(item);
    };

    useEffect(() => {
        const items = getItems();
        if (!items) {
            setItems(selectedCoins);
        } else {
            const selected = JSON.parse(items);
            setSelectedCoins(selected);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { selectedCoins, removeItem, setItem, checkIfCoinSelected };
};
