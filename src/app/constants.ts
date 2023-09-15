import { ApplicationColorPalette, Color } from "./interfaces";

// API constants

export const CRYPTO_COMPARE_API_URI = "https://min-api.cryptocompare.com/data";
export const CRYPTO_COMPARE_IMAGES_URI = "https://www.cryptocompare.com";

export const ISO_CURRENCIES = ["USD", "EUR", "GBP"];
export const GET_COIN_PRICES_INTERVAL_MIL_SEC = 60000;

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
};

export enum TxtColor {
    Txt1 = "#384864",
    Txt2 = "#818A9C",
    Txt3 = "#FFFFFF",
}
