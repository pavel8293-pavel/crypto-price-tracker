import { ApplicationColorPalette, Color } from "./interfaces";

// API constants

export const CRYPTO_COMPARE_API_URI = "https://min-api.cryptocompare.com/data";
export const CRYPTO_COMPARE_IMAGES_URI = "https://www.cryptocompare.com";

// styles constants

export const applicationPalettes: {
    [key in ApplicationColorPalette]: Color;
} = {
    primary: {
        "1": "#F5F8FF",
        "2": "#EBF2FF",
        "6": "#5272A8",
        "50": "#D8E6FF",
        "100": "#C4DAFF",
        "200": "#9DC2FF",
        "300": "#76A9FF",
        "400": "#4F91FF",
        "500": "#2979FF",
        "600": "#2264D1",
        "700": "#1B4EA3",
        "800": "#133774",
        "900": "#0C2146",
    },
    green: {
        "1": "#F5FAF5",
        "2": "#ECF7ED",
        "6": "#70805C",
        "50": "#DCEDDD",
        "100": "#CBE5CC",
        "200": "#A9D3AB",
        "300": "#87C289",
        "400": "#65B168",
        "500": "#43A047",
        "600": "#37833B",
        "700": "#2B662E",
        "800": "#1F4921",
        "900": "#132C14",
    },
    yellow: {
        "1": "#FFFFF7",
        "2": "#FEFFEE",
        "6": "#FEFFEE",
        "50": "#FEFFE2",
        "100": "#FFFFAF",
        "200": "#FFFA84",
        "300": "#FFF35B",
        "400": "#FFE935",
        "500": "#F9D614",
        "600": "#CEA80A",
        "700": "#A38000",
        "800": "#7C5D00",
        "900": "#563E00",
    },
};

export enum TxtColor {
    Txt1 = "#384864",
    Txt2 = "#818A9C",
    Txt3 = "#FFFFFF",
}
