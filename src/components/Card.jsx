import "./card.scss";

const Card = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        const { id, title, description, url } = project;
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
              <a className="content__button" href={url} target="_blank">
                Ver projeto
              </a>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Card;
