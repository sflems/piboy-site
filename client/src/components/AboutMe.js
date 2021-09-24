import { motion } from "framer-motion";
import { variants } from "../Constants";
import "./AboutMe.css";

const AboutMe = (props) => {
  return (
    <motion.section
      variants={variants.pages}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={props.id}
      className={
        "row bg-primary text-white py-md-5 m-0 p-2 p-md-4" +
        (props.className ? props.className : "")
      }
    >
      <motion.div
        variants={variants.containers}
        initial="hidden"
        animate="visible"
        className="row row-cols-1 row-cols-md-3 m-0 p-0"
      >
        <motion.div className="col p-3" variants={variants.containers}>
          <div className="card bg-dark">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className="col p-3" variants={variants.containers}>
          <div className="card bg-dark">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className="col p-3" variants={variants.containers}>
          <div className="card bg-dark">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
