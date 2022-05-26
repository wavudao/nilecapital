import React from "react";
import { marketInfoData } from "./MarketData";
import Subscribe from "../Subscribe";
import Category from "../Category";
import Icon from "../Icon";
import Container from "../Container";
import setPictures from "../setPictures";

const MarketContent = () => {
  const images = setPictures(require.context("../../assets/img/p-category/figureMarket", false, /\.(png|jpe?g|svg|webp)$/));
  const { pageTitle, pageSubTitle, categories } = marketInfoData;

  return (
    <main className="p-category-main">
      <div className="p-category-top market">
        <Container>
        <span className="figure figure-5"  data-speed="1.1">
            <img src={images["figure1.png"]} alt="" />
          </span>

          <span className="figure figure-6" data-lag="0.3">
            <img src={images["figure2.png"]} alt="" />
          </span>

          <span className="figure figure-7" data-speed="1.4">
            <img src={images["figure3.png"]} alt="" />
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
          {categories.map(({ date, author, category, header, subheader, time, photo }, index) => (
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

export default MarketContent;
