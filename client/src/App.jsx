import * as React from "react";
import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Layout from "./components/layout/Layout";
import Main from "./components/Main";
import Privacy from "./components/Privacy";
import Project from "./components/projects/Project";
import ProjectsIndex from "./components/projects/ProjectsIndex";

function App() {
  const [modalToggled, setModalToggled] = useState(false);

  useEffect(() => {
    if (modalToggled) {
      document.body.style.overflow = "hidden";
      document.getElementById("navToggle").style.display = "none";
      document.getElementById("contentWrapper").classList.add("blur");
    } else {
      document.body.style.overflow = "unset";
      document.getElementById("navToggle").style.display = "block";
      document.getElementById("contentWrapper").classList.remove("blur");
    }
  }, [modalToggled]);

  let routes = useRoutes([
    {
      path: "/",
      element: (
        <Layout modalToggled={modalToggled} setModalToggled={setModalToggled} />
      ),
      children: [
        {
          index: true,
          element: <Main id="main" setModalToggled={setModalToggled} />,
        },
        {
          path: "/about",
          element: <AboutMe />,
          name: "About",
        },
        {
          path: "/privacy",
          element: (
            <Privacy id="privacy-policy" setModalToggled={setModalToggled} />
          ),
          name: "Privacy Policy",
        },
        {
          path: "/projects",
          element: <ProjectsIndex />,
          name: "Projects",
          children: [
            {
              path: "/projects/:slug",
              element: <Project />,
              name: "Projects"
            },
            {
              path: "/projects/*",
              element: <ProjectsIndex notFound={true}/>,
              name: "Not Found"
            }
          ]
        },
        {
          path: "*",
          element: <Main id="main" setModalToggled={setModalToggled} />,
        },
      ],
    },
  ]);

  return <>{routes}</>;
}

export default App;
