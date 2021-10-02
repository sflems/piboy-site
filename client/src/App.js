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
      <AnimateSharedLayout type="crossfade">
        <motion.div
          variants={variants.containers}
          initial={false}
          animate="visible"
          id="contentWrapper"
          className="bg-primary m-0 p-0"
        >
          <NavBar />
          <AnimatePresence
            layout
            initial={variants.pages.hidden}
            exitBeforeEnter
          >
            <Switch location={location} key={location.key}>
              <Route id="aboutMe" path={routes[1].route} component={AboutMe} />
              <Route
                layoutId="main"
                id="main"
                path={routes[0].route}
                component={Main}
              />
            </Switch>
          </AnimatePresence>
        </motion.div>
      </AnimateSharedLayout>
      <Footer />
    </>
  );
}
export default App;
