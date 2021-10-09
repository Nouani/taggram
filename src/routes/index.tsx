import React from "react";
import { Switch } from "react-router-dom";
import RouteWrapper from "./Route";

import Home from "../pages/home";

const Routes: React.FC = () => {
    return (
        <Switch>
            <RouteWrapper path="/" component={Home} />
        </Switch>
    );
};

export default Routes;
