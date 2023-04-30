import "./about.scss";
import useProjects from "@/hooks/useProjects";
import Image from "@/assets/images/hero.png";
import Flag from "@/assets/images/brazil.svg";
import Navbar from "@/components/Navbar";

const About = () => {
  const { info, skill, text, link } = useProjects();

  return (
    <>
      <Navbar />
      <section className="about container">
        <div className="about__info">
          <div className="about__info-img">
            <img src={Image} alt="image" />
          </div>
          <div className="about__info-content">
            <h2 className="about__info-content--name">
              Lucas Silva <img src={Flag} alt="bandeira do brasil" />
            </h2>
            <div>
              {info.map((currentInfo) => {
                const { id, text, icon } = currentInfo;
                return (
                  <p key={id} className="about__info-content--personal">
                    {icon}
                    {text}
                  </p>
                );
              })}
            </div>

            <div className="about__info-content--skills">
              {skill.map((currentSkill) => {
                const { id, skill } = currentSkill;
                return <p key={id}>{skill}</p>;
              })}
            </div>
            <div className="about__info-content--links">
              {link.map((currentLink) => {
                const { id, url, icon } = currentLink;
                return (
                  <a key={id} href={url} target="_blank">
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="about__texts">
          <h2 className="about__texts--heading">Conheça-me!</h2>
          <div>
            {text.map((currentText) => {
              const { id, about } = currentText;
              return <p key={id}>{about}</p>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
