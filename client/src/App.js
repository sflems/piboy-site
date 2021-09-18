import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import AboutMe from "./components/AboutMe.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <div name="home" id="home" className="home m-0">
      <NavBar />
      <Switch>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
