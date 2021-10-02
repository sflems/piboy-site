import { useEffect, useState } from "react";
import "./NavBar.css";
import Spacer from "./Spacer";
import NavBarNav from "./NavBarNav";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 140);
  };

  const handleClick = () => {
    let element = document.getElementById("navbarText");
    element.classList.remove("collapse");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {scrolled && (
          <motion.div
            className="offcanvas offcanvas-top m-0 p-0"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <NavBarNav offcanvas={true} scrolled={scrolled} />
            <Spacer spacerId="0" className="bg-transparent mt-n2" flip />
          </motion.div>
        )}
      </AnimatePresence>
      <NavBarNav scrolled={scrolled} />
      <Spacer spacerId="0" className="bg-transparent mt-n2" flip />

      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClick}
            className={
              "navbar-toggler border-0 text-success bg-info shadow-lg d-none d-md-block" +
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
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default NavBar;
