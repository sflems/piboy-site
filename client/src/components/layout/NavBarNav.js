import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { variants } from "../../Constants";
import LogoSVG from "../../media/logo.svg";
import "./NavBar.css";

const NavBarNav = ({ isSticky, setIsSticky, scrolled, setModalToggled }) => {
  const scrollToTop = scroll.scrollToTop;

  const handleCollapse = () => {
    document.querySelector("#navbarText").classList.remove("show");
    setIsSticky(false);
    scrollToTop();
  };

  return (
    <motion.nav className="navbar navbar-expand-md navbar-dark bg-dark m-0 p-0 px-3 px-md-5">
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
        <motion.div
          id="navbarText"
          className={
            "collapse navbar-collapse justify-content-end " +
            (isSticky ? " show " : "")
          }
        >
          <AnimatePresence layout exitBeforeEnter>
            <motion.ul
              layout
              variants={variants.containers}
              className="navbar-nav mb-2 mb-md-0 me-3"
            >
              <motion.li
                className="nav-item"
                layout
                variants={variants.containers}
                onClick={handleCollapse}
              >
                <Link
                  className="nav-link"
                  to="/"
                >
                  <motion.div
                    className="link-success"
                    variants={variants.buttons}
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Home
                  </motion.div>
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                layout
                variants={variants.containers}
                onClick={handleCollapse}
              >
                <Link
                  className="nav-link"
                  to="/about"
                >
                  <motion.div
                    className="link-success"
                    variants={variants.buttons}
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    About
                  </motion.div>
                </Link>
              </motion.li>
              <motion.li
                className="nav-item"
                layout
                variants={variants.containers}
                onClick={handleCollapse}
              >
                <Link
                  className="nav-link"
                  to="/projects"
                >
                  <motion.div
                    className="link-success"
                    variants={variants.buttons}
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Projects
                  </motion.div>
                </Link>
              </motion.li>
              <motion.li
                className="nav-item nav-contact"
                layout
                variants={variants.containers}
                onClick={handleCollapse}
              >
                <div className="nav-link">
                  <motion.div
                    className="link-success"
                    onClick={() => setModalToggled(true)}
                    variants={variants.buttons}
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Contact
                  </motion.div>
                </div>
              </motion.li>
            </motion.ul>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBarNav;
