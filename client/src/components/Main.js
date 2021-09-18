import { useState } from "react";
import Logo from "./Logo";
import Typewriter from "typewriter-effect";
import "./Main.css";
import FullLogo from "../media/full-logo.png";

const Main = (props) => {
  return (
    <main id={props.id} className="row row-cols-1 row-cols-md-2 bg-primary m-0">
      <Logo />
      <div className="col mx-0 my-auto pt-2 pt-md-4">
        <Message {...props} />
        <Greeting {...props} />
      </div>
    </main>
  );
};

const Message = ({ isLoaded, message }) => {
  if (!isLoaded) return null;
  return (
    <div id="message" className="row m-0 pt-md-4">
      <p className="h4">{message}</p>
    </div>
  );
};

const Greeting = ({ first_name, site_name }) => {
  const [logoVisible, setLogoVisible] = useState("false");
  console.log(!logoVisible);
  if (!first_name || !site_name) return <div>Loading ....</div>;

  var greeting = `My name is ${first_name}. I'm a freelance web developer, and founder of ${site_name}.`;

  return (
    <div id="greeting" className="row mx-5">
      <p className="col lead p-2">
        <Typewriter
          options={{ skipAddStyles: false, }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString(greeting)
              .callFunction(() => {
                console.log("String typed out!");
                setLogoVisible(!logoVisible);
              })
              .start();
          }}
        />
        <div className="col my-n2">
          <img
            src={FullLogo}
            className={(logoVisible === "false" ? "hidden " : "") + "my-n4"}
            width="200px"
            alt={site_name}
          />
        </div>
      </p>
    </div>
  );
};

export default Main;
