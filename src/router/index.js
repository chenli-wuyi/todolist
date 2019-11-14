import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "../pages/Loading";
import routes from "./routes";
const BasicRoute = () => (
  <BrowserRouter>
    {routes.map(({ path, Component, exact = true, child = [] }, index) => {
      return (
        <Suspense key={index} fallback={<Loading />}>
          <Switch>
            <Route
              exact={exact}
              path={path}
              render={props => (
                //主要是为了传递嵌套路由到子组件
                //类似于 <User {...props} child={child} />
                <Component {...props} child={child} />
              )}
            ></Route>
          </Switch>
        </Suspense>
      );
    })}
  </BrowserRouter>
);

export default BasicRoute;
