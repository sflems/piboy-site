import { motion } from "framer-motion";
import { PROJECTS, variants } from "../../Constants";
import "./Project.css";
import { useParams } from "react-router";

const writer = {
  sentence: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        when: "beforeChildren",
      },
    },
  },
  letter: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
        repeat: 1,
        repeatType: "reverse",
      },
    },
  },
  letterTwo: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  },
};

export default function Projects(props) {
  let { slug } = useParams();
  let project = PROJECTS.find(element => element.slug === slug)

  return (
    <motion.main layoutId="projects" className="m-0 p-0 text-center">
      <motion.section
        variants={variants.pages}
        initial="hidden"
        animate="visible"
        exit="exit"
        id="projects-index"
        className={
          "container-lg text-white m-auto p-3" +
          (props.className ? props.className : "")
        }
      >
        <motion.h1
          className=""
          variants={writer.letterTwo}
          animate={{
            ...writer.letterTwo.visible,
            transition: { duration: 0.2, delay: 0.2 },
          }}
          initial="hidden"
        >
          {project.name}
        </motion.h1>
        {project.element}
      </motion.section>
    </motion.main>
  );
};
