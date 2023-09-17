import { apiGetAllItems } from "../api/apiGetAllItems";
import { ItemEntity, ItemHistory, ItemHistoryModel, UseStore } from "../interfaces";
import { useStorage } from "./useStorage";
import { DEFAULT_HISTORY_DAYS } from "../constants";
import { transformItemHistory, transformItems } from "../helpers";
import { apiGetItemHistory } from "../api/apiGetItemHistory";
import { useState } from "react";
import { showErrorToast } from "../components/errorToast";
import { localization } from "../localization";
import { isEmpty } from "lodash";

export const useStore = (): UseStore => {
    const [allItems, setAllItems] = useState<ItemEntity[]>([]);
    const [itemsHistory, setItemsHistory] = useState<ItemHistoryModel | undefined>(undefined);

    const { selectedItems, removeItem, setItem, checkIfItemSelected, removeItems } = useStorage();

    async function getItemHistory(
        id: string,
        days = DEFAULT_HISTORY_DAYS
    ): Promise<ItemHistory | undefined> {
        try {
            const history = await apiGetItemHistory({ id, days });
            return transformItemHistory(history);
        } catch (e) {
            showErrorToast(localization.generalErrorMessage);
        }
    }

    async function getItemsHistory(days?: number) {
        const histories = {} as ItemHistoryModel;
        await Promise.all(
            selectedItems.map(async item => {
                const history = await getItemHistory(item, days);
                if (history) {
                    histories[item] = history;
                }
            })
        );
        if (!isEmpty(histories)) {
            setItemsHistory(histories);
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
        itemsHistory,
        getAllItems,
        getItemsHistory,
        getItemHistory,
        selectedItems,
        removeItem,
        setItem,
        checkIfItemSelected,
        removeItems,
    };
};
