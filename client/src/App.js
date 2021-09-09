import { useEffect, useState } from "react";
import { getSharedData } from "./utils";

import "./App.css";
import NavBar from "./components/NavBar.js";
import Logo from "./components/Logo.js";
import Layer1SVG from "./media/layer1.svg";
import Layer2SVG from "./media/layer2.svg";

function App() {
  const [sharedData, setSharedData] = useState({ isLoaded: false });
  var d = new Date();

  useEffect(() => {
    getSharedData().then((data) => {
      console.log(data);
      setSharedData({ ...data, isLoaded: true });
    });
  }, []);

  return (
    <div id="page-container" className="m-0">
      <NavBar id="NavBar"/>
      <Spacer1 id="spacer1" />
      <main id="main" className="row blue m-0 pb-2">
        <div className="col">
            <Logo />
            <Message {...sharedData} />
            <Greeting {...sharedData} />
        </div> 
      </main>
      <Spacer2 id="spacer2" />
      <footer id="footer" className="row m-0 mt-auto text-white-50 p-3">
        <p className="col">
          Copyright &copy; {d.getFullYear()} {sharedData.site_name}.<br /> All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

const Message = ({ isLoaded, message }) => {
  if (!isLoaded) return null;
  return (
    <div id="message" className="row m-0">
      <p className="col h4">{message}</p>
    </div>
  );
};

const Greeting = ({ first_name, site_name }) => {
  if (!first_name || !site_name) return <div>Loading ....</div>;
  return (
    <div id="greeting" className="row m-0">
      <p className="col lead">
        My name is {first_name}. I'm a freelance web developer, and founder of{" "}
        <br />
        <a href="/" className="link-info">
          {site_name}
        </a>
      </p>
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
const Spacer1 = () => {
  return (
    <div
      className="row spacer layer1 mx-0 mt-n5 mt-lg-n2 mb-n2"
      style={{ backgroundImage: `url(${Layer1SVG})` }}
    ></div>
  );
};

const Spacer2 = () => {
  return (
    <div
      className="row spacer layer2 flip mx-0 mb-n5"
      style={{ backgroundImage: `url(${Layer2SVG})` }}
    ></div>
  );
};

export default App;
