import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import "./about.scss";
import Image from "../assets/images/hero.png";
import useProjects from "../hooks/useProjects";

const About = () => {
  const { info, skill, text } = useProjects();

  return (
    <section className="about container">
      <div className="about__info">
        <div className="about__info-img">
          <img src={Image} alt="image" />
        </div>
        <div className="about__info-content">
          <h2 className="about__info-content--name">Lucas Silva</h2>
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
            <a
              href="https://www.linkedin.com/in/luquinhasssilva/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Lucassocorrosilva7" target="_blank">
              <FaGithub />
            </a>

            <a href="mailto:lucassocorrosilva@gmail.com">
              <FaEnvelope />
            </a>
            <a
              href="https://www.frontendmentor.io/profile/Lucassocorrosilva7"
              target="_blank"
            >
              <SiFrontendmentor />
            </a>
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
  );
};

export default About;
