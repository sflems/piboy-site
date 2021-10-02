import { useEffect, useState } from "react";
import "./NavBar.css";
import Spacer from "./Spacer";
import NavBarNav from "./NavBarNav";
import { AnimateSharedLayout, motion } from "framer-motion";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 125);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <AnimateSharedLayout>
      {scrolled && (
        <motion.div
          layout
          className="offcanvas offcanvas-top m-0 p-0"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <NavBarNav scrolled={scrolled} />
          <Spacer spacerId="0" className="bg-transparent mt-n2" flip />
        </motion.div>
      )}
      <NavBarNav layout scrolled={scrolled} />
      <Spacer spacerId="0" className="bg-transparent mt-n2" flip />
    </AnimateSharedLayout>
  );
};

export default NavBar;
