export interface CurrencyEntity {
    Id: string;
    Url: string;
    ImageUrl: string;
    ContentCreatedOn: number;
    Name: string;
    Symbol: string;
    CoinName: string;
    FullName: string;
    Description: string;
    AssetTokenStatus: string;
    Algorithm: string;
    ProofType: string;
    SortOrder: string;
    Sponsored: boolean;
    IsTrading: boolean;
}

export interface NormalizedCurrencyEntity {
    [key: string]: CurrencyEntity;
}

export interface UseStore {
        allCurrencies: NormalizedCurrencyEntity | undefined;
        isLoading: boolean;
    }
