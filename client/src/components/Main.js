import { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Main.css";
import FullLogo from "../media/full-logo.png";

const Main = (props) => {
  return (
    <main id={props.id} className="row bg-primary m-0">
      <div className="col mx-0 my-auto pt-2 pt-md-4">
        <Message {...props} />
        <Greeting {...props} />
      </div>
    </main>
  );
};

const Message = (props) => {
  return (
    <div id="message" className="row m-0 pt-md-4">
      <p className="h4">Welcome to piboy.ca!</p>
    </div>
  );
};

const Greeting = (props) => {
  const [logoVisible, setLogoVisible] = useState("false");
  console.log(!logoVisible);

  var greeting = `My name is Scott. I'm a freelance web developer, and founder of...`;

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
            alt="Piboy Technical Solutions Ltd. Full Logo"
          />
        </div>
      </p>
    </div>
  );
};

export default Main;
