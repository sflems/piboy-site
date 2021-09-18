import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import AboutMe from "./components/AboutMe.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/">
          <Main id="main"/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
