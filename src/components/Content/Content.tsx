import React, {FC} from "react";
import {Route, Switch} from "react-router-dom";
import {privateRouters} from "../../routes";

export const Content: FC = () => {
    return <Switch>
        {privateRouters.map(route =>
            <Route path={route.path}
                   exact={route.exact}
                   component={route.component}
                   key={route.path}/>)}
    </Switch>;
}