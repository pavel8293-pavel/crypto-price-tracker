import React from "react";
import { UseStore } from "./interfaces";
import { useStore } from "./hooks/useStore";

const StoreContext = React.createContext<UseStore>({
    allItems: [],
    selectedItems: [],
    removeItem: () => void 0,
    removeItems: () => void 0,
    setItem: () => void 0,
    checkIfItemSelected: () => false,
    getCoinPrices: async () => void 0,
    getAllItems: async () => void 0,
    getItemHistory: async () => ({}),
    itemPrices: undefined,
});

export const StoreProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const store = useStore();

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStoreContext = (): UseStore => React.useContext(StoreContext);
