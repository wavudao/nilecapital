import React from "react";
import GeneralInfo from "../../components/GeneralContent";
import useBodyClass from "../../hooks/useBodyClass";

const General = () => {
  useBodyClass("p-category");

  return <GeneralInfo />;
};

export default General;
