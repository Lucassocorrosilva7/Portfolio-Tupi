import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Project from "@/pages/Project";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Error from "@/pages/Error";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
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
    ],
  },
]);

export default router;
