import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { baseGhUrl, PROJECTS, variants } from "../../Constants";
import "./Project.css";
import { useParams } from "react-router";

export default function Projects(props) {
  const [projectData, setProjectData] = useState(null);
  let { slug } = useParams();
  let project = PROJECTS.find((element) => slug === element.slug);

  useEffect(() => {
    if (project != null && project.fetch === true) {
      axios
        .get(baseGhUrl + "repos/sflems/" + slug)
        .then((response) => {
          setProjectData(response.data);
        })
        .catch(function (error) {
          setProjectData(null);
          console.log("Fetch found no more info.");
        });
    }
  }, [project, slug]);

  return (
    <motion.main className="m-0 p-0 text-center">
      <motion.section
        layout
        variants={variants.pages}
        initial="hidden"
        animate="visible"
        exit="exit"
        id="projects-index"
        className={
          "container-lg text-white text-center m-auto p-3" +
          (props.className ? props.className : "")
        }
      >
        <motion.h1
          className=""
          variants={variants.writerTwo.letterTwo}
          animate={{
            ...variants.writerTwo.letterTwo.visible,
            transition: { duration: 0.2, delay: 0.2 },
          }}
          initial="hidden"
        >
          {project && project.name}
          {!project && "Project not found."}
        </motion.h1>
        <motion.p className="mb-0">
          {projectData ? projectData.description : ""}
        </motion.p>
        {project && project.element}
      </motion.section>
      {project && project.ghUrl && (
        <a
          href={project.ghUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <motion.div
            className="link-success mb-2"
            variants={variants.buttons}
            animate="visible"
            whileHover="hoverTopButton"
            whileTap="tap"
            id="project-link"
          >
            View Project on GitHub
          </motion.div>
        </a>
      )}
    </motion.main>
  );
}
