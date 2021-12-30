import { motion } from "framer-motion";
import { PROJECTS, variants } from "../../Constants";
import { Outlet, Link } from "react-router-dom";
import "./Project.css";

export default function ProjectsIndex(props) {
  return (
    <motion.main className="m-0 p-0 pb-2 text-center">
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
        <motion.h1
          className=""
          variants={variants.writerTwo.letterTwo}
          animate={{
            ...variants.writerTwo.letterTwo.visible,
            transition: { duration: 0.2, delay: 0.2 },
          }}
          initial="hidden"
        >
          Piboy's Projects
        </motion.h1>
        <motion.div
          variants={variants.containerMain}
          initial="hidden"
          animate="visible"
          className="row row-cols-1 m-0 p-3 text-center"
        >
          <motion.ul variants={variants.containers} className="">
            {PROJECTS.map(({ id, name, slug, category, ghUrl, element }) => {
              return (
                <motion.li
                  className="nav-item"
                  variants={variants.containers}
                  key={id}
                >
                  <Link className="nav-link" to={slug}>
                    <motion.div
                      className="link-success"
                      variants={variants.buttons}
                      animate="visible"
                      whileHover="hoverTopButton"
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
