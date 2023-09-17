import React from "react";
import { UseStore } from "./interfaces";
import { useStore } from "./hooks/useStore";

const StoreContext = React.createContext<UseStore>({
    allItems: [],
    selectedItems: [],
    itemsHistory: undefined,
    removeItem: () => void 0,
    removeItems: () => void 0,
    setItem: () => void 0,
    checkIfItemSelected: () => false,
    getAllItems: async () => void 0,
    getItemsHistory: async () => void 0,
    getItemHistory: async () => undefined,
});

export const StoreProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const store = useStore();

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStoreContext = (): UseStore => React.useContext(StoreContext);
