import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { routes, variants } from "../Constants";
import LogoSVG from "../media/logo.svg";
import "./NavBar.css";

const NavBarNav = () => {
  const scrollToTop = scroll.scrollToTop;

  const handleCollapse = () => {
    document.querySelector("#navbarText").classList.remove("show");
    document.querySelector("#navbar").classList.remove("sticky-top");
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark m-0 p-0 px-3 px-md-5"
    >
      <motion.div
        className="container-fluid m-0 p-0"
        variants={variants.containers}
        animate="visible"
        initial="hidden"
      >
        <a className="nav-link" href="/">
          <img
            id="navLogo"
            src={LogoSVG}
            className="navLogo float-left"
            alt="Piboy Technical Solutions Ltd."
          />
        </a>
        <div
          id="navbarText"
          className="collapse navbar-collapse justify-content-end "
        >
          <motion.ul className="navbar-nav mb-2 mb-md-0 me-3">
            {routes.map((route, key) => {
              return (
                <motion.li
                  onClick={handleCollapse}
                  key={`route-${key}`}
                  className="nav-item"
                  variants={variants.containers}
                >
                  <Link
                    className="nav-link"
                    key={`routeLink-${key}`}
                    to={route.route}
                  >
                    <motion.div
                      className="link-success"
                      variants={variants.buttons}
                      onClick={scrollToTop}
                      animate="visible"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {route.name}
                    </motion.div>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBarNav;
