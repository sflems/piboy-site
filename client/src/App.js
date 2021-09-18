import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Route, Switch } from "react-router-dom";

import AboutMe from "./components/AboutMe.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import Spacer from "./components/Spacer.js";

function App() {

  return (
    <Element name="home" id="home" className="home m-0">
      <NavBar />
      <Spacer spacerId="0" />
      <Switch>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Spacer spacerId="1" flip/>
      <Footer />
    </Element>
  );
}

export default App;
