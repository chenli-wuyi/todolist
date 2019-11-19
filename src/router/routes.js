import { lazy } from "react";
const base = "/employee";
const routes = [
  {
    path: `${base}/`,
    component: lazy(() => import("pages/Home")),
    exact: true
  },
  {
    path: `${base}/login`,
    component: lazy(() => import("pages/Login")),
    exact: true
  },
  {
    path: `${base}/todolist`,
    component: lazy(() => import("pages/TodoListPage")),
    exact: true
  },
  {
    path: `/`,
    component: lazy(() => import("pages/Home")),
    exact: true
  }
];

export default routes;
