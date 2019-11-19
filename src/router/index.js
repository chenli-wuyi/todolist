import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Loading from "pages/Loading";
import { isAuth } from "utils/isAuthenticated";
import routes from "./routes";
const BasicRoute = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map(
          ({ path, component: Component, exact = true, child = [] }, index) => {
            return (
              <Route
                key={index}
                exact={exact}
                path={path}
                render={props =>
                  isAuth ? (
                    //主要是为了传递嵌套路由到子组件
                    //类似于 <User {...props} child={child} />
                    <Component {...props} child={child} />
                  ) : (
                    <Redirect to="/employee/login" />
                  )
                }
              ></Route>
            );
          }
        )}
        <Redirect from="/*" to="/" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default BasicRoute;
