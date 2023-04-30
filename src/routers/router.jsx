import { createBrowserRouter } from "react-router-dom";
import Project from "@/pages/Project";
import About from "@/pages/About";
import Blog from "@/pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/projetos",
    element: <Project />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

export default router;
