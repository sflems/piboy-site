import { useEffect, useState } from "react";
import { getSharedData } from "./utils";

import "./App.css";
import Main from "./components/Main.js";
import NavBar from "./components/NavBar.js";
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
      <NavBar />
      <Spacer1 spacerId="1" />
      <Main id="main" {...sharedData} />
      <Spacer2 spacerId="2" />
      <Spacer1 spacerId="3" />
      <Main id="main2" {...sharedData} />
      <Spacer2 spacerId="4" />
      <footer id="footer" className="row m-0 mt-auto text-white-50 p-3">
        <p className="col">
          Copyright &copy; {d.getFullYear()} {sharedData.site_name}.<br /> All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

const Spacer1 = (props) => {
  return (
    <div id={props.id} className="row mx-0 my-n2">
        <img id={"spacerImg" + props.spacerId} src={Layer1SVG} className="col p-0 mt-md-n5 layer1" alt="Wave spacer effect."/>
    </div>
  );
};

const Spacer2 = (props) => {
  return (
    <div className="row mx-0 my-n3 flip">
        <img id={"spacer" + props.SpacerId} src={Layer2SVG} className="col p-0 layer2" alt="Wave spacer effect #2."/>
    </div>
  );
};

export default App;
