import React from "react";
import useBodyClass from "../../hooks/useBodyClass";
import TeamContent from "../../components/TeamContent";

const Team = () => {
  useBodyClass("p-team");

  return (
    <TeamContent/>
  );
};

export default Team;
