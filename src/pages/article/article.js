import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import qs from "qs";
import axios from "axios";
import Container from "../../components/Container";
import useBodyClass from "../../hooks/useBodyClass";
import Icon from "../../components/Icon";
import articleImg from "../../assets/img/article.jpg";
import Subscribe from "../../components/Subscribe";
import { generalInfoData } from "../../components/GeneralContent/GeneralData";
import Category from "../../components/Category";

const endpoint = `http://3.132.252.69:1337/api/articles`;
const baseEndpoint = `http://3.132.252.69:1337`
const Article = () => {
  useBodyClass("p-article");

  const { id } = useParams();
  const articleId = parseInt(id.substring(1));

  const [article, setArticle] = useState({});
  const [randomArticles, setRandomArticles] = useState([]);

  const getRandomArticles = (articles,num) => {
    const shuffled = [...articles].sort(()=> 0.5 - Math.random())
    return shuffled.slice(0, num)
  }

  useEffect(() => {
    const fetchArticle = async () => {
      const query = qs.stringify(
        { populate: "*" },
        { encodedValuesOnly: true }
      );
      const response = await axios.get(`${endpoint}?${query}`, {
        headers: {
          Accept: "application/json",
        },
      });

      const data = response.data.data;
      const article = [...data].filter((article) => article.id === articleId);
      setArticle(...article)
      const shuffledArticles = getRandomArticles(data, 3)
      setRandomArticles(shuffledArticles)
    };
    fetchArticle();
  }, [articleId]);

  return (
    <>
      {Object.keys(article).length === 0 ? (
        <div className="p-article-loading">
          <Icon name="loadmore" />
          Loading...
        </div>
      ) : (
        <article className="p-article-box">
          <div className="p-article-top">
            <h6 className="p-article-top--category">Cryptocurrency Analysis</h6>

            <h2>
              {article.attributes.title}
            </h2>

            <div className="p-article-top-info">
              <span className="el-title--h7">{article.attributes.author.data.attributes.name}</span>

              <span className="el-title--h7 date">
                {new Date(article.attributes.publishedAt).toLocaleDateString()}
                <span className="time">2 min read</span>
              </span>
            </div>
          </div>

          <div className="p-article-img">
            <img src={`${baseEndpoint}${article.attributes.image.data.attributes.url}`} alt="" />

            {/* <span className="p-article-img--author">
              Photo by Markus Spiske / Unsplash
            </span> */}
          </div>

          <Container article style={{overFlow: 'scrollY'}}>
            <p>{article.attributes.content}</p>
            {/* <p>
              Crypto is a fast-moving landscape. The extreme outperformance of
              Solana, AVAX, BNB, dogecoin, and Shibatoken should be proof of
              this very statement. For those not in the know, the whole Crypto
              market has been on an amazing run over the last 14 months. Bitcoin
              alone has grown by more than 400% annualized.
            </p>

            <p>
              However, a keen look at this, shows that the whole Crypto market
              history is very the definition of a boom-bust cycle. Every
              explosive growth after each halving has been followed by an 80%
              plus drawdowns on Bitcoin. Smaller cap assets have suffered way
              worse, causing truly harrowing opportunity costs for investors.
            </p>

            <p>
              So, the question naturally is this, would you know when the final
              top comes in? In fact, the majority of traders and investors in
              each crypto-bull cycle have often been left holding the bag in the
              next downturn. If you are not sure, here are a few things to look
              out for, towards the final top of this recent bull cycle.
            </p>

            <img className="p-article-image" src={articleImg} alt="" />

            <h5>
              The sloppiness of trading. Large inter-exchange spreads, major
              price "gaps", exchanges going down with too much
              registration/demand.
            </h5>

            <p>
              The number of users rushing into Crypto at or close to the top is
              often a shock to all exchange infrastructure.
            </p>

            <h5>
              A sharp drop in bitcoin dominance to between 30% to 40% -
              https://coinmarketcap.com/charts/#dominance-percentage
            </h5>

            <p>
              Bitcoin dominance drops to extreme lows, as a result of what is
              called an alt-season. This is a time in which large to small-cap
              tokens in the market outperform Bitcoin by an extreme degree.
            </p>

            <h5>
              Individuals, e.g. Tax Drivers/Painters - talking about quitting
              their jobs and go Bitcoin trading full time.
            </h5>

            <p>
              As every recent entrant into the market starts to make astonishing
              gains, they can’t help but brag to everyone in sight.
            </p>

            <h5>
              50% to 90% of crypto doing 10x to 20x or more, green across the
              whole Coinmarketcap, 1 to 2 weeks consistently.
            </h5>

            <p>
              Often the whole market is green for rather astonishing long
              periods, with shallow corrections leading to extreme FOMO.
            </p>

            <h5>
              A complete disbelieve and feeling of Euphoria as if the party is
              not going to end :-) as the market goes nuts and ignores bad news
              at every turn.
            </h5>

            <p>
              The above is self-explanatory and as a human being, you will feel.
              When you do, remember Buffet's advice, “Be fearful when others are
              greedy”.
            </p>

            <h5>
              Experienced traders like Tuur Demeester, Peter Brandt, Bob Loukas
              are becoming bearish and already selling out of the market.
            </h5>

            <p>
              At this point, if you can’t trust your own judgment, look to
              others that have gone through several markets and have scars to
              show. The final step is obviously sticking to a plan that you have
              made beforehand. Be happy with the amount you have made. Simply
              not being greedy puts you ahead of 95% of all traders in any
              market.
            </p>

            <ul>
              <li>
                The sloppiness of trading. Large inter-exchange spreads, major
                price "gaps", exchanges going down with too much
                registration/demand.
              </li>

              <li>
                A sharp drop in bitcoin dominance to between 30% to 40% -
                https://coinmarketcap.com/charts/#dominance-percentage
              </li>

              <li>
                Individuals, e.g. Tax Drivers/Painters - talking about quitting
                their jobs and go Bitcoin trading full time.
              </li>

              <li>
                50% to 90% of crypto doing 10x to 20x or more, green across the
                whole Coinmarketcap, 1 to 2 weeks consistently.
              </li>

              <li>
                A complete disbelieve and feeling of Euphoria as if the party is
                not going to end :-) as the market goes nuts and ignores bad
                news at every turn.
              </li>

              <li>
                Experienced traders like Tuur Demeester, Peter Brandt, Bob
                Loukas are becoming bearish and already selling out of the
                market.
              </li>
            </ul>

            <blockquote>
              The sloppiness of trading. Large inter-exchange spreads, major
              price "gaps", exchanges going down with too much
              registration/demand.
            </blockquote>

            <p>
              <b>Crypto is a fast-moving landscape.</b> The extreme
              outperformance of Solana, AVAX, BNB, dogecoin, and Shibatoken
              should be proof of this very statement. For those not in the know,
              the whole Crypto market has been on an amazing run over the last
              14 months. Bitcoin alone has grown by more than 400% annualized.
            </p>

            <p>
              <b>
                However, a keen look at this, shows that the whole Crypto market
                history is very the definition of a boom-bust cycle.
              </b>{" "}
              Every explosive growth after each halving has been followed by an
              80% plus drawdowns on Bitcoin. Smaller cap assets have suffered
              way worse, causing truly harrowing opportunity costs for
              investors.
            </p>

            <p>
              <i>
                <b>
                  So, the question naturally is this, would you know when the
                  final top comes in?
                </b>{" "}
                In fact, the majority of traders and investors in each
                crypto-bull cycle have often been left holding the bag in the
                next downturn. If you are not sure, here are a few things to
                look out for, towards the final top of this recent bull cycle.
              </i>
            </p> */}

            <div className="p-article-author">
              <div className="p-article-author--img">
                <img src={articleImg} alt="" />
              </div>

              <div className="p-article-author-desc">
                <h6>{article.attributes.author.data.attributes.name}</h6>

                {/* <span>On-Chain Analyst</span> */}

                <ul className="custom">
                  <li>
                    <a target={"_blank"} href="/">
                      <Icon name="linkedin" />
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

            <div className="p-article-mark">
              <div className="p-article-mark-like">
                Like the article?
                <span className="like">
                  👍 <span className="like-count">12</span>
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
            {randomArticles.map(({id, attributes: {title, description, publishedAt, image, author}}) => (
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
        </Container>
      </div>

      <Subscribe />
    </>
  );
};

export default Article;
