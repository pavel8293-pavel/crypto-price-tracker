import { useState, useEffect } from "react";
import { UseStorage } from "../interfaces";

const LOCAL_STORAGE_SELECTED_ITEMS = "localStorageSelectedItems";

export const useStorage = (): UseStorage => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const getItems = () => {
        return localStorage.getItem(LOCAL_STORAGE_SELECTED_ITEMS);
    };

    const setItems = (items: string[]) => {
        localStorage.setItem(LOCAL_STORAGE_SELECTED_ITEMS, JSON.stringify(items));
    };

    const setItem = (item: string) => {
        const updatedSelectedItems = [...selectedItems, item];
        setSelectedItems(updatedSelectedItems);
        setItems(updatedSelectedItems);
    };

    const removeItem = (item: string) => {
        const updatedSelectedItems = selectedItems.filter(coin => coin !== item);
        setSelectedItems(updatedSelectedItems);
        setItems(updatedSelectedItems);
    };

    const removeItems = () => {
        setSelectedItems([]);
        setItems([]);
    };


    const checkIfItemSelected = (item: string) => {
        return selectedItems.includes(item);
    };

    useEffect(() => {
        const items = getItems();
        if (!items) {
            setItems(selectedItems);
        } else {
            const selected = JSON.parse(items);
            setSelectedItems(selected);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { selectedItems, removeItem, removeItems, setItem, checkIfItemSelected };
};
