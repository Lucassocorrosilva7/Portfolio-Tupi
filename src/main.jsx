import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/app.scss";
import { ProjectsProvider } from "@/context/ProjectsProvider";
import { RouterProvider } from "react-router-dom";
import router from "@/routers/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectsProvider>
      <RouterProvider router={router} />
    </ProjectsProvider>
  </React.StrictMode>
);
