import { Outlet } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { variants } from "../../Constants";

import Footer from "./Footer.js";
import NavBar from "./NavBar.js";
import ContactModal from "./ContactModal.js";

export default function Layout({ modalToggled, setModalToggled }) {
  return (
    <AnimateSharedLayout type="crossfade">
      {modalToggled && <ContactModal setModalToggled={setModalToggled} />}

      <AnimatePresence layout initial={variants.pages.hidden} exitBeforeEnter>
        <motion.div
          variants={variants.containers}
          layout
          initial={false}
          animate="visible"
          id="contentWrapper"
          className="bg-primary m-0 p-0"
        >
          <NavBar setModalToggled={setModalToggled} />

          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </AnimateSharedLayout>
  );
}
