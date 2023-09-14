import { useState, useEffect } from "react";
import { apiGetAllCurrencies } from "./api/apiGetAllCurrencies";
import { UseStore, NormalizedCurrencyEntity } from "./interfaces";

export const useStore = (): UseStore => {
    const [allCurrencies, setAllCurrencies] = useState<NormalizedCurrencyEntity | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getAllCurrencies() {
            setIsLoading(true);
            const coins = await apiGetAllCurrencies();
            setAllCurrencies(coins.Data);
            setIsLoading(false);
        }

        getAllCurrencies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { allCurrencies, isLoading };
};
