import React from "react";
import { motion } from "framer-motion";
import "./Main.css";
import FullLogo from "../media/full-logo.png";
import Card from "./Card";
import { variants } from "../Constants.jsx";

import devSVG from "../media/web-development.svg";
import spaceCatSVG from "../media/space-discovery.svg";
import LaptopIcon from "../media/icons/laptop";
import MobileIcon from "../media/icons/mobile";
import SocialIcon from "../media/icons/social";
import SpiderIcon from "../media/icons/spider";
import WordPressIcon from "../media/icons/wordpress";

const container = {
  hidden: {
    opacity: 0,
    height: "100%",
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
};

const Main = (props) => {
  var greeting = `Hello, my name's Scott. I'm the lead developer and graphic designer with Piboy Technical Solutions.`;

  return (
    <motion.main
      className="m-0 p-0 mb-4"
      variants={variants.pages}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Hero Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        id={props.id}
        className="row m-0 p-0"
      >
        <motion.div
          className="px-2 text-center text-white"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <img
            className="img-fluid motionLogo px-5"
            src={FullLogo}
            alt="Piboy Technical Solutions Ltd. Full Logo"
          ></img>
          <motion.div variants={container} className="col-lg mx-auto">
            <motion.p
              className="col lead px-lg-5 mb-4 mx-3"
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
          </motion.div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{
              y: 0,
              transition: {
                duration: 1.5,
                ease: "easeInOut",
                type: "spring",
                delay: 0.2,
              },
            }}
            className="pt-4 overflow-hidden hero-img"
          >
            <div className="container mb-lg-0 mb-sm-n5 mb-md-n5">
              <motion.img
                initial={{ y: 1000 }}
                animate={{
                  y: 0,
                  transition: {
                    duration: 1.5,
                    ease: "easeInOut",
                    type: "spring",
                    delay: 0.2,
                  },
                }}
                src={devSVG}
                className="img-fluid bg-info rounded-3 shadow mb-4"
                style={{ "--bs-bg-opacity": 0.25 }}
                alt="Web Development Graphic"
                loading="lazy"
                width="700"
                height="400"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Card Section */}

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="row flex-md-row align-items-center bg-primary g-5 p-2 p-md-4 m-0 border-top section-border border-info card glass shadow"
      >
        <motion.div variants={container} className="col-auto m-0 p-0 px-md-3">
          <Card
            title="Website Development &amp; Hosting"
            icon={LaptopIcon}
            text="The future revolves around the web and connectivity. Together we'll brainstorm a game plan, the rest is coded by our
          team specifically to fit your requirements. Powered by 100% renewable energy, we offer one of the most environmentally conscious hosting packages available in Canada."
          />
          <Card
            title="Wordpress Websites"
            icon={WordPressIcon}
            text="As one of the most-used platforms for website creation, WordPress is our bread and butter. Website design, hosting, and management
          services. Built to suit your business needs."
          />
          <Card
            title="Mobile &amp; Web Applications"
            icon={MobileIcon}
            text="APIs? Mobile Apps? Internal Applications and Software? We do that. Get your business on the go.
          Let us examine your needs and consult on what we can achieve
          together."
          />
          <Card
            title="Marketing, SEO &amp; Social Media"
            icon={SocialIcon}
            text="You're busy running your business... we get it. We'll perform an in depth search engine optimization analysis and take the hassle out of managing your social media platforms. Profile setup, post and story templates, advertizing; we can help."
          />
          <Card
            title="Penetration Testing &amp; Web Security"
            icon={SpiderIcon}
            text="Threat actors have been growing an ever increasing presence, targeting small business and enterprise alike. Our security and penetration testing packages can expose critical vulnerabilities which can help discover, or mitigate, any potential damage."
          />
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}

      <motion.section
        variants={container}
        className="row flex-md-row-reverse align-items-center bg-primary g-5 py-3 mx-0 my-0"
      >
        <motion.div
          variants={container}
          className="col-10 col-sm-8 col-md-6 px-0 pb-4"
        >
          <motion.img
            initial={{ opacity: 1 }}
            animate={{
              scale: 1.1,
              x: [0, 15, 0, 5],
              y: [-10, 0, 5, 0],
              transition: {
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            src={spaceCatSVG}
            className="d-block mx-lg-auto img-fluid space-cat"
            alt="Space woman and space cat floating in zero gravity."
            loading="lazy"
            width="700"
            height="500"
          />
        </motion.div>
        <motion.div variants={container} className="col-md-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Simple, passionate experience.
          </h1>
          <p className="lead px-md-5">
            We love what we do. We understand that your investment into your
            brand, digital presence and website is{" "}
            <strong className="fw-bold text-warning">CRITICAL.</strong> Our
            experienced development and techno-savvy team has got your back.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-center">
            <a href="mailto:scott@piboy.ca?subject=Inquiry for the Piboy Team">
              <motion.button
                variants={variants.buttons}
                initial="visible"
                animate="visible"
                whileHover="hoverTopButton"
                whileTap="tap"
                type="button"
                className="btn btn-info text-white btn-lg px-4 me-md-2 rounded-0 shadow"
              >
                Contact Us
              </motion.button>
            </a>
          </div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Main;
