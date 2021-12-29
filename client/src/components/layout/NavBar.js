import { useEffect, useState } from "react";
import "./NavBar.css";
import Spacer from "./Spacer";
import NavBarNav from "./NavBarNav";
import { motion } from "framer-motion";
import { variants } from "../../Constants";

const NavBar = ({setModalToggled}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100);
  };

  const handleClick = () => {
    setIsSticky(!isSticky);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      layout
      variants={variants.containers}
      exit={{
        opacity: 0,
      }}
      id="navbar"
      className={"m-0 p-0 text-center " + (isSticky && "sticky-top")}
    >
      <NavBarNav
        isSticky={isSticky}
        setIsSticky={setIsSticky}
        scrolled={scrolled}
        setModalToggled={setModalToggled}
      />
      <Spacer spacerId="0" className=" mt-n1 bg-transparent flip" />
      <motion.button
        id="navToggle"
        initial={{ x: 0, opacity: 1 }}
        animate={
          scrolled
            ? {
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 5,
                  ease: "easeIn",
                  type: "spring",
                },
              }
            : ""
        }
        exit={{ x: 0, opacity: 1 }}
        whileHover="hover"
        whileTap="tap"
        onClick={handleClick}
        className={
          "navbar-toggler toggler border-0 text-success bg-info shadow fixed-toggler " +
          (!scrolled && " d-md-none")
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
    </motion.div>
  );
};

export default NavBar;
