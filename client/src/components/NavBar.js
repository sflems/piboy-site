import { useEffect, useState } from "react";
import "./NavBar.css";
import Spacer from "./Spacer";
import NavBarNav from "./NavBarNav";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100);
  };

  const handleClick = () => {
    document.getElementById("navbar").classList.toggle("sticky-top");
    document.getElementById("navbarText").classList.toggle("collapse");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div layout id="navbar" className="m-0 p-0">
        <NavBarNav />
        <Spacer spacerId="0" className="bg-transparent mt-n2" flip />
        <AnimatePresence exitBeforeEnter>
          <motion.button
            initial={{ opacity: 0 }}
            animate={scrolled ? {
              opacity: 1,
              scale: 1,
              transition: {
                duration:2,
                ease: "easeIn",
                type: "spring",
              }} : ""}
            exit={{ opacity: 0 }}
            whileHover="hover"
            whileTap="tap"
            onClick={handleClick}
            className={
              "navbar-toggler toggler border-0 text-success bg-info shadow fixed-toggler d-md-none" +
              (!scrolled && " d-lg-none")
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
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
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default NavBar;
