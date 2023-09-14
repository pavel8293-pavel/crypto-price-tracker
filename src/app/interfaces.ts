import { Color as MuiColor } from "@material-ui/core";

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

// style interfaces

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
    isLoading: boolean;
    getCoinPrices: () => Promise<void>;
    coinPrices?: CoinPriceModel;
}

export interface UseCoinStorage {
    selectedCoins: string[];
    removeItem: (item: string) => void;
    removeItems: () => void;
    setItem: (item: string) => void;
    checkIfCoinSelected: (item: string) => boolean;
}

export type ApplicationColorPalette = "primary" | "green" | "yellow";

export interface Color extends Omit<MuiColor, "A100" | "A200" | "A400" | "A700"> {
    1: string;
    2: string;
    6: string;
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
