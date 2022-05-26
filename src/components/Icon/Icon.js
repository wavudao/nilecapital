import React from "react";
import Icons from "../../assets/icons/Icons.svg";
import PropTypes from "prop-types";

const Icon = ({ name }) => (
  <svg className={`icon-${name}`}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
