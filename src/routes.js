import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../src/Layout/BasicLayoutComponents/PrivateRoute"

import BasicLayouts from "./Layout/BasicLayout";
import Landing from "../src/Containers/Landing"

import store, { history } from "./store";

// history.listen(() => {
//     document.getElementById("inner-layout").scrollTo(0, 0);
// });

const Router = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <PrivateRoute path="/sikad" component={BasicLayouts} />
                    </Switch>
        </ConnectedRouter>
    </Provider>
);

export default Router;
