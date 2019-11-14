import { lazy } from "react";
const routes = [
  {
    path: "/",
    Component: lazy(() => import("../pages/Home")),
    exact: true
  },
  {
    path: "/todolist",
    Component: lazy(() => import("../pages/TodoListPage")),
    exact: true
  },
];

export default routes;
