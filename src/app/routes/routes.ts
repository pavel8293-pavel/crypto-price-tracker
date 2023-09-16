import { lazy } from "react";
import RouteValue from "./interface";
import routeNames from "./routeNames";

const AllItems = lazy(() => import("../pages/allItems"));
const TrackCurrencies = lazy(() => import("../pages/trackCoins"));

const routes: RouteValue[] = [
    {
        name: routeNames.ALL_ITEMS,
        path: routeNames.ALL_ITEMS,
        exact: true,
        component: AllItems,
    },
    {
        name: routeNames.TRACK_ITEMS,
        path: routeNames.TRACK_ITEMS,
        // component: TrackCurrencies,
        component: AllItems,
    },
];

export default routes;
