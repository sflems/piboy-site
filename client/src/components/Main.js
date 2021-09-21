import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Main.css";
import FullLogo from "../media/full-logo.png";
import { variants } from "../Constants.jsx";

const Main = (props) => {
  const [logoVisible, setLogoVisible] = useState(false);
  var greeting = `My name is Scott. I'm a freelance developer and graphic designer based out of Campbell River, BC, Canada.`;

  return (
    <section
      id={props.id}
      className={
        "row bg-primary m-0 p-3" +
        (props.className ? props.className : "")
      }
    >
      <motion.div
        variants={variants.pages}
        initial="hidden"
        animate="shown"
        exit="exit"
        className="row m-0 p-0"
      >
        <div
          className="col mx-0 my-auto pt-1 "
        >
          <motion.div id="greeting" className="row m-1 pt-md-4" 
          variants={variants.pages}>
            <h4>Hello, and welcome to Piboy.ca!</h4>
          </motion.div>
          <motion.div id="logoHolder" className="row m-0 mt-sm-n3" variants={variants.pages}>
            <div
              className="col mx-auto"
            >
              <img
                className="img-fluid motionLogo px-5"
                src={FullLogo}
                alt="Piboy Technical Solutions Ltd. Full Logo"
              ></img>
            </div>
          </motion.div>
          <motion.div id="message" className="row p-2 px-md-5" variants={variants.pages}>
            <div className="col m-0 p-0 px-md-5">
              <div className="row m-0 px-lg-5">
                <div className="col lead px-lg-5">
                  <Typewriter
                    options={{ skipAddStyles: false }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(1000)
                        .changeDelay(40)
                        .typeString(greeting)
                        .callFunction(() => {
                          console.log(setLogoVisible(!logoVisible));
                        })
                        .start();
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Main;
