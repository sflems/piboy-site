import { useEffect, useState } from "react";
import { getSharedData } from "./utils";
import { Link, scrollSpy, animateScroll as scroll } from "react-scroll";

import "./App.css";
import Main from "./components/Main.js";
import NavBar from "./components/NavBar.js";
import Spacer from "./components/Spacer.js";
import LogoSVG from "./media/logo.svg";
import { ChevronDoubleUp } from "react-bootstrap-icons";


function App() {
  const [sharedData, setSharedData] = useState({ isLoaded: false });
  const scrollToTop = scroll.scrollToTop

  var d = new Date();

  useEffect(() => {
    getSharedData().then((data) => {
      console.log(data);
      setSharedData({ ...data, isLoaded: true });
    });
  }, []);

  return (
    <div id="home" className="m-0">
      <NavBar />
      <Spacer spacerId="0" />
      <Main id="main" {...sharedData} />
      <Spacer spacerId="1" flip/>
      <Spacer spacerId="2" />
      <Spacer spacerId="3" flip/>
      <footer id="footer" className="row row-cols-1 container mx-auto mb-0 mt-auto text-white-50 p-3">
        <div className="col p-2">
          <img id="footerLogo" src={LogoSVG} className="navLogo" onClick={scrollToTop} style={{cursor: 'pointer'}}  alt="Piboy Technical Solutions Ltd."/>
        </div>
        <p className="col">
          Copyright &copy; {d.getFullYear()} {sharedData.site_name}.<br /> All
          rights reserved.
        </p>
        <div className="col">
          <ChevronDoubleUp className="m-1 p-3 text-dark bg-success rounded-circle" onClick={scrollToTop} style={{cursor: 'pointer'}} width="4em" height="4em" />
        </div>
      </footer>
    </div>
  );
}

export default App;
