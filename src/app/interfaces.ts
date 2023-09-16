import { TypographyVariant } from "@material-ui/core";

// API interfaces
export interface ItemEntity {
    id: string;
    symbol: string;
    name: string;
    image: string;
    currentPrice: number;
    highestPrice: number;
    lowestPrice: number;
    priceChangePercentage24h: number;
}

export interface ItemHistory {
    [key: string]: number;
}

export interface CoinPriceModel {
    [key: string]: {
        [key: string]: number;
    };
}

export interface UseStore extends UseStorage {
    allItems: ItemEntity[];
    getCoinPrices: () => Promise<void>;
    getAllItems: () => Promise<void>;
    getItemHistory: (id: string, days?: number) => Promise<ItemHistory>;
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
    label?: React.ReactText;
    palette?: ApplicationColorPalette;
    size?: ButtonSize;
    className?: string;
    onClick?: () => void | Promise<void>;
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

export interface LabelValuePairProps {
    value: React.ReactNode;
    label: React.ReactText;
    labelClassName?: string;
    typographyLabelVariant?: Exclude<TypographyVariant, "button">;
    typographyValueVariant?: Exclude<TypographyVariant, "button">;
    tooltip?: string;
    disabled?: boolean;
}
