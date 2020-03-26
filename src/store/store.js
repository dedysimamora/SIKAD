import { init } from "@rematch/core";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import arsip from "./models/arsip";


export const history = createBrowserHistory({ basename: "/" });

const middleware = routerMiddleware(history);

const store = init({
    models: {
        arsip
    },
    redux: {
        reducers: {
            router: connectRouter(history)
        },
        middlewares: [middleware]
    }
});

export default store;
