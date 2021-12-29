import { motion, useCycle } from "framer-motion";
import { container, variants, SERVICES } from "../Constants";
import "./AboutMe.css";
import bgSVG from "../media/HillsandMountains-sunset.svg";

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

const AboutMe = (props) => {
  const [wwd, cycleWwd] = useCycle(...SERVICES);
  return (
    <motion.main layoutId="about" className="m-0 p-0 text-center">
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
          <motion.h1
            className=""
            variants={writer.letterTwo}
            animate={{
              ...writer.letterTwo.visible,
              transition: { duration: 0.2, delay: 0.2 },
            }}
            initial="hidden"
          >
            About Piboy
          </motion.h1>
          <motion.p
            className="col p-3 my-auto text-start lead"
            variants={container}
          >
            Founded in 2019, and based out of <span>Campbell River, BC,</span>{" "}
            the Piboy team has been developing application &amp; web solutions
            with a sprinkle of branding and graphic design.
          </motion.p>
          <motion.div
            id="wwd"
            className="col p-3 d-flex align-items-center justify-content-center"
            variants={container}
          >
            <motion.p
              key={wwd}
              variants={writer.sentence}
              className="lead my-auto p-0"
              onAnimationComplete={() => {
                cycleWwd();
              }}
            >
              {wwd &&
                wwd.split("").map((char, index) => {
                  return (
                    <motion.span
                      key={"char" + index}
                      variants={writer.letter}
                      className="fs-3"
                    >
                      {char}
                    </motion.span>
                  );
                })}
            </motion.p>
          </motion.div>
          <motion.section
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="row flex-md-row align-items-center bg-primary g-0 p-0 m-0 glass-rounded card glass shadow"
          >
            <motion.img
              initial={{ opacity: 0, scale:0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              src={bgSVG}
              className="d-block mx-auto p-2 img-fluid img-rounded"
              alt="Scenic sunset valley and hills graphic media."
              loading="lazy"
            />
          </motion.section>
          <motion.div
            className="col p-3 my-auto text-start"
            variants={container}
          >
            <motion.p
              className="text-start lead text-success"
              variants={writer.sentence}
            >
              {"OUR VALUES: ".split("").map((char, index) => {
                return (
                  <motion.strong
                    key={"char" + index}
                    className="fs-3"
                    variants={writer.letterTwo}
                  >
                    {char}
                  </motion.strong>
                );
              })}
              {"Simplicity and passionate experience."
                .split("")
                .map((char, index) => {
                  return (
                    <motion.strong
                      key={"char" + index}
                      variants={writer.letterTwo}
                    >
                      {char}
                    </motion.strong>
                  );
                })}
            </motion.p>
            <motion.p className="text-start lead" variants={container}>
              Through understanding our customers' business and technical needs,
              we can work together to further their endeavors and enhance user
              experience.
            </motion.p>
            <motion.p
              className="text-start lead text-warning"
              variants={writer.sentence}
            >
              {"OUR MISSION: ".split("").map((char, index) => {
                return (
                  <motion.strong
                    key={"char" + index}
                    className="fs-3"
                    variants={writer.letterTwo}
                  >
                    {char}
                  </motion.strong>
                );
              })}
              {"To simplify an ever-growing, complex world using modern technologies for our clients."
                .split("")
                .map((char, index) => {
                  return (
                    <motion.strong
                      key={"char" + index}
                      variants={writer.letterTwo}
                    >
                      {char}
                    </motion.strong>
                  );
                })}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default AboutMe;
