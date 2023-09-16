import { ApplicationColorPalette, Color } from "./interfaces";

// API constants

export const CRYPTO_COINS_PUBLIC_API_URI = "https://api.coingecko.com/api/v3/";

export const ISO_CURRENCIES = ["USD", "EUR", "GBP"];
export const DEFAULT_CURRENCY = "usd";
export const EN_LANG = "en-GB";
export const GET_COIN_PRICES_INTERVAL_MIL_SEC = 60000;
export const DEFAULT_HISTORY_DAYS = 10;
export const DATE_FORMAT = "dd/MM/yyyy";

// styles constants

export const applicationPalettes: {
    [key in ApplicationColorPalette]: Color;
} = {
    primary: {
        "1": "#EBF2FF",
        "50": "#D8E6FF",
        "100": "#C4DAFF",
        "200": "#9DC2FF",
        "500": "#2979FF",
        "600": "#2264D1",
        "700": "#1B4EA3",
        "800": "#133774",
    },
    green: {
        "1": "#ECF7ED",
        "50": "#DCEDDD",
        "100": "#CBE5CC",
        "200": "#A9D3AB",
        "500": "#43A047",
        "600": "#37833B",
        "700": "#2B662E",
        "800": "#1F4921",
    },
    yellow: {
        "1": "#FEFFEE",
        "50": "#FEFFE2",
        "100": "#FFFFAF",
        "200": "#FFFA84",
        "500": "#F9D614",
        "600": "#CEA80A",
        "700": "#A38000",
        "800": "#7C5D00",
    },
    red: {
        "1": "#FFF6F6",
        "50": "#FDDCDA",
        "100": "#FCCBC8",
        "200": "#FAA9A3",
        "500": "#F44336",
        "600": "#C8372D",
        "700": "#9C2B23",
        "800": "#6F1F19",
    },
};

export enum TxtColor {
    Txt1 = "#384864",
    Txt2 = "#818A9C",
    Txt3 = "#FFFFFF",
}
