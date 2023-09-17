import { apiGetAllItems } from "../api/apiGetAllItems";
import { ItemEntity, UseStore } from "../interfaces";
import { useStorage } from "./useStorage";
import { DEFAULT_HISTORY_DAYS } from "../constants";
import { transformItemHistory, transformItems } from "../helpers";
import { apiGetItemHistory } from "../api/apiGetItemHistory";
import { useState } from "react";
import { showErrorToast } from "../components/errorToast";
import { localization } from "../localization";

export const useStore = (): UseStore => {
    const [allItems, setAllItems] = useState<ItemEntity[]>([]);
    const { selectedItems, removeItem, setItem, checkIfItemSelected, removeItems } = useStorage();

    async function getItemHistory(id: string, days = DEFAULT_HISTORY_DAYS) {
        try {
            const history = await apiGetItemHistory({ id, days });
            return transformItemHistory(history);
        } catch (e) {
            showErrorToast(localization.generalErrorMessage);
        }
    }

    async function getAllItems() {
        try {
            const items = await apiGetAllItems();
            const transformedItems = transformItems(items);
            setAllItems(transformedItems);
        } catch (e) {
            showErrorToast(localization.generalErrorMessage);
        }
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
    };
};
