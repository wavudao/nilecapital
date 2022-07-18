import React  from "react";

import Subscribe from "../Subscribe";
import Category from "../Category";
import Icon from "../Icon";
import Container from "../Container";
import setPictures from "../setPictures";
import { useSelector } from "react-redux";


const baseEndpoint = `https://strapi.nilecapital.cc`;

const MarketContent = () => {
  const images = setPictures(require.context("../../assets/img/p-category/figureMarket", false, /\.(png|jpe?g|svg|webp)$/));

  const market_Articles = useSelector(state=>state.articles.filter(article=>article.attributes.category.data.attributes.name === `market commentary`));
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
            <h1>Market Commentary</h1>

            <h5>Our thoughts on current macro and investment landscape.</h5>
          </div>
        </Container>
      </div>

      <Container>
      <ul className="custom c-category">
          {market_Articles.map(({id, attributes: {title, description, publishedAt, image, author, readtime }}) => (
            <Category
              key={id}
              id={id}
              date={new Date(publishedAt).toLocaleDateString()}
              author={author.data.attributes.name}
              category={`Market commentary`}
              header={title}
              subheader={description}
              time={readtime}
              categoryImg={`${baseEndpoint}${image.data.attributes.url}`}
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
