import React, {useEffect, useState} from "react";
import axios from 'axios';
import qs from 'qs';
import { marketInfoData } from "./MarketData";
import Subscribe from "../Subscribe";
import Category from "../Category";
import Icon from "../Icon";
import Container from "../Container";
import setPictures from "../setPictures";

const endpoint = `http://3.132.252.69:1337/api/articles`;
const baseEndpoint = `http://3.132.252.69:1337`;

const MarketContent = () => {
  const images = setPictures(require.context("../../assets/img/p-category/figureMarket", false, /\.(png|jpe?g|svg|webp)$/));
  const { pageTitle, pageSubTitle, categories } = marketInfoData;
  const [data, setData] = useState([]);

  const fetchBlogs = async() => {
    /*
  response data
  {
    id, 
    attributes : {title, description, content, slug,createdAt }
  }
*/
    const query = qs.stringify({populate: "*"},{encodedValuesOnly: true})
    const response = await axios.get(`${endpoint}?${query}`, {
      headers: {
        Accept: "application/json",
      },
    });

    const data =  response.data.data;
    setData(data)
  }

  useEffect(() => {
  fetchBlogs()
  },[])

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
          {data.map(({id, attributes: {title, description, publishedAt, image, author}}) => (
            <Category
              key={id}
              id={id}
              date={new Date(publishedAt).toLocaleDateString()}
              author={author.data.attributes.name}
              category={`General Infromation`}
              header={title}
              subheader={description}
              time={`5 min`}
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
