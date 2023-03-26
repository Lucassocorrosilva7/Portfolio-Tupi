import { FiMapPin, FiBriefcase } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

export const infos = [
  {
    id: 1,
    text: "Frontend Developer & UI Designer",
    icon: <FiBriefcase />,
  },
  {
    id: 2,
    text: "São Paulo, Brasil",
    icon: <FiMapPin />,
  },
];

export const texts = [
  {
    id: 1,
    about:
      "Olá, meu nome é Lucas Silva e sou desenvolvedor front-end e UI designer. Gostaria de me apresentar e compartilhar alguns fatos-chave sobre mim. Sou apaixonado por tecnologia e me dedico principalmente ao desenvolvimento front-end, especialmente no ecossistema JavaScript. Estou sempre buscando aprender e crescer na minha área para oferecer soluções criativas e eficientes para meus projetos.",
  },
];

export const skills = [
  { id: 1, skill: `Typescript` },
  { id: 2, skill: `React` },
  { id: 3, skill: `Laravel` },
];

export const projects = [
  {
    id: 1,
    title: "BankSaintly",
    description:
      "Aplicação web desenvolvida para representar um banco digital moderno, feito em HTML, Css e JavaScript.",
    url: "https://banksaintly.netlify.app/",
    code: "https://github.com/Lucassocorrosilva7/BankSaintly",
    buttonText: "Código fonte",
  },
  {
    id: 2,
    title: "LmCars",
    description:
      "Aplicação web desenvolvida para representar uma concessionária fictícia, feito React, Javascript, Sass, Axios, Vercel.",
    url: `https://lmcars.vercel.app/`,
    buttonText: "Código Privado",
  },
  {
    id: 3,
    title: "FoodSaintly",
    description:
      "Aplicação web desenvolvida para representar um delivery moderno, feito em HTML, Sass, Gulp, JavaScript.",
    url: "https://foodsaintly.netlify.app/",
    code: "https://github.com/Lucassocorrosilva7/Food-Saintly",
    buttonText: "Código fonte",
  },
  {
    id: 4,
    title: "ImoInnovate",
    description:
      "Projeto ImoInnovate é uma plataforma imobiliária que foi desenvolvida com o objetivo de oferecer aos usuários uma experiência visual atraente e intuitiva.",
    url: "https://imoinnovate.netlify.app/",
    code: "https://github.com/Lucassocorrosilva7/ImoInnovate",
    buttonText: "Código fonte",
  },
];

export const links = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/luquinhasssilva/",
    icon: <FaLinkedin />,
  },
  { id: 2, url: "https://github.com/Lucassocorrosilva7", icon: <FaGithub /> },
  { id: 3, url: "mailto:lucassocorrosilva@gmail.com", icon: <FaEnvelope /> },
  {
    id: 4,
    url: "https://www.frontendmentor.io/profile/Lucassocorrosilva7",
    icon: <SiFrontendmentor />,
  },
  { id: 5, url: "https://www.youtube.com/@tupicode", icon: <FaYoutube /> },
];
