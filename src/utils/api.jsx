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
      "Formado em Segurança da Informação, sou apaixonado por tecnologia e estou sempre em busca de novos conhecimentos para oferecer soluções inovadoras e eficazes. Com uma forte dedicação ao desenvolvimento front-end, especialmente no ecossistema JavaScript, também possuo conhecimentos sólidos em back-end, o que me permite criar projetos completos e bem integrados.",
  },
];

export const skills = [
  { id: 1, skill: "Typescript" },
  { id: 2, skill: "ReactJs" },
  { id: 3, skill: "VueJs" },
  { id: 4, skill: "AngularJs" },
  { id: 5, skill: "NestJs" },
  { id: 6, skill: "Java" },
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
  // {
  //   id: 5,
  //   title: "Indyara Stephanie",
  //   description:
  //     "É uma plataforma com foco em agendamento de consultas on-line.",
  //   url: "https://indyara.vercel.app/",
  // },
  // {
  //   id: 6,
  //   title: "LmStore",
  //   description:
  //     "LmStore é uma loja virtual moderna e intuitiva, projetada para oferecer aos nossos clientes uma experiência de compra única e envolvente.",
  //   url: "https://lm-store.vercel.app/",
  // },
  {
    id: 7,
    title: "GuitarraLA",
    description:
      "GuitarraLA é uma loja online de guitarras, simples e moderna, para uma experiência de compra excepcional.",
    url: "https://guitarra-la.vercel.app/",
  },
  {
    id: 8,
    title: "Novo Padrão Esquadrias",
    description: "Site para a empresa de esquadrias de alumínio, focado em captar clientes e apresentar produtos de forma intuitiva.",
    url: "https://www.novopadraoesquadrias.com.br"
  }
];

export const links = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/luquinhasssilva/",
    icon: <FaLinkedin />,
  },
  { id: 2, url: "https://github.com/Lucassocorrosilva7", icon: <FaGithub /> },
  { id: 3, url: "mailto:lucassocorrosilva@gmail.com", icon: <FaEnvelope /> },
]
