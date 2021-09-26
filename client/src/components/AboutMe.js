import { motion, useCycle } from "framer-motion";
import { variants } from "../Constants";
import "./AboutMe.css";

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
        duration: 2,
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
  const [wwd, cycleWwd] = useCycle(
    "API & Web Design",
    "Social Media & Marketing",
    "Custom Integrated Solutions",
    "Web Hosting",
    "Wordpress Management",
    "UI/UX"
  );
  return (
    <motion.section
      variants={variants.pages}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={props.id}
      className={
        "container-lg text-white py-md-5 m-auto p-2 p-md-4" +
        (props.className ? props.className : "")
      }
    >
      <motion.div
        layout
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
          layout
          className="col p-3 my-auto text-start lead"
          variants={container}
        >
          Founded in 2019, and based out of Campbell River, BC, the Piboy team
          has been developing application &amp; web solutions with a sprinkle of
          branding and graphic media design.
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
        <motion.div
          layout
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
            we can provide a solution to further their endeavors and enhance user experience.
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
  );
};

export default AboutMe;
