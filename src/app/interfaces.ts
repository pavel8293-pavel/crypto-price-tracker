// API interfaces
export interface CoinEntity {
    Id: string;
    Url: string;
    ImageUrl: string;
    Name: string;
    CoinName: string;
    FullName: string;
    Description: string;
}

export interface UpdatedCoinEntity {
    id: string;
    url: string;
    imageUrl: string;
    name: string;
    coinName: string;
    fullName: string;
    description: string;
}

export interface UpdatedNormalizedCoinEntity {
    [key: keyof NormalizedCoinEntity]: UpdatedCoinEntity;
}

export interface NormalizedCoinEntity {
    [key: string]: CoinEntity;
}

export interface CoinPriceModel {
    [key: string]: {
        [key: string]: number;
    };
}

export interface UseStore extends UseCoinStorage {
    allCoins: UpdatedNormalizedCoinEntity | undefined;
    allCoinsKeys: string[];
    getCoinPrices: () => Promise<void>;
    getAllCoins: () => Promise<void>;
    coinPrices?: CoinPriceModel;
}

export interface UseCoinStorage {
    selectedCoins: string[];
    removeItem: (item: string) => void;
    removeItems: () => void;
    setItem: (item: string) => void;
    checkIfCoinSelected: (item: string) => boolean;
}


// style interfaces

export type ApplicationColorPalette = "primary" | "green" | "yellow";

export interface Color {
    1: string;
    50: string;
    100: string;
    200: string;
    500: string;
    600: string;
    700: string;
    800: string;
}

export type ButtonSize = "l" | "m" | "s";

export interface StylesProps {
    palette: ApplicationColorPalette;
    size: ButtonSize;
}

export interface ButtonStyle {
    id?: string;
    label: React.ReactText;
    palette?: ApplicationColorPalette;
    size?: ButtonSize;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    startIcon?: React.ReactNode;
    disabled?: boolean;
}
