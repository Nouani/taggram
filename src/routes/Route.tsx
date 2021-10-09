import React from "react";
import { Route } from "react-router-dom";

interface Props {
    path: string;
    component: React.FC;
}

const RouteWrapper: React.FC<Props> = ({ path, component: Component }) => {
    return <Route path={path} exact render={() => <Component />} />;
};

export default RouteWrapper;
