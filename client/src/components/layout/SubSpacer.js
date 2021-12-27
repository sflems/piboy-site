import { motion } from "framer-motion";
import "./Spacer.css";

const svgVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    when: "beforeChildren",
  },
};

const subVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      when: "beforeChildren",
      ease: "easeInOut",
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const SubSpacer = (props) => {
  return (
    <motion.div
      variants={subVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id={"subSpacer" + (props.spacerId ? props.spacerId : "")}
      className={
        "spacer row m-0 p-0 " +
        (props.className ? props.className : "") +
        (props.flip ? " flip" : "")
      }
    >
      <motion.svg
        variants={svgVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="waves p-0"
        viewBox="0 0 900 200"
        width="900px"
        height="6em"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <motion.path
          xmlns="http://www.w3.org/2000/svg"

          animate={{
            d: 
              "M0 139L50 128.3C100 117.7 200 96.3 300 90.2C400 84 500 93 600 90.8C700 88.7 800 75.3 850 68.7L900 62L900 43L850 51.5C800 60 700 77 600 71C500 65 400 36 300 32C200 28 100 49 50 59.5L0 70Z",
              //"M0 104L50 109.3C100 114.7 200 125.3 300 124.5C400 123.7 500 111.3 600 108.8C700 106.3 800 113.7 850 117.3L900 121L900 58L850 60.2C800 62.3 700 66.7 600 73.7C500 80.7 400 90.3 300 92.2C200 94 100 88 50 85L0 82Z",
              //"M0 82L50 92.3C100 102.7 200 123.3 300 124.3C400 125.3 500 106.7 600 107.8C700 109 800 130 850 140.5L900 151L900 53L850 45.8C800 38.7 700 24.3 600 28.3C500 32.3 400 54.7 300 63.3C200 72 100 67 50 64.5L0 62Z",
            
            transition: {
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          fill="var(--bs-info)"
        />
      </motion.svg>
    </motion.div>
  );
};

export default SubSpacer;
