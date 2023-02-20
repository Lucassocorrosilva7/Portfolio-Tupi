import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "@/pages/Project";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Navbar from "@/components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projetos" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
