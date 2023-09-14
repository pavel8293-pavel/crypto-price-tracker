import React, {  } from "react";
import { UseStore } from "./interfaces";
import { useStore } from "./useStore";

const StoreContext = React.createContext<UseStore>({
    isLoading: false,
    allCurrencies: undefined,
});

export const StoreProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const store = useStore();

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStoreContext = (): UseStore => React.useContext(StoreContext);
