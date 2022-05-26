import Icon from "../Icon";
import diamantSmall from "../../assets/img/p-team/diamant-small.webp";
import diamant from "../../assets/img/p-team/diamant.webp";
import Container from "../Container";
import { teamData } from "./data";

const GeneralContent = () => {
  const { pageTitle, pageSubTitle, members } = teamData;

  return (
    <main className="p-team-main">
      <Container>
        <div className="p-team-main-img left" data-speed="1.4">
          <img src={diamantSmall} alt="diamont small" />
        </div>

        <div className="p-team-main-img right" data-speed="1.2">
          <img src={diamant} alt="diamont" />
        </div>

        <div className="p-team-main-top">
          <h1 className="el-title--h1">{pageTitle}</h1>

          <span className="el-title-h5">{pageSubTitle}</span>
        </div>

        <div className="p-team-main-box">
          <ul className="custom member-box">
            {members.map(({ photo, name, position, descriptionTitle, description, socials }, index) => (
              <li key={index} className="member">
                <div className="member-inner">
                  <div className="member-front">
                    <div className="member-img">
                      <img src={photo} alt="memberPhoto" />
                    </div>
                  </div>

                  <div className="member-back">
                    <h4>{descriptionTitle}</h4>

                    <span className="member-back--text">{description}</span>
                  </div>
                </div>

                <h3>{name}</h3>

                <h6>{position}</h6>

                <div className="member-social">
                  <ul className="custom">
                    {socials.map(({ icon, link }, index) => (
                      <li key={index}>
                        <a target={"_blank"} href={link} rel="noreferrer">
                          <Icon name={icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
};

export default GeneralContent;
