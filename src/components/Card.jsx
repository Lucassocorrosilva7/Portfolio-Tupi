import { FaGithub } from "react-icons/fa";
import "./card.scss";

const Card = ({ projects }) => {
  return (
    <>
      {projects.map((currentproject) => {
        const { id, title, description, url, code, buttonText } =
          currentproject;
        return (
          <article className="card" key={id}>
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="content">
              <h2 className="content__title">{title}</h2>
              <p className="content__description">{description}</p>
              <div className="content__buttons">
                <a
                  className="content__buttons--button"
                  href={url}
                  target="_blank"
                >
                  Ver projeto
                </a>
                {code && (
                  <a
                    className="content__buttons--button link"
                    href={code}
                    target="_blank"
                  >
                    {buttonText}
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Card;
