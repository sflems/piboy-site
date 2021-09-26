import React from "react";
import { motion } from "framer-motion";
import "./Main.css";
import FullLogo from "../media/full-logo.png";
import { variants } from "../Constants.jsx";

const Main = (props) => {
  var greeting = `Hello, my name's Scott. I'm the lead developer and graphic designer with Piboy Technical Solutions.`;

  return (
    <motion.section
      variants={variants.pages}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={props.id}
      className={
        "row m-0 p-0" + (props.className ? props.className : "")
      }
    >
      <motion.div
        variants={variants.containers}
        initial="hidden"
        animate="visible"
        className="col mx-0 my-auto pt-1 "
      >
        <motion.div
          variants={variants.containers}
          id="greeting"
          className="row m-1 pt-md-4"
        >
          <h4>Welcome to Piboy.ca!</h4>
        </motion.div>
        <motion.div
          variants={variants.containers}
          id="logoHolder"
          className="row m-0 mt-sm-n3"
        >
          <div className="col mx-auto">
            <img
              variants={variants.containers}
              className="img-fluid motionLogo px-5"
              src={FullLogo}
              alt="Piboy Technical Solutions Ltd. Full Logo"
            ></img>
          </div>
        </motion.div>
        <motion.div
          variants={variants.containers}
          id="message"
          className="row p-2 px-md-5"
        >
          <div className="col m-0 p-0 px-md-5">
            <div className="row m-0 px-lg-5">
              <motion.p
                className="col lead px-lg-5"
                variants={variants.writer.sentence}
                initial="hidden"
                animate="visible"
              >
                {greeting.split("").map((char, index) => {
                  return (
                    <motion.span
                      key={char + "-" + index}
                      variants={variants.writer.letter}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Main;
