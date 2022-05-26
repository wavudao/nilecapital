import React from "react";
import PropTypes from "prop-types";

const Container = ({ children, article }) => {
  return <div className={`el-container ${article ? 'article' : ''}`}>{children}</div>;
};

Container.propTypes = {
  name: PropTypes.bool,
};

export default Container;
