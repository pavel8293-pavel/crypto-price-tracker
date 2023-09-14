import React, { FunctionComponent, Suspense } from "react";

import { Redirect, Route, Router, Switch } from "react-router";
import { History } from "history";
import routeNames from "./routeNames";
import routes from "./routes";
import { FullscreenLoader } from "../components/fullscreenLoader";

interface ApplicationRouterProps {
    history: History;
}

const ApplicationRouter: FunctionComponent<ApplicationRouterProps> = ({ history }: ApplicationRouterProps) => {
    const renderedRoutes = (
        <Suspense fallback={<FullscreenLoader />}>
            <Switch>
                {routes.map(route => (
                    <Route {...route} />
                ))}
                <Route exact path="/">
                    <Redirect to={routeNames.ALL_CURRENCIES} />
                </Route>
                <Route path="/">
                    <Redirect to={routeNames.ERROR_NOT_FOUND} />
                </Route>
            </Switch>
        </Suspense>
    );

    return <Router history={history}>{renderedRoutes}</Router>;
};

export default ApplicationRouter;
