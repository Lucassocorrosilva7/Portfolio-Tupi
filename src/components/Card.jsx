import "./card.scss";

const Card = ({ title, description, url }) => {
  return (
    <article className="card">
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
};

export default Card;
<div class="card"></div>;
