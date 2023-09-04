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
      "Formado em Segurança da Informação, sou apaixonado por tecnologia e sempre busco ampliar meus conhecimentos e crescer na minha área para oferecer soluções inovadoras e eficientes em meus projetos. Dedico a maior parte do meu tempo ao desenvolvimento de aplicativos front-end, especialmente no ecossistema JavaScript, mas também tenho conhecimentos sólidos em back-end.",
  },
];

export const skills = [
  { id: 1, skill: "Typescript" },
  { id: 2, skill: "ReactJs" },
  { id: 3, skill: "VueJs" },
  { id: 4, skill: "NestJs" },
  { id: 5, skill: "Laravel" },
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
  {
    id: 5,
    title: "Indyara Stephanie",
    description:
      "É uma plataforma com foco em agendamento de consultas on-line.",
    url: "https://indyara.vercel.app/",
  },
  {
    id: 6,
    title: "LmStore",
    description:
      "LmStore é uma loja virtual moderna e intuitiva, projetada para oferecer aos nossos clientes uma experiência de compra única e envolvente.",
    url: "https://lm-store.vercel.app/",
  },
  {
    id: 7,
    title: "GuitarraLA",
    description:
      "GuitarraLA é uma loja Online de Guitarras, Simples e Moderna, para uma Experiência de Compra Excepcional.",
    url: "https://guitarra-la.vercel.app/",
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
