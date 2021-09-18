import { useEffect, useState } from "react";
import { getSharedData } from "./utils";
import { Element, scrollSpy } from "react-scroll";

import AboutMe from "./components/AboutMe.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import Spacer from "./components/Spacer.js";

function App() {
  const [sharedData, setSharedData] = useState({ isLoaded: false });

  useEffect(() => {
    getSharedData().then((data) => {
      console.log(data);
      setSharedData({ ...data, isLoaded: true });
    });
    scrollSpy.update();
    console.log(scrollSpy)
  }, []);

  return (
    <Element name="home" id="home" className="home m-0">
      <NavBar />
      <Spacer spacerId="0" />
      <Main id="main" {...sharedData} />
      <Spacer spacerId="1" flip/>
      <Spacer spacerId="2" />
      <AboutMe />
      <Spacer spacerId="3" flip/>
      <Footer {...sharedData} />
    </Element>
  );
}

export default App;
