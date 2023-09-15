import React from "react";
import { UseStore } from "./interfaces";
import { useStore } from "./hooks/useStore";

const StoreContext = React.createContext<UseStore>({
    allCoins: undefined,
    allCoinsKeys: [],
    selectedCoins: [],
    removeItem: () => void 0,
    removeItems: () => void 0,
    setItem: () => void 0,
    checkIfCoinSelected: () => false,
    getCoinPrices: async () => void 0,
    getAllCoins: async () => void 0,
    coinPrices: undefined,
});

export const StoreProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const store = useStore();

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStoreContext = (): UseStore => React.useContext(StoreContext);
