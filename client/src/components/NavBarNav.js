import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { AnimateSharedLayout, motion } from "framer-motion";
import { routes, variants } from "../Constants";
import LogoSVG from "../media/logo.svg";

const NavBarNav = ({ scrolled, offcanvas }) => {
  const scrollToTop = scroll.scrollToTop;
  console.log(offcanvas);

  const handleClick = () => {
    let element = document.getElementById("navbarText");
    element.classList.remove("collapse");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark m-0 p-0 px-3 px-md-5">
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
        <AnimateSharedLayout>
          <motion.button
            layoutId="menu"
            onClick={scrolled ? handleClick : () => null}
            className={
              "navbar-toggler border-0 text-success bg-info shadow-lg" +
              (scrolled ? " fixed-toggler" : "")
            }
            type="button"
            data-bs-toggle={scrolled ? "offcanvas" : "collapse"}
            data-bs-target={scrolled ? "#offcanvasTop" : "#navbarText"}
            aria-controls={scrolled ? "offcanvasTop" : "navbarText"}
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis"
              className="svg-inline--fa fa-ellipsis"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="100%"
              width="100%"
            >
              <path
                fill="currentColor"
                d="M64 192C28.61 192 0 220.6 0 256s28.61 64 64 64s64-28.62 64-64S99.39 192 64 192zM256 192C220.6 192 192 220.6 192 256s28.61 64 64 64s64-28.62 64-64S291.4 192 256 192zM448 192c-35.39 0-64 28.62-64 64s28.61 64 64 64s64-28.62 64-64S483.4 192 448 192z"
              />
            </svg>
          </motion.button>
        </AnimateSharedLayout>
        <div
          id="navbarText"
          className={"collapse navbar-collapse justify-content-end "}
        >
          <motion.ul layout className="navbar-nav mb-2 mb-lg-0">
            {routes.map((route, key) => {
              return (
                <motion.li
                  onClick={scrollToTop}
                  key={`route-${key}`}
                  className="nav-item"
                  variants={variants.containers}
                  data-bs-target={!scrolled ? "#navbarText" : ""}
                  aria-controls={!scrolled ? "navbarText" : ""}
                  data-bs-dismiss={scrolled ? "offcanvas" : ""}
                  data-bs-toggle={!scrolled ? "collapse" : ""}
                >
                  <Link
                    className="nav-link"
                    key={`routeLink-${key}`}
                    to={route.route}
                  >
                    <motion.div
                      className="link-success"
                      variants={variants.buttons}
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
            {scrolled && (
              <motion.li
                layout
                onClick={handleClick}
                className="nav-item my-auto"
                variants={variants.containers}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
                aria-label="Toggle navigation"
              >
                <motion.button
                  variants={variants.buttons}
                  initial={{opacity:0}}
                  exit={{opacity:0}}
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  type="button"
                  class="btn-close bg-success ms-2 mb-1"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></motion.button>
              </motion.li>
            )}
          </motion.ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBarNav;
