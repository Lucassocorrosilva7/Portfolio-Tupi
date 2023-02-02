import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./about.scss";
import { skills, texts, aboutText } from "../utils/api";
import Image from "../assets/images/hero.png";

const About = () => {
  return (
    <section className="about container">
      <div className="col-1">
        <div className="img">
          <img src={Image} alt="" />
        </div>
        <div className="text">
          <h2 className="name">Lucas Silva</h2>
          {aboutText.map((item, id) => (
            <p className="function" key={id}>
              {item.icon}
              {item.a}
            </p>
          ))}
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
          </div>
        </div>
      </div>
      <div className="col-2">
        <h2 className="col-2__heading">Conheça-me!</h2>
        {texts.map((item, id) => (
          <p key={id}>{item.text}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
