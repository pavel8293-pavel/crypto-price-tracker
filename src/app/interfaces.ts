// API interfaces
export interface CoinEntity {
    id: string;
    symbol: string;
    name: string;
    image: string;
    currentPrice: number;
    highestPrice: number;
    lowestPrice: number;
    priceChangePercentage: number;
}

export interface CoinPriceModel {
    [key: string]: {
        [key: string]: number;
    };
}

export interface UseStore extends UseStorage {
    allItems: CoinEntity[];
    getCoinPrices: () => Promise<void>;
    getAllItems: () => Promise<void>;
    itemPrices?: CoinPriceModel;
}

export interface UseStorage {
    selectedItems: string[];
    removeItem: (item: string) => void;
    removeItems: () => void;
    setItem: (item: string) => void;
    checkIfItemSelected: (item: string) => boolean;
}


// style interfaces

export type ApplicationColorPalette = "primary" | "green" | "yellow" | "red";

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
    endIcon?: React.ReactNode;
    disabled?: boolean;
    variant?: "contained" | "outlined";
}

export interface ChipProps {
    text?: React.ReactNode;
    size?: "small" | "medium";
    palette?: ApplicationColorPalette;
    className?: string;
    textColorVariant?: keyof Color;
    backgroundVariant?: keyof Color;
}
