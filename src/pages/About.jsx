import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import "./about.scss";
import { skills, texts, aboutText } from "../utils/api";
import Image from "../assets/images/hero.png";

const About = () => {
  return (
    <section className="about container">
      <div className="col-1">
        <div className="img">
          <img src={Image} alt="image" />
        </div>
        <div className="text">
          <h2 className="name">Lucas Silva</h2>
          {aboutText.map((item) => {
            const { id, icon, text } = item;
            return (
              <div key={id}>
                <p className="function">
                  {icon}
                  {text}
                </p>
              </div>
            );
          })}
          <p className="city"></p>
          <div className="tech">
            {skills.map((item, id) => (
              <p key={id}>{item.skill}</p>
            ))}
          </div>
          <div className="links">
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
            <a href="https://www.frontendmentor.io/profile/Lucassocorrosilva7">
              <SiFrontendmentor />
            </a>
          </div>
        </div>
      </div>
      <div className="col-2">
        <h2 className="col-2__heading">Conheça-me!</h2>
        {texts.map((item) => {
          const { id, text } = item;
          return (
            <div key={id}>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
