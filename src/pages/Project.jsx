import "./project.scss";
import Card from "../components/Card";

const Project = () => {
  return (
    <div className="projects">
      <div className="project container">
        <Card
          title={"BankSaintly"}
          description={
            "Aplicação web desenvolvida para representar um banco digital moderno, feito em HTML, Css e JavaScript."
          }
          url={"https://foodsaintly.netlify.app/"}
        />
        <Card
          title={"LmCars"}
          description={
            "Aplicação web desenvolvida para representar uma concessionária fictícia, feito React, Javascript, Sass, Axios, Vercel."
          }
          url={"https://lmcars.vercel.app/"}
        />
        <Card
          title={"FoodSaintly"}
          description={
            "Aplicação web desenvolvida para representar um delivery moderno, feito em HTML, Sass, Gulp, JavaScript."
          }
          url={"https://banksaintly.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default Project;
