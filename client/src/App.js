import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { routes, variants } from "./Constants.jsx";

import AboutMe from "./components/AboutMe.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimateSharedLayout type="crossfade">
        <motion.div layout initial={{opacity: 1}} id="contentWrapper" className="bg-primary m-0 p-0">
          <AnimatePresence initial={variants.pages.hidden} exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route id="aboutMe" path={routes[1].route} component={AboutMe} />
              <Route id="main" path={routes[0].route} component={Main} />
            </Switch>
          </AnimatePresence>
        </motion.div>
        <Footer />
      </AnimateSharedLayout>
    </>
  );
}

export default App;
