import React, { useState } from "react";
import PropTypes from "prop-types";

const FaqSingle = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <li className={`faq-el js--faq-el ${isOpen ? "active" : ""}`}
              onClick={() => setOpen(!isOpen)}
              >
        <div
          className="faq-el-top">
          <div className="faq-el-top-icon">
            <div className="icon">
              <span className="icon--line"></span>
              <span className="icon--line"></span>
            </div>
          </div>

          <div className="faq-el-top-title js--faq-el-top-title">
            <h6>{title}</h6>

            <div className={`faq-el-hidden js--faq-el-hidden ${!isOpen ? "collapsed" : ""}`}>
              {content}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

FaqSingle.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default FaqSingle;
