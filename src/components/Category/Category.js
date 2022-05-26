import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Category = ({ date, author, category, header, subheader, time, categoryImg }) => (
  <>
    <li className="c-category-box">
      <Link to={"/article"} className="c-category-box-el">
        <div className="c-category-box-el-top">
          <div className="c-category-box-el-top-row">
            <span className="date">{date}</span>

            <span className="author">{author}</span>

            <span className="link">{category}</span>
          </div>

          <h4>{header}</h4>

          <span className="c-category-box-el--text">{subheader}</span>

          <span className="c-category-box-el--time">{time}</span>
        </div>

        <div className="c-category-box-el-img">
          {categoryImg !=='' &&  <img src={categoryImg} alt="category description" />}
        </div>
      </Link>
    </li>
  </>
);

Category.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  header: PropTypes.string,
  categoryImg: PropTypes.string,
};

export default Category;
