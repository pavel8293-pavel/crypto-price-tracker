import { lazy } from "react";
import RouteValue from "./interface";
import routeNames from "./routeNames";

const AllCurrencies = lazy(() => import("../allCoins"));
const TrackCurrencies = lazy(() => import("../trackCoins"));

const routes: RouteValue[] = [
    {
        name: routeNames.ALL_CURRENCIES,
        path: routeNames.ALL_CURRENCIES,
        exact: true,
        component: AllCurrencies,
    },
    {
        name: routeNames.TRACK_CURRENCIES,
        path: routeNames.TRACK_CURRENCIES,
        component: TrackCurrencies,
    },
];

export default routes;
