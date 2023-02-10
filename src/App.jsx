import { ProjectsProvider } from "./context/ProjectsProvider";
import Router from "./routers/router";

const App = () => {
  return (
    <ProjectsProvider>
      <Router />
    </ProjectsProvider>
  );
};

export default App;
