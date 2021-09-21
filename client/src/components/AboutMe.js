import { motion } from "framer-motion";
import { variants } from "../Constants";
import "./AboutMe.css";

const AboutMe = (props) => {
  return (
    <section
      id={props.id}
      className={
        "bg-primary text-white py-md-5 m-0 p-2 p-md-4" +
        (props.className ? props.className : "")
      }
    >
      <motion.div
        variants={variants.pages}
        initial="hidden"
        animate="shown"
        exit="exit"
        className="row row-cols-1 row-cols-md-3 m-0 p-0"
      >
        <div className="col p-3">
          <div className="card bg-dark">
            <img
              src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col p-3 ">
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
        </div>
        <div className="col p-3 ">
          <div className="card bg-dark">
            <img
              src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
