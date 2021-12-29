import { motion } from "framer-motion";
import { container, PROJECTS, variants } from "../../Constants";
import { Outlet, Link } from "react-router-dom";
import "./Project.css";

export default function ProjectsIndex(props) {
  return (
    <motion.main layoutId="projectIndex" className="m-0 p-0 text-center">
      <motion.section
        variants={variants.pages}
        initial="hidden"
        animate="visible"
        exit="exit"
        id={props.id}
        className={
          "container-lg text-white m-auto p-3" +
          (props.className ? props.className : "")
        }
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="row row-cols-1 m-0 p-3 text-start"
        >
          <motion.ul layout variants={variants.containers} className="">
            {PROJECTS.map(({ id, name, slug, source, ghUrl, element }) => {
              return (
                <motion.li
                  className="nav-item"
                  layout
                  variants={variants.containers}
                  key={id}
                >
                  <Link className="nav-link" to={slug}>
                    <motion.div
                      className="link-success"
                      variants={variants.buttons}
                      animate="visible"
                      whileHover="hoverProjButton"
                      whileTap="tap"
                    >
                      {name}
                    </motion.div>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
        <Outlet />
      </motion.section>
    </motion.main>
  );
}
