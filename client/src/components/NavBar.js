import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { routes, variants } from "../Constants";
import LogoSVG from "../media/logo.svg";
import "./NavBar.css";
import Spacer from "./Spacer.js";

const NavBar = () => {
  return (
    <>
      <div
        id="NavBar"
        className="row container-md mx-auto my-0 pt-2 mb-n2 mb-sm-n4"
      >
        <div className="col-2 mx-auto p-0">
          <a className="nav-link" href="/">
            <img
              id="navLogo"
              src={LogoSVG}
              className="navLogo float-left"
              alt="Piboy Technical Solutions Ltd."
            />
          </a>
        </div>
        <motion.div
          className="col-10 my-auto h-4 p-0"
          variants={variants.containers}
          animate="shown"
          initial="hidden"
        >
          <ul className="nav justify-content-end">
            {routes.map((route, key) => {
              return (
                <motion.li key={`route-${key}`} className="nav-item" variants={variants.containers}>
                  <Link className="nav-link" key={`routeLink-${key}`} to={route.route}>
                    <motion.div
                      className="link-success"
                      variants={variants.buttons}
                      animate="shown"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      { route.name }
                    </motion.div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
      <Spacer spacerId="0" className="pt-2 pt-sm-4" />
    </>
  );
};

export default NavBar;
