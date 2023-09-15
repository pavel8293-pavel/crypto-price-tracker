import { lazy } from "react";
import RouteValue from "./interface";
import routeNames from "./routeNames";

const AllCurrencies = lazy(() => import("../allCoins"));
const TrackCurrencies = lazy(() => import("../trackCoins"));

const routes: RouteValue[] = [
    {
        name: routeNames.ALL_COINS,
        path: routeNames.ALL_COINS,
        exact: true,
        component: AllCurrencies,
    },
    {
        name: routeNames.TRACK_COINS,
        path: routeNames.TRACK_COINS,
        component: TrackCurrencies,
    },
];

export default routes;
