import { lazy } from "react";
import RouteValue from "./interface";
import routeNames from "./routeNames";

const AllItems = lazy(() => import("../pages/allItems"));
const TrackItems = lazy(() => import("../pages/trackItems"));

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
        component: TrackItems,
    },
];

export default routes;
