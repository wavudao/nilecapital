import React from "react";
import Home from "./pages/Home";
import General from "./pages/general";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {path: '/general', element: <General/> }
];

export default routes;
