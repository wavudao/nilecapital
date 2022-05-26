import React from "react";
import { generalInfoData } from "./GeneralData";
import Subscribe from "../Subscribe";
import Category from "../Category";
import Icon from "../Icon";
import Container from "../Container";
import setPictures from "../setPictures";

const GeneralContent = () => {
  const images = setPictures(require.context("../../assets/img/p-category/figure", false, /\.(png|jpe?g|svg|webp)$/));
  const { pageTitle, pageSubTitle, categories } = generalInfoData;
  
  return (
    <main className="p-category-main">
      <div className="p-category-top">
        <Container>
          <span className="figure figure-1">
            <img src={images["figure-1.png"]} alt="" />
          </span>

          <span className="figure figure-2" data-speed="1.2">
            <img src={images["figure-2.png"]} alt="" />
          </span>

          <span className="figure figure-3" data-speed="1.1">
            <img src={images["figure-3.png"]} alt="" />
          </span>

          <span className="figure figure-4" data-speed="1.5">
            <img src={images["figure-4.png"]} alt="" />
          </span>

          <span className="p-category-top--bg"></span>

          <div className="p-category-top-box">
            <h1>{pageTitle}</h1>

            <h5>{pageSubTitle}</h5>
          </div>
        </Container>
      </div>

      <Container>
        <ul className="custom c-category">
          {categories.map(({date, author, category, header, subheader, time, photo}, index) => (
            <Category
              key={index}
              date={date}
              author={author}
              category={category}
              header={header}
              subheader={subheader}
              time={time}
              categoryImg={photo}
            />
          ))}
        </ul>

        <div className="c-category-loadmore">
          <div className="c-category-loadmore-btn">
            <Icon name="loadmore" />
            Load more articles
          </div>
        </div>
      </Container>

      <Subscribe />
    </main>
  );
};

export default GeneralContent;
