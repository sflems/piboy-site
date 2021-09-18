import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Main.css";
import FullLogo from "../media/full-logo.png";
import variants from "../motionVariants.jsx";

const Main = (props) => {
  const [logoVisible, setLogoVisible] = useState("false");
  var greeting = `My name is Scott. I'm a freelance web developer, and founder of...`;

  return (
    <main id={props.id} className="row bg-primary m-0">
      <div className="col mx-0 my-auto pt-2 pt-md-4">
        <div id="greeting" className="row m-2 pt-md-4">
          <motion.h4
            variants={variants}
            animate="shown"
            initial="hidden"
            transition={{ duration: 1 }}
          >
            Hello, and welcome to Piboy.ca!
          </motion.h4>
        </div>
        <div id="message" className="row mx-5">
          <div className="col m-0 p-0">
            <div className="row px-4">
              <div className="col lead">
              <Typewriter
          options={{ skipAddStyles: false, }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(40)
              .typeString(greeting)
              .callFunction(() => {
                console.log(setLogoVisible(!logoVisible));
                ;
              })
              .start();
          }}
        />
        </div>
            </div>
          </div>
        </div>
        <div id="logoHolder" className="row m-0">
          <div className="col mx-auto px-5">
            <motion.img
              variants={variants}
              animate="shown"
              initial="hidden"
              transition={{ delay: 3, duration: 1.5 }}
              src={FullLogo}
              className="img-fluid px-5"
              alt="Piboy Technical Solutions Ltd. Full Logo"
            ></motion.img>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
