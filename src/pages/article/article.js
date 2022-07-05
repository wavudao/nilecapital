import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import useBodyClass from "../../hooks/useBodyClass";
import Icon from "../../components/Icon";
import articleImg from "../../assets/img/article.jpg";
import Subscribe from "../../components/Subscribe";
import Category from "../../components/Category";
import ReactMarkDown from 'react-markdown'
import { useSelector } from "react-redux";
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'




const baseEndpoint = `https://strapi.nilecapital.cc`



const Article = () => {
  useBodyClass("p-article");

  const { id } = useParams();
 
  const articleId = parseInt(id.substring(1));
   const articles = useSelector(state=>state.articles)
   const art = useSelector(state=>state.articles.find(article=>article.id ===articleId))
  art && console.log(art.attributes.content)

  const getRandomArticles = (articles,num) => {
    const shuffled = [...articles].sort(()=> 0.5 - Math.random())
    return shuffled.slice(0, num)
  }


  return (
    <>
      {Object.keys(art)?.length === 0 ? (
        <div className="p-article-loading">
          <Icon name="loadmore" />
          Loading...
        </div>
      ) : (
        <article className="p-article-box">
          <div className="p-article-top">
            <h6 className="p-article-top--category">Cryptocurrency Analysis</h6>

            <h2>
              {art?.attributes.title}
            </h2>

            <div className="p-article-top-info">
              <span className="el-title--h7">{art.attributes.author.data.attributes.name}</span>

              <span className="el-title--h7 date">
                {new Date(art?.attributes.publishedAt).toLocaleDateString()}
                <span className="time">{art?.attributes.readtime}</span>
              </span>
            </div>
          </div>

          <div className="p-article-img">
            <img  src={`${baseEndpoint}${art.attributes.image.data.attributes.url}`} alt="" />

            {/* <span className="p-article-img--author">
              Photo by Markus Spiske / Unsplash
            </span> */}
          </div>

          <Container article >
            <ReactMarkDown children={art?.attributes.content}  rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}/>
            
            <div className="p-article-author">
              <div className="p-article-author--img">
                <img src={articleImg} alt="" />
              </div>

              <div className="p-article-author-desc">
                <h6>{art.attributes.author.data.attributes.name}</h6>

                {/* <span>On-Chain Analyst</span> */}

                <ul className="custom">
                  <li>
                    <a target={"_blank"} rel={"noreferrer"} href={`https://linkedin.com/${art?.attributes.author.data.attributes.linkedIn}`}>
                      <Icon name="linkedin" />
                    </a>
                  </li>

                  <li>
                    <a target={"_blank"} rel={"noreferrer"} href={`https://twitter.com/${art?.attributes.author.data.attributes.linkedIn}`}>
                      <Icon name="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-article-mark">
              <div className="p-article-mark-like">
                Like the article?
                <span className="like">
                  👍 <span className="like-count">1</span>
                </span>
                <span className="like">
                  👎 <span className="like-count">0</span>
                </span>
              </div>

              <div className="p-article-mark-share">
                Share:
                <ul className="custom">
                  <li>
                    <a target={"_blank"} href="/">
                      <Icon name="facebook" />
                    </a>
                  </li>

                  <li>
                    <a target={"_blank"} href="/">
                      <Icon name="telegram" />
                    </a>
                  </li>

                  <li>
                    <a target={"_blank"} href="/">
                      <Icon name="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </article>
      )}

      <div className="p-article-also">
        <Container>
          <h2>You might also like</h2>

          <ul className="custom c-category">
            {getRandomArticles(articles,3)?.map(({id, attributes: {title, description, publishedAt, image, author,category}}) => (
              <Category
              key={id}
              id={id}
              date={new Date(publishedAt).toLocaleDateString()}
              author={author.data.attributes.name}
              category={category.data.attributes.name}
              header={title}
              subheader={description}
              time={`5 min`}
              categoryImg={`${baseEndpoint}${image.data.attributes.url}`}
            />
            ))}
          </ul>
        </Container>
      </div>

      <Subscribe />
    </>
  );
};

export default Article;
