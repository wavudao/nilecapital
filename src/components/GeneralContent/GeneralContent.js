import React from "react";
import Subscribe from "../Subscribe";
import Category from "../Category";
import Icon from "../Icon";
import Container from "../Container";
import setPictures from "../setPictures";
import { useSelector } from "react-redux";

const baseEndpoint = `https://strapi.nilecapital.cc`;

const GeneralContent = () => {
  const images = setPictures(require.context("../../assets/img/p-category/figure", false, /\.(png|jpe?g|svg|webp)$/));
  const Articles = useSelector(state=>state.articles.filter(article=>article.attributes.category.data.attributes.name === `general information`));


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
            <h1>Our knowledge base</h1>

            <h5>Read Our current and prior updates.</h5>
          </div>
        </Container>
      </div>

      <Container>
        <ul className="custom c-category">
          {Articles.map(({id, attributes: {title, description, publishedAt, image, author,readtime}}) => (
            <Category
              key={id}
              id={id}
              date={new Date(publishedAt).toLocaleDateString()}
              author={author.data.attributes.name}
              category={`General Infromation`}
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

export default GeneralContent;
