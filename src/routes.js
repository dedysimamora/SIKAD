import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../src/Layout/BasicLayoutComponents/PrivateRoute";

import BasicLayouts from "./Layout/BasicLayout";
import Landing from "../src/Containers/Landing";

import store, { history } from "./store";
import NotFoundPage from "./Containers/NotFoundPage";
// history.listen(() => {
//     document.getElementById("inner-layout").scrollTo(0, 0);
// });

const Router = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={NotFoundPage} />
        <Route
          exact
          path="/sikad-login"
          render={() => <Landing type={"SIKAD"} />}
        />
        <Route
          exact
          path="/sekda-login"
          render={() => <Landing type={"SEKDA"} />}
        />
        <Route
          exact
          path="/siakum-login"
          render={() => <Landing type={"SIAKUM"} />}
        />
        <PrivateRoute
          path="/sikad"
          // render={() => <BasicLayouts type={"SIKAD"} />}
          component={BasicLayouts}
          reroute={"/sikad-login"}
          webType={"SIKAD"}
        />
        <PrivateRoute
          path="/sekda"
          // render={() => <BasicLayouts type={"SEKDA"} />}
          component={BasicLayouts}
          reroute={"/sekda-login"}
          webType={"SEKDA"}
        />
        <PrivateRoute
          path="/siakum"
          // render={() => <BasicLayouts type={"SIAKUM"} />}
          component={BasicLayouts}
          reroute={"/siakum-login"}
          webType={"SIAKUM"}
        />
        {/* <PrivateRoute path="/sikad" component={BasicLayouts} /> */}
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Router;
