import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import LogoSVG from "../media/logo.svg";
import Spacer from "./Spacer.js";
import { variants } from "../Constants";

import "./Footer.css";

var d = new Date();

const Footer = (props) => {
  const scrollToTop = scroll.scrollToTop;
  return (
    <motion.div layout className="m-0 p-0">
      <Spacer spacerId="1" className="" flip />
      <footer
        id="footer"
        className="row row-cols-1 container mx-auto mb-0 mt-auto text-white-50 p-3"
      >
        <div className="col p-2">
          <img
            id="footerLogo"
            src={LogoSVG}
            className="navLogo"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
            alt="Piboy Technical Solutions Ltd."
          />
        </div>
        <p className="col">
          <span>
            Copyright &copy; {d.getFullYear()} Piboy Technical Solutions Ltd. All rights reserved.</span>
        </p>
        <div className="col">
          <motion.svg
            variants={variants.buttons}
            initial="visible"
            animate="visible"
            whileHover="hoverTopButton"
            whileTap="tapTopButton"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="4em"
            height="4em"
            className="m-1 p-3 chevron text-dark green rounded-circle"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            ></path>
            <path
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            ></path>
          </motion.svg>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
