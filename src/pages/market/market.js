import React from "react";
import MarketInfo from "../../components/MarketContent";
import useBodyClass from "../../hooks/useBodyClass";

const Market = () => {
  useBodyClass("p-category");

  return <MarketInfo />;
};

export default Market;
