import React from "react";
import Home from "./pages/home";
import General from "./pages/general";
import Market from "./pages/market";
import Auth from "./pages/auth";
import Faq from "./pages/faq";
import Team from "./pages/team";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Article from "./pages/article";
import { Signup } from "./pages/auth";
import { Account } from "./pages/account";

const routes = [
  { path: "/", element: <Home /> },

  { path: "/general", element: <General /> },

  { path: "/market", element: <Market /> },

  { path: "/signup", element: <Signup /> },
  
  { path: "/login", element: <Auth /> },

  { path: "/faq", element: <Faq /> },

  { path: "/team", element: <Team /> },

  { path: "/terms", element: <Terms /> },

  { path: "/privacy", element: <Privacy /> },

  { path: "/article/:id", element: <Article /> },

  { path: "account", element: <Account/>}
];

export default routes;
