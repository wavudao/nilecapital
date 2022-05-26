import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <Header />

      <SmoothScroll>
        {routing}
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;
