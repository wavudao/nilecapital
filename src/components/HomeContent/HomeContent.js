import React, { useRef, useEffect, useState } from "react";
import qs from "qs";
import axios from "axios";
import Category from "../Category";
import Subscribe from "../Subscribe";
import Container from "../Container";
import setPictures from "../setPictures";
import Icon from "../Icon";
import useBodyClass from "../../hooks/useBodyClass";
import { generalInfoData } from "./HomeData";
import { Link } from "react-router-dom";
import useHomeAnims from "../../hooks/useHomeAnims";

const endpoint = `https://strapi.nilecapital.cc/api/articles`;
const baseEndpoint = `https://strapi.nilecapital.cc`
const HomeContent = () => {
  useBodyClass("p-home");

  const images = setPictures(require.context("../../assets/img/p-home/", false, /\.(png|jpe?g|svg|webp)$/));
  const { date, author, category, header, subheader, time } = generalInfoData;
  const chartTable = useRef(null);
  const chartSvg = useRef(null);
  const trustInfo = useRef(null);

  const [randomArticles, setRandomArticles] = useState([])

  const getRandomArticles = (articles, num) => {
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
      // console.log(data[0].attributes.category.data.attributes.name)

      const shuffledArticles = getRandomArticles(data, 3)
      let at =[]
      
      for (let i = 0; i < shuffledArticles.length; i++) {
        const lands = {
          date:data[i].attributes.createdAt,  
          author:data[i].attributes.author.data.attributes.name ,
          category:data[i].attributes.category.data.attributes.name ,
          header:data[i].attributes.title,
          subheader:data[i].attributes.description ,
          time:data[i].attributes.createdAt 
        }
        at.push(lands)

      }
      setRandomArticles(at)
      console.log(at)
    }

    fetchArticle();
  },[])

  useHomeAnims(chartTable, chartSvg, trustInfo);

  return (
    <>
      <main className="p-home-main">
        <section className="section-top">
          <span className="section-top-figures">
            <span className="section-top-figure figure-0">
              <img src={images["top-figure.png"]} alt="" />
            </span>

            <span className="section-top-figure figure-1" data-speed="1.1">
              <img src={images["top-figure-1.png"]} alt="" />
            </span>

            <span className="section-top-figure figure-2" data-speed="1.3">
              <img src={images["top-figure-2.png"]} alt="" />
            </span>

            <span className="section-top-figure figure-3" data-speed="1.25">
              <img src={images["top-figure-3.png"]} alt="" />
            </span>
          </span>

          <Container>
            <div className="section-top-desc">
              <h1>Invest in digital assets</h1>

              <h5> Build a portfolio of high performing digital assets by investing with us.</h5>

              <a className="el-button outline" href= "https://app.solrise.finance/funds/CXwv4U7Y7TozUWGEo4jrx8ogddQCyvbywQeUctL1eSBV">
                Invest with us
              </a>
            </div>

            <div className="section-top-chart">
              <div className="chart-svg" ref={chartSvg}>
                <div className="chart-svg-top">
                  <span className="el-title--h6">Bitcoin Price</span>
                  <span className="el-title--h7">3 years</span>
                </div>

                <svg width="100%" height="100%" viewBox="0 0 1031 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    id="motionPath"
                    d="M1 277L63.8924 260.063L116.789 240.492L145.944 241.997L183.013 248.772L203.422 257.805L220.499 251.407L265.898 263.451L317.128 248.772L342.118 257.805L350.865 269.473L386.268 261.569L399.596 251.407L464.571 252.912L477.483 243.503L492.894 240.492L506.222 243.503L511.22 248.019L552.037 241.997L583.275 213.393L603.684 207.371L630.341 124.569L645.751 152.42L666.993 58.7033L674.907 88.0604L689.484 40.261L700.73 58.7033L706.145 36.4973L719.056 20.3132L726.137 69.9945L734.051 41.7665L741.131 40.261L759.874 137.742L775.285 119.299L782.782 148.657L790.279 141.129L808.605 156.937L816.102 119.299L838.594 78.6511L851.505 75.2637L863.584 88.0604L871.498 105.374L893.989 17.3022L904.818 24.0769L912.315 3L928.142 46.6593L949.801 85.4258L953.966 73.0055L974.375 108.385L982.288 133.602L998.532 102.363L1010.19 123.816L1016.86 105.374L1022.27 121.181L1039.35 98.2225L1046.85 96.717L1054.76 129.838L1066.01 119.299L1081 150.538"
                    stroke="#F7931A"
                    strokeWidth="2"
                  />

                  <path
                    id="motionPath1"
                    d="M1 277L66.8688 270.178L111.196 264.873L122.381 270.178L184.521 272.831L242.519 274.726L300.102 276.242L324.13 267.905L343.186 272.831L348.986 276.242L427.697 270.178H465.396L491.081 258.809H506.823L537.064 263.736L591.748 250.093L616.604 244.029L630.275 212.953L649.331 203.479L665.488 169.371L675.016 195.52L689.101 174.676L700.701 186.425L708.158 159.896L720.171 139.432L727.214 148.527L743.785 48.4772L756.213 137.916L764.913 122.378L785.212 169.371L793.497 150.801L808.825 172.024L831.196 92.8174H842.795L850.666 56.0567L872.208 106.84L883.808 72.3527L913.635 3L924.82 31.4232L932.692 18.538L947.191 51.509L955.062 43.1715L969.562 97.7441L975.776 90.9225L984.475 139.811L999.803 97.7441L1010.57 125.788L1018.45 113.282L1022.59 129.578L1030.87 125.788L1048.69 85.6169L1055.73 118.967L1066.5 106.84L1081 139.811"
                    stroke="#627EEA"
                    strokeWidth="2"
                  />

                  <path
                    id="motionPath2"
                    d="M1 275L77.3512 264.852H104.033L154.934 267.859L203.372 271.993H239.905H287.933L325.698 267.859L348.685 275L424.626 271.993L507.135 267.859L599.084 265.228L636.029 259.966H653.269L670.51 169.008L682.824 181.036L687.75 161.867L701.296 173.894L717.306 49.8615L727.568 60.3855L741.114 1L753.429 140.067L764.922 112.63L776.416 126.536L783.395 158.484L798.993 145.705L808.434 158.484L846.61 70.5336L871.65 131.423L890.532 70.5336L899.563 73.9163L915.162 4.38272L922.551 34.0754L933.634 14.155L948.001 54.3717L955.8 46.8546L968.936 93.0851L975.093 70.5336L983.714 119.019H993.566V99.8505H1003.42L1009.16 119.019L1014.91 108.871L1029.28 119.019L1046.52 99.8505L1058.01 119.019L1068.27 108.871L1081 140.067"
                    stroke="#F0B90B"
                    strokeWidth="2"
                  />

                  <path
                    id="motionPath3"
                    d="M1 263.348L5.10179 257.711L23.1496 252.449L30.943 228.394L48.9909 246.435L97.8021 191.184L123.233 228.394L142.101 223.883L164.251 249.442L184.35 242.3L189.682 257.711L230.29 252.449L245.056 263.348L280.742 268.986L319.299 238.918L339.807 257.711L347.601 275L395.182 263.348L467.783 268.986L477.627 252.449H507.981L512.082 263.348L531.771 266.355L558.022 257.711L592.888 233.28L601.501 242.3L612.986 197.198L619.139 199.829L628.983 167.505L636.777 184.794L647.441 193.439L666.72 112.63L677.795 156.605L689.28 130.295L701.175 153.974L718.402 61.1372L725.785 105.864L740.962 1L752.857 156.605L762.701 149.84L773.366 162.243L782.39 197.198L788.133 187.049L809.052 208.849L834.073 156.605L843.507 162.243L850.07 138.188L871.399 179.156L895.189 142.698L906.264 146.833L915.288 87.0713L930.465 138.188L943.18 179.156L954.255 173.143L969.842 199.829L975.994 184.794L983.378 215.99L991.581 212.232L997.324 193.439L1016.19 218.621L1037.93 203.963H1048.6L1057.62 223.883L1061.72 218.621L1081 233.28"
                    stroke="#345D9D"
                    strokeWidth="2"
                  />

                  <path
                    id="motionPath4"
                    d="M0 274.241H25.7337L56.3691 274.62L110.287 273.861L182.995 274.62H215.673H254.887H278.024L316.157 274.241L332.496 274.62L350.469 275L398.26 274.62H450.545L455.855 273.861L480.772 274.241L563.283 274.62L584.115 273.861H604.713L618.835 273.482L624.145 270.446L644.16 271.964L658.865 243.122L669.486 251.471L690.726 248.814L700.529 251.471L714.418 245.399L721.77 118.645L726.263 155.837L731.165 140.277L737.7 1L748.321 61.7202L751.997 113.332L756.49 118.645L759.758 133.446L763.843 96.2548L770.787 126.994L775.28 128.892L782.224 175.191L787.126 159.632L806.732 193.407L815.31 182.402L823.071 180.125L837.368 126.994L845.537 147.867L849.622 140.277L856.566 161.909L872.905 182.402L881.074 164.565L888.427 169.499L901.906 147.867L914.977 153.939L941.936 199.859L953.782 191.51L968.487 207.828L975.431 197.961L980.333 210.105H991.362L993.812 204.413L1010.15 215.798H1017.91L1028.94 223.767L1048.14 210.105L1053.86 219.213L1065.29 212.762L1080 222.249"
                    stroke="#C2A633"
                    strokeWidth="2"
                  />
                </svg>

                <div className="chart-svg-bottom">
                  <span className="chart-svg-bottom--date">mar’19</span>
                  <span className="chart-svg-bottom--date">jun’19</span>
                  <span className="chart-svg-bottom--date">Sep’19</span>
                  <span className="chart-svg-bottom--date">dec’19</span>
                  <span className="chart-svg-bottom--date">mar’20</span>
                  <span className="chart-svg-bottom--date">jun’20</span>
                  <span className="chart-svg-bottom--date">Sep’20</span>
                  <span className="chart-svg-bottom--date">dec’20</span>
                  <span className="chart-svg-bottom--date">mar’21</span>
                  <span className="chart-svg-bottom--date">jun’21</span>
                  <span className="chart-svg-bottom--date">Sep’21</span>
                  <span className="chart-svg-bottom--date">dec’21</span>
                  <span className="chart-svg-bottom--date">Mar’22</span>
                </div>
              </div>

              <div className="chart-table" ref={chartTable}>
                <span className="table--bg"></span>
                <table>
                  <thead>
                    <tr>
                      <th>Coin</th>
                      <th>Price</th>
                      <th>24h %</th>
                      <th>7d %</th>
                      <th>Market Cap</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <span className="chart-table--icon">
                          <img src={images["bitcoin.png"]} alt="" />
                        </span>
                        Bitcoin
                        <span className="chart-table--short">BTC</span>
                      </td>
                      <td>$29,907.89</td>
                      <td>0.22%</td>
                      <td>5.74%</td>
                      <td>$574,132,756,019</td>
                    </tr>

                    <tr>
                      <td>
                        <span className="chart-table--icon">
                          <img src={images["ethereum.png"]} alt="" />
                        </span>
                        Ethereum
                        <span className="chart-table--short">ETH</span>
                      </td>
                      <td>$2,060.84</td>
                      <td>1.66%</td>
                      <td>13.53% </td>
                      <td>$248,985,105,068</td>
                    </tr>

                    <tr>
                      <td>
                        <span className="chart-table--icon">
                          <img src={images["binance.png"]} alt="" />
                        </span>
                        Binance
                        <span className="chart-table--short">BNB</span>
                      </td>
                      <td>$302.20</td>
                      <td>1.10%</td>
                      <td>6.99% </td>
                      <td>$49,342,703,788</td>
                    </tr>

                    <tr>
                      <td>
                        <span className="chart-table--icon">
                          <img src={images["litecoin.png"]} alt="" />
                        </span>
                        Litecoin
                        <span className="chart-table--short">LTC</span>
                      </td>
                      <td>$73.00</td>
                      <td>5.35%</td>
                      <td>12.48%</td>
                      <td>$5,132,480,955</td>
                    </tr>

                    <tr>
                      <td>
                        <span className="chart-table--icon">
                          <img src={images["dogecoin.png"]} alt="" />
                        </span>
                        Dogecoin
                        <span className="chart-table--short">DOGE</span>
                      </td>
                      <td>$0.08916</td>
                      <td>0.57%</td>
                      <td>21.85%</td>
                      <td>$11,828,900,434</td>
                    </tr>
                  </tbody>
                </table>

                <span className="chart-table--bottom">* information as of May 17, 2022</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-trust">
          <div className="section-trust-inner">
            <div className="section-trust-img">
              <img src={images["majok.jpg"]} alt="" />
            </div>

            <div className="section-trust-desc">
              <h3>Why you can trust us</h3>

              <span className="section-trust-desc--text">
                I have been involved in Bitcoin and the Crypto Market since June 2013. During the ensuring bull and bear markets, I have
                built an excellent track record investing in this space. I have advised friends and family members that have gone on to
                perform exceedingly well. This experience coupled with my wider interest in global macro and world events will be valuable
                in ensuring successful outcomes for our community.
              </span>

              <h4>Nhial Majok</h4>
              <span className="section-trust-desc--subtext">Chief Investment Officer</span>

              <Link className="el-button outline" to={"/team"}>
                meet the team
              </Link>
            </div>
          </div>

          <Container>
            <div className="section-trust-info" ref={trustInfo}>

              <div className="section-trust-info-el" >
                <span className="el--title el-title--h1">8+ years</span>

                <span className="el--subtitle el-title-h5">Investing in the Crypto Industry</span>
              </div>

              <div className="section-trust-info-el">
                <span className="el--title el-title--h1">x80</span>

                <span className="el--subtitle el-title-h5">Performance over 8 years</span>
              </div>

              <div className="section-trust-info-el">
                <span className="el--title el-title--h1">100%</span>

                <span className="el--subtitle el-title-h5">Fully committed to Crypto</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="section-join">
          <span className="section-join--bg">
            <img src={images["join.png"]} alt="" />
          </span>

          <span className="section-join-figure figure-1" data-speed="1.1">
            <img src={images["join-figure-1.png"]} alt="" />
          </span>

          <span className="section-join-figure figure-2" data-speed="1.3">
            <img src={images["join-figure-2.png"]} alt="" />
          </span>

          <span className="section-join-figure figure-3" data-speed="1.2">
            <img src={images["join-figure-3.png"]} alt="" />
          </span>

          <h2>Join our Fund and take advantage of our 8+ years long knowledge and experience in Crypto</h2>
        </section>

        <section className="section-general">
          <div className="section-general-category">
            <span className="section-general-category--bg"></span>

            <span className="section-general-figures">
              <span className="section-general-figure figure-1">
                <img src={images["general-figure-1.png"]} alt="" />
              </span>

              <span className="section-general-figure figure-2" data-speed="1.1">
                <img src={images["general-figure-2.png"]} alt="" />
              </span>

              <span className="section-general-figure figure-3" data-speed="1.2">
                <img src={images["general-figure-3.png"]} alt="" />
              </span>

              <span className="section-general-figure figure-4" data-speed="1.4">
                <img src={images["general-figure-4.png"]} alt="" />
              </span>
            </span>

            <Container>
              <h2>General Information</h2>

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

              <Link className="section-general-link" to="/general">
                view all articles in Market Commentary
                <Icon name="arrow" />
              </Link>
            </Container>
          </div>

          <div className="section-general-category tech">
            <span className="section-general-category--bg">
              <span className="section-general-figure figure-5" data-speed="1.2">
                <img src={images["general-figure-5.png"]} alt="" />
              </span>

              <span className="section-general-figure figure-6" data-lag="0.5">
                <img src={images["general-figure-6.png"]} alt="" />
              </span>

              <span className="section-general-figure figure-7" data-speed="1.3">
                <img src={images["general-figure-7.png"]} alt="" />
              </span>
            </span>

            <Container>
              <h2>Market Commentary</h2>

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

              <Link className="section-general-link" to="/market">
                view all articles in Market Commentary
                <Icon name="arrow" />
              </Link>
            </Container>
          </div>
        </section>

        <section className="section-subscribe">
          <Subscribe />
        </section>
      </main>
    </>
  );
};

export default HomeContent;
