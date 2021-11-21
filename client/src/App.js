import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { routes, variants } from "./Constants.jsx";

import AboutMe from "./components/AboutMe.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import ContactModal from "./components/ContactModal.js";
import Privacy from "./components/Privacy.js";

function App() {
  const location = useLocation();
  const [modalToggled, setModalToggled] = useState(false);

  useEffect(() => {
    if (modalToggled) {
      document.body.style.overflow = 'hidden';
      document.getElementById("navToggle").style.display = "none"
      document.getElementById("contentWrapper").classList.add("blur")
    } else {
      document.body.style.overflow = 'unset';
      document.getElementById("navToggle").style.display = "block"
      document.getElementById("contentWrapper").classList.remove("blur")
    }
  }, [modalToggled]);

  
  return (
    <>
      <AnimateSharedLayout type="crossfade">
        {modalToggled && (
          <ContactModal setModalToggled={setModalToggled}/>
        )}
        <motion.div
          variants={variants.containers}
          initial={false}
          animate="visible"
          id="contentWrapper"
          className="bg-primary m-0 p-0"
        >
          <NavBar setModalToggled={setModalToggled}/>
          <AnimatePresence
            layout
            initial={variants.pages.hidden}
            exitBeforeEnter
          >
            <Switch location={location} key={location.key}>
              <Route id="aboutMe" path={routes[1].route} component={AboutMe} />
              <Route exact path={routes[0].route} >
                <Main id="main" setModalToggled={setModalToggled} />
              </Route>
              <Route path="/privacy">
                <Privacy id="privacy-policy" setModalToggled={setModalToggled}/>
              </Route>
            </Switch>
          </AnimatePresence>
        </motion.div>
        <Footer />
      </AnimateSharedLayout>
    </>
  );
}
export default App;
